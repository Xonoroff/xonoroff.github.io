import { Link } from 'react-router-dom'
import './ProjectListCard.css'

export interface ProjectListItem {
  slug: string
  title: string
  company: string
  period: string
  description: string
  tags: string[]
  thumbnail?: string
  hasDetails?: boolean
}

interface ProjectListCardProps {
  project: ProjectListItem
  basePath: string
  linkText?: string
}

export function ProjectListCard({ project, basePath, linkText = 'View Details' }: ProjectListCardProps) {
  const hasLink = project.hasDetails !== false

  const cardContent = (
    <div className={`project-list-card ${!hasLink ? 'no-link' : ''}`}>
      {project.thumbnail && (
        <div className="project-list-card-thumbnail">
          <img src={project.thumbnail} alt={project.title} />
        </div>
      )}
      <div className="project-list-card-content">
        <div className="project-list-card-header">
          <h3>{project.title}</h3>
          <span className="project-list-card-meta">
            {project.company} | {project.period}
          </span>
        </div>
        <p className="project-list-card-description">{project.description}</p>
        <div className="project-list-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="skill-tag">{tag}</span>
          ))}
        </div>
        {hasLink && (
          <span className="project-list-card-link">{linkText}</span>
        )}
      </div>
    </div>
  )

  if (hasLink) {
    return (
      <Link to={`${basePath}/${project.slug}`} className="project-list-card-wrapper">
        {cardContent}
      </Link>
    )
  }

  return (
    <div className="project-list-card-wrapper">
      {cardContent}
    </div>
  )
}

interface ProjectListProps {
  projects: ProjectListItem[]
  basePath: string
  linkText?: string
}

export function ProjectList({ projects, basePath, linkText }: ProjectListProps) {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <ProjectListCard
          key={project.slug}
          project={project}
          basePath={basePath}
          linkText={linkText}
        />
      ))}
    </div>
  )
}
