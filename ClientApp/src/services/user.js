import axios from 'axios'
import axiosConfig from '../utils/axiosConfig'

export const getProfile =  (username, token) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: `/api/user/getUser/${username}`,
            method: 'get',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const setProfile =  (payload, token) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            url: `/api/user/edit`,
            method: 'put',
            data: payload,
            data: {
                username:payload.username,
                name:payload.name,
                bio:payload.bio,
                gender: payload.gender,
                email: payload.email,
                birth: payload.birth,
                avatar: payload.avatar
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type' :'multipart/form-data'
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const searchUser = (keyword) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            url:'api/user/find',
            method:'get',
            params:{
                keyword
            },
            // headers: {
            //     'Authorization': `Bearer ${token}`
            // }
        }) 
        resolve(response)
    } catch(err) {
        reject(err)
    }
})
export const searchSong = (keyword) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            url:'api/song/find',
            method:'get',
            params:{
                keyword
            },
            // headers: {
            //     'Authorization': `Bearer ${token}`
            // }
        }) 
        resolve(response)
    } catch(err) {
        reject(err)
    }
})
export const getAvatar = (username) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            url:'api/user/getAvatar',
            method:'get',
            params: {
                username: username
            },
            responseType:'blob'

        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const getUserInfo = (username) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            url:`api/user/getUser/${username}`,
            method:'get',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const changePassword = (data) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            url:'api/user/changepw',
            method:'post',
            data: data,
            headers:{
                contentType: 'multipart/form-data'
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})