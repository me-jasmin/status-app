import React from 'react';

// images
import logo from '../static/images/viskan_logo.svg';

// styles
import './header.styles.scss';

const Header = () => {
    return (
        <header id="header">
            <div id="main-logo">
                <img src={logo} alt="Viskan" />
            </div>
            <div id="main-logo__status-text">Status</div>
        </header>
    );
};

export default Header;
