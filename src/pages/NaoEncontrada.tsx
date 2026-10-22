import { Link } from 'react-router-dom'

function NaoEncontrada() {
  return (
    <section className="container">
      <p className="eyebrow">Erro 404</p>
      <h1>Página não encontrada</h1>
      <p className="texto-suave">O endereço que você tentou abrir não existe.</p>
      <Link className="botao botao-primario" to="/">
        Voltar para o início
      </Link>
    </section>
  )
}

export default NaoEncontrada