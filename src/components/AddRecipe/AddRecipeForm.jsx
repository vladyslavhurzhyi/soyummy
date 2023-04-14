import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ResipeDescriptionFields } from './ResipeDescriptionFields';
import { ResipeIngredientsFields } from './RecipeIngredientsFields';
import { ResipeMethodFields } from './RecipeMethodFields';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { FollowUs } from 'components/FollowUs/FollowUs';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from 'redux/recipes/recipesOperations';
import { getIngredients } from 'redux/ingredients/ingredientsOperations';
import { selectIngredients } from 'redux/ingredients/ingredientsSelectors';
import { getCategories } from 'redux/categories/categoriesOperations';
import { selectCategories } from 'redux/categories/categoriesSelectors';

const IMG_PREVIEW = 'https://placehold.co/357x344?text=Upload+image';

const initialRecipe = {
  title: '',
  description: '',
  category: '',
  time: '',
  ingredients: [],
  isPublic: false,
  instructions: '',
};
export const AddRecipeForm = () => {
  const ingredientsList = useSelector(selectIngredients);
  const categoriesList = useSelector(selectCategories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getCategories());
  }, [dispatch]);

  const [preview, setPreview] = useState(IMG_PREVIEW);
  const [recipe, setRecipe] = useState({ ...initialRecipe });

  const handleFileChange = e => {
    const [_file] = e.target.files;
    setPreview(_file ? URL.createObjectURL(_file) : IMG_PREVIEW);
  };

  const handleFieldChange = e => {
    const { id, value } = e.target;
    let _recipe = { ...recipe };
    _recipe[id] = id === 'isPublic' ? !_recipe.isPublic : value;
    setRecipe(_recipe);
  };

  const handleIngredientsChange = ingredients => {
    setRecipe({ ...recipe, ingredients });
  };

  const handleRemoveIngredient = id => {
    const _ingredients = recipe.ingredients.filter(item => item.id !== id);
    handleIngredientsChange(_ingredients);
  };

  const sendForm = async (form, formData) => {
    dispatch(addRecipe(formData));
    navigate(`/my`);
    resetForm(form);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    const [file] = e.target.thumb.files;
    if (!file) {
      return toast.error('Select a recipe image!', {
        autoClose: 3000,
      });
    }
    formData.append('thumb', file);
    const formattedRecipe = {
      ...recipe,
      ingredients: recipe.ingredients.map(({ id, amount, measure }) => ({
        id,
        amount,
        measure,
      })),
    };
    formData.append('jsonData', JSON.stringify(formattedRecipe));
    sendForm(e.target, formData);
  };

  const resetForm = form => {
    form.reset();
    setRecipe({
      ...initialRecipe,
      ingredients: [],
    });
    setPreview(IMG_PREVIEW);
  };
  return (
    <>
      <div className="relative">
        <form noValidate="" onSubmit={handleSubmit}>
          <ResipeDescriptionFields
            data={recipe}
            categories={categoriesList}
            updateData={handleFieldChange}
            updateImg={handleFileChange}
            previewImg={preview}
          />
          <ResipeIngredientsFields
            ingredients={ingredientsList}
            items={recipe.ingredients}
            updateItems={handleIngredientsChange}
            removeItem={handleRemoveIngredient}
          />
          <ResipeMethodFields data={recipe} updateData={handleFieldChange} />
          <CurveBtn
            type="submit"
            text="Publish recipe"
            cssClass="searchbl-btn mt-6 mb-16 md:mb-24 lg:mb-0 dark:bg-accentMain dark:text-accentDarker  dark:hover:bg-accentLighter dark:focus:bg-accentLighter"
          />
        </form>
        <div className="hidden lg:block w-40 absolute top-0 left-[900px] xl:left-[1056px]">
          <h2 className="font-main font-semibold text-secondaryText text-customBase mb-10 dark:text-whiteText">
            Follow Us
          </h2>
          <FollowUs className="followus-addrecipe" />
        </div>
      </div>
    </>
  );
};
