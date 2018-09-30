import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import UserView from './components/UserProfileManager/UserView';
import UserEditView from './components/UserProfileManager/UserEditView';

import './index.css';

const App = () => (
  <Router>
    <div className="container">
      <Switch>
        <Redirect exact from="/" to="/laza-zep/following" />
        <Redirect exact from="/:userLogin" to="/:userLogin/following" />
        <Route path="/:userLogin/following" render={({ match }) => <UserView userList="following" match={match} />} />
        <Route path="/:userLogin/followers" render={({ match }) => <UserView userList="followers" match={match} />} />
        <Route path="/:userLogin/edit" component={UserEditView} />
      </Switch>
    </div>
  </Router>
);


export default App;
