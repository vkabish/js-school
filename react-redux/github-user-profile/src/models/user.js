import api from './api';

const USERS_PARAM = '/users/';

export const getUserInfo = ({ name, bio, avatar_url, company, login, location, followers, following, public_repos }) => ({
  name,
  bio,
  avatar_url,
  company,
  login,
  location,
  followers,
  following,
  public_repos
});

export const updateUserData = withData => ({ user }) => ({
  user: { ...user, ...withData },
});


export const pushDataToServer = (data) => 
  api.post(data);

export const fetchGithubUser = (username) => 
  api.get(`${USERS_PARAM}${username}`)
    .then(getUserInfo);
