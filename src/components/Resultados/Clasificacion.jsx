const tabla = [
  { pos: 1, eq: "Unicaja Costa", pts: 24, pj: 8, pg: 8, pp: 0 },
  { pos: 2, eq: "CV Berja", pts: 21, pj: 8, pg: 7, pp: 1 },
  { pos: 3, eq: "Mintonette", pts: 18, pj: 8, pg: 6, pp: 2 },
  { pos: 4, eq: "CV Roquetas", pts: 12, pj: 8, pg: 4, pp: 4 },
];

export default function Clasificacion() {
  const berja = tabla.find((fila) => fila.eq === "CV Berja");

  return (
    <section className="resultados-card resultados-card--tabla">
      <div className="resultados-card__header">
        <p className="resultados-card__eyebrow">Liga regular</p>
        <h2>Clasificación principal</h2>
      </div>

      {berja && (
        <div className="clasificacion-resumen">
          <div>
            <span className="clasificacion-resumen__label">Posición actual</span>
            <strong>{berja.pos}.º puesto</strong>
          </div>
          <div>
            <span className="clasificacion-resumen__label">Puntos</span>
            <strong>{berja.pts}</strong>
          </div>
          <div>
            <span className="clasificacion-resumen__label">Balance</span>
            <strong>{berja.pg}G · {berja.pp}P</strong>
          </div>
        </div>
      )}

      <div className="tabla-responsive">
        <table className="tabla-clasificacion">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Equipo</th>
              <th>Pts</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PP</th>
            </tr>
          </thead>
          <tbody>
            {tabla.map((fila) => (
              <tr key={fila.eq} className={fila.eq === "CV Berja" ? "highlight-row" : ""}>
                <td>{fila.pos}</td>
                <td><strong>{fila.eq}</strong></td>
                <td>{fila.pts}</td>
                <td>{fila.pj}</td>
                <td>{fila.pg}</td>
                <td>{fila.pp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
