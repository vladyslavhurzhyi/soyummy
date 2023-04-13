import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/authOperations';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Svg } from '../../images/svg/OrderFoodPana.svg';
import { useFormik } from 'formik';
import { loginValidationSchema } from 'utils/authValidationSchema/authValidationSchema';
import { GoogleLogIn } from 'components/GoogleLogIn';

const SigninForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: values => {
      dispatch(signIn(values));
      formik.resetForm();
    },
  });

  return (
    <section className=" formWrapSection">
      <div className=" svgWrap ">
        <Svg />
      </div>
      <div>
        <form className="foraWrap md:w-[500px]" onSubmit={formik.handleSubmit}>
          <h2 className=" pl-2 text-3xl font-extrabold text-whiteText">
            Sign in
          </h2>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className=" relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="inputSVG"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`inputField ${
                    formik.errors.email && formik.touched.email
                      ? 'border-red-600'
                      : 'border-gray-300'
                  }`}
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="absolute text-red-500 text-xs italic">
                    {formik.errors.email}
                  </p>
                )}
              </label>
            </div>
            <div className="relative">
              <label className=" relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="white"
                  className="inputSVG"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={` ${
                    formik.errors.password && formik.touched.password
                      ? 'border-red-600'
                      : 'border-gray-300'
                  } inputField `}
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="absolute text-red-500 text-xs italic">
                    {formik.errors.password}
                  </p>
                )}
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
          <div className="flex justify-center">
            <GoogleLogIn />
          </div>
        </form>
        <div className="flex justify-center">
          <NavLink
            className=" text-center mt-4 text-white hover:text-accentMain  self-center underline text-base  "
            to="/register"
          >
            Registration
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SigninForm;
