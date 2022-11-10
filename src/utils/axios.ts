import axios from "axios";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});
