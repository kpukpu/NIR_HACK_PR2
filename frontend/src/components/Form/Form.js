import React from 'react';
import './Form.css';

const Form = ({ book }) => {
    if (!book) {
        return <div className="book-form">No book information available.</div>;
    }

    return (
        <div className="book-form">
            <div className="form-group">
                <label>Book Number</label>
                <p className="form-value">{book.book_number}</p>
            </div>
            <div className="form-group">
                <label>Book Name</label>
                <p className="form-value">{book.book_name}</p>
            </div>
            <div className="form-group">
                <label>Author</label>
                <p className="form-value">{book.author}</p>
            </div>
            <div className="form-group">
                <label>Publisher</label>
                <p className="form-value">{book.publisher}</p>
            </div>
            <div className="form-group">
                <label>Publication Date</label>
                <p className="form-value">{book.publication_date}</p>
            </div>
            <div className="form-group">
                <label>Availability</label>
                <p className="form-value">{book.availability}</p>
            </div>
        </div>
    );
};

export default Form;