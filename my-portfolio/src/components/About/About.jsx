import styles from './About.module.css'

const About = () => {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <span className={styles.num}>01</span>
                    <h2 className={styles.title}>About</h2>
                </div>
                <div className={styles.body}>
                    <p>
                        I'm a Computer Science graduate from the University of the Philippines Cebu
                        (July 2026), consistent University Scholar on the President's List. I build
                        full-stack web applications and machine learning systems — from LMS platforms 
                        to offline RAG pipelines evaluated over real disaster data.
                    </p>
                    <p>
                        I've shipped production systems under real deadlines: a contract LMS used by actual students and teachers, a mobile MVP built for investor demos, and an
                        internal tool prototype during a summer bridge internship at an enterprise software company.
                    </p>
                    <p>
                        Hobbies: sports (pickleball, tennis, etc.), music, and fishkeeping.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
