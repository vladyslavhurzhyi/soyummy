import { nanoid } from 'nanoid';
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

const IMG_PREVIEW = 'https://placehold.co/357x344?text=Upload+image';

const initialIgredient = {
  id: '',
  amount: '1',
  measure: '',
};
const initialRecipe = {
  title: '',
  description: '',
  category: '',
  time: '',
  ingredients: [{ ...initialIgredient, id: nanoid() }],
  isPublic: false,
  instructions: '',
};
export const AddRecipeForm = () => {
  console.log(ingredientsList);
  const ingredientsList = useSelector(selectIngredients);
  const categoriesList = useSelector(selectCategories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getCategories());
  }, [dispatch]);

  // const [formData, setFormData] = useState({
  //   title: '',
  //   description: '',
  //   category: '',
  //   time: '',
  //   ingredients: [
  //     {
  //       id: '',
  //       amount: '0',
  //       measure: 'pcs',
  //     },
  //   ],
  //   thumb: '',
  //   isPublic: false,
  //   instructions: '',
  // });

  // const handleFieldsChange = fields => {
  //   let _formData = { ...formData, ...fields };
  //   setFormData(_formData);
  // };

  // const handleIngredientsChange = ingredients => {
  //   let _formData = { ...formData, ingredients };
  //   setFormData(_formData);
  //   console.log(formData);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   // simple validation..
  //   const { title, description, category, time, ingredients, instructions } =
  //     formData;

  //   if (
  //     !title ||
  //     !description ||
  //     !category ||
  //     !time ||
  //     ingredients.length === 0 ||
  //     !instructions
  //   ) {
  //     alert('Please, provide all required fields');
  //   }

  //   console.log(formData);
  //   console.table(formData.ingredients);

  //   dispatch(addRecipe(formData));
  //   navigate(`/my`);
  // };
  const [preview, setPreview] = useState(IMG_PREVIEW);
  const [recipe, setRecipe] = useState({ ...initialRecipe });
  // const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleAddIngredient = () => {
    const _ingredients = [...recipe.ingredients];
    _ingredients.push({ ...initialIgredient, id: nanoid() });
    handleIngredientsChange(_ingredients);
  };

  const handleRemoveIngredient = id => {
    const _ingredients = recipe.ingredients.filter(item => item.id !== id);
    handleIngredientsChange(_ingredients);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // some validations !isValid(recipe)...
    const formData = new FormData();
    const [file] = e.target.thumb.files;
    if (!file) {
      return alert('Select a recipe image!');
    }
    formData.append('thumb', file);
    formData.append('jsonData', JSON.stringify(recipe));
    sendForm(e.target, formData);
  };

  const sendForm = async (form, formData) => {
    // setIsSubmitting(true);
    dispatch(addRecipe(formData));
    navigate(`/my`);
    resetForm(form);
    // try {
    //   const { data } = await API.post("/recipes", formData);
    //   resetForm(form);
    //   console.log(data);
    // } catch (err) {
    //   alert(err.response.data.message);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const resetForm = form => {
    form.reset();
    setRecipe({
      ...initialRecipe,
      ingredients: [{ ...initialIgredient, id: nanoid() }],
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
            addItem={handleAddIngredient}
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
