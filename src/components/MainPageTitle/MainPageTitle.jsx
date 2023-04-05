// possible className:
// main-title
// main-title-accent

export const MainPageTitle = ({ pageTitle, className }) => {
  return (
    <div>
      <div
        className="w-2 h-2 top-[76px] left-[120px] md:w-3.5 md:h-3.5 md:top-[85px] md:left-[219px] xl:top-[116px] xl:left-[328px]"
        style={{
          position: 'absolute',
          backgroundColor: '#8BAA36',
          borderRadius: '3px',
          transform: 'rotate(-25deg)',
        }}
      ></div>
      <div
        className="w-1.5 h-1.5 top-[142px] left-[247px] md:w-3 md:h-3 md:top-155px] md:left-[437px] xl:top-[199px] xl:left-[807px]"
        style={{
          position: 'absolute',
          backgroundColor: '#22252A',
          borderRadius: '3px',
          transform: 'rotate(-25deg)',
        }}
      ></div>
      <div
        className="w-2 h-2 top-[109px] left-[349px] md:w-3.5 md:h-3.5 md:top-[98px] md:left-[726px] xl:top-[129px] xl:left-[1250px]"
        style={{
          position: 'absolute',
          backgroundColor: '#8BAA36',
          borderRadius: '3px',
          transform: 'rotate(-25deg)',
          opacity: 0.9,
        }}
      ></div>
      <h1 className={className}>{pageTitle}</h1>
    </div>
  );
};
