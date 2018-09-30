import api from './api';

const USERS_PARAM = '/users/';
// const FOLLOWERS_PARAM = '/followers';
// const FOLLOWING_PARAM = '/following';

export const getShortUserInfo = ({
  login, avatar_url, html_url
}) => ({
  login,
  avatar_url,
  html_url
});

export const getUserInfo = ({
  name, bio, avatar_url, company, login,
  location, followers, following,
  public_repos, followers_url, following_url,
}) => ({
  name,
  bio,
  avatar_url,
  company,
  login,
  location,
  followers,
  following,
  public_repos,
  followers_url,
  following_url,
});

export const updateUserData = withData => ({ user }) => ({
  user: { ...user, ...withData },
});

export const updateUserFollowers = withData => ({ followersList }) => ({
  followersList: [ ...followersList, ...withData ].map(getShortUserInfo),
});

export const updateUserFollowing = withData => ({ followingList }) => ({
  followingList: [ ...followingList, ...withData ].map(getShortUserInfo),
});

export const pushDataToServer = (param, data, token) =>
  api.post(param, data, token);

export const fetchGithubUser = username =>
  api.get(`${USERS_PARAM}${username}`)
    .then(getUserInfo);

export const fetchGithubData = (username, dataParam) =>
  api.get(`${USERS_PARAM}${username}${dataParam}`);
