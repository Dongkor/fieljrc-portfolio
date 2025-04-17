import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-scroll';
import { motion, useScroll, useMotionValueEvent } from "motion/react"

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const { scrollY, scrollYProgress } = useScroll()
    const [pageY, setPageY] = useState(0);
    const [activeSection, setActiveSection] = useState(null);

    const handleSetActive = (to) => {
        setActiveSection(to)
        console.log(activeSection)
    };

    useMotionValueEvent(scrollY, "change", (latest) => {
        setPageY(latest);
        if (scrollYProgress.current > 0.99) {
            setActiveSection('contact')
        }
        else if (activeSection == 'contact' && scrollYProgress.current >= 0.95 && scrollYProgress.current < 0.98) {
            setActiveSection('projects')
        }
        else if (pageY < 100) {
            setActiveSection(null)
        }
        console.log(activeSection, scrollYProgress.current)
    });
    return (
        <motion.nav
            className={styles.navbar}
            style={{
                backgroundColor: pageY < 10 ? 'transparent' : 'rgba(29, 29, 29, 0.75)',
                boxShadow: pageY < 10 ? 'none' : '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
            }}>
            <div className={styles.content}>
                <a href='/' className={styles.title}>
                    DONG<span className={styles.titleSpan}>KOR.</span>
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
                                className={activeSection === "about" ? styles.activeLink : ''}
                                onClick={() => setOpenMenu(false)}
                                onSetActive={handleSetActive}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="projects"
                                smooth={true}
                                duration={300}
                                offset={-70}
                                spy={true}
                                className={activeSection === "projects" ? styles.activeLink : ''}
                                onClick={() => setOpenMenu(false)}
                                onSetActive={handleSetActive}
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
                                className={activeSection === "contact" ? styles.activeLink : ''}
                                onSetActive={handleSetActive}
                                onClick={() => setOpenMenu(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.nav >
    );
};

export default Navbar;
