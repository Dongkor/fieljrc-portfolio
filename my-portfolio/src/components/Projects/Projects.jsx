import React from 'react'
import styles from './Projects.module.css'
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section id='projects' className={styles.projectContainer}>
            <h1 className={styles.projectsTitle}>Projects<span>.</span></h1>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />
                })}
            </div>
        </section>
    )
}

export default Projects