import React from 'react';

const equipos = [
  {
    nombre: 'Senior Mixto',
    detalle: 'Equipo aficionado que participa en torneos amateurs.'
  },
  {
    nombre: 'Senior Masculino',
    detalle: 'Compite en Primera Division Andaluza.'
  },
  {
    nombre: 'Juvenil Masculino y Femenino',
    detalle: 'Presencia en CADEBA con proyeccion competitiva autonómica.'
  },
  {
    nombre: 'Cadete Masculino y Femenino',
    detalle: 'Bloque clave del crecimiento deportivo de la cantera.'
  },
  {
    nombre: 'Infantil Masculino y Femenino',
    detalle: 'Participacion estable en las fases provinciales de base.'
  },
  {
    nombre: 'Alevin Masculino y Femenino',
    detalle: 'Formacion tecnica y consolidacion competitiva temprana.'
  },
  {
    nombre: 'Benjamin Masculino y Femenino',
    detalle: 'Primeros pasos en competicion organizada.'
  },
  {
    nombre: 'Prebenjamin Mixto',
    detalle: 'Participacion en torneos y experiencias de iniciacion.'
  }
];

export default function Palmares() {
  return (
    <section className="module historia-module historia-module--teams">
      <div className="module__header historia-module__header">
        <p className="module__eyebrow">Equipos</p>
        <h2>Los Equipos</h2>
      </div>
      
      <div className="historia-teams-layout">
        <div className="historia-section historia-section--glass">
          <p>
            En la temporada 2024-2025 el club cuenta con 15 equipos: 7 masculinos, 6 femeninos y
            2 mixtos. La estructura competitiva cubre toda la base y mantiene ademas presencia en el
            voleibol senior, reforzando un modelo que combina formacion, continuidad y ambicion.
          </p>
          <p>
            Todos los equipos de cantera, salvo el prebenjamin mixto, participan en la fase
            provincial del Campeonato de Andalucia de Deporte Base. A esto se suma el senior mixto
            en torneos amateurs y el senior masculino en Primera Division Andaluza.
          </p>
          <p>
            La temporada se completa con intercambios deportivos, encuentros con otros clubes y
            torneos que mantienen activa la convivencia competitiva durante todo el ano.
          </p>
        </div>

        <div className="historia-teams-grid">
          {equipos.map((equipo) => (
            <article key={equipo.nombre} className="historia-team-card">
              <h3>{equipo.nombre}</h3>
              <p>{equipo.detalle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
