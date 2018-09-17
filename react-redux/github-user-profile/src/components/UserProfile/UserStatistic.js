import React from 'react';

const UserStatistic = ({ followers, following, public_repos }) => (
  <div>
    <h4>Statistic</h4>    
    <p>
      <strong>Repositories:</strong>
      {public_repos}
    </p>
    <p>
      <strong>Following:</strong>
      {following}
    </p>
    <p>
      <strong>Followers:</strong>
      {followers}
    </p>
  </div>
);

export default UserStatistic;
