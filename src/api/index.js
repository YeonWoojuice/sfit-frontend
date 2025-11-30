import axios from "axios";

const BASE_URL = " https://sfit-api-server.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json", // 데이터 형식
    "Access-Control-Allow-Origin": "*", // 모든 출처 허용
  },
});

// api.interceptors.request.use(
//   (config) => {
//     // Zustand 스토어에서 accessToken을 가져옴 getState() 사용
//     const { accessToken } = useAuthStore.getState();

//     if (accessToken) {
//       // 토큰이 있다면, 헤더에 'Authorization' 값을 추가
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     // 요청 오류가 발생했을 때 수행할 로직
//     return Promise.reject(error);
//   }
// );

// export const extractStoreOcr = async (formData) => {
//   const res = await api.post("/stores/ocr", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   return res.data;
// };
