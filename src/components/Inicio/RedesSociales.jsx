import React from 'react';

const redes = [
  {
    platform: "Instagram",
    user: "@voleyberja",
    bg: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    followers: "4.2K",
    text: "¡Ayer el polideportivo se vino abajo! Mira el remate final desde la pista...",
    icon: "📸",
  },
  {
    platform: "TikTok",
    user: "@voleyberja",
    bg: "linear-gradient(135deg, #010101, #2b2b2b)",
    followers: "12K",
    text: "¿Cómo se entrena un líbero? Acompáñanos a un día normal de sesión con el equipo...",
    icon: "▶",
  },
  {
    platform: "X / Twitter",
    user: "@cvberja",
    bg: "linear-gradient(135deg, #1a1a2e, #16213e)",
    followers: "1.5K",
    text: "Victoria importantísima en casa 3-1. Gracias a la afición liderando la grada. #GoBerja",
    icon: "𝕏",
  },
];

export default function RedesSociales() {
  return (
    <section className="social-section">
      <div className="home-module__header">
        <span className="home-eyebrow">Redes Sociales</span>
        <h2>Conecta con el club</h2>
      </div>
      <div className="social-grid">
        {redes.map(red => (
          <a href="#" className="social-card" key={red.platform}>
            <div className="social-card__accent" style={{ background: red.bg }} />
            <div className="social-card__body">
              <div className="social-card__header">
                <div className="social-icon" style={{ background: red.bg }}>
                  <span>{red.icon}</span>
                </div>
                <div className="social-info">
                  <strong>{red.platform}</strong>
                  <span>{red.user}</span>
                </div>
                <span className="social-followers">{red.followers} seg.</span>
              </div>
              <p className="social-content">"{red.text}"</p>
              <div className="social-footer">
                <span className="social-action">Ver publicación →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
