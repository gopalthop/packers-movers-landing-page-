const SERVICES_DATA = [
  {
    id: 1,
    icon: "📦",
    title: "Local House Shifting",
    desc: "Seamless, careful packing and safe transport for apartment or residential shifting across your city."
  },
  {
    id: 2,
    icon: "🏢",
    title: "Corporate & Office Relocation",
    desc: "Swift, structured logistics designed to move desks, hardware, and files with minimum business downtime."
  },
  {
    id: 3,
    icon: "🚚",
    title: "Inter-State Moving",
    desc: "Secure, long-distance transportation networks with trusted transit handlers and real-time support."
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2>Our Relocation Services</h2>
          <p>Professional moving solutions built to make your next move smooth and stress-free.</p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}