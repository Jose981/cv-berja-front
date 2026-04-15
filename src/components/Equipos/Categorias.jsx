const categorias = [
  { nombre: "Senior Femenino", nivel: "Primera Nacional", status: "Activo", cupo: "14 jugadoras" },
  { nombre: "Senior Masculino", nivel: "Primera Andaluza", status: "Activo", cupo: "12 jugadores" },
  { nombre: "Juvenil Femenino", nivel: "CADEBA", status: "En competición", cupo: "16 jugadoras" },
  { nombre: "Cadete Femenino", nivel: "Provincial", status: "Inscripciones abiertas", cupo: "Plazas disponibles" }
];

function statusClass(status) {
  if (status.toLowerCase().includes("inscripciones")) return "is-open";
  if (status.toLowerCase().includes("competición")) return "is-playing";
  return "is-active";
}

export default function Categorias() {
  return (
    <section className="equipos-section equipos-section--categorias">
      <div className="equipos-section__header">
        <p className="equipos-section__eyebrow">Categorías Base</p>
        <h2>Escuela y competición</h2>
      </div>

      <div className="grid-categorias">
        {categorias.map((cat) => (
          <article key={cat.nombre} className="card-categoria">
            <h3>{cat.nombre}</h3>
            <p className="categoria-nivel">{cat.nivel}</p>
            <p className="categoria-cupo">{cat.cupo}</p>
            <span className={`categoria-status ${statusClass(cat.status)}`}>{cat.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
