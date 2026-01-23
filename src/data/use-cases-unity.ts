import { ProjectUseCase } from '../components/ProjectPage'

// Unity-specific use cases for Dice Dreams
export const diceDreamsUnityUseCases: ProjectUseCase[] = [
  {
    title: 'Albums Collection System',
    media: { type: 'video', url: '/videos/portfolio_dice_dreams_albums.mp4' },
    role: 'Software Architect',
    responsibilities: 'Client-server architecture design (HLD, LLD), non-functional requirements definition (NFRs, quality attributes),  data modeling, backend behavior specification, rough effort estimation, technical roadmap planning, team mentoring, code reviews, technical guidance',
    achievement: { type: 'technical', text: 'Enabled live-ops team to launch new seasonal albums without any client or backend code changes' },
    description: 'A collectibles meta-system where players collect themed cards grouped into sets within seasonal albums. Each album includes card rarities, set completion bonuses, persistent progress, milestone rewards, and live-ops-driven seasonal rotations. The system was designed to allow new albums (seasons) to be fully configured and launched by the live operations team without requiring client or backend code changes.'
  },
  {
    title: 'Battle Pass System',
    media: { type: 'video', url: '/videos/portfolio_dice_dreams_battle_pass.mp4' },
    role: 'Software Architect',
    responsibilities: 'Client-server architecture design (HLD, LLD), non-functional requirements definition (NFRs, quality attributes), data modeling, backend behavior specification, rough effort estimation, technical roadmap planning, team mentoring, code reviews, technical guidance',
    achievement: { type: 'technical', text: 'Delivered scalable seasonal content system with zero client updates required between seasons' },
    description: 'A seasonal progression system built around tier-based rewards with free and premium tracks. Players earn progression through gameplay events, with support for premium upgrades, cross-session progress persistence. The system was designed to support scalable seasonal content rotation and live-ops configuration without requiring client updates.'
  },
  {
    title: 'Reward System',
    media: { type: 'video', url: '/videos/portfolio_dice_dreams_reward_system.mp4' },
    role: 'Software Architect',
    responsibilities: 'End-to-end implementation, Client-server architecture design (HLD, LLD), non-functional requirements definition (NFRs, quality attributes), data modeling, backend behavior specification, core infrastructure design and implementation, rough effort estimation, technical roadmap planning, team mentoring, code reviews, technical guidance',
    achievement: { type: 'scale', text: 'Adopted as the core reward foundation by 5 production teams (~40 engineers)' },
    description: 'A centralized, game-wide reward infrastructure serving as the single source of truth for all reward distribution. The system standardizes reward definitions, validation, batching, balance updates, and client presentation flows across all features. Designed and implemented by my own as a scalable foundation adopted by multiple teams, with clear integration contracts and guidelines to ensure consistent usage and long-term maintainability.'
  },
  {
    title: 'Daily Rewards System',
    media: { type: 'video', url: '/videos/portfolio_dice_dreams_daily_rewards.mp4' },
    role: 'Team Lead',
    responsibilities: 'End-to-end implementation, delivery ownership',
    achievement: { type: 'delivery', text: 'Delivered complete feature end-to-end with full ownership' },
    description: 'A daily engagement system rewarding players for consecutive logins with escalating rewards and streak bonuses. Includes comeback mechanics for lapsed players, calendar-driven special rewards, and push notification integration. Delivered as a complete feature with both hands-on implementation and team leadership responsibilities.'
  },
  {
    title: 'Real-time WebSocket Communication',
    role: 'Software Architect',
    responsibilities: 'Client-server architecture design, real-time communication protocol definition, cross-team technical leadership, coordination of client and backend development, code reviews, reliability and scalability guidance',
    achievement: { type: 'scale', text: 'Enabled low-latency real-time multiplayer features for 1M+ daily active users' },
    description: 'Designed and implemented a client-server WebSocket communication layer for real-time multiplayer features. Included connection lifecycle management, message routing and ordering, backpressure handling, and resilient reconnection logic to ensure consistency and low-latency player experience under unstable network conditions.'
  },
  {
    title: 'MessagePack Migration',
    role: 'Software Architect',
    responsibilities: 'Client-server communication architecture design, serialization strategy definition, cross-team technical leadership, migration planning and execution, backward compatibility management, performance validation and rollout coordination',
    achievement: { type: 'performance', text: 'Reduced payload size by ~40%, improving load times and reducing bandwidth costs' },
    description: 'Led the migration of core client-server communication from JSON to MessagePack. Achieved approximately 40% payload size reduction and improved serialization performance, resulting in faster load times, lower bandwidth usage, and safer scalability under high concurrent traffic.'
  },
  {
    title: 'Reusable Component System for Tech-Artists',
    role: 'Software Architect',
    responsibilities: 'Component-based architecture design, visual scripting framework definition, cross-discipline collaboration with tech-artists and designers, tooling and workflow enablement, system documentation and adoption guidance',
    achievement: { type: 'managerial', text: 'Reduced R&D dependency and accelerated content production pipeline' },
    description: 'Architected a reusable, component-based system integrated with visual scripting, enabling tech-artists to create and iterate on game content without direct engineering involvement. Significantly reduced R&D load and accelerated the content production pipeline while maintaining technical constraints and system consistency.'
  },
  {
    title: 'Architecture Standardization',
    role: 'Software Architect',
    responsibilities: 'Definition and enforcement of architectural standards, cross-team technical alignment, coding standards establishment, development workflow optimization, incident analysis and prevention, technical governance',
    achievement: { type: 'performance', text: 'Reduced production incidents by ~55% across multiple teams' },
    description: 'Established and enforced unified architectural standards, coding conventions, and development workflows across multiple teams. Reduced production incidents by approximately 55% and enabled safe developer rotation between teams by improving system consistency and shared technical understanding.'
  },
  {
    title: 'Onboarding Process Standardization',
    role: 'Software Architect',
    responsibilities: 'Design of onboarding architecture, definition of technical entry standards, documentation structure design, dependency and complexity reduction, onboarding workflow optimization, cross-team alignment',
    achievement: { type: 'managerial', text: 'Reduced developer onboarding time from ~6 weeks to ~3 weeks (50% reduction)' },
    description: 'Designed and implemented a standardized technical onboarding process across multiple production teams. Simplified system architecture, unified documentation, and introduced clear entry points for new developers. Reduced onboarding time from approximately 6 weeks to 3 weeks while maintaining delivery quality and lowering onboarding-related incidents.'
  },
  {
    title: 'Architectural Decision Records (ADR) and Governance',
    role: 'Software Architect',
    responsibilities: 'Architecture decision ownership, trade-off analysis, documentation of decisions and constraints, cross-team technical alignment, review and approval workflow definition',
    achievement: {
      type: 'technical',
      text: 'Established a repeatable decision-making and documentation process for cross-team architectural changes'
    },
    description: 'Introduced a structured approach for capturing and communicating architectural decisions using lightweight ADRs. Documented constraints, evaluated alternatives, and recorded rationale for key system decisions. Enabled consistent understanding of technical direction across teams and reduced repeated discussions and divergent implementations.'
  },
  {
    title: 'Observability and Incident Diagnostics Standardization',
    role: 'Software Architect',
    responsibilities: 'Observability architecture design, logging and metrics standard definition, incident analysis workflows, cross-team adoption, production diagnostics enablement',
    achievement: {
      type: 'performance',
      text: 'Reduced incident investigation time through unified observability and diagnostics standards'
    },
    description: 'Designed and enforced unified observability standards across backend and client systems, including structured logging, metrics conventions, and diagnostic dashboards. Enabled faster incident triage and more reliable root cause analysis, contributing to lower production risk.'
  },
  {
    title: 'Backward Compatibility and Zero-Downtime Migration Strategy',
    role: 'Software Architect',
    responsibilities: 'Migration architecture design, backward compatibility strategy, rollout and rollback planning, risk containment, production validation',
    achievement: {
      type: 'technical',
      text: 'Executed high-impact protocol and data migrations without production downtime'
    },
    description: 'Designed and led backward-compatible migration strategies for client-server protocols and backend data models. Used versioned contracts, gradual rollout, and compatibility layers to minimize risk and avoid service disruption during live production.'
  },
  {
    title: 'Feature Flags and Controlled Rollout Architecture',
    role: 'Software Architect',
    responsibilities: 'Controlled rollout strategy design, feature isolation, risk management, coordination with product and live-ops teams',
    achievement: {
      type: 'delivery',
      text: 'Reduced release risk through controlled rollouts and isolated feature activation'
    },
    description: 'Designed architectural patterns for feature isolation and controlled rollout using configuration-driven behavior and staged enablement. Enabled safer releases, limited blast radius for failures, and supported live-ops-driven experimentation without client redeployment.'
  },
  {
    title: 'Engineering Leadership and Team Leads Management',
    role: 'Software Architect',
    responsibilities: 'Team lead management, mentoring,  responsibility delegation, leadership development',
    achievement: {
      type: 'managerial',
      text: 'Managed and developed 4 team leads and promoted internal leadership growth'
    },
    description: 'Managed multiple team leads responsible for individual production teams. Conducted regular 1:1s and mentoring sessions, focusing on delivery ownership, technical decision-making, and stakeholder communication.'
  },
  {
    title: 'On-Time Delivery and Planning Governance',
    role: 'Software Architect',
    responsibilities: 'Roadmap planning, effort estimation frameworks, milestone tracking, delivery governance, stakeholder alignment',
    achievement: {
      type: 'managerial',
      text: 'Achieved ~92% on-time delivery across recurring 3-week release cycles'
    },
    description: 'Established planning and delivery governance practices across multiple teams, including effort estimation at feature and epic levels, milestone tracking, and delivery health monitoring. Improved predictability and stakeholder confidence in execution.'
  },
  {
    title: 'Hiring and Team Scaling',
    role: 'Software Architect',
    responsibilities: 'Hiring process ownership, role definition, candidate evaluation, onboarding coordination, team scaling',
    achievement: {
      type: 'managerial',
      text: 'Hired and onboarded team leads and senior engineers to support multi-team scaling'
    },
    description: 'Participated in hiring and scaling of engineering teams, including defining role expectations, interviewing candidates, and supporting onboarding. Strengthened team capacity while maintaining technical and delivery standards.'
  },
  {
    title: 'Stakeholder Communication and Expectation Management',
    role: 'Software Architect',
    responsibilities: 'Stakeholder alignment, scope negotiation, risk communication, technical feasibility assessment',
    achievement: {
      type: 'managerial',
      text: 'Improved stakeholder confidence through transparent planning and risk communication'
    },
    description: 'Acted as the primary technical counterpart for product and business stakeholders. Translated business goals into feasible technical plans, communicated risks and constraints early, and aligned expectations to maintain sustainable delivery.'
  },
  {
    title: 'Onboarding Acceleration Through Process Ownership',
    role: 'Software Architect',
    responsibilities: 'Onboarding process ownership, complexity reduction, documentation strategy, mentoring and support',
    achievement: {
      type: 'managerial',
      text: 'Reduced onboarding time from ~6 weeks to ~3 weeks across multiple teams'
    },
    description: 'Owned onboarding outcomes at the organizational level by reducing architectural complexity, standardizing documentation, and aligning team practices. Enabled faster ramp-up of new engineers without sacrificing delivery quality.'
  }
]

