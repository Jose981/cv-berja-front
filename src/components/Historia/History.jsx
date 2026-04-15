import React from 'react';

export default function History() {
  const historyEvents = [
    {
      year: '2000',
      title: 'Fundación del Club',
      description: 'El Club Voleibol Berja fue fundado en el año 2000 con el objetivo de promover el voleibol en la comunidad.'
    },
    {
      year: '2005',
      title: 'Primer Torneo',
      description: 'Organización del primer torneo local, marcando el inicio de una tradición anual.'
    },
    {
      year: '2010',
      title: 'Expansión de Categorías',
      description: 'Se incorporaron equipos en todas las categorías de base, consolidando la cantera.'
    },
    {
      year: '2015',
      title: 'Reconocimiento Regional',
      description: 'El club recibió reconocimientos por su contribución al deporte en la región.'
    },
    {
      year: '2020',
      title: 'Adaptación a la Pandemia',
      description: 'Durante la pandemia, el club se adaptó con entrenamientos virtuales y actividades online.'
    },
    {
      year: '2023',
      title: 'Nueva Instalación',
      description: 'Inauguración de nuevas instalaciones deportivas para mejorar la práctica del voleibol.'
    }
  ];

  return (
    <section className="module" style={{ marginBottom: '60px' }}>
      <div className="module__header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '40px' }}>
        <p className="module__eyebrow">Historia</p>
        <h2>Historia del Club Voleibol Berja</h2>
      </div>
      
      <div className="history-scroll" style={{ maxHeight: '400px', overflowY: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        {historyEvents.map((event, index) => (
          <div key={index} style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: index < historyEvents.length - 1 ? '1px solid #eee' : 'none' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#007bff' }}>{event.year} - {event.title}</h3>
            <p style={{ margin: 0 }}>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}