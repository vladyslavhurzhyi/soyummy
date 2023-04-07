import { CurveBtn } from 'components/CurveBtn/CurveBtn';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
// import { useSelector } from 'react-redux';
// import { selectRecipes } from 'redux/recipes/recipesSelectors';

export const RecipePageHero = data => {
  // const recipes = useSelector(selectRecipes);
  // console.log(data.data[0].title);

  return (
    <>
      <div className="flex flex-col font-main bg-recipePage bg-cover bg-center bg-no-repeat w-full h-[455px] md:h-[495px] text-center">
        {data.length > 0 && (
          <div>
            <div>
              <MainPageTitle
                pageTitle={data}
                className="main-title-accent mb-[18px] md:mb-[100px] md:px-8 xl:px-24 mx-auto"
              />
              <p className="block text-xs mx-auto max-w-[285px] mb-6">
                {data.description}
              </p>
            </div>
            <div>
              <CurveBtn
                text="Add to favorite recipes"
                cssClass="othercateg-btn text-customRecipesTime px-[16.9px] py-[8.9px] mb-8"
                // onClick=""
              />
              <div className="flex justify-center items-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 w-3.5 h-3.5"
                >
                  <g clipPath="url(#clip0_264_756)">
                    <path
                      d="M6.99935 12.8334C10.221 12.8334 12.8327 10.2217 12.8327 7.00002C12.8327 3.77836 10.221 1.16669 6.99935 1.16669C3.77769 1.16669 1.16602 3.77836 1.16602 7.00002C1.16602 10.2217 3.77769 12.8334 6.99935 12.8334Z"
                      stroke="#23262A"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 3.5V7L9.33333 8.16667"
                      stroke="#23262A"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_264_756">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-customRecipesTime">20 min</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
