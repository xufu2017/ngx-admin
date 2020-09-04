import Axios from "axios";

const HTTP = Axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 30000,
    withCredentials: false
  });
  
//   HTTP.interceptors.request.use(
//     config => {
//       if (config.method === "post") {
//         // if (!config.data.token) {
//         // 	config.data.token = window.localStorage.getItem('token');
//         // }
//         config.data = qs.stringify(config.data);
//       }
//       return config;
//     },
//     error => {
//       throw new Error(error);
//     }
//   );

export default HTTP;