import api from "./api";

export const fetchProducts = async () => {
  const response = await api.get("/products");
  console.log(response.data); // Логируем данные
  return Array.isArray(response.data) ? response.data : []; // Убедитесь, что это массив
};
