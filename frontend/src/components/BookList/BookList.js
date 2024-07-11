import React, { useEffect, useState } from 'react';
import { getBooks } from '../../data/Get';
import Form from '../Form/Form'


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
            availability: true
        }
    ];


    const [books, setBooks] = useState(initialBooks);

    /*useEffect(() => {
        async function fetchData() {
            try {
                const result = await getBooks();
                setBooks(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);
*/

    return (
        <div>
            <h1>Books List</h1>
            <ul>
                {books.map(book => (
                    <Form book={book} />
                ))}
            </ul>
        </div>
    );
};

export default BookList;
