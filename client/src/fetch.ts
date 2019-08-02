const serverUrl = process.env.SERVER_URL;

function fetchJson(method: string, path: string, body: any) {
  return fetch(`${serverUrl}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.text().then(text => (text ? JSON.parse(text) : {}));
  });
}

function postJson(path: string, data: any) {
  return fetchJson("POST", path, data);
}

export { postJson };
