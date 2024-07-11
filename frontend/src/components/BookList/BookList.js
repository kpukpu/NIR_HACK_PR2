import React, { useEffect, useState } from 'react';
import { getBooks } from '../../data/Get';
import Form from '../Form/Form';
import './BookList.css'; // 추가된 스타일을 사용하기 위해 import

const BookList = () => {

    const initialBooks = [
        {
            book_number: 1,
            book_name: '1984',
            author: 'George Orwell',
            publisher: 'Secker & Warburg',
            publication_date: 1949,
            availability: true
        },
        {
            book_number: 2,
            book_name: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            publisher: 'J.B. Lippincott & Co.',
            publication_date: 1960,
            availability: false
        },
        {
            book_number: 3,
            book_name: '19841',
            author: 'George Orwel1l',
            publisher: 'Secker & W1arburg',
            publication_date: 19491,
            availability: true
        },
        {
            book_number: 4,
            book_name: 'To Kill a Mockingbird1',
            author: 'Harper Lee1',
            publisher: 'J.B. Lippinco1tt & Co.',
            publication_date: 19601,
            availability: false
        }
    ];

    const [books, setBooks] = useState([]);
    //setBooks(initialBooks);

    useEffect(() => {
         async function fetchData() {
             try {
                 const result = await getBooks();
                 setBooks(result);
             } catch (error) {
                 console.error(error);
             }
         }
         fetchData()
             .then(() => {
                 console.log("data fetched successfully");
             })
             .catch(error => {
                 console.error("Failed to fetch data:", error);
             });
    }, []);

    return (
        <div className="book-list-wrapper">
            <h1 className="book-list-title">Book List</h1>
            <div className="book-list-container">
                {books.map((book, index) => (
                    <Form key={index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookList;
