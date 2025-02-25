import axios from "axios";

const api = axios.create({
  baseURL: 'https://projeto-crud-backend-eta.vercel.app/intens',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;