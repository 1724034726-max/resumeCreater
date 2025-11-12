import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.less'
import App from './App.tsx'
import Login from './views/Login'
import { APP_ROUTES } from './constants/routes.ts'
import { ConfigProvider } from 'antd';
import { THEME_CONFIG } from './constants/theme.ts'

import Loading from './components/Loading'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={THEME_CONFIG}>
      <HashRouter>
        <Routes>
          <Route path={APP_ROUTES.LOGIN} element={<Suspense fallback={<Loading />}> <Login /> </Suspense>} />
          <Route path="*" element={<Suspense fallback={<Loading />}> <App /> </Suspense>} />
        </Routes>
      </HashRouter>
    </ConfigProvider>
  </StrictMode>
)