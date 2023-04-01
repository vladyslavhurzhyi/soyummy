import { AuthNav } from '../AuthNav/AuthNav';

export const WellcomPage = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <div className=" flex flex-col justify-center max-w-md ">
      <div className="px-10">
        <h1 className=" text-center font-main font-semibold text-mainText text-customLg">
          Welcome to the app!
        </h1>
        <p className="text-center mt ">
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <AuthNav />
      </div>

      {/* <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </div>
  );
};
