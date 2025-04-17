import React, { useState, useEffect } from 'react';
import { FaGithub, FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Hero.module.css"
import hero from "/assets/hero/profile.png"


const Hero = () => {

    const BASE_URL = import.meta.env.BASE_URL;
    console.log(hero, BASE_URL)
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
                    <img src={hero} alt="hero" />
                </div>


            </section>

        </>

    )
}

export default Hero