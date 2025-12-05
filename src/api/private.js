import axios from "axios";

const BASE_URL = "https://sfit-api-server.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json", // 데이터 형식
    "Access-Control-Allow-Origin": "*", // 모든 출처 허용
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      // 토큰이 있다면, 헤더에 'Authorization' 값을 추가
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // 요청 오류가 발생했을 때 수행할 로직
    return Promise.reject(error);
  }
);

export const createClub = async (payload) => {
  const res = await api.post("/api/clubs", payload);
  return res.data;
};

export const joinClub = async (id) => {
  const res = await api.post(`/api/clubs/${id}/join`);
  return res.data;
};

export const creatMeetup = async (payload) => {
  const res = await api.post("/api/flashes", payload);
  return res.data;
};

export const joinMeetup = async (id) => {
  const res = await api.post(`/api/flashes/${id}/join`);
  return res.data;
};

// 마이 페이지
export const getMy = async () => {
  const res = await api.get("/api/users/me");
  return res.data;
};

export const getHistory = async () => {
  const res = await api.get("/api/users/me/history");
  return res.data;
};

export const getBadges = async () => {
  const res = await api.get("/api/users/me/badges");
  return res.data;
};

export const getClubs = async () => {
  const res = await api.get("/api/users/me/meetings");
  return res.data;
};

export const getMeetups = async () => {
  const res = await api.get("/api/users/me/my-upcomming");
  return res.data;
};
