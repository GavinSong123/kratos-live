import Axios from "axios";

let baseUrl = "http://localhost:8081/api/v1";
let headers = {
  'openid': "oSZBm0Tu7Fu-iazFQ0FaV8_3Ufa4",
  "Content-Type": "application/json"
};

export function get (url) {
  return Axios.get(baseUrl + url, {
    headers: headers
  });
}
