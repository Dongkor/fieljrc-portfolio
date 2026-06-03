import styles from './Experience.module.css'
import experience from '../../data/experience.json'

const Experience = () => {
    return (
        <section id="experience" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <span className={styles.num}>03</span>
                    <h2 className={styles.title}>Experience</h2>
                </div>
                <div className={styles.list}>
                    {experience.map((job, i) => (
                        <div key={i} className={styles.job}>
                            <div className={styles.jobHeader}>
                                <div className={styles.jobLeft}>
                                    {job.url ? (
                                        <a
                                            href={job.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.company}
                                        >
                                            {job.company} ↗
                                        </a>
                                    ) : (
                                        <span className={styles.company}>{job.company}</span>
                                    )}
                                    <p className={styles.role}>
                                        {job.role}
                                        <span className={styles.badge}>{job.type}</span>
                                    </p>
                                </div>
                                <div className={styles.meta}>
                                    <span className={styles.period}>{job.period}</span>
                                    <span className={styles.location}>{job.location}</span>
                                </div>
                            </div>
                            <ul className={styles.bullets}>
                                {job.bullets.map((b, j) => (
                                    <li key={j} className={styles.bullet}>{b}</li>
                                ))}
                            </ul>
                            <div className={styles.stack}>
                                {job.stack.map((tech) => (
                                    <span key={tech} className={styles.tag}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
