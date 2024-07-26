import {
  defineConfig,
  minimalPreset as preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  preset,
  images: [
    "public/android96.png",
    "public/android192.png",
    "public/android512.png",
    "public/android144.png",
  ],
});
