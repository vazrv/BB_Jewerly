import pool from './db.js'; // Импортируем пул соединений

export default {
  /**
   * Получить все продукты
   * @returns {Promise<Array>} Массив продуктов
   */
  async getAllProducts() {
    try {
      const { rows } = await pool.query('SELECT * FROM PRODUCTS ORDER BY id');
      return rows;
    } catch (error) {
      console.error('Error in getAllProducts:', error);
      throw error;
    }
  },

  /**
   * Получить продукт по ID
   * @param {number} id - ID продукта
   * @returns {Promise<Object>} Объект продукта
   */
  async getProductById(id) {
    try {
      const { rows } = await pool.query('SELECT * FROM PRODUCTS WHERE id = $1', [id]);
      return rows[0] || null;
    } catch (error) {
      console.error('Error in getProductById:', error);
      throw error;
    }
  },

  /**
   * Создать новый продукт
   * @param {Object} product - Данные продукта
   * @param {string} product.title - Название
   * @param {string} product.image - Путь к изображению
   * @param {number} product.price - Цена
   * @returns {Promise<Object>} Созданный продукт
   */
  async createProduct({ title, image, price }) {
    try {
      const { rows } = await pool.query(
        'INSERT INTO PRODUCTS (title, image, price) VALUES ($1, $2, $3) RETURNING *',
        [title, image, price]
      );
      return rows[0];
    } catch (error) {
      console.error('Error in createProduct:', error);
      throw error;
    }
  },

  /**
   * Обновить продукт
   * @param {number} id - ID продукта
   * @param {Object} updates - Обновляемые поля
   * @returns {Promise<Object>} Обновленный продукт
   */
  async updateProduct(id, { title, image, price }) {
    try {
      const { rows } = await pool.query(
        'UPDATE PRODUCTS SET title = $1, image = $2, price = $3 WHERE id = $4 RETURNING *',
        [title, image, price, id]
      );
      return rows[0] || null;
    } catch (error) {
      console.error('Error in updateProduct:', error);
      throw error;
    }
  },

  /**
   * Удалить продукт
   * @param {number} id - ID продукта
   * @returns {Promise<boolean>} Успешно ли удаление
   */
  async deleteProduct(id) {
    try {
      const { rowCount } = await pool.query('DELETE FROM PRODUCTS WHERE id = $1', [id]);
      return rowCount > 0;
    } catch (error) {
      console.error('Error in deleteProduct:', error);
      throw error;
    }
  }
};