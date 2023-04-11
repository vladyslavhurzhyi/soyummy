import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { signInWithGoogle } from 'redux/auth/authOperations';

const GoogleLogIn = () => {
  const dispatch = useDispatch();

  const handleSuccess = response => {
    dispatch(signInWithGoogle(response));
  };

  const handleFailure = error => {
    console.error(error);
  };

  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </GoogleOAuthProvider>
  );
};

export { GoogleLogIn };
