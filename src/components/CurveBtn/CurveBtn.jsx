//
//registration-btn --- class for curve btn registration + style  borderRadius: '9% 23% 11% 21% / 26% 57% 34% 60% '
//signin-btn --- class for curve btn welcome page bg-transparent
//searchbl-btn --- class for curve search btn (black bg)
//searchgreen-btn --- class for curve search btn (green bg)
//addbgreen-btn --- class for curve add btn (green bg)
//addblack-btn --- class for curve add btn (black bg)
//othercate g-btn --- class for curve other categories (transprent bg)

export const CurveBtn = ({ text, cssClass, onClick }) => {
  return (
    <button
      style={{
        borderRadius: '9% 23% 11% 21% / 26% 57% 34% 60%  ',
      }}
      className={cssClass}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
