import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  empty: {},
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers: async (currentPage, pageSize) => {
    const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  unfollowUser: async (id) => {
    const response = await instance.delete(`follow/${id}`);
    return response.data;
  },

  followUser: async (id) => {
    const response = await instance.post(`follow/${id}`);
    return response.data;
  },
};

// export const getUsers = async (currentPage, pageSize) => {
//   const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
//   return response.data;
// };
