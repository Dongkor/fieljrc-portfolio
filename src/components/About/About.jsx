import React, { useState, useEffect } from 'react'
import styles from './About.module.css'
import skills from '../../data/skills.json'
import { motion, useScroll, useMotionValueEvent } from "motion/react"


const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3, // adjust timing here
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -500, y: -100 },
    show: { opacity: 1, x: 0, y: 0 },
};

const About = () => {
    const BASE_URL = import.meta.env.BASE_URL;
    const { scrollY } = useScroll()
    const [pageY, setPageY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setPageY(latest);
    });
    return (
        <section id="about">
            <motion.div
                animate={{
                    opacity: pageY < 100 ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={styles.aboutContainer}
            >
                <div className={styles.sideTitle}>
                    <h1>
                        ABOUT<span>.</span>
                    </h1>
                </div>
                <div className={styles.body}>
                    <p>
                        Hi! I'm Fiel Jr. E. Condor — but my people call me "Dongkor."
                    </p>
                    <p>
                        That nickname? It’s an anagram of my last name, with a Cebuano twist. I’m proudly from Bogo City, a chill but vibrant spot in the north of Cebu, Philippines.
                    </p>
                    <p>
                        Right now, I’m a 3rd-year Computer Science student at the University of the Philippines Cebu. When I’m not coding or debugging something late at night, you’ll probably find me watching movies, vibing to hip-hop or R&B, or taking care of my fishes — I find peace in fishkeeping. I’m also into sports like tennis and basketball — both keep me active and competitive, and they’ve taught me a lot about rhythm, patience, and hustle.
                    </p>
                    <p>
                        This space is where I share what I’m building and where I’m heading. Glad you’re here.
                    </p>
                </div>
            </motion.div>
            <div className={styles.skillsContainer}>
                <h1 className={styles.skillsTitle}>skills<span>.</span></h1>
                <motion.div
                    className={styles.skills}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }} // only animate once, optional
                >
                    {skills.map((skill, id) => (
                        <motion.div
                            key={id}
                            className={styles.skill}
                            variants={itemVariants}
                            transition={{
                                type: "spring",
                                damping: 5,
                                stiffness: 200
                            }}
                            whileHover={{
                                scale: 1.2,
                                transition: {
                                    type: "spring",
                                    damping: 1,
                                    stiffness: 500
                                }
                            }}
                        >
                            <div className={styles.skillContent}>
                                <div className={styles.imgContainer}>
                                    <img src={`${BASE_URL}/assets/${skill.imgSrc}`} alt={skill.title} />
                                </div>
                                <div className={styles.titleContainer}>
                                    <p className={styles.skillLogo}>{skill.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

        </section >
    )
}

export default About