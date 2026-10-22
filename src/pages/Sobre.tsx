import { Link } from 'react-router-dom'
import Lory from '../components/Lory.tsx'
import './Sobre.css'

const principios = [
  {
    titulo: 'Leitura extensiva',
    ideia:
      'Ler bastante material que dá para entender, de preferência sobre assuntos que interessam, ajuda a ver palavras e estruturas da língua em contexto, muitas vezes.',
    noApp: 'Histórias curtas por nível, com áudio e tradução ao toque.',
    classe: 'cartao-menta',
  },
  {
    titulo: 'Repetição espaçada',
    ideia:
      'Revisar um conteúdo em intervalos cada vez maiores ajuda a combater o esquecimento e a fixar o que foi aprendido.',
    noApp: 'Revisão de vocabulário.',
    classe: 'cartao-coral',
  },
  {
    titulo: 'Escrita frequente',
    ideia:
      'Escrever com regularidade obriga a produzir a língua, e não só reconhecê-la, e deixa claro o que ainda falta aprender.',
    noApp: 'Diário de escrita, com correção por inteligência artificial planejada.',
    classe: 'cartao-amarelo',
  },
  {
    titulo: 'Prática de fala',
    ideia:
      'Falar em voz alta, de preferência em conversas, treina a fluência e a coragem de se expressar.',
    noApp: 'Conversação por voz com um tutor de inteligência artificial (planejada).',
    classe: '',
  },
]

const fases = [
  {
    rotulo: 'Agora',
    titulo: 'Em desenvolvimento',
    texto:
      'O aplicativo está sendo construído e ainda não tem versão pública. Este site apresenta a proposta e serve para medir o interesse de quem gostaria de usar.',
  },
  {
    rotulo: 'Em seguida',
    titulo: 'Próximo marco',
    texto: 'o próximo passo do projeto, por exemplo uma primeira versão para testes',
  },
  {
    rotulo: 'Mais adiante',
    titulo: 'Recursos planejados',
    texto:
      'Correção por inteligência artificial no diário e conversação por voz com um tutor virtual.',
  },
]

function Sobre() {
  return (
    <div className="container">
      {/* ---------- 1. Topo ---------- */}
      <header className="pagina-topo">
        <p className="eyebrow">Sobre o projeto</p>
        <h1>Por que o DailyInglish existe</h1>
        <p className="pagina-lead">
          Uma ideia simples: aprender inglês funciona melhor com constância, e constância fica mais
          fácil quando a prática diária é variada, leve e acompanhada.
        </p>
      </header>

      {/* ---------- 2. A ideia ---------- */}
      <section className="sobre-ideia">
        <div>
          <h2>A ideia</h2>
          <p>
            Muita gente começa a estudar inglês e para no meio do caminho. Praticar só uma habilidade
            costuma deixar lacunas: quem só lê tem dificuldade para falar, e quem só decora listas
            de palavras tem dificuldade para usá-las.
          </p>
          <p>
            O DailyInglish nasceu da proposta de reunir, em um só lugar e em uma rotina diária,
            leitura, escrita, vocabulário e conversação. Quem acompanha o estudo é o Lory, um
            papagaio original, o mascote do projeto.
          </p>
         
        </div>

        <div className="sobre-lory">
          <Lory size="lg" />
        </div>
      </section>

      {/* ---------- 3. Princípios ---------- */}
      <section className="secao">
        <p className="eyebrow">Em que o projeto se apoia</p>
        <h2>Quatro princípios de aprendizado de línguas</h2>
        <p className="sobre-intro">
          O DailyInglish se inspira em ideias bastante conhecidas no estudo de segundas línguas.
          Cada uma delas virou uma prática do app.
        </p>

        <div className="grade-principios">
          {principios.map((principio) => (
            <article key={principio.titulo} className={`cartao ${principio.classe}`}>
              <h3>{principio.titulo}</h3>
              <p>{principio.ideia}</p>
              <p className="principio-app">
                <strong>No app:</strong> {principio.noApp}
              </p>
            </article>
          ))}
        </div>

        <aside className="aviso" aria-label="Aviso sobre resultados">
          Esses princípios inspiram o projeto, mas o DailyInglish ainda não foi testado com
          usuários e não promete resultados específicos.{' '}
          
        </aside>
      </section>

      {/* ---------- 4. Quem está por trás ---------- */}
      <section className="secao">
        <p className="eyebrow">Quem está por trás</p>
        <h2>Quem faz o DailyInglish</h2>
        <div className="cartao autor">
          <p>
            O DailyInglish é criado por{' '}
            <mark className="preencher">Ivo SIlva</mark>, estudante de Análise e
            Desenvolvimento de Sistemas e desenvolvedor backend em formação.
          </p>
          <p>
            
          </p>
        </div>
      </section>

      {/* ---------- 5. Fases ---------- */}
      <section className="secao">
        <p className="eyebrow">Em que fase estamos</p>
        <h2>Onde o projeto está hoje</h2>

        <div className="grade-fases">
          {fases.map((fase) => (
            <article key={fase.rotulo} className="cartao fase">
              <span className="fase-rotulo">{fase.rotulo}</span>
              <h3>{fase.titulo}</h3>
              <p>{fase.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- 6. Chamada final ---------- */}
      <section className="chamada-final cartao cartao-amarelo">
        <h2>Quer acompanhar de perto?</h2>
        <p>
          Entre na lista de espera para saber das novidades e ajudar o projeto a entender quem tem
          interesse.
        </p>
        <div className="chamada-botoes">
          <Link className="botao botao-secundario" to="/como-funciona">
            Ver como funciona
          </Link>
          <Link className="botao botao-primario" to="/contato">
            Entrar na lista de espera
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Sobre