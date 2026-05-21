export default function Hero() {
  return (
    <header id="hero" className="hero-section">
      <div className="hero-container container">
        <div className="hero-text">
          <h1>Relocating Made <br /><span>Simple & Safe</span></h1>
          <p>
            Your trusted local and long-distance moving partners. We handle everything 
            from expert packing to secure transport with zero stress.
          </p>
          <div className="hero-cta-group">
            <a href="#contact" className="btn-cta-primary">Get Free Quote</a>
            <a href="#services" className="btn-cta-secondary">Explore Services</a>
          </div>
        </div>
        <div className="hero-visual">
          {/* Using a highly optimized, universally available illustrative graphic */}
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
            alt="Modern home moving interior logistics layout" 
            className="hero-image"
          />
        </div>
      </div>
    </header>
  );
}