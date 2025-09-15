// FRONTEND > src > lib > api.ts

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ها هي كتجيب من .env
});

export default api;
