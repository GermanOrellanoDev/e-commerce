import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use(
  (config) => {
    const user = sessionStorage.getItem("user");

    if (user) {
      const parsedUser = JSON.parse(user);
      const token = parsedUser.token;

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log("Token agregado al header: " + token);
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
