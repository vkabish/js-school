import React from 'react';
import UserProfile from './components/UserProfile';
import user from './user.json';

const App = () => (
  <div>
    <div className="col-xs-4">
      <UserProfile userData={user} />
    </div>
  </div>
);

export default App;
