import { ProjectPageData } from '../components/ProjectPage'
import { diceDreamsBase, createProjectsList } from './projects'
import { diceDreamsBackendUseCases } from './use-cases-backend'

export const diceDreamsBackend: ProjectPageData = {
  ...diceDreamsBase,
  period: '2022 - 2025',
  role: 'Software Architect / Backend Engineer',
  highlights: [
    ...diceDreamsBase.highlights || [],
    'Backend services handling 1M+ DAU',
    'Zero-downtime Redis migration for 10M+ records',
    'Reduced production incidents by 55%'
  ],
  useCases: diceDreamsBackendUseCases,
  tags: ['.NET Core', 'C#', 'WebSockets', 'Redis', 'MySQL', 'AWS', 'REST API', 'MessagePack', 'Grafana'],
  backLink: { url: '/backend', label: 'Back to Backend Portfolio' }
}

// Summary data for listing on Backend page
// Shows all projects, but only Dice Dreams has use cases (clickable)
export const backendProjectsList = createProjectsList('backend', {
  'dice-dreams': {
    period: '2022 - 2025',
    description: 'Backend services handling 1M+ DAU with REST APIs, WebSockets, and Redis pub-sub messaging.',
    tags: ['.NET Core', 'C#', 'WebSockets', 'Redis', 'AWS']
  },
  'yellow-stone': {
    tags: ['Unity', 'C#', 'Team Leadership']
  },
  'slotomania': {
    tags: ['TypeScript', 'HAXE', 'C#']
  },
  'charm-king': {
    tags: ['Unity', 'C#', 'Mobile']
  },
  'slots-era': {
    tags: ['Unity', 'C#', 'Team Leadership']
  },
  'scatter-slots': {
    tags: ['Unity', 'C#', 'Mobile']
  }
})
