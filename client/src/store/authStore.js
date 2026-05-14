import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  register: async (formData) => {
    try {
      set({
        loading: true,
        error: null,
      });
      const response = await axiosInstance.post(
        API_PATHS.AUTH.REGISTER,
        formData,
      );
      set({
        user: response.data.data,
        loading: false,
      });
      return response.data;
    } catch (error) {
      set({
        error: error?.response?.data?.message || "Sign Up Failed",
        loading: false,
      });
      throw error;
    }
  },
  login: async (formData) => {
    try {
      set({
        loading: true,
        error: null,
      });
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, formData);
      set({
        user: response.data.data,
        loading: false,
      });
      return response.data;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Login Failed",
        loading: false,
      });
      throw error;
    }
  },
  logout: async (formData) => {
    try {
      set({
        loading: true,
        error: null,
      });
      await axiosInstance.post(API_PATHS.AUTH.LOGOUT);
      set({
        user: null,
        loading: false,
      });
    } catch (error) {
      console.error(error);
      set({
        loading: false,
        error: error,
      });
    }
  },
  fetchCurrentUser: async () => {
    try {
      set({
        loading: true,
        error: null,
      });
      const response = await axiosInstance.get(API_PATHS.USER.GET);
      set({
        user: response.data.data,
        loading: false,
      });
    } catch (error) {
      set({
        user: null,
        loading: false,
      });
    }
  },
}));

export default useAuthStore;
