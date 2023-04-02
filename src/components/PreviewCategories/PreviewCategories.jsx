// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContentForMain } from 'redux/outerRecipes/outerRecipesSelectors';
// import { getMainCategories } from 'redux/outerRecipes/outerRecipesOperations';
// import { useMediaQuery } from 'react-responsive';
// import { CardMeal } from 'components/CardMeal/CardMeal';

// export const PreviewCategories = () => {
//   const mainCategories = useSelector(getContentForMain);
//   const dispatcher = useDispatch();
//   const Desktop = useMediaQuery({ minWidth: 1440 });
//   const Tablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

//   useEffect(() => {
//     if (mainCategories !== null) return;
//     dispatcher(getMainCategories());
//   }, [dispatcher, mainCategories]);

//   let numCard;
//   if (Desktop) {
//     numCard = 4;
//   } else if (Tablet) {
//     numCard = 2;
//   } else {
//     numCard = 1;
//   }

//   return (
//     <ul>
//       {mainCategories &&
//         Object.entries(mainCategories).map(([category, meals]) => (
//           <li key={category}>
//             <p>{category}</p>
//             <ul>
//               {meals.slice(0, numCard).map(meal => (
//                 <CardMeal key={meal.idMeal} meal={meal} />
//               ))}
//             </ul>
//             <BtnCategories to={`/categories/${category}`}>
//               See all
//             </BtnCategories>
//           </li>
//         ))}
//     </ul>
//   );
// };
