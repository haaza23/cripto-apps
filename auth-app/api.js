const API_BASE_URL = 'http://localhost:5005/'

function errorResponse(error) {
  const { response } = error;
  let message = error;
  if (response) {
    const { data } = response;
    message = data.message;
  }
  return new Error(message);
}

export async function get(url) {
  return fetch(`${API_BASE_URL}${url}`, {
    method: 'get',
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw errorResponse(error);
    });
}

export async function post(url, params = {}) {
  return fetch(`${API_BASE_URL}${url}`, {
    method: 'post',
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }, body: JSON.stringify(params)
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw errorResponse(error);
    });
}

export async function put(url, params = {}) {
  return fetch(`${API_BASE_URL}${url}`, { method: 'put', headers: { "Content-type": "application/json" }, body: JSON.stringify({ ...params }) })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw errorResponse(error);
    });
}

export async function apiDelete(url, params = {}, headers = {}) {
  return fetch(`${API_BASE_URL}${url}`, { method: 'delete', ...headers, body: JSON.stringify(params) })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw errorResponse(error);
    });
}
