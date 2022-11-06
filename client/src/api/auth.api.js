import axiosClient from "./axiosClient";
export const signUp = async ({name, email, password}) => {
    return await axiosClient.post('/auth/register', {name, email, password});
}

export const signIn = async ({email, password}) => {
    return await axiosClient.post('/auth/login', {email, password});
}