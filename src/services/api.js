import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getNotes = async (search = '') => {
    const response = await axios.get(`${API_URL}/notes`, { params: { search } });
    return response.data;
};

export const createNote = async (noteData) => {
    const response = await axios.post(`${API_URL}/notes`, noteData);
    return response.data;
};

export const deleteNote = async (id) => {
    await axios.delete(`${API_URL}/notes/${id}`);
};

export const getCategories = async () => {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
};

export const createCategory = async (categoryData) => {
    const response = await axios.post(`${API_URL}/categories`, categoryData);
    return response.data;
};