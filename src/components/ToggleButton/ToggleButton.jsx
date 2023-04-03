export const ToggleButton = () => {
  function theme(event) {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <button
      title="Toggle Theme"
      onClick={theme}
      className="
        w-[61px] 
        h-[27px] 
        rounded-full 
        pl-[3px]
        bg-[#EFEFEF] 
        dark:bg-accentMain 
        relative 
        transition-colors 
        duration-500 
        ease-in
        shadow-[inset_0_6px_8px_3px_rgba(0,0,0,0.1)]
      "
    >
      <div
        id="toggle"
        className="
            rounded-full 
            w-[21px] 
            h-[21px]
            bg-gradient-to-b from-[#FFFFFF] to-[#E8EAEA]
            relative 
            ml-0
            dark:ml-[34px] 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
            drop-shadow-[2px_1px_6px_rgba(0,0,0,0.251)]
        "
      ></div>
    </button>
  );
};
