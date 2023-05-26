import api from "../api/api";
import { HeroRequest } from "../interfaces";

export const getHeroes = async () => {
  try {
    const response = await api.get(`/api/Heroes`);
    return response.data.Items;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getHeroById = async (id: number) => {
  try {
    const response = await api.get(`/api/Heroes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const addHero = async (heroData: HeroRequest) => {
  try {
    const response = await api.post('/api/Heroes', heroData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);

    console.log('Error:', 'Não é possível criar o heroi');
    throw error;
  }
};

export const updateHero = async (id: number, heroData: any) => {
  try {
    const response = await api.put(`/api/Heroes/${id}`, heroData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const deleteHero = async (id: number) => {
  try {
    await api.delete(`/api/Heroes/${id}`);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
