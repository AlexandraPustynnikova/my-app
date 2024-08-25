import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "96e5e73d-9856-4d4b-a274-9ea6f2db122f",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI object.");
    return instance.get(`profile/${userId}`).then((response) => {
      return profileAPI.getProfile(userId);
    });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
};
export const authAPI = {
  me(currentPage = 1, pageSize = 10) {
    return instance.get(`auth/me/`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login/`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete("auth/login/");
  },
};
