export const BackdropUserLogo = ({ onClick, className, children }) => {
  return (
    <div className={`flex items-center justify-center ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

