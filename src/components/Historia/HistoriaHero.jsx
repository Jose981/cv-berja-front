const heroHighlights = [
  {
    value: "1990",
    label: "Inicio oficial del club"
  },
  {
    value: "1000+",
    label: "Jugadores y jugadoras formados"
  },
  {
    value: "13",
    label: "Participaciones en Campeonatos de Espana"
  }
];

export default function HistoriaHero() {
  return (
    <section className="historia-hero">
      <div className="historia-hero__backdrop" />
      <div className="historia-hero__shell">
        <div className="historia-hero__intro">
          <span className="historia-hero__eyebrow">Nuestra historia</span>
          <h1>Club Voleibol Berja</h1>
          <p className="historia-hero__lead">
            Desde 1990, el club impulsa cantera, competicion y sentimiento de pertenencia en Berja,
            llevando el nombre del municipio por toda Andalucia y el panorama nacional.
          </p>
        </div>

        <div className="historia-hero__grid">
          <article className="historia-hero__story historia-panel">
            <span className="historia-panel__tag">Club y ciudad</span>
            <h2>Un proyecto deportivo que crecio con Berja</h2>
            <p>
              El club nace en octubre de 1990 para continuar el trabajo de base iniciado en 1983 y
              abrir el voleibol a todo el municipio. Ese origen explica una identidad muy clara:
              cantera, compromiso y una vinculacion directa con la vida deportiva virgitana.
            </p>
            <p>
              A lo largo de estas decadas se ha consolidado como el club deportivo mas antiguo de
              Berja y uno de los referentes historicos del voleibol almeriense, con una trayectoria
              estable en deporte federado y una presencia muy reconocible dentro y fuera de la pista.
            </p>
          </article>

          <aside className="historia-hero__side">
            <div className="historia-panel historia-panel--accent">
              <span className="historia-panel__tag">Legado</span>
              <h3>Una cantera que deja huella</h3>
              <p>
                Mas de un millar de virgitanos y virgitanas han pasado por el club, construyendo una
                comunidad que mezcla formacion, nivel competitivo y orgullo local.
              </p>
            </div>

            <div className="historia-hero__stats">
              {heroHighlights.map((item) => (
                <div key={item.label} className="historia-stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
