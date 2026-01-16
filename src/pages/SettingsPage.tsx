import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth'
import { AppShell } from '../components/layout/AppShell'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const SettingsPage = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const { signOut } = useAuthStore()

  const languages = [
    { code: 'pt-BR', name: 'Português (BR)' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ]

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
    localStorage.setItem('language', langCode)
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <AppShell 
      title={t('settings.title')} 
      showSettings={false}
      showBack={true}
    >
      <Card className="p-6 md:p-8 space-y-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-text mb-4">
            {t('settings.language')}
          </h2>
          <div className="space-y-3">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                variant={i18n.language === lang.code ? 'primary' : 'secondary'}
                size="lg"
                fullWidth
                className="justify-start"
              >
                {lang.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <Button
            onClick={handleSignOut}
            variant="primary"
            size="lg"
            fullWidth
            className="bg-danger hover:bg-danger/90 focus:ring-danger"
          >
            {t('settings.signOut')}
          </Button>
        </div>
      </Card>
    </AppShell>
  )
}

export default SettingsPage
