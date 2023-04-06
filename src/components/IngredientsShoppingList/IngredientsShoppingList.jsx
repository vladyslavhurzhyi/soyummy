import axios from 'axios';
import { useEffect, useState } from 'react';
import { motion, Reorder } from 'framer-motion';

const API_KEY = '30633743-fecdcb797cf8e375f7471d26b';

export const IngredientsShoppingList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function getImages(page = 1) {
      const response = await axios.get(
        `https://pixabay.com/api/?q=cat&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      return setData(response.data.hits);
    }
    getImages();
  }, []);
  if (!data) {
    return;
  }
  return (
    <>
      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="flex flex-row items-center justify-center px-[10px] md:px-[20px] xl:px-10 h-9 md:h-[60px] bg-accentMain rounded-lg"
      >
        <h3 className="mr-auto font-main font-semibold text-customShoppingList md:text-lg xl:tracking-[0.03em] text-whiteText">
          Product
        </h3>
        <h3 className="font-main font-semibold text-customShoppingList md:text-lg xl:tracking-[0.03em] text-whiteText">
          Number
        </h3>
        <h3 className="ml-6 md:ml-[78px] xl:ml-[142px] font-main font-semibold text-customShoppingList md:text-lg xl:tracking-[0.03em] text-whiteText">
          Remove
        </h3>
      </motion.div>
      <Reorder.Group className="mt-2" values={data} onReorder={setData}>
        {data?.map(({ id, webformatURL, user, previewHeight }, idx, arr) => (
          <Reorder.Item
            value={arr[idx]}
            initial={{
              x: idx % 2 === 0 ? -200 : 200,
              opacity: 0,
            }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.6 }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            key={id}
            className="flex flex-row items-start py-6 md:py-11 px-2 border-b xl:px-10"
          >
            <img
              src={webformatURL}
              alt="ingredient"
              className="rounded-md object-cover max-w-[60px] h-[60px] md:max-w-[93px] md:h-[97px]"
            />
            <p className="ml-[10px] md:ml-4 font-main font-medium text-[10px] leading-3 md:text-base text-secondaryText">
              {user}
            </p>
            <p className="flex items-center justify-center ml-auto w-[37px] h-[23px] md:w-[68px] md:h-[35PX] rounded bg-accentMain font-main font-semibold text-[10px] leading-[15px] md:text-[18px] md:leading-[27px] text-whiteText">
              {previewHeight}
            </p>
            <button
              type="button"
              className="ml-[46px] mr-5 md:mr-12 md:ml-28 xl:ml-44 w-[14px] h-[14px] md:w-5 md:h-5 "
            >
              X
            </button>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </>
  );
};
