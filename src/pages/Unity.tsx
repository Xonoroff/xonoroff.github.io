import './Unity.css'
import { SkillCards } from '../components/SkillCard'
import { ProjectList } from '../components/ProjectListCard'
import { getSkillCards } from '../data/skills'
import { unityProjectsList } from '../data/projects-unity'

const unitySkills = getSkillCards([
  'Unity & Client Development',
  'Architecture & Design',
  'Observability',
  'Practices & Methodologies'
])

function Unity() {
  return (
    <div className="unity-page">
      <div className="unity-content">
        <h1>Pavlo Prokopov</h1>
        <p className="subtitle">Team Leader | Tech Leader | Senior Unity Developer</p>

        <div className="about-section">
          <p className="bio">
            Senior Unity Developer with 10+ years of experience in mobile games and live-service systems.
            I specialize in client-server architecture, real-time communication, and scalable Unity client solutions.
          </p>
          <p className="bio">
            I've designed and maintained shared client frameworks and reusable component systems used across
            multiple production teams. Strong focus on architecture consistency, performance, reliability,
            and developer productivity in large-scale production environments.
          </p>
        </div>

        <SkillCards cards={unitySkills} />

        <div className="projects-section">
          <h2>Projects</h2>
          <ProjectList projects={unityProjectsList} basePath="/unity" linkText="Use Cases" />
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

export default Unity
