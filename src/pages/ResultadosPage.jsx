import Cabecera from "../components/Cabecera";
import Footer from "../components/Footer";
import Clasificacion from "../components/Resultados/Clasificacion";
import HistorialPartidos from "../components/Resultados/HistorialPartidos";

export default function ResultadosPage() {
  return (
    <>
      <Cabecera />
      <div className="pagina-estandar pagina-resultados">
        <div className="pagina-header">
          <span className="pagina-header__eyebrow">Temporada 2025-26</span>
          <h1>Resultados y Clasificación</h1>
          <p>Sigue de cerca nuestra trayectoria en la presente temporada.</p>
        </div>
        <div className="resultados-layout">
          <Clasificacion />
          <HistorialPartidos />
        </div>
      </div>
      <Footer />
    </>
  );
}
