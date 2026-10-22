import { Link } from 'react-router-dom'
import Lory from '../components/Lory.tsx'
import './Inicio.css'

const praticas = [
  {
    icone: '✍️',
    titulo: 'Diário de escrita',
    texto:
      'Escreva um pouco todo dia sobre a sua vida, em inglês. A correção por inteligência artificial está planejada para uma próxima fase.',
    classe: 'cartao-amarelo',
  },
  {
    icone: '📖',
    titulo: 'Histórias por nível',
    texto:
      'Histórias curtas nos níveis A1, A2, B1 e além, com áudio e tradução ao toque. Ler bastante, e com prazer, é um dos melhores jeitos de aprender.',
    classe: 'cartao-menta',
  },
  {
    icone: '🔁',
    titulo: 'Revisão de vocabulário',
    texto:
      'As palavras que você encontra voltam para revisão em intervalos que aumentam com o tempo, a chamada repetição espaçada.',
    classe: 'cartao-coral',
  },
  {
    icone: '🎙️',
    titulo: 'Conversação por voz',
    texto:
      'Praticar falar com um tutor de inteligência artificial. Esta é a parte mais distante do roteiro e ainda não está pronta.',
    classe: '',
    selo: 'Planejado',
  },
]

function Inicio() {
  return (
    <div className="container">
      {/* ---------- 1. Hero ---------- */}
      <section className="hero">
        <div className="hero-texto">
          <p className="eyebrow">-</p>
          <h1>Inglês todos os dias, do seu jeito</h1>
          <p className="hero-lead">
            O DailyInglish junta escrita, leitura, vocabulário e conversação em uma rotina
            diária, com a companhia do Lory, nosso papagaio mascote.
          </p>

          <div className="hero-botoes">
            <Link className="botao botao-primario" to="/contato">
              Entrar na lista de espera
            </Link>
            <Link className="botao botao-secundario" to="/como-funciona">
              Ver como funciona
            </Link>
          </div>
        </div>

        <div className="hero-lory">
          <Lory size="lg" mood="cheer" />
        </div>
      </section>

      {/* ---------- 2. Aviso de honestidade ---------- */}
      <aside className="aviso" aria-label="Aviso sobre o estágio do projeto">
        <strong>O aplicativo ainda está em desenvolvimento e não foi lançado.</strong> A lista de
        espera serve para acompanhar as novidades e para o projeto ouvir quem tem interesse.{' '}
        Ao Se inscrever na lista de espera, você rebeberá novidades das etapas, e participarar de primeiros
        testes de uso.
      </aside>

      {/* ---------- 3. As 4 práticas ---------- */}
      <section className="secao">
        <p className="eyebrow">O que o app propõe</p>
        <h2>Quatro práticas, uma rotina</h2>

        <div className="grade-praticas">
          {praticas.map((pratica) => (
            <article key={pratica.titulo} className={`cartao pratica ${pratica.classe}`}>
              <span className="pratica-icone" aria-hidden="true">
                {pratica.icone}
              </span>
              <h3>
                {pratica.titulo}
                {pratica.selo && <span className="selo">{pratica.selo}</span>}
              </h3>
              <p>{pratica.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- 4. Chamada final ---------- */}
      <section className="chamada-final cartao cartao-amarelo">
        <h2>Quer acompanhar o DailyInglish?</h2>
        <p>
          Deixe seu contato na lista de espera e acompanhe o projeto desde o início.
        </p>
        <Link className="botao botao-primario" to="/contato">
          Entrar na lista de espera
        </Link>
      </section>
    </div>
  )
}

export default Inicio