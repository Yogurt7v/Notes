import {
  defineConfig,
  minimalPreset as preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  preset,
  images: [
    "./src/assets/android96.png",
    "./src/assets/android192.png",
    "./src/assets/android512.png",
    "./src/assets/android144.png",
  ],
});
