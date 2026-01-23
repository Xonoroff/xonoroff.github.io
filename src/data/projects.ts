// Shared project data - descriptions are the same across backend/unity/manager pages
// Use cases are defined separately per page

export interface ProjectBase {
  title: string
  company?: string
  period?: string
  role?: string
  description: string
  highlights?: string[]
  appLinks?: {
    url: string
    label: string
  }[]
  screenshots?: string[]
  tags?: string[]
}

export interface ProjectListItem {
  slug: string
  title: string
  company: string
  period: string
  description: string
  tags: string[]
  thumbnail?: string
  hasDetails?: boolean
}

// Dice Dreams - shared base data
export const diceDreamsBase: ProjectBase = {
  title: 'Dice Dreams',
  company: 'SuperPlay',
  description: 'Casual mobile game that reached Top 10 Grossing on iOS in the USA with over 1 million daily active users.',
  highlights: [
    'Top 10 Grossing iOS game in USA',
    '1M+ daily active users'
  ],
  appLinks: [
    { url: 'https://apps.apple.com/app/dice-dreams/id1455861535', label: 'App Store' },
    { url: 'https://play.google.com/store/apps/details?id=com.superplay.dicedreams', label: 'Google Play' }
  ]
}

// Slotomania - shared base data
export const slotomaniaBase: ProjectBase = {
  title: 'Slotomania',
  company: 'Playtika',
  period: '2020',
  description: 'One of the world\'s largest social casino games with millions of players worldwide.',
  highlights: [
    'Millions of active players worldwide',
    'Performance optimizations for low-end devices',
    'Live operations feature development'
  ]
}

// Yellow Stone - shared base data
export const yellowStoneBase: ProjectBase = {
  title: 'Yellow Stone (NDA)',
  company: 'Yellow Stone',
  period: 'Dec 2020 - Sep 2021',
  description: 'Led the engineering direction for a Las Vegas-style social casino mobile application from scratch to production release. Built the engineering team from the ground up and oversaw end-to-end development.',
  highlights: [
    'Led engineering direction from scratch to production release',
    'Built and managed the engineering team from the ground up',
    'Defined technical approach and development processes',
    'Achieved on-time delivery with stable production launch',
    'Available on Amazon Appstore'
  ],
  appLinks: [
    { url: 'https://www.amazon.com/dp/B00PGPK69K', label: 'Amazon Appstore' }
  ]
}

// Charm King - shared base data
export const charmKingBase: ProjectBase = {
  title: 'Charm King',
  company: 'PlayQ',
  period: '2018 - 2020',
  description: 'Match-3 puzzle game with unique gameplay mechanics and live events.'
}

// Slots Era - shared base data
export const slotsEraBase: ProjectBase = {
  title: 'Slots Era',
  company: 'Murka',
  period: '2017 - 2018',
  description: 'Social casino slot game with a variety of themed slot machines.'
}

// Scatter Slots - shared base data
export const scatterSlotsBase: ProjectBase = {
  title: 'Scatter Slots',
  company: 'Murka',
  period: '2016 - 2017',
  description: 'Popular social casino game with immersive slot machine experiences.'
}

// Shared project list items - used across unity/backend/manager pages
// Note: period and tags are overridden per-page as they differ by role
export const diceDreamsListItem: Omit<ProjectListItem, 'period' | 'tags'> = {
  slug: 'dice-dreams',
  title: 'Dice Dreams',
  company: 'SuperPlay',
  description: 'Casual mobile game that reached Top 10 Grossing on iOS in the USA with over 1 million daily active users.',
  thumbnail: '/screenshots/dice_dreams_logo.jpg',
  hasDetails: true
}

export const slotomaniaListItem: Omit<ProjectListItem, 'tags'> = {
  slug: 'slotomania',
  title: 'Slotomania',
  company: 'Playtika',
  period: '2020',
  description: 'One of the world\'s largest social casino games with millions of players worldwide.',
  thumbnail: '/screenshots/slotomania_logo.png',
  hasDetails: true
}

export const yellowStoneListItem: Omit<ProjectListItem, 'tags'> = {
  slug: 'yellow-stone',
  title: 'Yellow Stone (NDA)',
  company: 'Yellow Stone',
  period: 'Dec 2020 - Sep 2021',
  description: 'Social casino mobile application built from scratch to production release with custom slot engine.',
  thumbnail: '/screenshots/Crazino_Slots_logo.png',
  hasDetails: true
}

export const charmKingListItem: Omit<ProjectListItem, 'tags'> = {
  slug: 'charm-king',
  title: 'Charm King',
  company: 'PlayQ',
  period: '2018 - 2020',
  description: 'Match-3 puzzle game with unique gameplay mechanics and live events.',
  thumbnail: '/screenshots/charm_king_logo.png'
}

export const slotsEraListItem: Omit<ProjectListItem, 'tags'> = {
  slug: 'slots-era',
  title: 'Slots Era',
  company: 'Murka',
  period: '2017 - 2018',
  description: 'Social casino slot game with a variety of themed slot machines.',
  thumbnail: '/screenshots/slots_era_logo.png'
}

export const scatterSlotsListItem: Omit<ProjectListItem, 'tags'> = {
  slug: 'scatter-slots',
  title: 'Scatter Slots',
  company: 'Murka',
  period: '2016 - 2017',
  description: 'Popular social casino game with immersive slot machine experiences.',
  thumbnail: '/screenshots/scatter_slots_logo.png'
}

// All projects in order - base list without page-specific overrides
export const allProjectsBase = [
  { ...diceDreamsListItem, period: '' },
  { ...yellowStoneListItem },
  { ...slotomaniaListItem },
  { ...charmKingListItem },
  { ...slotsEraListItem },
  { ...scatterSlotsListItem }
]

// Slugs that have use cases per page type
export const projectsWithUseCases = {
  unity: ['dice-dreams', 'yellow-stone', 'slotomania', 'charm-king', 'slots-era', 'scatter-slots'],
  backend: ['dice-dreams'],
  manager: ['dice-dreams', 'yellow-stone', 'slots-era']
}

// Helper to create page-specific project list
export function createProjectsList(
  pageType: 'unity' | 'backend' | 'manager',
  overrides: Record<string, Partial<ProjectListItem>>
): ProjectListItem[] {
  const slugsWithDetails = projectsWithUseCases[pageType]

  return allProjectsBase.map(project => {
    const override = overrides[project.slug] || {}
    return {
      ...project,
      ...override,
      hasDetails: slugsWithDetails.includes(project.slug),
      tags: override.tags || []
    } as ProjectListItem
  })
}
