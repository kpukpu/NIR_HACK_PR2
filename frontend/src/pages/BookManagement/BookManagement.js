import React, { useState } from 'react';
import { postBook } from '../../data/Post';

const BookManagement = () => {
    const [book, setBook] = useState({
        bookname: '',
        auth: '',
        publish: '',
        _date: '',
        avail: false,
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
        postBook(book);
        // You can also add code here to send the book object to an API or another part of your application
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Book Name:
                <input
                    type="text"
                    name="bookname"
                    value={book.bookname}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Author:
                <input
                    type="text"
                    name="auth"
                    value={book.auth}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Publisher:
                <input
                    type="text"
                    name="publish"
                    value={book.publish}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Publication Date:
                <input
                    type="text"
                    name="_date"
                    value={book._date}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Availability:
                <input
                    type="checkbox"
                    name="avail"
                    checked={book.avail}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default BookManagement;
