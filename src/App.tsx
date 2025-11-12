import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes/config'
import Loading from './components/Loading'

const App = () => {
  const element = useRoutes(routes)
  return <Suspense fallback={<Loading />}>{element}</Suspense>
}

export default App
