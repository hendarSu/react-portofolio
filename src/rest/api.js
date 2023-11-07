import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_BASE_URL
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