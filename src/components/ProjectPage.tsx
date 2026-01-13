import { Link } from 'react-router-dom'
import './ProjectPage.css'

export interface ProjectUseCase {
  title: string
  media?: {
    type: 'image' | 'video' | 'gif'
    url: string
  }
  description: string
}

export interface ProjectPageData {
  title: string
  company?: string
  period?: string
  role?: string
  description: string
  highlights?: string[]
  useCases?: ProjectUseCase[]
  appLinks?: {
    url: string
    label: string
  }[]
  screenshots?: string[]
  tags?: string[]
  backLink: {
    url: string
    label: string
  }
}

interface ProjectPageProps {
  project: ProjectPageData
}

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <div className="project-page">
      <div className="project-page-content">
        <Link to={project.backLink.url} className="back-link">
          ← {project.backLink.label}
        </Link>

        <header className="project-page-header">
          <h1>{project.title}</h1>
          {(project.company || project.period) && (
            <p className="project-page-meta">
              {project.company}{project.company && project.period && ' | '}{project.period}
            </p>
          )}
          {project.role && (
            <p className="project-page-role">{project.role}</p>
          )}
        </header>

        <p className="project-page-description">{project.description}</p>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="project-page-screenshots">
            {project.screenshots.map((src, index) => (
              <img key={index} src={src} alt={`${project.title} screenshot ${index + 1}`} />
            ))}
          </div>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <div className="project-page-section">
            <h2>Highlights</h2>
            <ul className="highlights-list">
              {project.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {project.tags && project.tags.length > 0 && (
          <div className="project-page-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>
        )}

        {project.appLinks && project.appLinks.length > 0 && (
          <div className="project-page-links">
            {project.appLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-page-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {project.useCases && project.useCases.length > 0 && (
          <div className="project-page-section">
            <h2>What I Did</h2>
            <div className="use-cases-list">
              {project.useCases.map((useCase, index) => (
                <div key={index} className="use-case-card">
                  <h3>{useCase.title}</h3>

                  {useCase.media && (
                    <div className="use-case-media">
                      {useCase.media.type === 'video' ? (
                        useCase.media.url.includes('youtube') || useCase.media.url.includes('vimeo') ? (
                          <div className="use-case-video">
                            <iframe
                              src={useCase.media.url}
                              title={useCase.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        ) : (
                          <video controls className="use-case-local-video">
                            <source src={useCase.media.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )
                      ) : (
                        <img
                          src={useCase.media.url}
                          alt={useCase.title}
                        />
                      )}
                    </div>
                  )}

                  <p>{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="project-page-footer">
          All trademarks and footage belong to their respective owners. Shown for portfolio purposes only.
        </footer>
      </div>
    </div>
  )
}
