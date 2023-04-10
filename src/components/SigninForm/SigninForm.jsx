import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/authOperations';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Svg } from '../../images/svg/OrderFoodPana.svg';

const SigninForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className=" w-full h-full flex-col items-center justify-center bg-gray-600  ">
      {/* <div className=" max-w-lg flex items-center justify-center lg:grid gap-x-8 gap-y-4 grid-cols-2 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"> */}
      <div className=" mx-auto h-96 w-96 ">
        <Svg />
      </div>
      {/* <div className=" p-12 h-449px w-500px bg-accentHalfDark rounded-3xl border-ra mx-auto max-w-md w-full space-y-8"> */}
      <div>
        <form
          className="p-12 h-449px w-500px bg-accentHalfDark rounded-3xl mx-auto max-w-md w-full shadow-sm-black space-y-8"
          onSubmit={handleSubmit}
        >
          <h2 className=" pl-2 text-3xl font-extrabold text-whiteText">
            Sign in
          </h2>
          {/* <input type="hidden" name="remember" value="true" /> */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="mb-3">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  // className="appearance-none rounded-none relative block w-full px-3 py-2 border border-white placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  className=" rounded-lg  block w-full mb-6 px-3 py-2 border border-white bg-accentHalfDark placeholder-white text-whiteText rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="rounded-lg  block w-full mb-6 px-3 py-2 border border-white bg-accentHalfDark placeholder-white text-whiteText rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-accentMain hover:bg-accentDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          {' '}
          <NavLink
            className="  mr-auto text-white self-center underline text-base  mt-18"
            to="/register"
          >
            Registration
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
