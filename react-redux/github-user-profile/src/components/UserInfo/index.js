import React from 'react';
import UserStatistic from '../UserStatistic';

const UserInfo = ({ name, login, company, location, ...props }) => (
  <div>
    <h2>{name}</h2>
    <h2>{login}</h2>
    <p>
      <strong>Company:</strong>
      {company}
    </p>    
    <p>
      <strong>Location:</strong>
      {location}
    </p>

    <UserStatistic {...props} />
  </div>
);

export default UserInfo;
