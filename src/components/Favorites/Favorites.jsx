import React from 'react';
import { FavoriteItem } from './FavoriteItem';
import imgDish from '../../pages/salat.png';

const itemProps = {
  title: 'Salmon Eggs Benedict',
  description:
    'Salmon eggs are rich in essential nutrients, low in calories, and recommended as part of a healthy diet. Including salmon in a balanced diet can help decrease the chances of heart disease, ease inflammation, and more. ',
  time: '10min',
};

export const Favorites = () => {
  return (
    <>
      <div>
        <ul className="flex flex-col">
          <FavoriteItem
            img={imgDish}
            title={itemProps.title}
            description={itemProps.description}
            time={itemProps.time}
          ></FavoriteItem>

          <FavoriteItem
            img={imgDish}
            title={itemProps.title}
            description={itemProps.description}
            time={itemProps.time}
          ></FavoriteItem>

          <FavoriteItem
            img={imgDish}
            title={itemProps.title}
            description={itemProps.description}
            time={itemProps.time}
          ></FavoriteItem>
        </ul>
      </div>
    </>
  );
};
