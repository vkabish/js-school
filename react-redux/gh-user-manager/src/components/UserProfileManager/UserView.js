import React from 'react';
import UserProfileProvider from '../UserProfileProvider';
import UserProfile from './UserProfile';
import UserTabs from '../UserProfileManager/UserTabs';

const UserView = ({ userList, match }) => {
  const { userLogin } = match.params;
  return (
    <UserProfileProvider userLogin={userLogin}>
      <div className="page-header">
        <h1 className="text-center">Github User Profile Manager</h1>
      </div>
      <UserProfile />
      <UserTabs listType={userList} />
    </UserProfileProvider>
  );
};

export default UserView;
