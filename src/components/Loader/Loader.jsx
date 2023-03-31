import React from 'react';
import { Circles } from 'react-loader-spinner';

export const Loader = () => (
  <WrapperLoader>
    <Circles
      height="40"
      width="40"
      color="#8BAA36"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="Loader"
    />
  </WrapperLoader>
);
