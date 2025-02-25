import axios from "axios";

const api = axios.create({
  baseURL: 'projeto-crud-backend.vercel.app/intens',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;