import express from "express";
import productsRouter from "./src/controllers/products.js"; // Правильный путь
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Добро пожаловать в магазин украшений!");
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
