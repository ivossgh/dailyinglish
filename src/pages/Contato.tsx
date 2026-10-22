
import './Contato.css'

// Endereço de incorporação do Google Forms
const URL_FORMULARIO =
  'https://docs.google.com/forms/d/e/1FAIpQLSfXXCgdN7c7_RV1OZNlPPyrENYEg_puqAUoWaTo0vUgJjwyBw/viewform?embedded=true'

function Contato() {
  return (
    <div className="container">
      {/* ---------- 1. Topo ---------- */}
      <header className="pagina-topo">
        <p className="eyebrow">Lista de espera</p>

        <h1>Entre na lista de espera</h1>

        <p className="pagina-lead">
          Deixe seu e-mail para acompanhar o DailyInglish. O aplicativo ainda está em
          desenvolvimento, então não há nada para baixar por enquanto.
        </p>

        <aside
          className="aviso"
          aria-label="O que acontece depois da inscrição"
        >
          <strong>O que acontece depois:</strong>{' '}
          Você poderá receber avisos sobre novidades importantes e sobre o
          lançamento do DailyInglish. Você pode pedir para sair da lista a
          qualquer momento pelo contato indicado na seção de privacidade abaixo.
        </aside>
      </header>

      {/* ---------- 2. Formulário ---------- */}
      <section
        className="secao-formulario"
        aria-labelledby="titulo-formulario"
      >
        <h2 id="titulo-formulario">Formulário</h2>

        <div className="cartao formulario-caixa">
          <iframe
            className="formulario-iframe"
            src={URL_FORMULARIO}
            title="Formulário da lista de espera do DailyInglish"
            width="100%"
            height="1201"
            frameBorder="0"
      
            loading="lazy"
          >
            Carregando…
          </iframe>

          <p className="formulario-alternativa">
            O formulário não apareceu?{' '}
            <a
              href={URL_FORMULARIO.replace('?embedded=true', '')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abra em uma nova aba
            </a>
            .
          </p>
        </div>
      </section>

      {/* ---------- 3. Privacidade ---------- */}
      <section id="privacidade" className="privacidade">
        <p className="eyebrow">Privacidade</p>

        <h2>Aviso de privacidade</h2>

        <p className="privacidade-intro">
          Aqui explicamos, de forma simples, o que fazemos com os dados
          enviados neste formulário, conforme a Lei Geral de Proteção de
          Dados (LGPD, Lei nº 13.709/2018).
        </p>

        <div className="privacidade-texto">
          <h3>Quem é o responsável</h3>
          <p>
            O responsável pelos dados é Ivo Silva, criador do
            projeto DailyInglish. Contato para assuntos de privacidade:
            gestorivosilva@gmail.com.
          </p>

          <h3>Quais dados coletamos</h3>
          <p>
            O e-mail (obrigatório), o nome (opcional) e, se o formulário
            tiver essa pergunta, o seu nível de inglês (opcional). Não
            pedimos nenhum outro dado.
          </p>

          <h3>Para que usamos</h3>
          <p>
            Apenas para avisar você sobre novidades do DailyInglish e
            entender quantas pessoas têm interesse no projeto. Não usamos
            seus dados para outra finalidade.
          </p>

          <h3>Por que podemos usar (base legal)</h3>
          <p>
            O seu consentimento. Por isso, a caixa de concordância do
            formulário deve vir desmarcada e só registrar sua concordância
            se você a marcar.
          </p>

          <h3>Quem recebe os dados</h3>
          <p>
            As respostas ficam guardadas no Google Forms e no Google
            Planilhas, que armazenam os dados em nome do projeto e podem
            utilizar servidores fora do Brasil. Não vendemos nem
            compartilhamos seus dados com outras empresas para fins
            próprios de publicidade.
          </p>

          <h3>Por quanto tempo guardamos</h3>
          <p>
            Os dados serão mantidos enquanto você permanecer na lista de
            espera ou até solicitar a remoção, observadas as obrigações
            legais aplicáveis.
          </p>

          <h3>Seus direitos</h3>
          <p>
            Você pode pedir a confirmação do tratamento dos seus dados,
            acesso, correção, eliminação quando aplicável, informações
            sobre compartilhamento e retirada do consentimento. Basta
            escrever para o contato indicado acima.
          </p>

          <h3>Cookies e serviços de terceiros</h3>
          <p>
            Este site não usa ferramentas próprias de rastreamento, e as fontes das letras são
            carregadas do próprio site. O formulário incorporado é do Google e pode usar cookies,
            conforme a política do Google. A hospedagem do site (Vercel) pode registrar dados
            técnicos de acesso, como o endereço IP, por motivos de segurança e funcionamento.
          </p>

          <h3>Idade</h3>
          <p>
            Antes de publicar, informe aqui o público autorizado a se
            inscrever. Caso menores de idade possam participar, ajuste o
            formulário e os procedimentos de tratamento de dados para
            atender às exigências legais aplicáveis.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contato
