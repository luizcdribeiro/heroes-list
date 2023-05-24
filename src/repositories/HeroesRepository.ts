import { Hero, HeroRequest } from '../interfaces';
import { getHeroes, getHeroById, addHero, updateHero, deleteHero } from '../services/HeroesService';

export const fetchHeroes = async (): Promise<Hero[]> => {
  try {
    const heroes = await getHeroes();
    return heroes;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchHeroById = async (id: number): Promise<Hero> => {
  try {
    const hero = await getHeroById(id);
    return hero;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchAddHero = async (heroData: HeroRequest): Promise<Hero> => {
  try {
    const newHero = await addHero(heroData);
    return newHero;
  } catch (error) {
    console.error('Error:', error);
    console.log('Error:', 'Não é possível criar o heroi');

    throw error;
  }
};

export const fetchUpdateHero = async (id: number, heroData: Hero): Promise<Hero> => {
  try {
    const updatedHero = await updateHero(id, heroData);
    return updatedHero;
  } catch (error) {
    console.error('Error:', error);
    console.log('Error:', 'Não é possível atualizar o heroi');

    throw error;
  }
};

export const removeHero = async (id: number): Promise<void> => {
  try {
    await deleteHero(id);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
