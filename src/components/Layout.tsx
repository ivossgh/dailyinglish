import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import ScrollParaTopo from './ScrollParaTopo.tsx'
import Metadados from './Metadados.tsx'
import './Layout.css'

function Layout() {
  return (
    <>
      <ScrollParaTopo />
      <Metadados />
      <Header />
      <main id="conteudo" className="conteudo-principal">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout