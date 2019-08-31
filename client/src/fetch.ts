const serverUrl = process.env.SERVER_URL;

interface Params {
  method: string;
  headers: any;
  query?: any;
  body?: any;
}

function fetchJson(
  path: string,
  { method, headers, query = {}, body = {} }: Params
) {
  console.log("FETCH_JSON");
  const queryString = Object.keys(query)
    .map(key => `${key}=${encodeURIComponent(query[key])}`)
    .join("&");
  return fetch(`${serverUrl}/${path}${queryString && `?${queryString}`}`, {
    ...{
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: method === "POST" ? JSON.stringify(body) : undefined
    }
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.text().then(text => (text ? JSON.parse(text) : {}));
  });
}

function getJson(path: string, query?: any) {
  console.log("GET_JSON");
  return function(headers: any = {}) {
    return fetchJson(path, {
      method: "GET",
      headers,
      query
    });
  };
}

function postJson(path: string, body: any) {
  return function(headers: any = {}) {
    return fetchJson(path, {
      method: "POST",
      headers,
      body
    });
  };
}

export { getJson, postJson };
