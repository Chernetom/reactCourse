import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersAPI = {
    getUsers (currentPage = 1,totalCount = 10)  {
        return instance.get(`users?page=${currentPage}&count=${totalCount}`)
            .then(response => response.data)
    },
    follow (id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow (id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const headerAPI = {
    authMe () {
       return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    Profile (userId) {
        return instance.get(`profile/` + userId)
    }
}