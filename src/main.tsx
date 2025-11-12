
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.less'
import App from './App.tsx'
import Login from './views/Login/index.tsx'
import { AppRoutes } from './contants/routes.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path={AppRoutes.LOGIN} element={<Login />} />
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)