import axiosInstance from './AxiosConfig';

export const postBook = async (book) => {
    try {
        const response = await axiosInstance.post('/post', book);
        return response.data;
    } catch (error) {
        console.error("There was an error posting the book!", error);
        throw error;
    }
};