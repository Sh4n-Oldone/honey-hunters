class Api {
  constructor(options) {
    this._apiUrl = options.userUrl;
    this._headers = options.headers;
  }

  getMessages() {
    return fetch(this._apiUrl, {
      headers: this._headers
    })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  setNewMessages(data) {
    return fetch(this._apiUrl, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        messageOwner: {
          name: data.name,
          email: data.email
        },
        message: data.message
      })
    }).then(res => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
}

const messageApi = new Api({
  apiUrl: 'https://api.someURL',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default messageApi;