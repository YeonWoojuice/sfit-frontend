import axios from "axios";

const BASE_URL = "https://sfit-api-server.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json", // 데이터 형식
    "Access-Control-Allow-Origin": "*", // 모든 출처 허용
  },
});

export const getClubs = async ({ region, sport, search, coaching }) => {
  const res = await api.get("/api/clubs", {
    params: {
      region,
      sport,
      search,
      coaching,
    },
  });

  return res.data;
};

export const getMeetup = async ({ region, sport }) => {
  const res = await api.get("/api/flashes", {
    params: {
      region,
      sport,
    },
  });

  return res.data;
};

export const getCoaches = async () => {
  const res = await api.get("/api/coach");
  return res.data;
};

export const getPopularCoaches = async () => {
  const res = await api.get("/api/coach/popular");
  return res.data;
};
