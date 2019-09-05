import qs from "qs";

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
  const queryString = Object.keys(query)
    .map(
      key =>
        `${key}=${
          Array.isArray(query[key]) ? query[key].join(",") : query[key]
        }`
    )
    .join("&");
  return fetch(`${serverUrl}${path}${queryString && `?${queryString}`}`, {
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

function deleteJson(path: string) {
  return function(headers: any = {}) {
    return fetchJson(path, {
      method: "DELETE",
      headers
    });
  };
}

export { getJson, postJson, deleteJson };
