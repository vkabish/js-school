import React from 'react';
import UserPreview from '../UserPreview';
import UserInfo from '../UserInfo';

const UserProfile = ({ userData }) => {
  const { avatar_url, name } = userData;
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        { avatar_url && <UserPreview alt={name} avatar={avatar_url} /> }
        <UserInfo {...userData} />
      </div>
    </div>
  );
};

export default UserProfile;
