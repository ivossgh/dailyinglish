import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type DadosDaPagina = {
  titulo: string
  descricao: string
}

const paginas: Record<string, DadosDaPagina> = {
  '/': {
    titulo: 'DailyEnglish | Pratique inglês todos os dias',
    descricao:
      'Projeto de app para praticar inglês todos os dias: diário de escrita, histórias por nível, vocabulário e conversação. Em desenvolvimento. Entre na lista de espera.',
  },
  '/como-funciona': {
    titulo: 'Como funciona | DailyEnglish',
    descricao:
      'Conheça as quatro práticas do DailyEnglish (diário, histórias, vocabulário e conversação por voz) e como pode ser um dia de estudo.',
  },
  '/sobre': {
    titulo: 'Sobre o projeto | DailyEnglish',
    descricao:
      'Por que o DailyEnglish existe, os princípios de aprendizado de línguas em que se apoia, quem faz o projeto e em que fase ele está.',
  },
  '/contato': {
    titulo: 'Lista de espera e privacidade | DailyEnglish',
    descricao:
      'Entre na lista de espera do DailyEnglish para acompanhar as novidades do projeto e leia o aviso de privacidade.',
  },
}

const paginaNaoEncontrada: DadosDaPagina = {
  titulo: 'Página não encontrada | DailyEnglish',
  descricao: 'A página que você procura não existe.',
}

function Metadados() {
  const { pathname } = useLocation()
  const pagina = paginas[pathname] ?? paginaNaoEncontrada

  useEffect(() => {
    document.title = pagina.titulo
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', pagina.descricao)
  }, [pagina])

  return null
}

export default Metadados