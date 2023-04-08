import { useEffect, useState } from 'react';
import { ResipeDescriptionFields } from './ResipeDescriptionFields';
import { ResipeIngredientsFields } from './RecipeIngredientsFields';
import { ResipeMethodFields } from './RecipeMethodFields';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from 'redux/recipes/recipesOperations';
import { getIngredients } from 'redux/ingredients/ingredientsOperations';
import {
  selectIngredients,
  selectIngrError,
  selectIngrIsLoading,
} from 'redux/ingredients/ingredientsSelectors';

export const AddRecipeForm = () => {
  const ingredientsList = useSelector(selectIngredients);
  const error = useSelector(selectIngrError);
  const isLoading = useSelector(selectIngrIsLoading);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    time: '',
    ingredients: [
      {
        id: Date.now(),
        name: '',
        amount: '1',
        measure: '',
      },
    ],
    isPublic: false,
    instructions: '',
  });

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  // const handleFieldChange = e => {
  //   const { id, value } = e.target;
  //   let _formData = { ...formData };
  //   _formData[id] = id === 'isPublic' ? !_formData.isPublic : value;
  //   setFormData(_formData);
  // };

  const handleFieldsChange = fields => {
    console.log(fields);
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
  };

  return (
    <>
      {error && <div className=" bg-red-500">Error</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative">
          <form noValidate="" onSubmit={handleSubmit}>
            <ResipeDescriptionFields
              data={formData}
              setData={handleFieldsChange}
            />
            <ResipeIngredientsFields
              ingredients={ingredientsList}
              items={formData.ingredients}
              setItems={handleIngredientsChange}
            />
            <ResipeMethodFields data={formData} setData={handleFieldsChange} />
            <CurveBtn
              type="submit"
              text="Publish recipe"
              cssClass="searchbl-btn"
              // onClick={() => {
              //   console.log(`Click add recipe`);
              // }}
            />
          </form>
          <div className="lg:w-40 absolute top-0 left-[900px] xl:left-[1056px]">
            <h2 className="font-main font-semibold text-secondaryText text-customBase mb-10">
              Follow Us
            </h2>
            <FollowUs className="followus-addrecipe" />
          </div>
        </div>
      )}
    </>
  );
};
