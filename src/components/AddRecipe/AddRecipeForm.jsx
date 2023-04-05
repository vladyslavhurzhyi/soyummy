import { useState } from 'react';
import { ResipeDescriptionFields } from './ResipeDescriptionFields';
import { ResipeIngredientsFields } from './RecipeIngredientsFields';
import { ResipeMethodFields } from './RecipeMethodFields';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { FollowUs } from 'components/FollowUs/FollowUs';

export const AddRecipeForm = () => {
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
  };

  return (
    <div className="px-4 md:px-8 xl:px-24 relative">
      <form noValidate="" onSubmit={handleSubmit}>
        <ResipeDescriptionFields data={formData} setData={handleFieldsChange} />
        <ResipeIngredientsFields
          items={formData.ingredients}
          setItems={handleIngredientsChange}
        />
        <ResipeMethodFields data={formData} setData={handleFieldsChange} />
        <CurveBtn
          type="submit"
          text="Publish recipe"
          cssClass="searchbl-btn"
          onClick={() => {
            console.log(`Click add recipe`);
          }}
        />
      </form>
      <div className="lg:w-40 absolute top-0 left-[900px] xl:left-[1056px]">
        <h2 className="font-main font-semibold text-secondaryText text-customBase mb-10">
          Follow Us
        </h2>
        <FollowUs className="followus-addrecipe" />
      </div>
    </div>
  );
};
