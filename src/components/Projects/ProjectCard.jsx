import React from 'react'
import styles from './ProjectCard.module.css'
import Tilt from 'react-parallax-tilt';

const ProjectCard = ({ project }) => {
    const BASE_URL = import.meta.env.BASE_URL;
    return (
        <Tilt
            tiltMaxAngleX={17}
            tiltMaxAngleY={17}
            glareEnable={false}
            glareMaxOpacity={0.05}
            scale={1.0}
            transitionSpeed={400}
            className={styles.project}
        >
            <div className={styles.imgContainer}>
                <img src={`${BASE_URL}/assets/${project.img}`} alt={project.name} className={styles.imgProj} />
            </div>
            <div className={styles.projectContent}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                <ul className={styles.tech_stack}>
                    {
                        project.tech_stack.map((tech, id) => {
                            return (
                                <li key={id} className={styles.tech}>
                                    {/* {"./skills/" + tech.toLowerCase().replace(' ', '')} */}
                                    <img src={`${BASE_URL}/assets/skills/` + tech.toLowerCase().replace(' ', '') + ".png"} alt={tech} />
                                </li>
                            )

                        })
                    }
                </ul>
                <div className={styles.status}>
                    <div className={styles[project.status]}>{project.status.replace('_', ' ')}</div>
                </div>

            </div>
        </Tilt>
    )
}

export default ProjectCard