import axios from "axios";

// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
// const DOMAIN = "https://i8a408.p.ssafy.io";

const DOMAIN = process.env.REACT_APP_BASE_URL + "/api"
// const DOMAIN = process.env.REACT_APP_BASE_URL
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해
export async function request(method:string, url:string, data?:any, headers?:any) {
  console.log(data)
  let response: any
  await axios({
    method,
    url: DOMAIN + url,
    headers,
    data
  })
    .then((res) => response = res.data)
    .catch((err) => console.log(err));
  return response;
};

// export const request = (method:string, url:string, data?:any) => {
//   return axios({
//     method,
//     url: DOMAIN + url,
//     data
//   })
//     .then((res) => res.data)
//     .catch((err) => console.log(err));
// };