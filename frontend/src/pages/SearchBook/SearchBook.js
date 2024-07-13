import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import ModifyBook from '../../components/ModifyBook';
import DeleteBook from '../../components/DeleteBook';
import { useSearch } from '../../components/Search';
import './SearchBook.css';

const books = [
    {
        book_number: 1,
        book_name: '굉장해 엄청나 책',
        author: '히세강',
        publisher: '강세히',
        publication_date: 2004,
        availability: true
    },
    {
        book_number: 2,
        book_name: '굉장해 엄청나 책2',
        author: '히세강2',
        publisher: '강세히2',
        publication_date: 2005,
        availability: false
    },
    {
        book_number: 3,
        book_name: '백설공주는 왜 사과를 좋아할까',
        author: '욥욥이',
        publisher: '얍얍이',
        publication_date: 2008,
        availability: true
    }
];

function SearchBook() {
    const { searchTerm, setSearchTerm, filteredBooks } = useSearch(books);
    const [selectedBook, setSelectedBook] = useState(null);

    const putBook = (editedBook) => {
        // 이 함수는 그대로 두겠습니다. 서버 요청은 여기서 처리될 것입니다.
        console.log("수정 요청 보내기:", editedBook);
    };

    const deleteBook = (book) => {
        console.log("삭제 요청 보내기:", book);
    };

    const handleBookClick = (book) => {
        setSelectedBook(selectedBook === book.book_number ? null : book.book_number);
    };

    return (
        <div className="search-book-container">
            <h1>도서 검색</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="도서명을 입력하세요"
                className="search-input"
            />
            <div className="search-book-list">
                {filteredBooks.map((book) => (
                    <div key={book.book_number} className="book-item">
                        <div onClick={() => handleBookClick(book)}>
                            <Form book={book} />
                        </div>
                        {selectedBook === book.book_number && (
                            <div className="book-actions">
                                <ModifyBook book={book} putBook={putBook} />
                                <DeleteBook book={book} deleteBook={deleteBook} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBook;