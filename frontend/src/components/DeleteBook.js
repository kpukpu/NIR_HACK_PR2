import React, { useState } from 'react';
import './DeleteBook.css';

const DeleteBook = ({ book, deleteBook }) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = () => {
        setShowConfirm(true);
    };

    const confirmDelete = () => {
        deleteBook(book);
        setShowConfirm(false);
    };

    const cancelDelete = () => {
        setShowConfirm(false);
    };

    if (!showConfirm) {
        return <button onClick={handleDelete} className="delete-button">삭제</button>;
    }

    return (
        <div className="confirm-dialog">
            <p className="confirm-message">{`정말 "${book.book_name}"을(를) 삭제하시겠습니까?`}</p>
            <div className="confirm-button-group">
                <button onClick={confirmDelete} className="confirm-yes">예</button>
                <button onClick={cancelDelete} className="confirm-no">아니오</button>
            </div>
        </div>
    );
};

export default DeleteBook;