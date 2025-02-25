import api from "./axiosConfig";


export const fetchItems = async () => {
  const response = await api.get('/');
  return response.data;
};

export const createItem = async (newItem) => {
  return await api.post('/', newItem);
};

export const updateItemById = async (id, updatedData) => {
  return await api.put(`/${id}`, updatedData);
};

export const deleteItemById = async (id) => {
  return await api.delete(`/${id}`);
};