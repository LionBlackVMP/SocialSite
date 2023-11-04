import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  empty: {},
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  unfollowUser: (id) => {
    return instance.delete(`follow/${id}`);
  },

  followUser: (id) => {
    return instance.post(`follow/${id}`);
  },
};

export const authAPI = {
  getAccountInfo: () => {
    return instance.get(`auth/me`);
  },
};
export const profileAPI = {
  getUserProfile: (userId) => {
    return instance.get(`profile/` + userId);
  },
};
// export const getUsers = async (currentPage, pageSize) => {
//   const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
//   return response.data;
// };
