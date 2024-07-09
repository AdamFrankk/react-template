import axios from "axios";
import { API_URL } from "@/shared/config";

export const apiInstance = axios.create({
  baseURL: API_URL + "/api",
  withCredentials: true,
});

apiInstance.defaults.headers.common["Content-Type"] = "application/json";
