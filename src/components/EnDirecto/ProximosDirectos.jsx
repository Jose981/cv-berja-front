const emisiones = [
  {
    fecha: "Sáb, 19:00",
    partido: "CV Berja vs Unicaja Costa",
    categoria: "Senior Femenino",
    estado: "Programado",
  },
  {
    fecha: "Dom, 12:30",
    partido: "CV Berja vs Mintonette",
    categoria: "Senior Masculino",
    estado: "Programado",
  },
  {
    fecha: "Mié, 18:30",
    partido: "Juvenil Femenino vs Roquetas",
    categoria: "Cantera",
    estado: "Pendiente de confirmar",
  },
];

export default function ProximosDirectos() {
  return (
    <section className="directo-card directo-card--agenda">
      <div className="directo-card__header">
        <p className="directo-card__eyebrow">Agenda de emisiones</p>
        <h2>Próximos directos</h2>
      </div>

      <div className="directo-list">
        {emisiones.map((item) => (
          <article key={`${item.fecha}-${item.partido}`} className="directo-item">
            <div className="directo-item__row">
              <span className="directo-item__fecha">{item.fecha}</span>
              <span
                className={`directo-item__estado${
                  item.estado.includes("confirmar") ? " is-pending" : ""
                }`}
              >
                {item.estado}
              </span>
            </div>
            <h3>{item.partido}</h3>
            <p>{item.categoria}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
