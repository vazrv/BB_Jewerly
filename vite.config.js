import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Импортируем модуль path

export default defineConfig({
  base: "",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@services": path.resolve(__dirname, "./src/services"), // Добавили для API
      "@api": path.resolve(__dirname, "./src/api"), // Добавили для API конфигураций
    },
  },
  server: {
    port: 5000, // Фиксируем порт (опционально)
    open: true, // Автоматически открывать браузер (опционально)
  },
});
