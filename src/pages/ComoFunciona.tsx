import { Link } from 'react-router-dom'
import './ComoFunciona.css'

const praticas = [
  {
    icone: '✍️',
    titulo: 'Diário de escrita',
    fazer:
      'Você escreve um pequeno texto em inglês sobre o seu dia ou sobre um tema livre. A ideia é criar o hábito de escrever com frequência, sem pressão.',
    ajuda:
      'Escrever com frequência obriga a procurar as palavras certas e mostra o que ainda falta aprender. A correção por inteligência artificial está planejada para uma próxima fase.',
    classe: 'cartao-amarelo',
  },
  {
    icone: '📖',
    titulo: 'Histórias por nível',
    fazer:
      'Você lê histórias curtas do seu nível (A1, A2, B1 e além), ouve o áudio e toca em palavras ou trechos para ver a tradução.',
    ajuda:
      'É a leitura extensiva: ler bastante material fácil e interessante, em vez de poucos textos difíceis, ajuda a ganhar vocabulário e intuição sobre como a língua funciona.',
    classe: 'cartao-menta',
  },
  {
    icone: '🔁',
    titulo: 'Revisão de vocabulário',
    fazer:
      'As palavras novas entram em uma rotina de revisão. Quanto mais você acerta uma palavra, mais espaçadas ficam as revisões dela.',
    ajuda:
      'É a repetição espaçada: rever uma palavra pouco antes de esquecê-la ajuda a fixá-la na memória de longo prazo com menos esforço.',
    classe: 'cartao-coral',
  },
  {
    icone: '🎙️',
    titulo: 'Conversação por voz',
    fazer:
      'Você conversa em voz alta com um tutor de inteligência artificial e treina falar em situações do dia a dia.',
    ajuda:
      'Só se aprende a falar falando. Praticar com um tutor virtual pode ajudar a perder o medo de errar. Esta parte ainda não está pronta.',
    classe: '',
    selo: 'Planejado',
  },
]

const passos = [
  {
    titulo: 'Leia uma história',
    texto: 'Escolha uma história do seu nível e leia, ouvindo o áudio se quiser.',
  },
  {
    titulo: 'Toque no que não entendeu',
    texto: 'Veja a tradução ao toque e deixe as palavras novas prontas para revisão.',
  },
  {
    titulo: 'Escreva no diário',
    texto: 'Use o que você acabou de ver para escrever algumas linhas em inglês.',
  },
  {
    titulo: 'Revise o vocabulário',
    texto: 'Faça a revisão das palavras que chegaram a hora de voltar.',
  },
  {
    titulo: 'Converse com o tutor',
    texto: 'Quando a conversação por voz estiver pronta, feche o dia falando.',
    selo: 'Planejado',
  },
]

function ComoFunciona() {
  return (
    <div className="container">
      {/* ---------- 1. Topo ---------- */}
      <header className="pagina-topo">
        <p className="eyebrow">Como funciona</p>
        <h1>Uma rotina diária, quatro práticas</h1>
        <p className="pagina-lead">
          O DailyInglish combina quatro formas de praticar inglês que se completam: ler, escrever,
          revisar palavras e falar. Abaixo, o que cada uma faz e por que ela ajuda.
        </p>
        <aside className="aviso" aria-label="Aviso sobre o estágio do projeto">
          Esta página descreve o que o aplicativo foi planejado para fazer. Ele ainda está em
          desenvolvimento, e o que ainda não está pronto aparece marcado como planejado.
        </aside>
      </header>

      {/* ---------- 2. As 4 práticas ---------- */}
      <section className="secao">
        <h2>As quatro práticas</h2>

        <div className="grade-detalhes">
          {praticas.map((pratica) => (
            <article key={pratica.titulo} className={`cartao ${pratica.classe}`}>
              <span className="pratica-icone" aria-hidden="true">
                {pratica.icone}
              </span>
              <h3 className="detalhe-titulo">
                {pratica.titulo}
                {pratica.selo && <span className="selo">{pratica.selo}</span>}
              </h3>
              <p>
                <strong className="detalhe-rotulo">O que você faz</strong>
                {pratica.fazer}
              </p>
              <p>
                <strong className="detalhe-rotulo">Por que ajuda</strong>
                {pratica.ajuda}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- 3. Um dia de estudo ---------- */}
      <section className="secao">
        <p className="eyebrow">O ciclo diário</p>
        <h2>Como pode ser um dia de estudo</h2>

        <ol className="ciclo">
          {passos.map((passo, indice) => (
            <li key={passo.titulo}>
              <span className="passo-numero" aria-hidden="true">
                {indice + 1}
              </span>
              <div>
                <strong className="passo-titulo">
                  {passo.titulo}
                  {passo.selo && <span className="selo">{passo.selo}</span>}
                </strong>
                <p>{passo.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- 4. Chamada final ---------- */}
      <section className="chamada-final cartao cartao-amarelo">
        <h2>Quer saber por que o projeto existe?</h2>
        <p>
          Veja a ideia por trás do DailyInglish ou deixe seu contato para acompanhar as novidades.
        </p>
        <div className="chamada-botoes">
          <Link className="botao botao-secundario" to="/sobre">
            Sobre o projeto
          </Link>
          <Link className="botao botao-primario" to="/contato">
            Entrar na lista de espera
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ComoFunciona