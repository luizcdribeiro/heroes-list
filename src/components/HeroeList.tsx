import React, { FormEvent, useEffect, useState } from 'react';
import { fetchHeroes, removeHero, fetchAddHero } from '../repositories/HeroesRepository';
import { Hero, Category, HeroRequest } from '../interfaces';
import { fetchCategories } from '../repositories/CategoriesRepository';

const HeroList = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [newHeroName, setNewHeroName] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const heroesData = await fetchHeroes();
        setHeroes(heroesData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const categoriesData = await fetchCategories(); 
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchCategoriesData();
  }, []);

  const handleAddHero = async () => {
    if (newHeroName && selectedCategoryId) {
      setIsLoading(true);
      try {
        const selectedCategory = categories.find((category) => category.Id === selectedCategoryId);
  
        if (selectedCategory) {
          const newHeroRequest: HeroRequest = {
            Name: newHeroName,
            CategoryId: selectedCategoryId,
            Active: true,
          };
  
          const newHero: Hero = {
            Id: Math.floor(Math.random() * 100),
            Name: newHeroRequest.Name,
            Active: newHeroRequest.Active,
            Category: selectedCategory,
          };
  
          await fetchAddHero(newHeroRequest);
          setHeroes((prevHeroes) => [...prevHeroes, newHero]);
          console.log(heroes)
          setNewHeroName('');
          setSelectedCategoryId(null);
          setIsLoading(false);
        } else {
          console.error('Categoria não encontrada.');
          setIsLoading(false);

        }
      } catch (error) {
        setIsLoading(false);

        console.log(error);
        console.error('Error:', error);
      }
    }
  };
  
  const handleRemove = async (id: number) => {
    try {
      await removeHero(id);
      setHeroes(prevHeroes => prevHeroes.filter(hero => hero.Id !== id));
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddHero()
  }
  
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white mb-8">Heróis</h1>
      
      <form className='mb-9' onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Categorias</label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
            value={selectedCategoryId || ''}
            onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
            placeholder='"Selecione uma categoria"'
          >
            <option hidden value={"Selecione uma categoria"} >Selecione uma categoria</option>
            {categories.map((category) => (
              <option key={category.Id} value={category.Id}>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">{category.Name}</button>
                
              </option>
            ))}
          </select>
          <div>
              <input type="text" id="hero_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
              value={newHeroName}
              onChange={(e) => setNewHeroName(e.target.value)}
              placeholder="Nome do herói"
              />
          </div>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button"
            onClick={handleAddHero}
            disabled={isLoading}
          >
            {isLoading ? 'Adicionando...' : 'Adicionar herói'}
          </button>
        </div>
      </form>


      <h2 className='mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl '>Lista de heróis</h2>
      <ul className="list-disc flex gap-6 items-center flex-wrap">
        {heroes.map((hero) => (
          <li key={hero.Id} className="flex gap-6 items-center bg-gray-100 text-gray-800 text-base font-bold  px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 max-w-full w-80 justify-between mb-8">
            {hero.Name} - {hero.Category.Name}
            <button
              onClick={() => handleRemove(hero.Id)}
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2 py-2 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 inline-flex items-center"
              title="Remover herói"
            >
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroList;
