import { useTranslation } from 'react-i18next'
import { Layers, Users, Flame } from 'lucide-react'
import { AppShell } from '../components/layout/AppShell'
import { Card } from '../components/ui/Card'

const HomePage = () => {
  const { t } = useTranslation()

  const cards = [
    { 
      id: 'games', 
      title: t('home.games'), 
      subtitle: t('home.gamesSubtitle'),
      icon: Layers 
    },
    { 
      id: 'participants', 
      title: t('home.participants'), 
      subtitle: t('home.participantsSubtitle'),
      icon: Users 
    },
    { 
      id: 'challenges', 
      title: t('home.challenges'), 
      subtitle: t('home.challengesSubtitle'),
      icon: Flame 
    },
  ]

  const handleCardClick = (id: string) => {
    // Placeholder para navegação futura
    console.log(`Navigate to ${id}`)
  }

  return (
    <AppShell title={t('home.title')}>
      {/* Mobile: lista vertical com spacing elegante */}
      {/* Tablet/landscape: grid 2 colunas consistente */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {cards.map((card) => {
          const IconComponent = card.icon
          return (
            <Card
              key={card.id}
              interactive
              onClick={() => handleCardClick(card.id)}
              className="p-6 md:p-7 text-left group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-[22px] md:text-[24px] font-semibold text-text mb-1.5 tracking-tight">
                    {card.title}
                  </h2>
                  <p className="text-[13px] md:text-[14px] text-muted leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="p-2.5 rounded-lg bg-surface/50 group-hover:bg-accent/10 transition-colors">
                    <IconComponent 
                      className="w-5 h-5 text-text/60 group-hover:text-accent transition-colors" 
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </AppShell>
  )
}

export default HomePage