// Unity-specific use cases for Slotomania
export const slotomaniaUnityUseCases: ProjectUseCase[] = [
  {
    title: 'Albums Collection System',
    media: { type: 'video', url: '/videos/portfolio_slotomania_albums.mp4' },
    description: 'Implemented the client-side business logic for the albums collection feature, including item collection rules, set completion logic, progression tracking, and reward eligibility.'
  },
  {
    title: 'Album Shiny',
    media: { type: 'video', url: '/videos/portfolio_slotomania_album_shiny.mp4' },
    description: 'Developed pure client-side business logic for the Shiny Album feature as an extension of the albums system. Implemented shiny card acquisition rules, progression tracking, completion conditions, and milestone reward logic. '
  },
  {
    title: 'Slot Minigame',
    media: { type: 'video', url: '/videos/portfolio_slotomania_slot_minigame.mp4' },
    description: 'Implemented client-side business logic for slot-based minigame mechanics, including state handling, reward calculation, and integration with the main gameplay loop.'
  },
  {
    title: 'Bonus Minigame',
    media: { type: 'video', url: '/videos/portfolio_slotomania_minigame.mp4' },
    description: 'Developed client-side business logic for interactive bonus minigames, including gameplay rules, state transitions, and reward calculation.'
  }
]

// Unity-specific use cases for Yellow Stone
export const yellowStoneUnityUseCases: ProjectUseCase[] = [
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
]

