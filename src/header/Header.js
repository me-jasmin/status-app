import React from 'react';

import './header.styles.scss';

const Header = () => {
    return (
        <header id="header">
            <div id="main-logo">
                <img src="./images/logo.svg" alt="logo" />
            </div>
            <div id="main-logo__status-text">Status</div>
        </header>
    );
};

export default Header;
