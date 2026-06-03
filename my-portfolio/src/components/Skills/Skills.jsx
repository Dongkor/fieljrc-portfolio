import styles from './Skills.module.css'
import skills from '../../data/skills.json'

const Skills = () => {
    return (
        <section id="skills" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <span className={styles.num}>02</span>
                    <h2 className={styles.title}>Skills</h2>
                </div>
                <div className={styles.grid}>
                    {skills.map((skill) => (
                        <div key={skill.title} className={styles.card}>
                            <div className={styles.iconWrap}>
                                <img src={skill.imgSrc} alt={skill.title} className={styles.icon} />
                            </div>
                            <span className={styles.label}>{skill.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
