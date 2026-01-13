import './Home.css'
import { SkillCards } from '../components/SkillCard'
import { allSkillCards } from '../data/skills'

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Pavlo Prokopov</h1>
        <p className="location">Krakow, Poland | Open to relocation</p>

        <div className="about-section">
          <p className="bio">
            Software engineer with 10+ years of experience building mobile games and live-service systems.
            I specialize in Unity, C#, and .NET backend development, with a focus on client-server
            architecture, real-time communication, and scalable solutions.
          </p>

          <p className="bio">
            Most recently, I worked on Dice Dreams at SuperPlay — a Top 10 Grossing iOS game in the USA
            with over 1 million daily active users. I designed and built backend services, real-time
            WebSocket systems, and shared client frameworks used across multiple production teams.
          </p>

          <p className="bio">
            Throughout my career, I've worked at companies like Playtika, PlayQ, and Murka on titles
            including Slotomania, Charm King, Slots Era, and Scatter Slots. I enjoy solving complex
            technical problems, improving system reliability, and building tools that help teams ship faster.
          </p>
        </div>

        <SkillCards cards={allSkillCards} />

        <div className="education-section">
          <h2>Education</h2>
          <div className="education-items">
            <div className="education-item">
              <div className="education-degree">Master's Degree with Honors</div>
              <div className="education-field">Computer Systems and Networks</div>
              <div className="education-school">Kharkiv National University of Radioelectronics | 2010 - 2015</div>
            </div>
            <div className="education-item">
              <div className="education-degree">Solution Architecture Program</div>
              <div className="education-school">SET University | 2025</div>
            </div>
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

export default Home
