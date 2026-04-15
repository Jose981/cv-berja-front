const jugadoras = [
  { dorsal: "10", nombre: "Lucía M.", posicion: "Receptora", iniciales: "LM" },
  { dorsal: "7", nombre: "María P.", posicion: "Colocadora", iniciales: "MP" },
  { dorsal: "3", nombre: "Sofía T.", posicion: "Opuesta", iniciales: "ST" },
  { dorsal: "15", nombre: "Elena G.", posicion: "Líbero", iniciales: "EG" }
];

export default function PlantillaDestacada() {
  return (
    <section className="equipos-section equipos-section--plantilla">
      <div className="equipos-section__header">
        <p className="equipos-section__eyebrow">Primer Equipo</p>
        <h2>Senior Femenino · Plantilla 26/27</h2>
      </div>

      <div className="grid-jugadores">
        {jugadoras.map((j) => (
          <article key={j.dorsal} className="card-jugador">
            <div className="jugador-top">
              <span className="jugador-avatar">{j.iniciales}</span>
              <span className="jugador-dorsal">#{j.dorsal}</span>
            </div>
            <h3 className="jugador-nombre">{j.nombre}</h3>
            <p className="jugador-posicion">{j.posicion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
