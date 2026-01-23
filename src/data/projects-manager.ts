import { ProjectPageData } from '../components/ProjectPage'
import {
  diceDreamsBase,
  yellowStoneBase,
  slotsEraBase,
  createProjectsList
} from './projects'
import {
  diceDreamsManagerUseCases,
  yellowStoneManagerUseCases,
  slotsEraManagerUseCases
} from './use-cases-manager'

export const diceDreamsManager: ProjectPageData = {
  ...diceDreamsBase,
  period: '2021 - 2025',
  role: 'Software Architect / Engineering Manager',
  highlights: [
    ...diceDreamsBase.highlights || [],
    'Managed 4 team leads across multiple production teams',
    'Achieved ~92% on-time delivery across 3-week release cycles',
    'Reduced onboarding time by 50% (6 weeks to 3 weeks)',
    'Reduced production incidents by 55%'
  ],
  useCases: diceDreamsManagerUseCases,
  tags: [
    'Team Leadership', 'Engineering Management', 'Hiring', 'Mentoring',
    'Delivery Governance', 'Roadmap Planning', 'Stakeholder Management',
    'Process Design', 'Onboarding', 'Technical Governance',
    'ADR', 'Cross-Team Alignment', 'Risk Management'
  ],
  backLink: { url: '/engineering-manager', label: 'Back to Engineering Manager Portfolio' }
}

export const yellowStoneManager: ProjectPageData = {
  ...yellowStoneBase,
  role: 'Engineering Technical Lead',
  useCases: yellowStoneManagerUseCases,
  tags: ['Team Building', 'Technical Leadership', 'Process Design', 'Hiring', 'Delivery Management'],
  backLink: { url: '/engineering-manager', label: 'Back to Engineering Manager Portfolio' }
}

export const slotsEraManager: ProjectPageData = {
  ...slotsEraBase,
  role: 'Engineering Technical Lead',
  useCases: slotsEraManagerUseCases,
  tags: ['Technical Leadership', 'Team Mentoring', 'Code Reviews', 'Process Standards'],
  backLink: { url: '/engineering-manager', label: 'Back to Engineering Manager Portfolio' }
}

// Summary data for listing on Engineering Manager page
// Shows all projects, but only Dice Dreams, Yellow Stone, and Slots Era have use cases (clickable)
export const managerProjectsList = createProjectsList('manager', {
  'dice-dreams': {
    period: '2021 - 2025',
    description: 'Led multi-team engineering organization with 4 team leads, achieving 92% on-time delivery and 55% reduction in production incidents.',
    tags: ['Team Leadership', 'Engineering Management', 'Delivery Governance', 'Hiring']
  },
  'yellow-stone': {
    description: 'Built engineering team from scratch and led development from inception to production release.',
    tags: ['Team Building', 'Technical Leadership', 'Process Design']
  },
  'slotomania': {
    tags: ['Unity', 'C#', 'iOS', 'Android']
  },
  'charm-king': {
    tags: ['Unity', 'C#', 'Mobile']
  },
  'slots-era': {
    description: 'Led technical development as Engineering Tech Lead, establishing standards and mentoring developers.',
    tags: ['Technical Leadership', 'Team Mentoring']
  },
  'scatter-slots': {
    tags: ['Unity', 'C#', 'Mobile']
  }
})
