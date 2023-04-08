import { AuthNav } from '../components/AuthNav/AuthNav';

const WellcomPage = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <>
      <div className=" flex flex-col justify-center max-w-md px-10 bg-hero bg-cover bg-center  h-80 w-96 ">
        <div className=" block p-3 rounded justify-center w-12 m-auto bg-lime-400">
          {' '}
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3.10248V8.5561V8.6661V8.5561C3 10.1132 3.67941 11.4919 4.73282 12.3841C5.24788 12.8205 5.58824 13.4096 5.58824 14.0635V23.1667C5.58824 24.1787 6.45788 25.0001 7.52941 25.0001C8.60094 25.0001 9.47059 24.1787 9.47059 23.1667V14.0635C9.47059 13.4096 9.81094 12.8205 10.326 12.3841C11.3794 11.4919 12.0588 10.1132 12.0588 8.5561V3.10248V8.5561"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5293 9.11118V3"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.9999 4.28541C24.9999 3.61073 24.4201 3.06317 23.7058 3.06317H22.4116C20.2673 3.06317 18.5293 4.70464 18.5293 6.72988V14.0633C18.5293 15.6571 19.6125 17.0003 21.1175 17.5051V23.1665C21.1175 24.1785 21.9872 24.9999 23.0587 24.9999C24.1302 24.9999 24.9999 24.1785 24.9999 23.1665V17.73V4.28541Z"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h1 className=" text-center font-main font-semibold text-amber-50  text-customLg">
          Welcome to the app!
        </h1>
        <p className="text-center text-amber-50 mt ">
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <AuthNav />

        {/* <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </div>
    </>
  );
};

export default WellcomPage;