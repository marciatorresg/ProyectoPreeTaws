from flask import Flask, request, jsonify
import cv2
import numpy as np
from flask_cors import CORS
from ultralytics import YOLO
import os

app = Flask(__name__)
CORS(app)

# Carga el modelo
model = YOLO("weights/best.pt")

@app.route('/detect-fire', methods=['POST'])
def detect_fire():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    filename = file.filename
    file_extension = os.path.splitext(filename)[1].lower()

    fire_detected = False
    smoke_detected = False
    all_detections = []

    if file_extension in ['.jpg', '.jpeg', '.png']:
        # Procesar como imagen
        img = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
        results = model(img)
        for result in results:
            for box in result.boxes:
                class_id = int(box.cls)
                class_name = model.names[class_id]
                confidence = float(box.conf)
                all_detections.append({'class': class_name, 'confidence': confidence, 'bbox': box.xyxy.tolist()[0]})
                if class_name.lower() == 'fire':
                    fire_detected = True
                elif class_name.lower() == 'smoke':
                    smoke_detected = True

    elif file_extension in ['.mp4', '.avi', '.mov']:
        # Procesar como video
        video_buffer = file.read()
        # Guardar el buffer en un archivo temporal
        temp_video_path = "temp_video." + file_extension
        with open(temp_video_path, 'wb') as temp_file:
            temp_file.write(video_buffer)

        video = cv2.VideoCapture(temp_video_path)
        if not video.isOpened():
            return jsonify({'error': 'Could not open video'}), 400

        frame_rate = video.get(cv2.CAP_PROP_FPS)
        frame_count = 0

        while True:
            ret, frame = video.read()
            if not ret:
                break

            if frame_count % int(frame_rate) == 0: # Procesar cada segundo (ajusta según sea necesario)
                results = model(frame)
                for result in results:
                    for box in result.boxes:
                        class_id = int(box.cls)
                        class_name = model.names[class_id]
                        confidence = float(box.conf)
                        all_detections.append({'class': class_name, 'confidence': confidence, 'bbox': box.xyxy.tolist()[0], 'frame': frame_count})
                        if class_name.lower() == 'fire':
                            fire_detected = True
                        elif class_name.lower() == 'smoke':
                            smoke_detected = True
            frame_count += 1

        video.release()
        os.remove(temp_video_path) # Limpiar el archivo temporal

    else:
        return jsonify({'error': 'Unsupported file format'}), 400

    return jsonify({
        'fire_detected': fire_detected,
        'smoke_detected': smoke_detected,
        'detections': all_detections
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)