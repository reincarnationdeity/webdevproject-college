import React from 'react';
import classes from '../css/Navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header className={classes.page__header}>
            <Link to="/homework" className={classes.nav__link__first}>ДЗ (форма)</Link>
            <Link to="/block" className={classes.nav__link__first}>Блочная верстка</Link>
            <Link to="/selfwork" className={classes.nav__link__second}>Самостоятельная работа</Link>
            <Link to="/laboratory" className={[classes.nav__link__second, classes.last__link].join(' ')}>ЛР1</Link>
            <Link to="/practice" className={[classes.nav__link__second, classes.last__link].join(' ')}>ПР1</Link>
        </header>
    );
};

export default Navbar;