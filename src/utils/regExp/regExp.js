export const nameRegExp = /^[a-zA-Z -]+$/;

export const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const securePasswordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

export const notSecurePasswordRegExp = /^[a-zA-Z0-9]{8,20}$/;
