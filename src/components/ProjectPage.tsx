import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProjectPage.css'

export type AchievementType = 'technical' | 'managerial' | 'delivery' | 'performance' | 'scale'

export const achievementIcons: Record<AchievementType, string> = {
  technical: '⚙️',    // Technical/architecture achievements
  managerial: '👥',   // Team/leadership achievements
  delivery: '🚀',     // Delivery/shipping achievements
  performance: '⚡',  // Performance improvements
  scale: '📈'         // Scale/adoption achievements
}

export const achievementLabels: Record<AchievementType, string> = {
  technical: 'Technical',
  managerial: 'Managerial',
  delivery: 'Delivery',
  performance: 'Performance',
  scale: 'Scale'
}

export const roleOrder: Record<string, number> = {
  'Software Architect': 1,
  'Technical Lead / Architect': 2,
  'Technical Lead': 3,
  'Team Lead': 4,
  'Senior Developer': 5
}

export type SortBy = 'role' | 'achievement'

export interface Achievement {
  type: AchievementType
  text: string
}

export interface ProjectUseCase {
  title: string
  media?: {
    type: 'image' | 'video' | 'gif'
    url: string
  }
  role?: string
  responsibilities?: string
  achievement?: Achievement
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

const achievementOrder: Record<AchievementType, number> = {
  technical: 1,
  scale: 2,
  performance: 3,
  delivery: 4,
  managerial: 5
}

export function ProjectPage({ project }: ProjectPageProps) {
  const [filterRole, setFilterRole] = useState<string>('all')
  const [filterAchievement, setFilterAchievement] = useState<string>('all')

  // Get unique roles from use cases
  const uniqueRoles = project.useCases
    ? [...new Set(project.useCases.map(uc => uc.role).filter(Boolean))]
    : []

  // Get unique achievement types from use cases
  const uniqueAchievements = project.useCases
    ? [...new Set(project.useCases.map(uc => uc.achievement?.type).filter(Boolean))] as AchievementType[]
    : []

  const filterAndSortUseCases = (useCases: ProjectUseCase[]) => {
    return [...useCases]
      .filter(uc => {
        if (filterRole !== 'all' && uc.role !== filterRole) return false
        if (filterAchievement !== 'all' && uc.achievement?.type !== filterAchievement) return false
        return true
      })
      .sort((a, b) => {
        const orderA = a.role ? (roleOrder[a.role] || 99) : 100
        const orderB = b.role ? (roleOrder[b.role] || 99) : 100
        return orderA - orderB
      })
  }

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
            <div className="use-cases-header">
              <h2>What I Did</h2>
              {(uniqueRoles.length > 0 || uniqueAchievements.length > 0) && (
                <div className="filter-controls">
                  {uniqueRoles.length > 0 && (
                    <div className="filter-group">
                      <label htmlFor="role-filter">Role:</label>
                      <select
                        id="role-filter"
                        value={filterRole}
                        onChange={(e) => setFilterRole(e.target.value)}
                        className="filter-select"
                      >
                        <option value="all">All Roles</option>
                        {uniqueRoles.map(role => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  {uniqueAchievements.length > 0 && (
                    <div className="filter-group">
                      <label htmlFor="achievement-filter">Achievement:</label>
                      <select
                        id="achievement-filter"
                        value={filterAchievement}
                        onChange={(e) => setFilterAchievement(e.target.value)}
                        className="filter-select"
                      >
                        <option value="all">All Types</option>
                        {uniqueAchievements.map(type => (
                          <option key={type} value={type}>
                            {achievementIcons[type]} {achievementLabels[type]}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="use-cases-list">
              {filterAndSortUseCases(project.useCases).map((useCase, index) => (
                <div key={index} className="use-case-card">
                  <h3>{useCase.title}</h3>

                  {useCase.role && (
                    <div className="use-case-role">
                      <strong>Role:</strong> {useCase.role}
                    </div>
                  )}

                  {useCase.responsibilities && (
                    <div className="use-case-responsibilities">
                      <strong>Responsibilities:</strong> {useCase.responsibilities}
                    </div>
                  )}

                  {useCase.achievement && (
                    <div className={`use-case-achievement achievement-${useCase.achievement.type}`}>
                      <span className="achievement-icon">{achievementIcons[useCase.achievement.type]}</span>
                      <span>{useCase.achievement.text}</span>
                    </div>
                  )}

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

                  <p className="use-case-description">{useCase.description}</p>
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
