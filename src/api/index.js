import axios from "axios";

const BASE_URL = " https://sfit-api-server.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json", // 데이터 형식
    "Access-Control-Allow-Origin": "*", // 모든 출처 허용
  },
});

// export const extractStoreOcr = async (formData) => {
//   const res = await api.post("/stores/ocr", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   return res.data;
// };
