import { SkillCardData } from '../components/SkillCard'

export const allSkillCards: SkillCardData[] = [
  {
    title: 'Backend Development',
    skills: ['C#', '.NET Core 6/8', 'ASP.NET Core', 'Web API', 'WebSockets', 'Entity Framework Core', 'LINQ', 'MessagePack']
  },
  {
    title: 'Unity & Client Development',
    skills: ['Unity', 'Zenject', 'UniTask', 'Addressables', 'MVP / VIPER', 'iOS', 'Android', 'Editor Tooling']
  },
  {
    title: 'Data & Caching',
    skills: ['Redis', 'MySQL', 'MongoDB', 'Caching Strategies', 'Data Modeling']
  },
  {
    title: 'Architecture & Design',
    skills: ['System Design', 'API Design', 'Microservices', 'Event-Driven', 'Pub-Sub', 'SOLID', 'PlantUML', 'Draw.io']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'CloudWatch', 'S3', 'EC2', 'Docker', 'Kubernetes', 'TeamCity', 'CI/CD', 'Git']
  },
  {
    title: 'Observability',
    skills: ['Grafana', 'Prometheus', 'Embrace', 'Mixpanel', 'Structured Logging', 'Performance Profiling']
  },
  {
    title: 'Practices & Methodologies',
    skills: ['Unit Testing', 'TDD', 'BDD', 'DDD', 'Code Review', 'Agile', 'Scrum']
  }
]

// Filter skills by card titles
export function getSkillCards(titles: string[]): SkillCardData[] {
  return allSkillCards.filter(card => titles.includes(card.title))
}
