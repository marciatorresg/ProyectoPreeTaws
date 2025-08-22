import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-2MU6O3IY.js";
import "./chunk-36T2BHYJ.js";
import {
  componentOnReady
} from "./chunk-KQRPAB76.js";
import {
  readTask,
  writeTask
} from "./chunk-X2BD5LDJ.js";
import {
  __async
} from "./chunk-RPHWXCVC.js";

// node_modules/@ionic/core/dist/esm/status-tap-f472b09f.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(() => __async(void 0, null, function* () {
            contentEl.style.setProperty("--overflow", "hidden");
            yield scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          }));
        });
      }
    });
  });
};
export {
  startStatusTap
};
