import React from 'react';

const UserPreview = ({ avatar_url, name = 'user', className = '' }) => (
  <div className={className}>
    <img className="img-rounded img-responsive" src={avatar_url} alt={name} />
  </div>
);

export default UserPreview;
