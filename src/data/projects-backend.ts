import { ProjectPageData } from '../components/ProjectPage'

export const diceDreamsBackend: ProjectPageData = {
  title: 'Dice Dreams',
  company: 'SuperPlay',
  period: '2022 - 2025',
  role: 'Software Architect / Backend Engineer',
  description: 'Casual mobile game that reached Top 10 Grossing on iOS in the USA with over 1 million daily active users. I was responsible for backend architecture, API design, and distributed systems.',
  // screenshots: ['/screenshots/dice-dreams-backend-1.png'],
  highlights: [
    'Top 10 Grossing iOS game in USA',
    '1M+ daily active users',
    'Backend services handling 1M+ DAU',
    'Zero-downtime Redis migration for 10M+ records',
    'Reduced production incidents by 55%'
  ],
  useCases: [
    {
      title: '.NET Backend Services',
      // media: { type: 'image', url: '/screenshots/backend-arch.png' },
      description: 'Architected and implemented .NET 6/8 backend services handling 1M+ daily active users, including REST APIs, WebSocket real-time communication, and Redis pub-sub messaging.'
    },
    {
      title: 'Shared Data Contracts',
      description: 'Defined and maintained shared data contracts and API models distributed via NuGet, ensuring type-safe communication between backend services and mobile clients.'
    },
    {
      title: 'MessagePack Serialization',
      description: 'Led migration of core data exchange to MessagePack, improving serialization performance and reducing payload size by 40%. Implemented backward-compatible contract evolution.'
    },
    {
      title: 'Zero-Downtime Redis Migration',
      description: 'Led zero-downtime Redis schema migration for 10M+ records using versioned data models, backward compatibility layers, and gradual rollout strategy.'
    },
    {
      title: 'Technical Documentation',
      description: 'Defined technical plans and backend-client architecture using PlantUML, Draw.io, and structured documentation covering API contracts, non-functional requirements, and rollout strategy.'
    },
    {
      title: 'Performance Investigation',
      description: 'Investigated backend performance and reliability issues using Grafana, AWS CloudWatch, internal timing metrics, and structured logging, identifying root causes and defining corrective actions.'
    }
  ],
  appLinks: [
    { url: 'https://apps.apple.com/app/dice-dreams/id1455861535', label: 'App Store' },
    { url: 'https://play.google.com/store/apps/details?id=com.superplay.dicedreams', label: 'Google Play' }
  ],
  tags: ['.NET Core', 'C#', 'WebSockets', 'Redis', 'MySQL', 'AWS', 'REST API', 'MessagePack', 'Grafana'],
  backLink: { url: '/backend', label: 'Back to Backend Portfolio' }
}

// Summary data for listing on Backend page
export const backendProjectsList = [
  {
    slug: 'dice-dreams',
    title: 'Dice Dreams',
    company: 'SuperPlay',
    period: '2022 - 2025',
    description: 'Backend services handling 1M+ DAU with REST APIs, WebSockets, and Redis pub-sub messaging.',
    tags: ['.NET Core', 'C#', 'WebSockets', 'Redis', 'AWS']
  }
]
