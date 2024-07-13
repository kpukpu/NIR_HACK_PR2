import axiosInstance from './AxiosConfig';

export const getBooks = async (query) => {
    try {
        let response;
        if(!query) response = await axiosInstance.get('/books/');
        else if(query === -1) response = await axiosInstance.get('/book_loan/');
        else response = await axiosInstance.get(`/books/search/?book_name=${query}`);
        console.log('결과 : ', response.data)
        return response.data;
    } catch (error) {
        console.error("There was an error getting the books!", error);
        throw error;
    }
};
