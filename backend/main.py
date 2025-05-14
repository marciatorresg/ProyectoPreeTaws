from flask import Flask, request, jsonify
import cv2
import numpy as np
from flask_cors import CORS
from ultralytics import YOLO

app = Flask(__name__)
CORS(app)

# Carga el modelo (asegúrate que el path es correcto)
model = YOLO("weights/best.pt")  # o "yolov8n.pt" para el modelo base

@app.route('/detect-fire', methods=['POST'])
def detect_fire():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.files['file']
    img = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
    
    # Ejecutar detección
    results = model(img)
    
    # Procesar resultados
    fire_detected = False
    smoke_detected = False

    detections = []
    
    for result in results:
        for box in result.boxes:
            class_id = int(box.cls)
            class_name = model.names[class_id]
            confidence = float(box.conf)
            
            detections.append({
                'class': class_name,
                'confidence': confidence,
                'bbox': box.xyxy.tolist()[0]  # Coordenadas [x1, y1, x2, y2]
            })
            
            if class_name.lower() in ['smoke']:
                smoke_detected = True


            if class_name.lower() in ['fire']:
                fire_detected = True
    
    return jsonify({
        'fire_detected': fire_detected,
        'smoke_detected': smoke_detected,
        'detections': detections
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)