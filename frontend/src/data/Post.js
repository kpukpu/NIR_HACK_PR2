import axiosInstance from './AxiosConfig';

export const postBook = async (book) => {
    console.log('Sending book data:', book); // 데이터 확인용 콘솔 로그
    const response = await axiosInstance.post('post/', book);
    return response.data;
};
