import { ProjectPageData } from '../components/ProjectPage'

export const diceDreamsUnity: ProjectPageData = {
  title: 'Dice Dreams',
  company: 'SuperPlay',
  period: '2021 - 2025',
  role: 'Unity Developer / Software Architect',
  description: 'Casual mobile game that reached Top 10 Grossing on iOS in the USA with over 1 million daily active users. I was responsible for client architecture, shared frameworks, and real-time systems.',
  // screenshots: ['/screenshots/dice-dreams-1.png', '/screenshots/dice-dreams-2.png'],
  highlights: [
    'Top 10 Grossing iOS game in USA',
    '1M+ daily active users',
    'Reduced payload size by 40% with MessagePack migration',
    'Reduced production incidents by 55%',
    'Shared frameworks used by 5 production teams (~40 engineers)'
  ],
  useCases: [
    {
      title: 'Real-time WebSocket Communication',
      // media: { type: 'image', url: '/screenshots/websocket-arch.png' },
      description: 'Designed and implemented client-server solutions using WebSockets for real-time multiplayer features. Built robust connection handling, message queuing, and reconnection logic to ensure smooth player experience.'
    },
    {
      title: 'MessagePack Migration',
      // media: { type: 'gif', url: '/screenshots/messagepack-demo.gif' },
      description: 'Led migration of core client-server communication from JSON to MessagePack. Reduced payload size by 40% and improved serialization performance, resulting in faster load times and reduced bandwidth costs.'
    },
    {
      title: 'Shared Client Framework',
      description: 'Created shared client frameworks and reusable component systems used across 5 production teams. Established architecture patterns with Zenject for DI, UniTask for async operations, and Addressables for asset management.'
    },
    {
      title: 'Reusable Component System for Tech-Artists',
      description: 'Architected a component system that allowed tech-artists to create new game content without engineering support. Reduced R&D load and accelerated content production pipeline.'
    },
    {
      title: 'Architecture Standardization',
      description: 'Reduced production incidents by 55% through architecture standardization, unified coding standards, and development flow improvements. Enabled developer rotation across teams.'
    }
  ],
  appLinks: [
    { url: 'https://apps.apple.com/app/dice-dreams/id1455861535', label: 'App Store' },
    { url: 'https://play.google.com/store/apps/details?id=com.superplay.dicedreams', label: 'Google Play' }
  ],
  tags: ['Unity', 'C#', 'WebSockets', 'Zenject', 'UniTask', 'Addressables', 'MVP', 'iOS', 'Android'],
  backLink: { url: '/unity', label: 'Back to Unity Portfolio' }
}

export const slotomaniaUnity: ProjectPageData = {
  title: 'Slotomania',
  company: 'Playtika',
  period: '2020',
  role: 'Senior C# Developer',
  description: 'One of the world\'s largest social casino games with millions of players worldwide.',
  highlights: [
    'Millions of active players worldwide',
    'Performance optimizations for low-end devices',
    'Live operations feature development'
  ],
  useCases: [
    {
      title: 'Albums Collection System',
      media: { type: 'video', url: '/videos/portfolio_slotomania_albums.mp4' },
      description: 'Developed the albums collection feature allowing players to collect items and earn rewards through gameplay progression.'
    },
    {
      title: 'Album Shiny',
      media: { type: 'video', url: '/videos/portfolio_slotomania_album_shiny.mp4' },
      description: 'Developed the Shiny Album feature as an extension of the albums collection system, introducing a parallel progression layer with its own completion rules and rewards. Implemented logic for shiny card acquisition, tracking, milestone-based rewards, and integration with the existing album and progression infrastructure.'
    },
    {
      title: 'Slot Minigame',
      media: { type: 'video', url: '/videos/portfolio_slotomania_slot_minigame.mp4' },
      description: 'Developed slot-based minigame mechanics integrated into the main gameplay loop.'
    },
    {
      title: 'Bonus Minigame',
      media: { type: 'video', url: '/videos/portfolio_slotomania_minigame.mp4' },
      description: 'Created interactive bonus minigame features to increase player engagement and session time.'
    }
  ],
  tags: ['Unity', 'C#', 'iOS', 'Android', 'Performance'],
  backLink: { url: '/unity', label: 'Back to Unity Portfolio' }
}


export const yellowStoneUnity: ProjectPageData = {
  title: 'Yellow Stone (NDA)',
  company: 'Yellow Stone',
  period: 'Dec 2020 - Sep 2021',
  role: 'Engineering Technical Lead',
  description: 'Led the engineering direction for a Las Vegas-style social casino mobile application from scratch to production release. Built the engineering team from the ground up and oversaw end-to-end development.',
  highlights: [
    'Led engineering direction from scratch to production release',
    'Built and managed the engineering team from the ground up',
    'Defined technical approach and development processes',
    'Achieved on-time delivery with stable production launch',
    'Available on Amazon Appstore'
  ],
  useCases: [
    {
      title: 'Team Building',
      description: 'Built the engineering team from the ground up: defined role needs, hired the initial developers, and established the team structure and workflows.'
    },
    {
      title: 'Technical Leadership',
      description: 'Defined the technical approach, established development processes, and worked closely with product and technical teams to shape requirements, delivery scope, and implementation strategy.'
    },
    {
      title: 'Slot Engine Development',
      media: { type: 'video', url: '/videos/portfolio_crazino_slot_XXX.mp4' },
      description: 'Developed custom slot engine with configurable reels, paylines, and win calculations. Built flexible architecture to support multiple slot themes.'
    },
    {
      title: 'Game Preview',
      media: { type: 'video', url: '/videos/portfolio_crazino_slot_YYY.mp4' },
      description: 'Full gameplay preview showcasing slot mechanics, animations, and bonus features.'
    },
    {
      title: 'Architecture & Guidance',
      description: 'Managed the technical team, provided architectural guidance, and ensured consistent delivery quality and predictable execution.'
    },
    {
      title: 'Process Design',
      description: 'Designed and implemented processes that enabled on-time delivery, including development workflows, code review practices, and release procedures.'
    },
    {
      title: 'Production Release',
      description: 'Oversaw end-to-end development of the mobile application, ensuring stability, performance, and readiness for production launch on iOS and Android.'
    }
  ],
  appLinks: [
    { url: 'https://www.amazon.com/dp/B00PGPK69K', label: 'Amazon Appstore' }
  ],
  tags: ['Unity', 'C#', 'Zenject', 'UniTask', 'Addressables', 'Slot Engine', 'REST APIs', 'CI/CD', 'Jenkins', 'iOS', 'Android'],
  backLink: { url: '/unity', label: 'Back to Unity Portfolio' }
}

