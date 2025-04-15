import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <a href='/' className={styles.title}>
                    FIEL <span className={styles.titleSpan}>JR.</span>
                </a>
                <div className={styles.menu}>
                    <IoMenu
                        className={styles.hamburger}
                        onClick={() => setOpenMenu(!openMenu)}
                    />
                    <ul
                        className={`${styles.menuItems} ${openMenu ? styles.menuOpen : ''}`}
                        onClick={() => setOpenMenu(false)}
                    >
                        <li>
                            <Link
                                to="about"
                                smooth={true}
                                duration={300}
                                offset={-100}
                                spy={true}
                                activeClass={styles.activeLink}
                                onClick={() => setOpenMenu(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="projects"
                                smooth={true}
                                duration={300}
                                offset={-100}
                                spy={true}
                                activeClass={styles.activeLink}
                                onClick={() => setOpenMenu(false)}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={300}
                                offset={-100}
                                spy={true}
                                activeClass={styles.activeLink}
                                onClick={() => setOpenMenu(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
