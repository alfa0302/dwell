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
    UPDATE: "/api/user",
  },
  POST: {
    CREATE: "/api/posts",
    GETALL: "/api/posts",
    GETBYID: (id) => `/api/posts/${id}`,
    GETBYUSERID: (id) => `/api/posts/user/${id}`,
    DELETE: (id) => `/api/posts/${id}`,
    UPDATE: (id) => `/api/posts/${id}`,
    ADDPICTURE: (id) => `/api/posts/${id}`,
  },
  SAVE: {
    CREATE: (id) => `/api/saved-post/${id}`,
    GET: "/api/saved-post",
    DELETE: (id) => `/api/saved-post/${id}`,
  },
  CHAT: {
    CREATE: "/api/chat",
    GETALL: "/api/chat",
    GETBYID: (id) => `/api/chat/${id}`,
    READ: (id) => `/api/chat/read/${id}`,
  },
  MESSAGE: {
    CREATE: "/api/message",
  },
};
