import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuthStore } from '../store/auth'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { signIn, user } = useAuthStore()
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    if (user) {
      navigate('/home')
    }
  }, [user, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    try {
      const { error } = await signIn(email, password)
      
      if (error) {
        setError(t('login.error'))
      } else {
        navigate('/home')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 safe-area">
      <div className="w-full max-w-md">
        <Card className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-2 text-center">
            {t('login.title')}
          </h1>
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm md:text-base font-medium text-text mb-2">
                {t('login.email')}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`input ${error ? 'input-error' : ''}`}
                required
                autoComplete="email"
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm md:text-base font-medium text-text mb-2">
                {t('login.password')}
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`input ${error ? 'input-error' : ''}`}
                required
                autoComplete="current-password"
                disabled={isLoading}
              />
            </div>
            
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
            
            <Button 
              type="submit" 
              variant="primary" 
              size="lg"
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? t('common.loading') : t('login.signIn')}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default LoginPage
