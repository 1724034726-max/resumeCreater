import { Outlet } from 'react-router-dom'

const Layout = () => (
  <div>
    <header>
      <h1>Resume Creator</h1>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
)

export default Layout