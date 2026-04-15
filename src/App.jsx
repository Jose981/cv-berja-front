import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import EquiposPage from "./pages/EquiposPage";
import PartidosPage from "./pages/PartidosPage";
import ResultadosPage from "./pages/ResultadosPage";
import CalendarioPage from "./pages/CalendarioPage";
import EnDirectoPage from "./pages/EnDirectoPage";
import Login from "./pages/Login";
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<History />} />
        <Route path="/equipos" element={<EquiposPage />} />
        <Route path="/partidos" element={<PartidosPage />} />
        <Route path="/resultados" element={<ResultadosPage />} />
        <Route path="/en-directo" element={<EnDirectoPage />} />
        <Route path="/calendario" element={<CalendarioPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
