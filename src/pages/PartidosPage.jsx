import Cabecera from "../components/Cabecera";
import Footer from "../components/Footer";
import Cartelera from "../components/Partidos/Cartelera";
import ProximosEncuentros from "../components/Partidos/ProximosEncuentros";

export default function PartidosPage() {
  return (
    <>
      <Cabecera />
      <div className="pagina-estandar">
        <Cartelera />
        <ProximosEncuentros />
      </div>
      <Footer />
    </>
  );
}
