const sponsorsData = [
  "Black Spike",
  "Rojo Club",
  "Arenas Tech",
  "Zona Voley",
  "Nike",
  "Adidas",
  "Decathlon",
  "Puma",
];

function SponsorsCarousel() {
  return (
    <div className="sponsors-marquee">
      <div className="sponsors-track">
        {[...sponsorsData, ...sponsorsData].map((name, i) => (
          <div className="sponsor-pill" key={i}>{name}</div>
        ))}
      </div>
    </div>
  );
}

export default SponsorsCarousel;