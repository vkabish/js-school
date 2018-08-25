(function (document) {
  
  const fetchGithubUser = (username) => 
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json());

  
    fetchGithubUser('pavel-fot')
      .then(data => {
        console.log(data);
      });

})(document)
