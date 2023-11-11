import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

export const getPeoples = async (page?: number) => {
    try {
        const response = await axiosInstance.get(`people?page=${page || 1}`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching peoples:', error);
        return [];
    }
};

export const fetchCharacter = async (id: string) => {
    try {
        const response = await axiosInstance.get(`people/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching character:', error);
        return null;
    }
};

export const searchPersons = async (searchResponse: string) => {
    try {
        const response = await axiosInstance.get(`people/?search=${searchResponse}`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching:', error);
        return [];
    }
};

export const getNextPage = async () => {
    try {
        const response = await axiosInstance.get('people');
        return response.data.next;
    } catch (error) {
        console.error('Error fetching:', error);
        return [];
    }
};