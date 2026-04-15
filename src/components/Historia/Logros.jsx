import React from 'react';

const bloques = [
  {
    titulo: 'Torneo de Voleibol Ciudad de Berja',
    texto: 'La cita de pretemporada se ha convertido en uno de los grandes motores sociales y deportivos del club, con pabellon lleno, nueve pistas activas y mas de 120 equipos inscritos.'
  },
  {
    titulo: 'Seguros y cobertura',
    texto: 'El club cuenta con seguro de responsabilidad civil y, ademas, sus deportistas federados disponen de seguro de accidente deportivo, garantizando un marco de practica mas seguro.'
  },
  {
    titulo: 'Reconocimiento medico',
    texto: 'Al inicio de cada temporada se pone a disposicion de la plantilla un reconocimiento medico deportivo completo, reforzando la prevencion y el cuidado integral del deportista.'
  }
];

export default function Logros() {
  return (
    <section className="module historia-module historia-module--info">
      <div className="module__header historia-module__header">
        <p className="module__eyebrow">Más Información</p>
        <h2>Torneos, Seguros y Reconocimiento Médico</h2>
      </div>
      
      <div className="historia-info-grid">
        {bloques.map((bloque) => (
          <article key={bloque.titulo} className="historia-info-card">
            <span className="historia-panel__tag">Detalle</span>
            <h3>{bloque.titulo}</h3>
            <p>{bloque.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
