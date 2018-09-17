import React from 'react';
import UserStatistic from './UserStatistic';

const UserInfo = ({ name, login, company, location, bio, onViewModeClick, ...props }) => (
  <div>
    <h2 className="btn-link" onClick={onViewModeClick}>
      {name}
    </h2>
    <h2>{login}</h2>
    <h3>
      Bio:
    </h3>
    <p>  
      {bio}
    </p> 
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
