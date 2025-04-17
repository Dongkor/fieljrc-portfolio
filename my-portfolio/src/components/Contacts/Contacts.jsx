import React from 'react'
import styles from './Contacts.module.css'
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";


const Contacts = () => {
    return (
        <section id='contact' className={styles.container}>
            <div className={styles.titleContainer}>
                <h1>DONG<span className={styles.titleSpan}>KOR</span> PORTFOLIO</h1>
            </div>
            <div className={styles.socialsContainer}>
                <ul className={styles.socials}>
                    <li>
                        <a href="https://www.facebook.com/fieljr.condor/"><FaFacebookF /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/dongkor_/"><FaInstagram /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/fiel-jr-condor-625855334"><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="https://github.com/Dongkor"><FaGithub /></a>
                    </li>
                </ul>
            </div>
            <div className={styles.copyrightContainer}>
                <p>© 2025 Dongkor. All rights reserved.</p>
            </div>
        </section>

    )
}

export default Contacts