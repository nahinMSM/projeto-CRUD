import axios from "axios";

const api = axios.create({
  baseURL: 'https://projeto-crud-hjzh.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;