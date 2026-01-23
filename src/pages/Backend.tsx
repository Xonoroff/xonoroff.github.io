import './Backend.css'
import { SkillCards } from '../components/SkillCard'
import { ProjectList } from '../components/ProjectListCard'
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
          <ProjectList projects={backendProjectsList} basePath="/backend" linkText="View Details" />
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
