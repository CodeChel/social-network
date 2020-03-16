import * as axios from 'axios';


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d9c4ba29-f4a9-4d2d-8ba9-f90ead9fae9c"
    }
})
export const usersAPI = {
    getUsers(currentPage, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollow(id) {
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`, {}).then(response => response.data)
    },
    getFollow(id) {
        return instance.get(`follow/${id}`, {}).then(response => response.data)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get('auth/me').then(response => response.data)
    },
    logIn(dataForm) {
        return instance.post('auth/login', {
            email: dataForm.login, password: dataForm.password,
            rememberMe: dataForm.rememberMe, captcha: dataForm.captcha
        })
            .then(response => response.data)
    },
    logOut() {
        return instance.delete('auth/login').then(response => response.data)
    },

}
export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url').then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(response => response)
    },
    getUserStatus(id) {
        return instance.get(`profile/status/${id}`).then(response => response.data)
    },
    updateUserStatus(status) {
        return instance.put('profile/status', { status: status }).then((response) => response.data);
    },
    updatePhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => response.data);
    },
    saveProfileData(profile) {
        return instance.put(`profile`, profile).then(response => response.data)
    }
}


