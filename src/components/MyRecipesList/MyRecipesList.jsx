import { MyRecipesItem } from 'components/MyRecipesItem/MyRecipesItem';
import { RecipesListPaginator } from 'components/RecipesListPaginator/RecipesListPaginator';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '30633743-fecdcb797cf8e375f7471d26b';

// axios.defaults.baseURL = `https://pixabay.com/api/`;

// async function getImages(query, page = 1) {
//   const response = await axios.get(
//     `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   );
//   return response;
// }

export const MyRecipesList = () => {
  const [data, setData] = useState(null);
  console.log('render');

  useEffect(() => {
    async function getImages(page = 1) {
      const response = await axios.get(
        `https://pixabay.com/api/?q=cat&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      return setData(response.data.hits);
    }
    getImages();
  }, []);

  return (
    <section className="bg-[#FAFAFA]">
      <div className=" max-w-[375px] mx-auto">
        <div className="py-[50px] font-main font-semibold text-customLg tracking-[-0.02em] text-mainText mx-auto">
          <h2>My recipes</h2>
        </div>
        <ul className="grid gap-[18px]">
          {data
            ?.slice(0, 4)
            .map(({ id, webformatURL, tags, user, previewHeight }) => (
              <MyRecipesItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                user={user}
                previewHeight={previewHeight}
              />
            ))}
        </ul>
        <RecipesListPaginator />
      </div>
    </section>
  );
};
