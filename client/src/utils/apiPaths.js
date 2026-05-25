export const BASE_URL = "http://localhost:3000";

export const API_PATHS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/signin",
    LOGOUT: "/api/auth/logout",
  },
  UPLOAD: {
    IMAGE: "/api/auth/upload",
  },
  USER: {
    GET: "/api/user",
    GETBYID: (id) => `/api/user/${id}`,
  },
  POST: {
    CREATE: "/api/posts",
    GETALL: "/api/posts",
    GETBYID: (id) => `/api/posts/${id}`,
    GETBYUSERID: (id) => `/api/posts/user/${id}`,
  },
  SAVE: {
    CREATE: (id) => `/api/saved-post/${id}`,
  },
};
