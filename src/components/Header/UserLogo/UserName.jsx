import React from 'react';
import { useSelector } from 'react-redux';
import { getName } from 'redux/auth/authSelectors';

export const UserName = () => {
  const userName = useSelector(getName);
  return <div  className="px-4">{userName}</div>;
};