import axios from "axios";

const BASE_URL = "https://sfit-api-server.onrender.com/api/auth";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json", // 데이터 형식
    "Access-Control-Allow-Origin": "*", // 모든 출처 허용
  },
});

// 회원가입
export const signup = async (userData) => {
  const res = await api.post("/register", {
    username: userData.username,
    password: userData.password,
    name: userData.name,
    phone: userData.phone,
    email: userData.email,
  });
  return res.data;
};

// 로그인
export const login = async (loginData) => {
  const res = await api.post("/login", {
    username: loginData.username,
    password: loginData.password,
  });
  return res.data;
};

// 중복확인
export const checkUsername = async ({username}) => {
  const res = await api.post("/check-username", {username});
  return res.data;
};

// 토큰 재발급
export const getToken = async (refreshToken) => {
  const res = await api.post("/refresh", { refreshToken });
  return res.data;
};
