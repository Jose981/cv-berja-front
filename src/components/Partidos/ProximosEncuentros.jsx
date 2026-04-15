const encuentros = [
    { fecha: "15 May - 19:00", local: "CV Berja", visitante: "CV Roquetas", categoria: "Senior Femenino", lugar: "Pabellón Berja" },
    { fecha: "16 May - 10:00", local: "Mintonette Almería", visitante: "CV Berja", categoria: "Juvenil", lugar: "Pabellón Almería" },
    { fecha: "22 May - 18:30", local: "CV Berja", visitante: "Unicaja Costa", categoria: "Senior Masculino", lugar: "Pabellón Berja" }
  ];
  
  export default function ProximosEncuentros() {
    return (
      <section className="module">
        <div className="module__header" style={{ marginBottom: "20px" }}>
          <h2>Toda la jornada</h2>
        </div>
        <div className="lista-encuentros">
          {encuentros.map((enc, i) => (
            <div key={i} className="encuentro-item">
              <div className="encuentro-fecha">{enc.fecha}</div>
              <div className="encuentro-equipos">
                <strong>{enc.local}</strong> <span className="vs">vs</span> <strong>{enc.visitante}</strong>
              </div>
              <div className="encuentro-detalles">
                <span className="encuentro-cat">{enc.categoria}</span> - <span>📍 {enc.lugar}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
