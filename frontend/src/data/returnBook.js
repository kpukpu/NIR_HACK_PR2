import axiosInstance from './AxiosConfig';

export const returnBook = async (book) => {
    console.log('Sending book data:', book); // 데이터 확인용 콘솔 로그
    await axiosInstance.post('/book_loan/return/', book.book_name);
};
