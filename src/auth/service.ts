import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

const callApi = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => Promise.reject(err)
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => Promise.reject(err)
  );

  return axiosInstance;
};

export default callApi;
