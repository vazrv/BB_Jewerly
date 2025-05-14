import pg from "pg";
import dotenv from "dotenv";
import path from "path";

// Указываем абсолютный путь к .env
dotenv.config({ path: path.resolve(process.cwd(), "../.env") });
console.log(process.env.DB_PASSWORD); // Проверьте, все ли переменные загружены

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD || "",
  port: process.env.DB_PORT,
});

// Проверка подключения
pool.query("SELECT NOW()", (err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connected successfully");
  }
});

export default pool;
