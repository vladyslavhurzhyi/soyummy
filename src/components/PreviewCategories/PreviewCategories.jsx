import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContentForMain } from 'redux/previewCategories/categoriesSelectors';
import { getMainCategories } from 'redux/previewCategories/categoriesOperations';
import { setCurrentCategory } from 'redux/categories/categoriesOperations';
import { useMediaQuery } from 'react-responsive';
import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import RecipeCard from 'components/RecipeCard';

export const PreviewCategories = (idx, arr) => {
  const categories = useSelector(getContentForMain);

  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length <= 0) {
      const params = { categoriesLimit: 4, recipesInCategory: 4 };
      dispatch(getMainCategories(params));
    }
  }, [dispatch, categories]);

  let numCard;
  if (isDesktop) {
    numCard = 4;
  } else if (isTablet) {
    numCard = 2;
  } else {
    numCard = 1;
  }

  const onClick = category => {
    dispatch(setCurrentCategory(category));
    navigate(`/categories/${category}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ul className="xl:px-0 inline-flex flex-col gap-24">
      {categories.map(({ category, recipes }) => {
        if (recipes.length >= 4)
          return (
            <li key={category} className="text-left ">
              <motion.p
                initial={{
                  y: -20,
                  opacity: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                className="font-semibold leading-7 text-[28px] md:text-[44px] md:leading-[44px] tracking-tight text-mainText capitalize mb-10 dark:text-whiteText"
              >
                {category}
              </motion.p>
              <ul className="flex flex-col md:flex-row md:gap-8 lg:gap-4 flex-wrap gap-6 mb-[50px]">
                {recipes
                  .slice(0, numCard)
                  .map(({ _id, title, thumb, description, time }) => (
                    <motion.li
                      initial={{
                        y: -20,
                        opacity: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      key={_id}
                      className="mx-auto md:mx-0 max-w-sm md:max-w-none md:w-[calc(50%-16px)] lg:w-[calc(25%-12px)]"
                    >
                      <RecipeCard
                        id={_id}
                        title={title}
                        text={description}
                        thumb={thumb}
                        time={time}
                      />
                      {/* <NavLink to={`/recipes/${_id}`}>
                      <img
                        src={preview}
                        alt={title}
                        className="h-full w-full rounded-lg object-cover"
                      />
                      <p className="absolute font-medium text-base leading-5 tracking-tight text-secondaryText p-4 bg-white bottom-[26px] left-0 right-0 mx-auto rounded-lg w-[calc(100%-18px)] xl:w-[calc(100%-16px)] whitespace-nowrap overflow-hidden text-ellipsis dark:text-whiteText dark:bg-accentDark shadow shadow-black dark:shadow-white ">
                        {title}
                      </p>
                    </NavLink> */}
                    </motion.li>
                  ))}
              </ul>
              <div className="flex justify-end">
                <CurveBtn
                  type={'button'}
                  onClick={() => onClick(category)}
                  text={'See all'}
                  cssClass="logout-btn"
                  className="flex justify-end "
                />
              </div>
            </li>
          );
        return '';
      })}
    </ul>
  );
};

export default PreviewCategories;
