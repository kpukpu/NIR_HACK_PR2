import React, { useState } from 'react';
import './ModifyBook.css';

const ModifyBook = ({ book, putBook }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedBook, setEditedBook] = useState({ ...book });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedBook(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        putBook(editedBook);
        setIsEditing(false);
    };

    if (!isEditing) {
        return <button onClick={() => setIsEditing(true)} className="modify-button">수정</button>;
    }

    return (
        <form onSubmit={handleSubmit} className="modify-form">
            <div className="form-group">
                <label className="form-label" htmlFor="book_name">책 이름</label>
                <input
                    className="form-input"
                    id="book_name"
                    type="text"
                    name="book_name"
                    value={editedBook.book_name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="author">저자</label>
                <input
                    className="form-input"
                    id="author"
                    type="text"
                    name="author"
                    value={editedBook.author}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="publisher">출판사</label>
                <input
                    className="form-input"
                    id="publisher"
                    type="text"
                    name="publisher"
                    value={editedBook.publisher}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="publication_date">출판 년도</label>
                <input
                    className="form-input"
                    id="publication_date"
                    type="number"
                    name="publication_date"
                    value={editedBook.publication_date}
                    onChange={handleChange}
                />
            </div>
            <div className="button-group">
                <button className="save-button" type="submit">저장하기</button>
                <button className="cancel-button" type="button" onClick={() => setIsEditing(false)}>취소</button>
            </div>
        </form>
    );
};

export default ModifyBook;