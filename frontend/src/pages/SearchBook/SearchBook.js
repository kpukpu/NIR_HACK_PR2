import React, {useEffect, useState} from 'react';
import Form from '../../components/Form/Form';
import ModifyBook from '../../components/ModifyBook';
import DeleteBook from '../../components/DeleteBook';
import './SearchBook.css';
import { getBooks } from "../../data/Get";
import { putBook as apiPutBook } from "../../data/Put";

function SearchBook() {
    const [books, setBooks] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        async function initData() {
            try {
                const result = await getBooks("");
                setBooks([...result]);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }
        initData();
    }, []);

    const fetchData = async () => {
        try {
            const result = await getBooks(searchWord);
            setBooks([...result]);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchWord(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault(); // 폼 제출 기본 동작 방지
        fetchData(); // 검색 실행
    };

    const handlePutBook = async (editedBook) => {
        console.log("수정 요청 보내기:", editedBook);
        try {
            await apiPutBook(editedBook.book_number, editedBook);
            // 수정 후 즉시 검색 결과 업데이트
            fetchData();
        } catch (error) {
            console.error("Error updating book:", error);
        }
    };

    const handleDeleteBook = async (book) => {
        console.log("삭제 요청 보내기:", book);
        // 삭제 로직 구현 후 fetchData() 호출
    };

    const handleBookClick = (book) => {
        setSelectedBook(selectedBook === book.book_number ? null : book.book_number);
    };

    return (
        <div className="search-book-container">
            <h1>도서 검색</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchWord}
                    onChange={handleSearchChange}
                    placeholder="도서명을 입력하세요"
                    className="search-input"
                />
                <button type="submit">검색</button>
            </form>
            <div className="search-book-list">
                {books.map((book) => (
                    <div key={book.book_number} className="book-item">
                        <div onClick={() => handleBookClick(book)}>
                            <Form book={book} />
                        </div>
                        {selectedBook === book.book_number && (
                            <div className="book-actions">
                                <ModifyBook book={book} putBook={handlePutBook} />
                                <DeleteBook book={book} deleteBook={handleDeleteBook} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBook;