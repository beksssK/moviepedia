import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className='Header'>
            <h1 className='Header__title'><NavLink to='/' exact>Showpedia</NavLink></h1>
        </header>
    );
};

export default Header;
