import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import RecommendedBook from "./pages/RecommendedBook/RecommendedBook"
import SearchBook from "./pages/SearchBook/SearchBook"
import LoanManagement from "./pages/LoanManagement/LoanManagement"
import BookManagement from "./pages/BookManagement/BookManagement"

const App = () => {
    return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommended-book" element={<RecommendedBook />} />
          <Route path="/search-book" element={<SearchBook />} />
          <Route path="/loan-management" element={<LoanManagement />} />
          <Route path="/book-management" element={<BookManagement />} />
      </Routes>
    );
}

export default App;
