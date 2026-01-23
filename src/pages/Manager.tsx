import './Manager.css'
import { SkillCards } from '../components/SkillCard'
import { ProjectList } from '../components/ProjectListCard'
import { getSkillCards } from '../data/skills'
import { managerProjectsList } from '../data/projects-manager'

const managerSkills = getSkillCards([
  'Engineering Management',
  'Delivery & Planning',
  'Process & Governance',
  'Architecture & Design'
])

function Manager() {
  return (
    <div className="manager-page">
      <div className="manager-content">
        <h1>Pavlo Prokopov</h1>
        <p className="subtitle">Engineering Manager | Software Architect</p>

        <div className="about-section">
          <p className="bio">
            Engineering leader with 10+ years of experience building and scaling high-performing teams
            in mobile gaming. Managed multi-team organizations with 4+ team leads, achieving 92% on-time
            delivery across recurring 3-week release cycles.
          </p>
          <p className="bio">
            Strong focus on delivery governance, process design, and technical leadership. Reduced
            production incidents by 55% through architecture standardization and reduced onboarding
            time by 50% through systematic process improvements.
          </p>
        </div>

        <SkillCards cards={managerSkills} />

        <div className="projects-section">
          <h2>Projects</h2>
          <ProjectList projects={managerProjectsList} basePath="/engineering-manager" linkText="View Details" />
        </div>

        <div className="contact">
          <a href="mailto:xonor@outlook.com">xonor@outlook.com</a>
          <span className="separator">|</span>
          <a href="https://linkedin.com/in/xonoroff" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <footer className="page-footer">
          All trademarks and footage belong to their respective owners. Shown for portfolio purposes only.
        </footer>
      </div>
    </div>
  )
}

export default Manager
