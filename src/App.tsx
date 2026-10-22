import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import Inicio from './pages/Inicio.tsx'
import ComoFunciona from './pages/ComoFunciona.tsx'
import Sobre from './pages/Sobre.tsx'
import Contato from './pages/Contato.tsx'
import NaoEncontrada from './pages/NaoEncontrada.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App