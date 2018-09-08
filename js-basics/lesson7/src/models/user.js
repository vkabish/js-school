import api from './api';

const USERS_PARAM = '/users/';

const getUsernameFromURL = ({ hash }) => 
  hash
    .substr(
      hash.indexOf("#/") + 2
    );

export async function getGithubUser() {
  const username = getUsernameFromURL(window.location);
  const data = await api.get(`${USERS_PARAM}${username}`);

  return {
    ...data,
    userQuery: username
  };
};
