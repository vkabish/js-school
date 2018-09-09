import React from 'react';

const UserPreview = ({ avatar, alt }) => (
  <div>
    <img className="img-rounded img-responsive" src={avatar} alt={alt} />
  </div>
);

export default UserPreview;
