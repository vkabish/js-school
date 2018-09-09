import React from 'react';
import AdminBadge from '../AdminBadge';

const UserInfo = ({ login, html_url, site_admin }) => (
  <div>
    <h2>
      {login}
      {' '}
      { site_admin && <AdminBadge /> }
    </h2>
    <a href={html_url} target="_blank">
      {html_url}
    </a>
  </div>
);

export default UserInfo;
