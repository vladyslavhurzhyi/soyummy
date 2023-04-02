//---TOKEN---
export const getAccessToken = state => state.auth.accessToken;

//---USER---
export const getEmail = state => state.auth.userData.email;
export const getName = state => state.auth.userData.name;
export const getAvatar = state => state.auth.userData.avatar;
export const getToken = state => state.auth.accessToken;
//---ADDITIONALLY
export const getLoges = state => state.auth.Login;
export const getUserFetching = state => state.auth.userFetching;
