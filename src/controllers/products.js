import pool from "../models/db.js";

export const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    return result.rows; // Вернуть только строки
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    throw new Error("Server Error"); // Бросаем ошибку, чтобы обработать ее позже
  }
};
