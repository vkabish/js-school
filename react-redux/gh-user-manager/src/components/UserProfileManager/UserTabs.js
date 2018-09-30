import React from 'react';
import UserProfileProvider from '../UserProfileProvider';
import UserList from './UserList';
import { NavLink } from 'react-router-dom';

const UserTabsHeader = () => (
  <div className="btn-group btn-group-justified">
    <div className="btn-group" role="group">
      <NavLink className="btn btn-default" activeClassName="btn-active" to="following">
        Following
      </NavLink>
    </div>
    <div className="btn-group" role="group">
      <NavLink className="btn btn-default" activeClassName="btn-active" to="followers">
        Followers
      </NavLink>
    </div>
    <div className="btn-group" role="group">
      <a className="btn btn-default disabled">
        Repositories
      </a>
    </div>
  </div>
);

const UserTabs = ({ user, listType, followersList, followingList }) => (
 <div className="col-xs-8">
   <UserTabsHeader />
   <hr />
   {
     listType === 'followers' ?
       <UserList list={followersList}/> :
       <UserList list={followingList}/>
   }
 </div>
);

const getProps = ({
  user,
  followersList,
  followingList,
}) => ({
  user,
  followersList,
  followingList,
});

export default UserProfileProvider.connect(getProps)(UserTabs);
