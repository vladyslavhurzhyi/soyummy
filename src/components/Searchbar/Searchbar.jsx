import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { getRecipesByQuery } from 'service/Api/getRecipesApi';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';
import { SearchedRecipesList } from 'components/SearchedRecipesList/SearchedRecipesList';

export const Searchbar = () => {
  const [recipes, setRecipes] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    async function findByQuery() {
      const recipes = await getRecipesByQuery(query);
      if (!recipes) {
        alert('nothing was found');
        return;
      }
      console.log(recipes.data);
      setRecipes(recipes.data);
    }
    findByQuery(query);
  }, [query]);

  const handleFormSubmit = newQuery => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 mb-20">
      <SearchForm onSubmit={handleFormSubmit} recipes={recipes} />
      <SearchTypeSelector />
      {recipes < 1 ? (
        <>
          <p>Your recipe doesn't exist</p>
          <p>try another query</p>
        </>
      ) : (
        <SearchedRecipesList recipes={recipes} />
      )}
    </div>
  );
};
