import React from 'react';

const momentos = [
  {
    year: '1998',
    title: 'La primera gran ovación',
    description: 'El equipo juvenil ganó su primer campeonato provincial frente al rival histórico y llenó el pabellón de Berja hasta la bandera.',
    emoji: '🏆'
  },
  {
    year: '2007',
    title: 'Noche de récords',
    description: 'Tres jugadores del club fueron convocados por la selección andaluza en la misma temporada, un dato único en nuestra historia.',
    emoji: '🔥'
  },
  {
    year: '2013',
    title: 'Vóley playa en la arena',
    description: 'Se creó la primera escuela de vóley playa de Berja, llevándonos a competir en toda Andalucía bajo sol y buen ambiente.',
    emoji: '🌊'
  },
  {
    year: '2018',
    title: 'El Torneo de Leyenda',
    description: 'La sexta edición del torneo Ciudad de Berja rompió todos los récords de asistencia y se convirtió en la fiesta deportiva del verano.',
    emoji: '🎉'
  },
  {
    year: '2024',
    title: 'La remontada inolvidable',
    description: 'El primer equipo remontó desde un 0-2 en la final del campeonato regional, demostrando carácter, garra y pasión por el club.',
    emoji: '⚡'
  }
];

export default function HistoriaChula() {
  return (
    <section className="module historia-module historia-module--moments">
      <div className="module__header historia-module__header">
        <p className="module__eyebrow">Historia Chula</p>
        <h2>5 momentos legendarios del Club</h2>
      </div>

      <div className="historia-chula-grid">
        {momentos.map((momento, index) => (
          <article key={index} className="historia-chula-card">
            <div className="historia-chula-card__top">
              <span className="historia-chula-emoji">{momento.emoji}</span>
              <p className="historia-chula-year">{momento.year}</p>
            </div>
            <h3>{momento.title}</h3>
            <p>{momento.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
