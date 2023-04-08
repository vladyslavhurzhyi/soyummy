//---TOKEN---
export const getAccessToken = state => state.auth.accessToken;

//---USER---
export const getUser = state => state.auth.userData;
export const getEmail = state => state.auth.userData.email;
export const getName = state => state.auth.userData.name;
export const getAvatar = state => state.auth.userData.avatarUrl;
export const getToken = state => state.auth.accessToken;
export const isLoggedIn = state => state.auth.Login;
//---ADDITIONALLY
export const getLoges = state => state.auth.Login;
export const getUserFetching = state => state.auth.userFetching;
export const getIsRefreshing = state => state.auth.isRefreshing;
