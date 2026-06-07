import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import UnoDeSeis from './components/UnoDeSeis'
import DosDeSeis from './components/DosDeSeis'
import TresDeSeis from './components/TresDeSeis'
import CuatroDeSeis from './components/CuatroDeSeis'
import CincoDeSeis from './components/CincoDeSeis'
import Footer from './components/Footer'

import RutaProtegida from './components/RutaProtegida'
import LogsAcceso from './pages/LogsAcceso'

// Páginas de carreras
import CatalogoDisenos from './pages/CatalogoDisenos'
import FormularioDiseno from './pages/FormularioDiseno'
import Login from './pages/Login'
import Registro from './pages/Registro'

// Páginas de gestión académica
import HorariosYMaterias from './pages/HorariosYMaterias'

// Páginas de contacto
import MapaInteractivo from './pages/MapaInteractivo'
import DirectorioTelefonico from './pages/DirectorioTelefonico'

function App() {
  return (
    <Router>
      <Routes>
        {/* PÁGINA DE INICIO */}
        <Route path="/" element={
          <>
            <div id='navegador'>
              <Header />
              <UnoDeSeis />
              <DosDeSeis />
              <TresDeSeis />
              <CuatroDeSeis />
              <CincoDeSeis />
              <Footer />
            </div>
          </>
        } />

        {/* PÁGINAS DE CARRERAS */}
        <Route path="/CatalogoDisenos" element={
            <RutaProtegida>
                <CatalogoDisenos />
            </RutaProtegida>
        } />
        <Route path="/FormularioDiseno" element={
            <RutaProtegida>
                <FormularioDiseno />
            </RutaProtegida>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/logs" element={
            <RutaProtegida>
                <LogsAcceso />
            </RutaProtegida>
        } />

        {/* PÁGINAS DE GESTIÓN ACADÉMICA */}
        <Route path="/horarios-y-materias" element={<HorariosYMaterias />} />

        {/* PÁGINAS DE CONTACTO */}
        <Route path="/mapa-interactivo" element={<MapaInteractivo />} />
        <Route path="/directorio-telefonico" element={<DirectorioTelefonico />} />

      </Routes>
    </Router>
  )
}

export default App