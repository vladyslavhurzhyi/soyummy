import React from 'react';
import { useSelector } from 'react-redux';
import { getAvatar } from 'redux/auth/authSelectors';

export const UserAvatar = () => {
  const avatarURL = useSelector(getAvatar);
  return <img src={avatarURL} alt="User avatar" />;
};
