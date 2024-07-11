import React, { useState } from "react";


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
    const [searchBook, setSearchBook] = useState("");

    const filteredBooks = books.filter(books =>
        books.book_name.toLowerCase().includes(searchBook.toLowerCase())
    );

    return (
        <div>
            <h1>Search Book</h1>
            <input
                type = "text"
                placeholder = "책 제목을 입력하세요..."
                value = {searchBook}
                onChange = {(e) => setSearchBook(e.target.value)}
            />
            <ul>
                {filteredBooks.map((books) => (
                    <li key={books.book_number}>
                        <h3>{books.book_name}</h3>
                        <p>작가: {books.author}</p>
                        <p>출판사: {books.publisher}</p>
                        <p>출판 년도: {books.publication_date}</p>
                        <p>대출 가능 여부: {books.availability ? "가능" : "불가능"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBook;

