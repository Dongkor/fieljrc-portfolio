import React, { useState, useEffect } from 'react';
import { FaGithub, FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Hero.module.css"


const Hero = () => {

    return (
        <>
            <section className={styles.container} id='home'>
                <div className={styles.content}>
                    <h3 className={styles.subTitle}>Hey, I’m</h3>
                    <h1 className={styles.title}> Fiel Jr. <span>Condor</span></h1>
                    <p className={styles.description}>Welcome to my space.</p>
                    <h1 className={styles.title}>

                    </h1>
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
                        <li>
                            <a href="https://github.com/Dongkor"><FaGithub /></a>
                        </li>
                    </ul>
                </div>
                <div className={styles.heroImg}>
                    <img src="../../../assets/hero/profile.png" alt="hero" />
                </div>


            </section>

        </>

    )
}

export default Hero