import React from "react";

const newsData = [
  {
    id: 1,
    title: "La plantilla estrena el balón retro con el que se jugará la próxima jornada",
    category: "PRIMER EQUIPO",
    time: "ayer",
    image: `${import.meta.env.BASE_URL}img/news_voley_1_1775723326918.png`,
  },
  {
    id: 2,
    title: "¡Qué locura de Liga! El equipo da una lección de carácter",
    category: "PRIMER EQUIPO",
    time: "anteayer",
    image: `${import.meta.env.BASE_URL}img/news_voley_2_1775723342572.png`,
  },
  {
    id: 3,
    title: "¡Segundos, a un punto del líder al que se visita el domingo!",
    category: "PRIMER EQUIPO",
    time: "hace 4 días",
    image: `${import.meta.env.BASE_URL}img/news_voley_3_1775723357681.png`,
  },
  {
    id: 4,
    title: "\"Este triunfo puede ser un punto de inflexión en lo colectivo\"",
    category: "PRIMER EQUIPO",
    time: "hace 4 días",
    image: `${import.meta.env.BASE_URL}img/news_voley_4_1775723372543.png`,
  },
];

export default function Noticias() {
  const [featured, ...rest] = newsData;
  return (
    <section className="noticias-section">
      <div className="home-module__header">
        <span className="home-eyebrow">Actualidad</span>
        <h2>Últimas noticias</h2>
      </div>
      <div className="noticias-grid">
        <article className="noticia-card noticia-card--featured">
          <div className="noticia-photo">
            <img src={featured.image} alt={featured.title} />
            <div className="noticia-overlay">
              <span className="noticia-cat">{featured.category}</span>
              <h3 className="noticia-title">{featured.title}</h3>
              <span className="noticia-time">{featured.time}</span>
            </div>
          </div>
        </article>
        <div className="noticias-sidebar">
          {rest.map(news => (
            <article className="noticia-card noticia-card--small" key={news.id}>
              <div className="noticia-photo">
                <img src={news.image} alt={news.title} />
              </div>
              <div className="noticia-info">
                <span className="noticia-cat">{news.category}</span>
                <h3 className="noticia-title">{news.title}</h3>
                <span className="noticia-time">{news.time}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
