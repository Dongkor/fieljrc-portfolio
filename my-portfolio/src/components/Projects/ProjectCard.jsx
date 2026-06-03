import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
    const isLink = Boolean(project.url)
    const isGitHub = isLink && project.url.includes('github.com')
    const Tag = isLink ? 'a' : 'div'
    const linkProps = isLink
        ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
        : {}

    return (
        <Tag {...linkProps} className={`${styles.card} ${isLink ? styles.clickable : ''}`}>
            <div className={styles.cardTop}>
                <div className={styles.meta}>
                    <span className={styles.category}>{project.category}</span>
                    {isLink && <span className={styles.live}>{isGitHub ? 'GitHub ↗' : 'Live ↗'}</span>}
                </div>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.subtitle}>{project.subtitle}</p>
            </div>
            <p className={styles.desc}>{project.description}</p>
            <div className={styles.stack}>
                {project.stack.map((tech) => (
                    <span key={tech} className={styles.tag}>{tech}</span>
                ))}
            </div>
        </Tag>
    )
}

export default ProjectCard
