import React, { useState } from 'react';

import { CurveBtn } from 'components/CurveBtn/CurveBtn';

// export const CurveInput = () => {
//   return (
//     <input
//       style={{
//         height: '50px',
//         borderRadius: '9% 23% 11% 21% / 26% 57% 34% 60%  ',
//       }}
//     />
//   );
// };

export const SearchForm = ({ onSubmit }) => {
  const [searchValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
    console.log(searchValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchValue.toLowerCase();
    if (query === '') {
      alert('enter something to find');
      return;
    }

    console.log(query);
    onSubmit(query);
    setInputValue('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="h-15"
          type="text"
          value={searchValue}
          onChange={handleInputChange}
        />
        <CurveBtn
          type="submit"
          text="Search"
          cssClass="searchgreen-btn"
        ></CurveBtn>
      </form>
    </div>
  );
};
