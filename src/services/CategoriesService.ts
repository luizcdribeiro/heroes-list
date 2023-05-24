import api from "../api/api";

export const getCategories = async () => {
  try {
    const response = await api.get('/api/Category');
    return response.data.Items;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getCategoryById = async (id: number) => {
  try {
    const response = await api.get(`/api/Category/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const addCategory = async (categoryData: any) => {
  try {
    const response = await api.post('/api/Category', categoryData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const updateCategory = async (id: number, categoryData: any) => {
  try {
    const response = await api.put(`/api/Category/${id}`, categoryData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const deleteCategory = async (id: number) => {
  try {
    await api.delete(`/api/Category/${id}`);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
