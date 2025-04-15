import React, { useState, useEffect } from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Hero.module.css"
import { IoArrowDown } from "react-icons/io5";
import { Link } from 'react-scroll';



const Hero = () => {
    const [isAboutActive, setIsAboutActive] = useState(false)
    return (
        <>
            <section className={styles.container} id='home'>
                <div className={styles.content}>
                    <h3 className={styles.subTitle}>Hey, I’m</h3>
                    <h1 className={styles.title}> Fiel Jr. <span>Condor</span></h1>
                    <p className={styles.description}>Welcome to my space.</p>
                    <ul className={styles.socials}>
                        <li>
                            <a href="https://www.facebook.com/fieljr.condor/"><FaFacebookSquare /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/dongkor_/"><FaInstagram /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/fiel-jr-condor-625855334"><FaLinkedin /></a>
                        </li>
                    </ul>
                </div>
                <div className={styles.heroImg}>
                    <img src="/profile.png" alt="hero" />
                </div>

                <div className={styles.topBlur} />
                <div className={styles.btmBlur} />

            </section>
            <div className={styles.arrowDown}>
                <Link
                    to="about"
                    smooth={true}
                    duration={300}
                    offset={-100}
                    spy={true}
                    activeClass={styles.activeLink}
                    onSetActive={() => setIsAboutActive(true)}
                    onSetInactive={() => setIsAboutActive(false)} // this clears it when "about" is no longer active
                >
                    <IoArrowDown className={isAboutActive ? styles.hiddenArrow : ''} />
                </Link>
            </div >
        </>

    )
}

export default Hero