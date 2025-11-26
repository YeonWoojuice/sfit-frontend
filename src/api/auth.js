import axios from "axios";

const BASE_URL = " https://sfit-api-server.onrender.com/api/auth";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json", // 데이터 형식
    "Access-Control-Allow-Origin": "*", // 모든 출처 허용
  },
});

// 회원가입
export const signup = async () => {
  const res = await api.post("/register");
  return res.data;
};

// 로그인
export const login = async ({ username, password }) => {
  const res = await api.post("/login", { username, password });
  return res.data;
};

// 중복확인
export const checkUsername = async () => {
  const res = await api.post("/check-username");
  return res.data;
};

// 토큰 재발급
export const getToken = async () => {
  const res = await api.post("/refresh");
  return res.data;
};
