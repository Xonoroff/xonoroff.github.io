import { ProjectUseCase } from '../components/ProjectPage'

// Engineering Manager-specific use cases for Dice Dreams
export const diceDreamsManagerUseCases: ProjectUseCase[] = [
  {
    title: 'Team Leads Management',
    role: 'Engineering Manager',
    responsibilities: 'Direct management of leads and PMs, hybrid Scrum/Kanban workflows, goal setting, accountability structures',
    achievement: {
      type: 'managerial',
      text: 'Managed 4 Team Leads and 2 PMs across 5 production teams (~40 people)'
    },
    description: 'Managing 5 production teams (~40 people) required a scalable leadership structure. I led 4 Team Leads and 2 PMs by implementing a hybrid delivery model (Scrum & Kanban) tailored to each team\'s workflow. This approach established clear accountability.'
  },
  {
    title: 'Leadership Development & Mentoring',
    role: 'Engineering Manager',
    responsibilities: 'Mentoring, career pathing, soft skills coaching, conflict resolution guidance',
    achievement: {
      type: 'managerial',
      text: 'Promoted internal leadership growth by transitioning senior engineers into effective team leads and architects'
    },
    description: 'With the team growing rapidly, we needed to develop strong internal leadership. I transitioned senior engineers into Team Lead and Architect roles through structured 1:1 mentorship focused on hard/soft skills and decision-making. This created a robust leadership pipeline, allowing us to fill key management positions internally.'
  },
  {
    title: 'Strategic Roadmap Planning',
    role: 'Engineering Manager',
    responsibilities: 'Gantt-based planning, WBS breakdowns, scope definition, roadmap alignment',
    description: 'Quarterly business objectives were often high-level and difficult to execute. I took charge of translating these into actionable plans using Gantt charts and WBS breakdowns to map dependencies. This resulted in clear, predictable roadmaps that aligned engineering efforts with business priorities.'
  },
  {
    title: 'Estimation & Capacity Planning',
    role: 'Engineering Manager',
    responsibilities: 'Formula-based effort estimation, RACI mapping, velocity tracking, resource forecasting',
    description: 'Ad-hoc estimation was causing unpredictable delivery timelines. I introduced formula-based effort estimation and used RACI mapping to clarify roles for complex initiatives. These changes significantly improved roadmap predictability and restored stakeholder confidence in our delivery dates.'
  },
  {
    title: 'Talent Acquisition Strategy',
    role: 'Engineering Manager',
    responsibilities: 'Interviewing, bar-raising, role definition, recruitment process optimization',
    description: 'To support rapid growth without lowering standards, I needed to overhaul our hiring process. I defined technical requirements and personally interviewed candidates to assess cultural and technical fit. This strategy allowed us to successfully hire and onboard 2 Team Leads and 5 Senior Engineers during a critical expansion phase.'
  },
  {
    title: 'Stakeholder Communication',
    role: 'Engineering Manager',
    responsibilities: 'Status reporting, transparency, technical translation for business, trust building',
    achievement: {
      type: 'managerial',
      text: 'Improved stakeholder confidence through transparent reporting and consistent communication'
    },
    description: 'Technical complexity often created a disconnect with non-technical stakeholders. I acted as the bridge, providing jargon-free status reports and clear impact analyses. This transparency built trust and ensured that business leadership fully understood and supported technical priorities.'
  },
  {
    title: 'Expectation Management & Scope Negotiation',
    role: 'Engineering Manager',
    responsibilities: 'Scope negotiation, trade-off analysis, risk management, feasibility assessment',
    description: 'Ambitious scope frequently threatened delivery timelines. I proactively managed expectations by negotiating scope trade-offs and conducting feasibility assessments early. This ensured the team maintained a sustainable pace while consistently meeting quality standards.'
  },
  {
    title: 'Onboarding Process Standardization',
    role: 'Engineering Manager',
    responsibilities: 'Design of onboarding architecture, documentation structure, entry standards, workflow optimization',
    achievement: { type: 'managerial', text: 'Reduced developer onboarding time from ~6 weeks to ~3 weeks (50% reduction)' },
    description: 'New hires previously took ~6 weeks to become productive. I designed a standardized onboarding architecture with unified documentation and clear entry tasks. This initiative reduced onboarding time by 50% (to ~3 weeks) and accelerated contributor productivity.'
  },
  {
    title: 'Architecture Standardization',
    role: 'Engineering Manager',
    responsibilities: 'Definition of architectural standards, cross-team alignment, coding conventions, governance',
    achievement: { type: 'performance', text: 'Reduced production incidents by ~55% across multiple teams' },
    description: 'Inconsistent practices were causing ~18 production incidents per year. I established and enforced unified architectural standards and coding conventions across all teams. These measures reduced production incidents by ~55% and enabled seamless developer rotation.'
  },
  {
    title: 'Architectural Decision Records (ADR)',
    role: 'Engineering Manager',
    responsibilities: 'Decision ownership, trade-off analysis, documentation, knowledge sharing',
    achievement: {
      type: 'technical',
      text: 'Established a repeatable decision-making process for cross-team architectural changes'
    },
    description: 'Valuable technical context was being lost, leading to inconsistent decisions. I introduced lightweight Architectural Decision Records (ADRs) to document constraints and rationale. This created a durable history of decisions, ensuring consistent technical direction across the organization.'
  },
  {
    title: 'Feature Flags & Rollout Architecture',
    role: 'Engineering Manager',
    responsibilities: 'Rollout strategy, risk management, feature isolation, live-ops coordination',
    achievement: {
      type: 'delivery',
      text: 'Reduced release risk through controlled rollouts and isolated feature activation'
    },
    description: 'Big-bang releases posed a significant risk to the live service. I designed a configuration-driven feature flag system to enable granular rollouts. This limited the blast radius of potential failures and allowed for safe live-ops experimentation.'
  },
  {
    title: 'Observability & Diagnostics Standardization',
    role: 'Engineering Manager',
    responsibilities: 'Observability architecture, logging standards, incident analysis workflows, diagnostics tools',
    achievement: {
      type: 'performance',
      text: 'Reduced incident investigation time through unified observability standards'
    },
    description: 'Incident investigations were slow due to fragmented data. I unified logging and metrics standards across client and backend systems. This standardization drastically reduced investigation time and improved our ability to identify root causes quickly.'
  }
]

// Engineering Manager-specific use cases for Yellow Stone
export const yellowStoneManagerUseCases: ProjectUseCase[] = [
  {
    title: 'Team Building',
    description: 'Built the engineering team from the ground up: defined role needs, hired the initial developers, and established the team structure and workflows.'
  },
  {
    title: 'Technical Leadership',
    description: 'Defined the technical approach, established development processes, and worked closely with product and technical teams to shape requirements, delivery scope, and implementation strategy.'
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

// Engineering Manager-specific use cases for Slots Era
export const slotsEraManagerUseCases: ProjectUseCase[] = [
  {
    title: 'Technical Leadership',
    description: 'Led technical development as Engineering Tech Lead, establishing coding standards, development processes, and architectural guidelines for the team.'
  },
  {
    title: 'Team Mentoring',
    description: 'Mentored junior developers, conducted code reviews, and facilitated knowledge sharing across the team to improve overall code quality and team capabilities.'
  }
]
