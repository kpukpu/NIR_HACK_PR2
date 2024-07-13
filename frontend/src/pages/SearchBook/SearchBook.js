import React, { useState } from "react";
import Form from "../../components/Form/Form";
import './SerchBook.css';

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

const CHO_HANGUL = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ',
  'ㄹ', 'ㅁ', 'ㅂ','ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ',
  'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
];

const HANGUL_START_CharCode = "가".charCodeAt();

const CHO_PERIOD = Math.floor("까".charCodeAt() - "가".charCodeAt());
const JUNG_PERIOD = Math.floor("개".charCodeAt() - "가".charCodeAt());

function combine(cho, jung, jong) {
  return String.fromCharCode(
    HANGUL_START_CharCode + cho * CHO_PERIOD + jung * JUNG_PERIOD + jong
  );
}

function makeRegexByCho(search = "") {
  const regex = CHO_HANGUL.reduce(
    (acc, cho, index) =>
      acc.replace(
        new RegExp(cho, "g"),
        `[${combine(index, 0, 0)}-${combine(index + 1, 0, -1)}]` // [시작-끝] -> [가-깋]
      ),
    search
  );
  return new RegExp(`(${regex})`, "g");
} //makeRegexByCho('ㄱ') -> 가-깋

function SearchBook() {
    const [searchBook, setSearchBook] = useState("");

    const filteredBooks = books.filter(book =>
        makeRegexByCho(searchBook).test(book.book_name)
    );

    return (
        <div className="search-book-container">
            <h1>도서 검색</h1>
            <input
                type="text"
                placeholder="책 제목을 입력하세요..."
                value={searchBook}
                onChange={(e) => setSearchBook(e.target.vaue)}
                className="search-book-input"
            />
            <div className="search-book-list">
                {filteredBooks.map((book, index) => (
                    <Form key={index} book={book} />
                ))}
            </div>
        </div>
    );
}

export default SearchBook;
