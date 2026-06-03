import styles from './Projects.module.css'
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section id="projects" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <span className={styles.num}>04</span>
                    <h2 className={styles.title}>Projects</h2>
                </div>
                <div className={styles.grid}>
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
