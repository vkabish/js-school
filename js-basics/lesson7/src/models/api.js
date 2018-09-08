const api = {
  baseUrl: `https://api.github.com`,
  get(param) {
    return fetch(this.baseUrl + param)
      .then(res => res.json());
  }
};

export default api;
