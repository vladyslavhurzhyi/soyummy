import { useState, useEffect } from 'react';
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

export const AddRecipeForm = () => {
  const ingredientsList = useSelector(selectIngredients);
  const categoriesList = useSelector(selectCategories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    time: '',
    ingredients: [
      {
        id: '',
        amount: '0',
        measure: 'pcs',
      },
    ],
    // thumb: '',
    isPublic: false,
    instructions: '',
  });

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getCategories());
  }, [dispatch]);

  // const handleFieldChange = e => {
  //   const { id, value } = e.target;
  //   let _formData = { ...formData };
  //   _formData[id] = id === 'isPublic' ? !_formData.isPublic : value;
  //   setFormData(_formData);
  // };
  // const setThumb = url => {
  //   setFormData((formData.thumb = url));
  // };

  const handleFieldsChange = fields => {
    let _formData = { ...formData, ...fields };
    setFormData(_formData);
  };

  const handleIngredientsChange = ingredients => {
    let _formData = { ...formData, ingredients };
    setFormData(_formData);
    console.log(formData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // simple validation..
    const { title, description, category, time, ingredients, instructions } =
      formData;

    if (
      !title ||
      !description ||
      !category ||
      !time ||
      ingredients.length === 0 ||
      !instructions
    ) {
      alert('Please, provide all required fields');
    }

    console.log(formData);
    console.table(formData.ingredients);

    dispatch(addRecipe(formData));
    navigate(`/my`);
  };

  return (
    <>
      <div className="relative">
        <form noValidate="" onSubmit={handleSubmit}>
          <ResipeDescriptionFields
            data={formData}
            categories={categoriesList}
            setData={handleFieldsChange}
          />
          <ResipeIngredientsFields
            ingredients={ingredientsList}
            items={formData.ingredients}
            setItems={handleIngredientsChange}
          />
          <ResipeMethodFields
            data={formData}
            setData={handleFieldsChange}
            // setImgUrl={setThumb}
          />
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
