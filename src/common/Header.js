import React from 'react';

import SVG from 'react-inlinesvg';
import Logo from '../assets/pobrane.svg';

export const Header = () => (
    <header className="header">
        <div className="header__image-container">
            <SVG src={Logo} />
        </div>
    </header>
);