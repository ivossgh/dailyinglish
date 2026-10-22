import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="rodape">
      <div className="rodape-interno container">
        <p className="rodape-marca">DailyInglish</p>

        <p className="rodape-aviso">
          O DailyInglish é um projeto em desenvolvimento. O aplicativo ainda não foi lançado.
        </p>

        <ul className="rodape-links">
          <li><Link to="/como-funciona">Como funciona</Link></li>
          <li><Link to="/sobre">Sobre o projeto</Link></li>
          <li><Link to="/contato">Lista de espera</Link></li>
          <li><Link to="/contato#privacidade">Privacidade</Link></li>
        </ul>

        <p className="rodape-legal">
          © {ano} DailyInglish. Contato: gestorivosilva@gmail.com
        </p>
      </div>
    </footer>
  )
}

export default Footer