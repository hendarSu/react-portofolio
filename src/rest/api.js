import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})

export const getFeatures = async () => {
    try {
        const response = await api.get('/api/v1/features');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

export const getProjects = async () => {
    try {
        const response = await api.get('/api/v1/projects');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

export const postRegistrtion = async ({
    name, email, password, confirmationPassword, imageProfile
}) => {
    try {
        const response = await api.post('/api/v1/registration', {
            name,
            email,
            password,
            confirmationPassword,
            imageProfile
        });
        return response.data;
    } catch (error) {
        if (error) {
            alert(error.response.data.message);            
        }
    }
}

export const postLogin = async ({
     email, password
}) => {
    try {
        const response = await api.post('/api/v1/auth/login', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        if (error) {
            alert(error.response.data.message);            
        }
    }
}