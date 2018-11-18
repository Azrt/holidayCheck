import React from 'react';

import Logo from '../assets/holiday-check.png';

export const Header = () => (
    <header className="header">
        <div className="header__image-container">
            <figure>
                <img src={Logo} className="header__logo" />
            </figure>
        </div>
        <nav className="header__nav">
            <ul className="header__nav-list">
                <li className="header__nav-item">
                    <a href="#" className="header__nav-link">
                        Dashboard
                    </a>
                </li>
                <li className="header__nav-item">
                    <a href="#" className="header__nav-link header__nav-link--active">
                        Reviews
                    </a>
                </li>
                <li className="header__nav-item">
                    <a href="#" className="header__nav-link">
                        Hotel Manager
                    </a>
                </li>
                <li className="header__nav-item">
                    <a href="#" className="header__nav-link">
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    </header>
);