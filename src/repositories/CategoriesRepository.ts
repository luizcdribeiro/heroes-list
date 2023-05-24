import { Category } from '../interfaces';
import { getCategories, getCategoryById, addCategory, updateCategory, deleteCategory } from '../services/CategoriesService';

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const categories = await getCategories();
    return categories;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchCategoryById = async (id: number): Promise<Category> => {
  try {
    const category = await getCategoryById(id);
    return category;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchAddCategory = async (categoryData: any): Promise<Category> => {
  try {
    const newCategory = await addCategory(categoryData);
    return newCategory;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchUpdateCategory = async (id: number, categoryData: any): Promise<Category> => {
  try {
    const updatedCategory = await updateCategory(id, categoryData);
    return updatedCategory;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const removeCategory = async (id: number): Promise<void> => {
  try {
    await deleteCategory(id);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
