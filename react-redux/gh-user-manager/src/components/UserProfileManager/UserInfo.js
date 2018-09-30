import React from 'react';
import { Link } from 'react-router-dom';
import UserStatistic from './UserStatistic';
import { UP_MODE_VIEW } from '../../const';

const UserInfo = ({ name, login, company, location, bio, view = UP_MODE_VIEW, ...props }) => (
  <div>
    {view === UP_MODE_VIEW &&
      <h2 className="btn-link">
        <Link to="edit">{name}</Link>
      </h2>
    }
    <h2>{login}</h2>
    { view === UP_MODE_VIEW &&
      <div>
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
    }
  </div>
);

export default UserInfo;
