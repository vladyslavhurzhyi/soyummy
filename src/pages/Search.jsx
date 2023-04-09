import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { getRecipesByQuery } from 'service/Api/getRecipesApi';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';

export const Search = () => {
  const [recipes, setRecipes] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  const type = searchParams.get('type');

  useEffect(() => {
    if (!query) {
      return;
    }
    async function findByQuery() {
      try {
        const recipes = await getRecipesByQuery(query, type);
        if (!recipes) {
          alert('nothing was found');
          return;
        }
        console.log(recipes.data);
        setRecipes(recipes.data);
      } catch (error) {
        console.log(error);
      }
    }
    findByQuery(query, type);
  }, [query, type]);

  const handleChange = newType => {
    return newType;
  };

  const handleFormSubmit = (newQuery, type = 'title') => {
    type = handleChange(type);
    setSearchParams({ query: newQuery, type });
  };

  return (
    <main>
      <SearchTypeSelector onChange={handleChange} />
      <MainPageTitle pageTitle="Search" className="main-title ml-10" />
      <SearchForm onSubmit={handleFormSubmit} />

      {!recipes ? (
        <p>try to find good recipe</p>
      ) : (
        <RecipesList data={recipes} />
      )}

      {recipes === 0 && <p>nothing was found</p>}
    </main>
  );
};
