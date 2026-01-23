import { ProjectUseCase } from '../components/ProjectPage'

// Backend-specific use cases for Dice Dreams
export const diceDreamsBackendUseCases: ProjectUseCase[] = [
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
]
