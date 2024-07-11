import axiosInstance from './AxiosConfig';

export const putBook = async (bookNumber, book) => {
    try {
        const response = await axiosInstance.put(`/books/${bookNumber}/`, book);
        return response.data;
    } catch (error) {
        console.error("There was an error updating the book!", error);
        throw error;
    }
};
