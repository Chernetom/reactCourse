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
    },

}

export const authAPI = {
    authMe () {
       return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login (email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },
    logout () {
        return instance.delete(`/auth/login`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    Profile (userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId) {
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus (status) {
        return instance.put(`/profile/status`, {status: status})
    },
    savePhoto (file) {
        let formData = new FormData();
        formData.append("image", file);
        return instance.put(`/profile/photo`, formData, {headers: {'Content-Type' : 'multipart/form-data'}})
    }
}

export const loginAPI = {
    putLogin (email, password, rememberMe) {
        return instance.post(`/auth/login`, {email: email, password: password, rememberMe:rememberMe})
    }
}