// Unity-specific use cases for Charm King
export const charmKingUnityUseCases: ProjectUseCase[] = [
  {
    title: 'Event Systems',
    description: 'Implemented new game features and event systems for live operations and seasonal content, driving player engagement during special events.'
  },
  {
    title: 'Internal Tools',
    description: 'Developed internal Unity Editor tools for content creation, improving designer and artist workflows and reducing time-to-production for new content.'
  }
]

// Unity-specific use cases for Slots Era
export const slotsEraUnityUseCases: ProjectUseCase[] = [
  {
    title: 'Technical Leadership',
    description: 'Led technical development as Engineering Tech Lead, establishing coding standards, development processes, and architectural guidelines for the team.'
  },
  {
    title: 'Team Mentoring',
    description: 'Mentored junior developers, conducted code reviews, and facilitated knowledge sharing across the team to improve overall code quality and team capabilities.'
  }
]

// Unity-specific use cases for Scatter Slots
export const scatterSlotsUnityUseCases: ProjectUseCase[] = [
  {
    title: 'Slot Features Development',
    description: 'Developed new slot game features and bonus mechanics, contributing to player engagement and retention metrics.'
  },
  {
    title: 'Client Optimization',
    description: 'Client-side optimization and performance improvements for smooth gameplay on mobile devices across various hardware configurations.'
  }
]
