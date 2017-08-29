import Axios from "axios";

export const BaseUrl = "http://10.19.139.123:8081";
let headers = {
  'openid': "oSZBm0Tu7Fu-iazFQ0FaV8_3Ufa4",
  "Content-Type": "application/json"
};

export function get (url) {
  return Axios.get(BaseUrl + '/api/v1' + url, {
    headers: headers
  });
}

export function getResource (url) {
  return Axios.get(BaseUrl + url, {
    headers: headers
  });
}

export function post (url, body) {
  return Axios.post(BaseUrl + '/api/v1' + url, body, {
    headers: headers
  });
}
