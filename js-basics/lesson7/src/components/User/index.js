const User = ({ 
  avatar_url, 
  name,
  login,
  company,
  location,
  public_repos,
  following,
  followers
}) => `
  <img src="${avatar_url}" alt="">
  <h3>${name}</h3>

  <strong>${login}</strong>

  <p>Company: ${company}</p>
  <p>Location: ${location}</p>

  <h4>Statistic</h4>

  <p>Repositories: ${public_repos}</p>
  <p>Following: ${following}</p>
  <p>Followers: ${followers}</p>
`;

export default User;
