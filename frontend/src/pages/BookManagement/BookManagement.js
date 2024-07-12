import React, { useState } from 'react';
import {postBook} from "../../data/Post";

const BookManagement= () => {
    const [book, setBook] = useState({
        book_name: '',
        author: '',
        publisher: '',
        publication_date: '',
        availability: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setBook({
            ...book,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postBook(book)
        // You can also add code here to send the book object to an API or another part of your application
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Book Name:
                <input
                    type="text"
                    name="book_name"
                    value={book.book_name}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Author:
                <input
                    type="text"
                    name="author"
                    value={book.author}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Publisher:
                <input
                    type="text"
                    name="publisher"
                    value={book.publisher}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Publication Date:
                <input
                    type="number"
                    name="publication_date"
                    value={book.publication_date}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Availability:
                <input
                    type="checkbox"
                    name="availability"
                    checked={book.availability}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default BookManagement;