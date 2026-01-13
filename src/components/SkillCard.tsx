import './SkillCard.css'

export interface SkillCardData {
  title: string
  skills: string[]
}

interface SkillCardProps {
  card: SkillCardData
}

export function SkillCard({ card }: SkillCardProps) {
  return (
    <div className="skill-card">
      <h3>{card.title}</h3>
      <div className="skill-tags">
        {card.skills.map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  )
}

interface SkillCardsProps {
  cards: SkillCardData[]
}

export function SkillCards({ cards }: SkillCardsProps) {
  return (
    <div className="skills-cards">
      {cards.map((card) => (
        <SkillCard key={card.title} card={card} />
      ))}
    </div>
  )
}
