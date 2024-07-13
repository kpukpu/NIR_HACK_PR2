import React, {useEffect, useState} from "react";
import {getBooks} from "../../data/Get";
import Form from "../../components/Form/Form";
import "../../components/BookList/BookList.css"

const LoanManagement = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);

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
    }, [])

    return (
        <div className="book-list-wrapper">
            <h1 className="book-list-title">Book List</h1>
            <div className="book-list-container">
                {borrowedBooks.map((book, index) => (
                    <Form key={index} book={book}/>
                ))}
            </div>
        </div>
    )
}

export default LoanManagement