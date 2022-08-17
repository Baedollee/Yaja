import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  maxBodyLength: Infinity,
  maxContentLength: Infinity,
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      //   Authorization: `Bearer ${token ? token : ''}`,
      ...config.headers,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  // eslint-disable-next-line require-await
  async (error) => {
    if (error.response.status === 401 || error.response.status === 406) {
      // Login 창으로 이동
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

export default http;
