import React from 'react';
import UserPreview from './UserPreview';
import { Link } from 'react-router-dom';

const renderUserItem = user => (
  <li className="list-group-item row" key={user.login}>
    <UserPreview className="col-xs-2" {...user} />
    <div className="col-xs-10">
      <h3><Link to={`/${user.login}`}>{user.login}</Link></h3>
      <a href={user.html_url}>{user.html_url}</a>
    </div>
  </li>
);

const UserList = ({ list }) => (
  <ul className="list-group">
    {
      list.length ?
        list.map(renderUserItem) :
        <h1>No information</h1>
    }
  </ul>
);

export default UserList;
