import React from 'react';
import UserProfileProvider from '../UserProfileProvider';
import UserEditForm from '../UserProfileManager/UserEditForm';
import UserProfile from "./UserProfile";
import { UP_MODE_EDIT } from '../../const';

const UserView = ({ match, history }) => {
  const { userLogin } = match.params;
  return (
    <UserProfileProvider userLogin={userLogin}>
      <div className="page-header">
        <h1 className="text-center">Github User Profile Manager - Editing</h1>
      </div>
      <UserProfile view={UP_MODE_EDIT} />
      <UserEditForm history={history} />
    </UserProfileProvider>
  );
};

export default UserView;
