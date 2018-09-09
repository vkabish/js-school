import React from 'react';
import UserProfile from '../UserProfile';

const renderProfile = user => (
  <UserProfile key={user.id} userData={user} />
);

const UsersList = ({ list }) => (
  <div className="container">
    {list.map(renderProfile)}
  </div>
);

export default UsersList;
