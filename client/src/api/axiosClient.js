import axios from "axios";
import { parse, stringify } from "qs";
import History from "@/history.js";
import { toast } from "react-toastify";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
      "Content-Type": "application/json",
  },
  paramsSerializer: {
    encode: parse,
    serialize: stringify,
  },
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);
export const configAuth = () => {
  return {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  };
};

export const getWithAuth = async (url) => {
  return await axiosClient.get(url, configAuth());
};

export const postFormData = async (url, formData) => {
  return await axiosClient.post(url, formData, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
      "Content-Type": "multipart/form-data",
    },
  });
};

export const postWithAuth = async (url, data) => {
  return await axiosClient.post(url, data, configAuth());
};

export const putWithAuth = async (url, data) => {
  return await axiosClient.put(url, data, configAuth());
};

export const deleteWithAuth = async (url) => {
  return await axiosClient.delete(url, configAuth());
};

export default axiosClient;
