import { ProjectPageData } from '../components/ProjectPage'
import {
  diceDreamsBase,
  slotomaniaBase,
  yellowStoneBase,
  charmKingBase,
  slotsEraBase,
  scatterSlotsBase,
  createProjectsList
} from './projects'
import {
  diceDreamsUnityUseCases,
  slotomaniaUnityUseCases,
  yellowStoneUnityUseCases,
  charmKingUnityUseCases,
  slotsEraUnityUseCases,
  scatterSlotsUnityUseCases
} from './use-cases-unity'

export const diceDreamsUnity: ProjectPageData = {
  ...diceDreamsBase,
  period: '2021 - 2025',
  role: 'Unity Developer / Software Architect',
  highlights: [
    ...diceDreamsBase.highlights || [],
    'Reduced payload size by 40% with MessagePack migration',
    'Reduced production incidents by 55%',
    'Shared frameworks used by 5 production teams (~40 engineers)'
  ],
  useCases: diceDreamsUnityUseCases,
  tags: [
    'Unity', 'C#', 'WebSockets', 'MessagePack', 'REST APIs',
    'Zenject', 'UniTask', 'Addressables', 'DOTween',
    'MVP', 'SOLID', 'DI', 'Visual Scripting',
    'Feature Flags', 'A/B Testing', 'Live Ops',
    'Observability', 'Logging', 'Metrics', 'Dashboards',
    'ADR', 'HLD', 'LLD', 'NFRs',
    'CI/CD', 'Jenkins', 'Git',
    'iOS', 'Android'
  ],
  backLink: { url: '/unity', label: 'Back to Unity Portfolio' }
}

export const slotomaniaUnity: ProjectPageData = {
  ...slotomaniaBase,
  role: 'Senior Client Developer',
  useCases: slotomaniaUnityUseCases,
  tags: ['TypeScript', 'HAXE' ,'C#', 'iOS', 'Android', 'Performance'],
  backLink: { url: '/unity', label: 'Back to Unity Portfolio' }
}

export const yellowStoneUnity: ProjectPageData = {
  ...yellowStoneBase,
  role: 'Engineering Technical Lead',
  useCases: yellowStoneUnityUseCases,
  tags: ['Unity', 'C#', 'Zenject', 'UniTask', 'Addressables', 'Slot Engine', 'REST APIs', 'CI/CD', 'Jenkins', 'iOS', 'Android'],
  backLink: { url: '/unity', label: 'Back to Unity Portfolio' }
}

export const charmKingUnity: ProjectPageData = {
  ...charmKingBase,
  role: 'Senior Client Developer',
  useCases: charmKingUnityUseCases,
  tags: ['Unity', 'C#', 'Mobile', 'Editor Tools'],
  backLink: { url: '/unity', label: 'Back to Unity Portfolio' }
}

export const slotsEraUnity: ProjectPageData = {
  ...slotsEraBase,
  role: 'Engineering Technical Lead',
  useCases: slotsEraUnityUseCases,
  tags: ['Unity', 'C#', 'Team Leadership', 'Architecture'],
  backLink: { url: '/unity', label: 'Back to Unity Portfolio' }
}

export const scatterSlotsUnity: ProjectPageData = {
  ...scatterSlotsBase,
  role: 'Senior Client Developer',
  useCases: scatterSlotsUnityUseCases,
  tags: ['Unity', 'C#', 'Mobile', 'Performance'],
  backLink: { url: '/unity', label: 'Back to Unity Portfolio' }
}

// Summary data for listing on Unity page
export const unityProjectsList = createProjectsList('unity', {
  'dice-dreams': {
    period: '2021 - 2025',
    tags: ['Unity', 'C#', 'WebSockets', 'Zenject', 'UniTask', 'Addressables']
  },
  'yellow-stone': {
    tags: ['Unity', 'C#', 'Zenject', 'UniTask', 'Slot Engine', 'Team Leadership']
  },
  'slotomania': {
    tags: ['Unity', 'C#', 'iOS', 'Android']
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
