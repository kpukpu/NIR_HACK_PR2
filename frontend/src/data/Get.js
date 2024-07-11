import axiosInstance from './AxiosConfig';

export const getBooks = async () => {
    try {
        const response = await axiosInstance.get('/books/');
        return response.data;
    } catch (error) {
        console.error("There was an error getting the books!", error);
        throw error;
    }
};
