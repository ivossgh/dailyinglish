import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollParaTopo() {
  const { pathname, hash } = useLocation()
  const paginaAnterior = useRef(pathname)

  useEffect(() => {
    const mudouDePagina = paginaAnterior.current !== pathname
    paginaAnterior.current = pathname

    if (hash) {
      const alvo = document.getElementById(hash.slice(1))
      if (alvo) {
        alvo.scrollIntoView()
        return
      }
    }

    window.scrollTo(0, 0)

    if (mudouDePagina) {
      const titulo = document.querySelector<HTMLElement>('#conteudo h1')
      if (titulo) {
        titulo.setAttribute('tabindex', '-1')
        titulo.focus({ preventScroll: true })
      }
    }
  }, [pathname, hash])

  return null
}

export default ScrollParaTopo