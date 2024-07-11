import React from 'react';
import './Form.css';

const Form = ({ book }) => {
    if (!book) {
        return <div className="text-center text-gray-500 mt-8">No book information available.</div>;
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-content">
                    <h2 className="book-title">{book.book_name}</h2>
                    <p className="book-author">{book.author}</p>
                    <p className="book-publisher">{book.publisher}</p>
                    <p className="book-publication-date">{book.publication_date}</p>
                    <p className={`book-availability ${book.availability ? 'available' : 'unavailable'}`}>
                        {book.availability ? '대출 가능' : '대출 중'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Form;
