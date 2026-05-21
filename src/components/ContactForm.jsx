import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate an API submission delay, then show confirmation
    setSubmitted(true);
    setFormData({ name: "", phone: "", service: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container container">
        <div className="form-box">
          <div className="form-header">
            <h2>Get Your Free Estimate</h2>
            <p>
              Tell us where you are moving, and our team will call you back
              within 15 minutes.
            </p>
          </div>

          {submitted ? (
            <div className="success-message">
              <h3>🎉 Request Received!</h3>
              <p>
                Thank you for reaching out. A relocation consultant will speak
                with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="quote-form">
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="input-group">
                <label htmlFor="service">Service Required</label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Select shifting service...
                  </option>
                  <option value="local">Local House Shifting</option>
                  <option value="corporate">
                    Corporate & Office Relocation
                  </option>
                  <option value="interstate">Inter-State Moving</option>
                </select>
              </div>

              <button type="submit" className="btn-submit">
                Calculate My Quote
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
