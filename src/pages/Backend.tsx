import { Link } from 'react-router-dom'
import './Backend.css'
import { SkillCards } from '../components/SkillCard'
import { getSkillCards } from '../data/skills'
import { backendProjectsList } from '../data/projects-backend'

const backendSkills = getSkillCards([
  'Backend Development',
  'Data & Caching',
  'Architecture & Design',
  'Cloud & DevOps',
  'Observability'
])

function Backend() {
  return (
    <div className="backend-page">
      <div className="backend-content">
        <h1>Pavlo Prokopov</h1>
        <p className="subtitle">Backend Engineer</p>

        <div className="about-section">
          <p className="bio">
            Backend engineer with 10+ years in C# and 3+ years architecting scalable .NET services.
            I've built high-traffic backend systems handling 1M+ DAU using HTTP APIs, WebSockets,
            Redis, MySQL, and AWS.
          </p>
          <p className="bio">
            Strong focus on distributed systems, API design, performance optimization, and
            production reliability. Reduced production incidents by 55% through improved
            architecture standards and observability.
          </p>
        </div>

        <SkillCards cards={backendSkills} />

        <div className="projects-section">
          <h2>Projects</h2>
          <div className="projects-list">
            {backendProjectsList.map((project) => (
              <div key={project.slug} className="project-card">
                <div className="project-card-header">
                  <h3>{project.title}</h3>
                  <span className="project-card-meta">
                    {project.company} | {project.period}
                  </span>
                </div>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
                <Link to={`/backend/${project.slug}`} className="project-card-link">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="contact">
          <a href="mailto:xonor@outlook.com">xonor@outlook.com</a>
          <span className="separator">|</span>
          <a href="https://linkedin.com/in/xonoroff" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default Backend
