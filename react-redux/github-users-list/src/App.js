import React from 'react';
import Header from './components/Header';
import UsersList from './components/UsersList';

import users from './users.json';

const App = () => (
  <div>
    <Header />
    <UsersList list={users} />
  </div>
);

export default App;
