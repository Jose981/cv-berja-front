const resultadosMock = [
  { id: 1, local: "CV Berja", visitante: "Almería Voley", resultado: "3 - 1" },
  { id: 2, local: "CV Berja", visitante: "Granada Volley", resultado: "2 - 3" },
  { id: 3, local: "CV Berja", visitante: "Málaga Costa", resultado: "3 - 0" },
  { id: 4, local: "CV Berja", visitante: "Sevilla Voley", resultado: "3 - 2" },
  { id: 5, local: "CV Berja", visitante: "Jaén Club", resultado: "1 - 3" },
  { id: 6, local: "CV Berja", visitante: "Córdoba Volley", resultado: "3 - 1" },
];

function getOutcome(resultado) {
  const [local, away] = resultado.split(" - ").map(Number);
  if (local > away) return "win";
  if (local < away) return "loss";
  return "draw";
}

const outcomeLabel = { win: "Victoria", loss: "Derrota", draw: "Empate" };

function ResultadosCarousel() {
  return (
    <section className="scoreboard-section">
      <div className="home-module__header scoreboard-header">
        <span className="home-eyebrow">Competición</span>
        <h2>Últimos resultados</h2>
      </div>
      <div className="scoreboard-grid">
        {resultadosMock.map((partido) => {
          const outcome = getOutcome(partido.resultado);
          return (
            <div key={partido.id} className={`scoreboard-card scoreboard-card--${outcome}`}>
              <span className={`scoreboard-badge scoreboard-badge--${outcome}`}>
                {outcomeLabel[outcome]}
              </span>
              <div className="scoreboard-match">
                <span className="scoreboard-team">{partido.local}</span>
                <span className="scoreboard-score">{partido.resultado}</span>
                <span className="scoreboard-team scoreboard-team--away">{partido.visitante}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ResultadosCarousel;