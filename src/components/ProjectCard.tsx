import { useState } from 'react'
import './ProjectCard.css'

export interface UseCase {
  title: string
  media?: {
    type: 'image' | 'video' | 'gif'
    url: string
  }
  description: string
}

export interface ProjectData {
  title: string
  company?: string
  period?: string
  description: string
  useCases?: UseCase[]
  appLink?: {
    url: string
    label: string
  }
  screenshots?: string[]
  tags?: string[]
}

interface ProjectCardProps {
  project: ProjectData
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3>{project.title}</h3>
        {(project.company || project.period) && (
          <span className="project-card-meta">
            {project.company}{project.company && project.period && ' | '}{project.period}
          </span>
        )}
      </div>

      <p className="project-card-description">{project.description}</p>

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="project-card-screenshots">
          {project.screenshots.map((src, index) => (
            <img key={index} src={src} alt={`${project.title} screenshot ${index + 1}`} />
          ))}
        </div>
      )}

      {project.tags && project.tags.length > 0 && (
        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="skill-tag">{tag}</span>
          ))}
        </div>
      )}

      <div className="project-card-actions">
        {project.useCases && project.useCases.length > 0 && (
          <button
            className="project-card-details-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details' : 'Details'}
          </button>
        )}

        {project.appLink && (
          <a
            href={project.appLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            {project.appLink.label}
          </a>
        )}
      </div>

      {showDetails && project.useCases && (
        <div className="project-card-details">
          {project.useCases.map((useCase, index) => (
            <div key={index} className="use-case">
              <h4>{useCase.title}</h4>

              {useCase.media && (
                <div className="use-case-media">
                  {useCase.media.type === 'video' ? (
                    <div className="use-case-video">
                      <iframe
                        src={useCase.media.url}
                        title={useCase.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <img
                      src={useCase.media.url}
                      alt={useCase.title}
                      className={useCase.media.type === 'gif' ? 'use-case-gif' : 'use-case-image'}
                    />
                  )}
                </div>
              )}

              <p className="use-case-description">{useCase.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

interface ProjectsProps {
  projects: ProjectData[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
