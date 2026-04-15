import React from 'react';

const objetivos = [
  'Fomentar la participacion de escolares en actividades deportivas regladas.',
  'Facilitar la practica del voleibol a cualquier persona del municipio.',
  'Perfeccionar el desarrollo fisico, tecnico y tactico de los jugadores.',
  'Reforzar la convivencia a traves del deporte de equipo.',
  'Llenar nuestros eventos de publico y convertir el voleibol en espectaculo.',
  'Consolidar una estructura de club solida para seguir creciendo.',
  'Participar activamente en la vida deportiva y social de Berja.',
  'Promocionar Berja en todas las actividades y competiciones.'
];

export default function Cronologia() {
  return (
    <section className="module historia-module historia-module--current">
      <div className="module__header historia-module__header">
        <p className="module__eyebrow">Actualidad</p>
        <h2>El Club Voleibol Berja en la Actualidad</h2>
      </div>
      
      <div className="historia-current-layout">
        <div className="historia-section historia-section--glass">
          <p>
            El club vive una etapa de plena madurez deportiva y social. Sus actividades ya forman
            parte del calendario habitual de Berja, con gradas llenas, ambiente familiar y una masa
            social que convierte cada jornada en una cita reconocible dentro del municipio.
          </p>
          <p>
            El Torneo de Voleibol Ciudad de Berja se ha consolidado como un gran escaparate del club,
            reuniendo a cerca de 1000 jugadores y a miles de visitantes de Andalucia y Murcia en dos
            dias de convivencia, deporte y proyeccion para la localidad.
          </p>
          <p>
            La actividad no se detiene durante el verano, cuando las instalaciones de voley playa de
            San Roque mantienen vivo el proyecto. A ello se suma un cuerpo tecnico en continua
            formacion, con reciclaje permanente, intercambio de conocimiento y nuevos entrenadores que
            nacen desde la propia cantera del club.
          </p>
          <p>
            Con mas de 150 jugadores, una base muy fidelizada y equipos desde Benjamin hasta juvenil,
            el club sostiene hoy la estructura completa de cantera que llevaba anos construyendo y se
            reafirma como uno de los grandes referentes del deporte virgitano.
          </p>
        </div>

        <aside className="historia-goals-card">
          <div className="historia-goals-card__header">
            <span className="historia-panel__tag">Temporada actual</span>
            <h3>Objetivos prioritarios</h3>
          </div>
          <ul className="historia-goals-list">
            {objetivos.map((objetivo) => (
              <li key={objetivo}>{objetivo}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
