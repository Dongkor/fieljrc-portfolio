import { useState, useEffect } from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <a href="#" className={styles.logo}>
                    FIEL <span className={styles.titleSpan}>JR.</span>
                </a>

                <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
                    {navLinks.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className={styles.link}
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                    {/* <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resume}
                        onClick={() => setMenuOpen(false)}
                    >
                        Resume
                    </a> */}
                </div>

                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(m => !m)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
                    <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
                    <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
                </button>
            </div>
        </nav>
    )
}

export default NavBar
