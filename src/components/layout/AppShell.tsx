import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface AppShellProps {
  children: ReactNode
  title?: string
  showSettings?: boolean
  showBack?: boolean
  backTo?: string
}

export const AppShell = ({ 
  children, 
  title, 
  showSettings = true,
  showBack = false,
  backTo = '/home'
}: AppShellProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header fixo - Minimalista */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30 safe-area-top">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 w-full safe-area-left safe-area-right">
          <div className="flex items-center justify-between h-14 md:h-16">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {showBack && (
                <button
                  onClick={() => navigate(backTo)}
                  className="p-2 -ml-2 rounded-lg hover:bg-surface/50 transition-colors flex-shrink-0"
                  aria-label={t('common.back')}
                >
                  <svg
                    className="w-5 h-5 text-text/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )}
              {title && (
                <h1 className="text-lg md:text-xl font-semibold text-text/90 truncate tracking-tight">
                  {title}
                </h1>
              )}
            </div>
            
            {showSettings && (
              <button
                onClick={() => navigate('/settings')}
                className="p-2 -mr-2 rounded-lg hover:bg-surface/50 transition-colors flex-shrink-0"
                aria-label={t('settings.title')}
              >
                <svg
                  className="w-5 h-5 text-text/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Container principal */}
      <main className="flex-1 max-w-[720px] mx-auto px-4 sm:px-6 w-full py-6 md:py-8 safe-area-bottom safe-area-left safe-area-right">
        {children}
      </main>
    </div>
  )
}
