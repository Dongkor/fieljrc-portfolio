import styles from './Hero.module.css'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Hero = () => {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.grid} aria-hidden="true" />
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={styles.tag}>
                        <span className={styles.dot} />
                        Available for opportunities
                    </div>
                    <h1 className={styles.name}>Fiel Jr. E. Condor</h1>
                    <p className={styles.role}>Full-Stack Developer &amp; AI/ML Engineer</p>
                    <p className={styles.bio}>
                        BS Computer Science · University of the Philippines Cebu<br />
                        {/* Building full-stack systems and ML pipelines from concept to deployment. */}
                    </p>
                    <div className={styles.ctas}>
                        <a href="#projects" className={styles.ctaPrimary}>View Projects</a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaSecondary}
                        >
                            Download Resume
                        </a>
                    </div>
                    {/* <div className={styles.socials}>
                        <a
                            href="https://github.com/Dongkor"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className={styles.socialLink}
                        >
                            <FiGithub size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/fiel-jr-condor"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className={styles.socialLink}
                        >
                            <FiLinkedin size={20} />
                        </a>
                        <a
                            href="mailto:fieljrc@gmail.com"
                            aria-label="Email"
                            className={styles.socialLink}
                        >
                            <FiMail size={20} />
                        </a>
                    </div> */}
                </div>
                <div className={styles.imgWrapper}>
                    <img src="/IMG_0758.JPG" alt="Fiel Jr. E. Condor" className={styles.profileImg} />
                </div>
            </div>
        </section>
    )
}

export default Hero
