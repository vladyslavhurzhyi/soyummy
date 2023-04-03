// possible classes:
// main-title
// main-title-accent

export const MainPageTitle = ({ pageTitle, className }) => {
  return (
    <div>
      <h1 className={className}>{pageTitle}</h1>
    </div>
  );
};
