import React from 'react'
import styles from './About.module.css'
import skills from '../../data/skills.json'

const About = () => {
    return (
        <section id="about">
            <div className={styles.aboutContainer}>
                <div className={styles.sideTitle}>
                    <h1>ABOUT <span>ME</span></h1>
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
            </div>
            <div className={styles.skillsContainer}>
                <h1 className={styles.skillsTitle}>skills</h1>
                <div className={styles.skills}>
                    {
                        skills.map((skill, id) => {
                            return <div key={id} className={styles.skill}>
                                <div className={styles.skillContent}>
                                    <div className={styles.imgContainer}>
                                        <img src={skill.imgSrc} alt={skill.title} />
                                    </div>
                                    <div className={styles.titleContainer}><p className={styles.skillLogo}>{skill.title}</p></div>

                                </div>
                            </div>
                        })
                    }
                </div>

            </div>

        </section >
    )
}

export default About