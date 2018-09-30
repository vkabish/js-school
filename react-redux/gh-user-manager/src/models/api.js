const api = {
  baseUrl: 'https://api.github.com',
  get(param) {
    return fetch(this.baseUrl + param)
      .then(res => res.json());
  },
  post(param, data, token) {
    return fetch(this.baseUrl + param, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `token ${token}`
      },
      body: JSON.stringify(data)
    });
  }
};

export default api;
