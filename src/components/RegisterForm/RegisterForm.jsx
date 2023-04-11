import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerValidationSchema } from 'utils/authValidationSchema/authValidationSchema';

import { ReactComponent as Svg } from '../../images/svg/OrderFoodPana.svg';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registerValidationSchema,
    onSubmit: values => {
      dispatch(signUp(values));
      formik.resetForm();
    },
  });

  return (
    <section className="formWrapSection">
      <div className=" svgWrap ">
        <Svg />
      </div>

      <form className="foraWrap" onSubmit={formik.handleSubmit}>
        <h2 className=" pl-2 text-3xl font-extrabold text-whiteText ">
          Register
        </h2>
        {/* <input type="hidden" name="remember" value="true" /> */}
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label className=" relative ">
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={`inputField ${
                formik.errors.name && formik.touched.name
                  ? 'border-red-600'
                  : 'border-gray-300'
              }`}
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.name}
              </p>
            )}
          </div>
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
            </label>
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div>
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
            </label>
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.password}
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-accentMain hover:bg-accentDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>
      <div className="flex justify-center">
        {' '}
        <NavLink
          className=" text-center mt-4 text-white self-center underline text-base  "
          to="/signin"
        >
          Registration
        </NavLink>
      </div>
    </section>
  );
};

export default RegisterForm;
