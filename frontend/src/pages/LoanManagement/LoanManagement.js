import React, { useEffect, useState } from "react";
import { getBooks } from "../../data/Get";
import Form from "../../components/Form/Form";
import "../../components/BookList/BookList.css";
import "./LoanManagement.css";
import { returnBook } from "../../data/returnBook";

const LoanManagement = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getBooks(-1);
                setBorrowedBooks([...result]);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const handleBookClick = (book) => {
        setSelectedBook(book);
        setShowConfirmModal(true);
    };

    const handleConfirmReturn = async () => {
        if (selectedBook) {
            try {
                await returnBook(selectedBook);
                // 반납 성공 후 목록 갱신
                const updatedBooks = borrowedBooks.filter(book => book.book_number !== selectedBook.book_number);
                setBorrowedBooks(updatedBooks);
            } catch (error) {
                console.error("반납 중 오류 발생:", error);
            }
        }
        setShowConfirmModal(false);
    };

    const handleCancelReturn = () => {
        setShowConfirmModal(false);
    };

    return (
        <div className="book-list-wrapper">
            <h1 className="book-list-title">Book List</h1>
            <div className="book-list-container">
                {borrowedBooks.map((book, index) => (
                    <div key={index} onClick={() => handleBookClick(book)}>
                        <Form book={book} />
                    </div>
                ))}
            </div>

            {showConfirmModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>반납 확인</h2>
                        <p>"{selectedBook?.book_name}" 책을 반납하시겠습니까?</p>
                        <button onClick={handleConfirmReturn}>예</button>
                        <button onClick={handleCancelReturn}>아니오</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoanManagement;