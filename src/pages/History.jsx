import Cabecera from "../components/Cabecera";
import Footer from "../components/Footer";
import HistoriaHero from "../components/Historia/HistoriaHero";
import Cronologia from "../components/Historia/Cronologia";
import HistoriaChula from "../components/Historia/HistoriaChula";
import Palmares from "../components/Historia/Palmares";
import Logros from "../components/Historia/Logros";

function History() {
  return (
    <>
      <Cabecera />
      <div className="historia-pagina">
        <HistoriaHero />
        <div className="historia-stack">
          <Cronologia />
          <HistoriaChula />
          <Palmares />
          <Logros />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default History;
