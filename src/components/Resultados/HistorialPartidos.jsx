const jugados = [
  { fecha: "8 May", local: "Mintonette", visitante: "CV Berja", sLocal: 1, sVis: 3 },
  { fecha: "1 May", local: "CV Berja", visitante: "Polideportivo", sLocal: 3, sVis: 0 },
  { fecha: "24 Abr", local: "CV Berja", visitante: "Unicaja", sLocal: 2, sVis: 3 },
  { fecha: "17 Abr", local: "Roquetas", visitante: "CV Berja", sLocal: 1, sVis: 3 },
];

export default function HistorialPartidos() {
  return (
    <section className="resultados-card resultados-card--historial">
      <div className="resultados-card__header">
        <p className="resultados-card__eyebrow">Partidos recientes</p>
        <h2>Últimos encuentros</h2>
      </div>

      <div className="lista-historial">
        {jugados.map((p) => {
          const berjaSets = p.local === "CV Berja" ? p.sLocal : p.sVis;
          const rivalSets = p.local === "CV Berja" ? p.sVis : p.sLocal;
          const isBerjaWin = berjaSets > rivalSets;

          return (
            <article key={`${p.fecha}-${p.local}-${p.visitante}`} className="historial-item">
              <div className="historial-item__meta">
                <span className="historial-fecha">{p.fecha}</span>
                <span className={`historial-estado ${isBerjaWin ? "is-win" : "is-loss"}`}>
                  {isBerjaWin ? "Victoria" : "Derrota"}
                </span>
              </div>

              <div className="historial-scorecard">
                <span className="historial-equipo">{p.local}</span>
                <span className="historial-score">{p.sLocal} - {p.sVis}</span>
                <span className="historial-equipo historial-equipo--away">{p.visitante}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
