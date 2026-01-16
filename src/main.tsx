import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './app/router'
import { useAuthStore } from './store/auth'
import './styles/theme.css'
import './i18n'

const App = () => {
  const init = useAuthStore((state) => state.init)
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    console.log('App: Inicializando...')
    const initialize = async () => {
      try {
        console.log('App: Chamando init()...')
        await init()
        console.log('App: Init concluído')
        setIsReady(true)
      } catch (error) {
        console.error('Erro ao inicializar:', error)
        setIsReady(true) // Continua mesmo com erro
      }
    }
    initialize()
  }, [init])

  if (!isReady) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(255, 255, 255)' }}>
        <div style={{ color: 'rgb(17, 24, 39)' }}>Carregando...</div>
      </div>
    )
  }

  console.log('App: Renderizando AppRouter')
  return <AppRouter />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
