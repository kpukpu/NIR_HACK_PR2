import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Book, Search, BookOpen, Library } from 'lucide-react';
import './Nav.css';

const Nav = () => {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);

    const navItems = [
        { path: '/', name: '홈', icon: Home },
        { path: '/recommended-book', name: '추천 도서', icon: Book },
        { path: '/search-book', name: '도서 검색', icon: Search },
        { path: '/loan-management', name: '대출 관리', icon: BookOpen },
        { path: '/book-management', name: '도서 관리', icon: Library },
    ];

    useEffect(() => {
        const index = navItems.findIndex(item => item.path === location.pathname);
        setActiveIndex(index !== -1 ? index : 0);
    }, [location]);

    return (
        <nav className="nav">
            <div className="nav-container">
                <div className = "nav-logo">
                    <span>Library</span>
                </div>
                <div className="nav-menu">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `nav-item ${isActive ? 'active' : ''}`
                            }
                            style={{
                                zIndex: activeIndex === index ? navItems.length + 1 : navItems.length - index
                            }}
                            onClick={() => setActiveIndex(index)}
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