export const charmKingUnity: ProjectPageData = {
  title: 'Charm King',
  company: 'PlayQ',
  period: '2018 - 2020',
  role: 'Senior Client Developer',
  description: 'Match-3 puzzle game with unique gameplay mechanics and live events.',
  useCases: [
    {
      title: 'Event Systems',
      description: 'Implemented new game features and event systems for live operations and seasonal content, driving player engagement during special events.'
    },
    {
      title: 'Internal Tools',
      description: 'Developed internal Unity Editor tools for content creation, improving designer and artist workflows and reducing time-to-production for new content.'
    }
  ],
  tags: ['Unity', 'C#', 'Mobile', 'Editor Tools'],
  backLink: { url: '/unity', label: 'Back to Unity Portfolio' }
}

export const slotsEraUnity: ProjectPageData = {
  title: 'Slots Era',
  company: 'Murka',
  period: '2017 - 2018',
  role: 'Engineering Technical Lead',
  description: 'Social casino slot game with a variety of themed slot machines.',
  useCases: [
    {
      title: 'Technical Leadership',
      description: 'Led technical development as Engineering Tech Lead, establishing coding standards, development processes, and architectural guidelines for the team.'
    },
    {
      title: 'Team Mentoring',
      description: 'Mentored junior developers, conducted code reviews, and facilitated knowledge sharing across the team to improve overall code quality and team capabilities.'
    }
  ],
  tags: ['Unity', 'C#', 'Team Leadership', 'Architecture'],
  backLink: { url: '/unity', label: 'Back to Unity Portfolio' }
}

export const scatterSlotsUnity: ProjectPageData = {
  title: 'Scatter Slots',
  company: 'Murka',
  period: '2016 - 2017',
  role: 'Senior Client Developer',
  description: 'Popular social casino game with immersive slot machine experiences.',
  useCases: [
    {
      title: 'Slot Features Development',
      description: 'Developed new slot game features and bonus mechanics, contributing to player engagement and retention metrics.'
    },
    {
      title: 'Client Optimization',
      description: 'Client-side optimization and performance improvements for smooth gameplay on mobile devices across various hardware configurations.'
    }
  ],
  tags: ['Unity', 'C#', 'Mobile', 'Performance'],
  backLink: { url: '/unity', label: 'Back to Unity Portfolio' }
}

// Summary data for listing on Unity page
// Add thumbnails to public/thumbnails/ folder
export const unityProjectsList = [
  {
    slug: 'dice-dreams',
    title: 'Dice Dreams',
    company: 'SuperPlay',
    period: '2021 - 2025',
    description: 'Casual mobile game that reached Top 10 Grossing on iOS in the USA with over 1 million daily active users.',
    thumbnail: '/screenshots/dice_dreams_logo.jpg',
    tags: ['Unity', 'C#', 'WebSockets', 'Zenject', 'UniTask', 'Addressables']
  },
  {
    slug: 'yellow-stone',
    title: 'Yellow Stone (NDA)',
    company: 'Yellow Stone',
    period: 'Dec 2020 - Sep 2021',
    description: 'Social casino mobile application built from scratch to production release with custom slot engine.',
    thumbnail: '/screenshots/Crazino_Slots_logo.png',
    tags: ['Unity', 'C#', 'Zenject', 'UniTask', 'Slot Engine', 'Team Leadership']
  },
  {
    slug: 'slotomania',
    title: 'Slotomania',
    company: 'Playtika',
    period: '2020',
    description: 'One of the world\'s largest social casino games with millions of players worldwide.',
    thumbnail: '/screenshots/slotomania_logo.png',
    tags: ['Unity', 'C#', 'iOS', 'Android']
  },
  {
    slug: 'charm-king',
    title: 'Charm King',
    company: 'PlayQ',
    period: '2018 - 2020',
    description: 'Match-3 puzzle game with unique gameplay mechanics and live events.',
    thumbnail: '/thumbnails/charm-king.png',
    tags: ['Unity', 'C#', 'Mobile']
  },
  {
    slug: 'slots-era',
    title: 'Slots Era',
    company: 'Murka',
    period: '2017 - 2018',
    description: 'Social casino slot game with a variety of themed slot machines.',
    thumbnail: '/thumbnails/slots-era.png',
    tags: ['Unity', 'C#', 'Team Leadership']
  },
  {
    slug: 'scatter-slots',
    title: 'Scatter Slots',
    company: 'Murka',
    period: '2016 - 2017',
    description: 'Popular social casino game with immersive slot machine experiences.',
    thumbnail: '/thumbnails/scatter-slots.png',
    tags: ['Unity', 'C#', 'Mobile']
  },
]
