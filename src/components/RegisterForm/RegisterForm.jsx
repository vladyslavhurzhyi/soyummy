import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerValidationSchema } from 'utils/authValidationSchema/authValidationSchema';

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
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold ">
              Register
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            {/* <input type="hidden" name="remember" value="true" /> */}
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                    formik.errors.name && formik.touched.name
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
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
                <label className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                    formik.errors.email && formik.touched.email
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-500 text-xs italic">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                    formik.errors.password && formik.touched.password
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
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
            <NavLink className="" to="/signin">
              Sig in
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
