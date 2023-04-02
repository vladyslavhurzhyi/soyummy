import { AuthNav } from '../AuthNav/AuthNav';

const WellcomPage = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <>
      <div className=" flex flex-col justify-center max-w-md px-10  bg-[url('https://pixabay.com/get/g836035757eba96c71384b2de62f816f6ada9804d830682be93684d34eb5410b34d89eab596cfd81d09a79b94bf01248aaf42fe232b6e4547dc491f210a21c1cd_1280.jpg')] bg-cover bg-center  h-80 w-96 ">
        <div className=" block p-3 rounded justify-center w-12 m-auto bg-lime-400">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
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
