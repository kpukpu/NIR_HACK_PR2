import axiosInstance from './AxiosConfig';

export const deleteBook = async (bookNumber) => {
    try {
        const response = await axiosInstance.delete(`/books/${bookNumber}/`);
        return response.data;
    } catch (error) {
        console.error("There was an error deleting the book!", error);
        throw error;
    }
};
