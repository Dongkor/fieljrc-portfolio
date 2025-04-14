import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => setOpenMenu(!openMenu);
    const closeMenu = () => setOpenMenu(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <a href="/" className={styles.title}>
                    FIEL <span className={styles.titleSpan}>JR.</span>
                </a>

                <IoMenu className={styles.hamburger} onClick={toggleMenu} />

                <ul className={`${styles.menuItems} ${openMenu ? styles.menuOpen : ''}`}>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
