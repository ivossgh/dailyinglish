import { Link, NavLink } from 'react-router-dom'
import Lory from './Lory.tsx'
import './Header.css'

const links = [
  { texto: 'Início', caminho: '/' },
  { texto: 'Como funciona', caminho: '/como-funciona' },
  { texto: 'Sobre o projeto', caminho: '/sobre' },
]

function Header() {
  return (
    <header className="cabecalho">
      <a className="pular-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <div className="cabecalho-interno container">
        <Link className="marca" to="/" aria-label="DailyEnglish, página inicial">
          <Lory size="sm" />
          <span className="marca-nome">
            <span className="marca-daily">Daily</span>
            <span className="marca-inglish">English</span>
          </span>
        </Link>

        <nav className="menu" aria-label="Navegação principal">
          <ul>
            {links.map((link) => (
              <li key={link.caminho}>
                <NavLink to={link.caminho} end={link.caminho === '/'}>
                  {link.texto}
                </NavLink>
              </li>
            ))}
            <li>
              <Link className="botao botao-primario menu-botao" to="/contato">
                Lista de espera
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header