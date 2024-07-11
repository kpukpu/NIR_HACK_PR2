import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Book, Search, BookOpen, Library } from 'lucide-react';
import './Nav.css';  // CSS 파일 import

const Nav = () => {
    const navItems = [
        { path: '/', name: '홈', icon: Home },
        { path: '/recommended-book', name: '추천 도서', icon: Book },
        { path: '/search-book', name: '도서 검색', icon: Search },
        { path: '/loan-management', name: '대출 관리', icon: BookOpen },
        { path: '/book-management', name: '도서 관리', icon: Library },
    ];

    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-logo">
                    <span>Library</span>
                </div>
                <div className="nav-menu">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `nav-item ${isActive ? 'active' : ''}`
                            }
                        >
                            <item.icon className="nav-icon" />
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Nav;