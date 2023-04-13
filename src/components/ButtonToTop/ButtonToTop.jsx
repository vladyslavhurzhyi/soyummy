import { useState } from 'react';
import { ReactComponent as ToTopSvg } from '../../images/svg/ToTop.svg';

export const ButtonToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      type="button"
      className="fixed z-[999] bottom-3 md:bottom-8 xl:bottom-12 right-3 md:right-8 xl:right-12 animate-bounce"
    >
      <ToTopSvg
        onClick={scrollToTop}
        className={`${visible ? 'block' : 'hidden'} fill-accentMain w-9 h-9`}
      />
    </button>
  );
};
