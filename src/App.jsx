import React, { useState, useEffect } from 'react';
import './index.css';
import logo from './assets/new-logo.png';
import background from './assets/background.jpg';
import testimonial1 from './assets/testimonial1.jpg';
import testimonial2 from './assets/testimonial2.jpg';
import testimonial3 from './assets/testimonial3.jpg';
import { MapPin, X, Star } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', date: '', time: '' });

  const WHATSAPP_NUMBER = '233547170323';

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    const { name, date, time } = formData;
    if (!name || !date || !time) return alert("Please fill all fields");
    const message = `Hello Mcarthur Trim Lounge! I would like to secure my VIP appointment.\n\nName: ${name}\nDate: ${date}\nTime: ${time}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsModalOpen(false);
    setFormData({ name: '', date: '', time: '' });
  };

  useEffect(() => {
    // Main scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.12 });

    // Stagger observer for child cards
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('is-visible');
            }, i * 120);
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    document.querySelectorAll('.stagger-parent').forEach(el => staggerObserver.observe(el));

    return () => { observer.disconnect(); staggerObserver.disconnect(); };
  }, []);

  return (
    <>
      {/* Header */}
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
              <img src={logo} alt="Mcarthur Trim Lounge Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(3.5)' }} />
            </div>
            <span className="nav-brand">Mcarthur Trim Lounge</span>
          </div>
          <button className="nav-btn" onClick={() => setIsModalOpen(true)}>Book Now</button>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="section-dark" style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.97) 100%), url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        paddingTop: '90px',
        paddingBottom: '4rem'
      }}>
        <div className="container">
          <div className="hero-content">
            <p className="reveal reveal-fade" style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.25rem', fontSize: '0.78rem' }}>— The Grooming Standard</p>
            <h1 className="reveal reveal-up" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.8rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Stop Settling for Haircuts That <span style={{ fontStyle: 'italic', color: '#999' }}>Disappear After One Wash.</span>
            </h1>
            <p className="reveal reveal-up delay-1" style={{ fontSize: '1rem', marginBottom: '1.25rem', color: '#aaa', maxWidth: '560px', lineHeight: 1.8 }}>
              You know the feeling. You leave the chair looking decent, but two days later the lineup fades, the shape is lost, and the magic is gone. A bad fade isn't just a mistake — it's a blow to your confidence.
            </p>
            <p className="reveal reveal-up delay-2" style={{ fontSize: '1.05rem', marginBottom: '2.5rem', color: '#ddd', fontWeight: 500 }}>
              Kumasi deserves better. Welcome to a higher standard of grooming.
            </p>
            <button className="reveal reveal-up delay-3 btn btn-primary" style={{ fontSize: '0.85rem', padding: '1rem 2rem' }} onClick={() => setIsModalOpen(true)}>
              Experience The Difference
            </button>
          </div>
        </div>
      </section>

      {/* ── THE DIFFERENCE ── */}
      <section className="section-light" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="text-center reveal reveal-up" style={{ marginBottom: '5rem' }}>
            <p style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem', fontSize: '0.9rem' }}>— The Mcarthur Standard</p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>We Don't Just Trim Hair.<br />We Engineer Your <span style={{ fontStyle: 'italic' }}>First Impression</span>.</h2>
            <p style={{ fontSize: '1.1rem', color: '#444', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
              Most barbers rush through their appointments, treating your head like an assembly line. At Mcarthur Trim Lounge, we believe grooming is a calculated science. From perfect structural symmetry to flawless skin preparation, we ensure you command respect the moment you walk into any room.
            </p>
          </div>

          <div className="stagger-parent" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { stat: 'Zero', label: 'Guesswork or Rushing' },
              { stat: 'Elite', label: 'Hygiene Standards' },
              { stat: '100%', label: 'Unwavering Consistency' },
            ].map((s, i) => (
              <div key={i} className="stagger-child stat-card" style={{ padding: '2.5rem 2rem', border: '1px solid #eee' }}>
                <h3 style={{ fontSize: '2.8rem', marginBottom: '0.5rem' }}>{s.stat}</h3>
                <p style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-dark" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="text-center reveal reveal-up" style={{ marginBottom: '5rem' }}>
            <p style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem', fontSize: '0.9rem' }}>— Our Expertise</p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Precision Services.<br />No Compromises.</h2>
            <p style={{ fontSize: '1.1rem', color: '#aaa', maxWidth: '700px', margin: '0 auto' }}>
              Whether you need a boardroom-ready taper or an artistic fade, our master barbers execute with surgical precision.
            </p>
          </div>

          <div className="stagger-parent" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0' }}>
            {[
              { title: "The Executive Cut", desc: "Immaculate tapers and fades designed to grow out naturally and maintain their shape for weeks." },
              { title: "The Master Beard Sculpt", desc: "Hot towel preparation and razor-sharp alignment that accentuates your jawline and commands attention." },
              { title: "Feminine Precision", desc: "Bold, elegant short styles crafted specifically for women who refuse to blend in with the crowd." },
              { title: "Texture Mastery", desc: "Premium loc retwisting, maintenance, and styling using top-tier products for healthy, vibrant hair." },
              { title: "The Young Gentlemen", desc: "A calm, patient environment guaranteeing the sharpest look for the next generation without the fuss." },
              { title: "Signature Linework", desc: "Crisp, mathematically defined edges that turn a regular haircut into a flawless masterpiece." }
            ].map((service, idx) => (
              <div key={idx} className="stagger-child service-item" style={{ padding: '2.2rem', borderBottom: '1px solid rgba(255,255,255,0.07)', borderRight: idx % 2 === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <span style={{ color: '#555', fontSize: '0.85rem', display: 'block', marginBottom: '0.75rem' }}>✦</span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ color: '#888', lineHeight: 1.7, fontSize: '0.95rem' }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center reveal reveal-up" style={{ marginTop: '4rem' }}>
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Book a Service →</button>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="section-light" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="reveal reveal-up" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem', fontSize: '0.9rem' }}>— The Philosophy</p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', marginBottom: '2rem', lineHeight: 1.1 }}>Craftsmanship Meets <span style={{ fontStyle: 'italic' }}>Obsession</span>.</h2>
            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              We built Mcarthur Trim Lounge because we were tired of seeing bad fades and pushed-back hairlines in our city. Our barbers are hand-picked not just for their technical ability, but for their obsessive attention to detail and unwavering passion for the craft.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.8, marginBottom: '3rem' }}>
              When you secure a slot in our lounge, you aren't just paying for a haircut — you are making a high-yield investment in your personal confidence.
            </p>
            <p className="reveal reveal-scale" style={{ fontSize: '1.35rem', fontStyle: 'italic', fontWeight: 600, borderLeft: '3px solid #111', paddingLeft: '1.5rem', textAlign: 'left' }}>
              "Your appearance is your loudest introduction. Make it undeniable."
            </p>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section-dark" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="text-center reveal reveal-up" style={{ marginBottom: '5rem' }}>
            <p style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem', fontSize: '0.9rem' }}>— Our Portfolio</p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', marginBottom: '1rem' }}>The Proof Is In The Look</h2>
            <p style={{ color: '#aaa', fontSize: '1.1rem' }}>A showcase of undeniable style, crafted in our lounge.</p>
          </div>

          <div className="stagger-parent" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[testimonial1, testimonial2, testimonial3].map((img, idx) => (
              <div key={idx} className="stagger-child gallery-wrap" style={{ height: '420px', overflow: 'hidden' }}>
                <img src={img} alt={`MTL Client ${idx + 1}`} className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-light" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="text-center reveal reveal-up" style={{ marginBottom: '5rem' }}>
            <p style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem', fontSize: '0.9rem' }}>— The Verdict</p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', marginBottom: '1rem', lineHeight: 1.1 }}>What Our Clients Say</h2>
            <p style={{ color: '#555', fontSize: '1.1rem' }}>The men and women who refuse to settle anywhere else.</p>
          </div>

          <div className="stagger-parent" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: "Jürgen Schirm", review: "Very relaxed place. Excellent service and dedication!" },
              { name: "Kwakye", review: "Customer Service is top notch." },
              { name: "Kwaku Addai", review: "I had a very neat cut. I loved it." },
              { name: "Arbhena Sketches", review: "Had nice and neat cut." },
              { name: "Ayizi Tashiru", review: "They made me look nice." },
              { name: "Christopher Kumah", review: "Neat cut, nice services." }
            ].map((item, idx) => (
              <div key={idx} className="stagger-child review-card" style={{ padding: '2rem', backgroundColor: '#fff', border: '1px solid #eaeaea' }}>
                <div style={{ display: 'flex', gap: '3px', color: '#111', marginBottom: '1.25rem' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
                </div>
                <p style={{ color: '#333', fontStyle: 'italic', marginBottom: '1.75rem', fontSize: '1rem', lineHeight: 1.7 }}>"{item.review}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#111', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ color: '#111', fontWeight: 600, margin: 0, fontSize: '0.95rem' }}>{item.name}</p>
                    <p style={{ color: '#888', fontSize: '0.75rem', margin: 0 }}>Google Review</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-dark cta-section" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="reveal reveal-up" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Your Chair is Waiting.</h2>
          <p className="reveal reveal-up delay-1" style={{ fontSize: '1.1rem', color: '#aaa', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Join the hundreds of Kumasi residents who have already elevated their image. Don't leave your look to chance.
          </p>
          <button className="reveal reveal-up delay-2 btn btn-primary" style={{ fontSize: '0.9rem', padding: '1.1rem 2.5rem' }} onClick={() => setIsModalOpen(true)}>
            Secure Your VIP Spot Now
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="section-dark" style={{ padding: '5rem 0 2rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '1.2rem', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '2px' }}>Mcarthur Trim Lounge</h2>
              <p style={{ color: '#888', fontStyle: 'italic', marginBottom: '1rem', fontSize: '0.9rem' }}>Engineering your best first impression.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#aaa', fontSize: '0.9rem' }}>
                <MapPin size={16} /> Kumasi, Ghana
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '0.85rem', margin: '0 0 1.25rem 0', textTransform: 'uppercase', letterSpacing: '2px', color: '#777' }}>Opening Hours</h3>
              <p style={{ color: '#ccc', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Monday – Saturday</p>
              <p style={{ color: '#666', marginBottom: '1.25rem', fontSize: '0.85rem' }}>9:00 AM – 9:00 PM</p>
              <p style={{ color: '#ccc', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Sunday</p>
              <p style={{ color: '#666', fontSize: '0.85rem' }}>1:00 PM – 9:00 PM</p>
            </div>
            <div>
              <h3 style={{ fontSize: '0.85rem', margin: '0 0 1.25rem 0', textTransform: 'uppercase', letterSpacing: '2px', color: '#777' }}>Get in Touch</h3>
              <p style={{ color: '#ccc', marginBottom: '1rem', fontSize: '0.9rem' }}>+233 54 717 0323</p>
              <button style={{ background: 'none', color: '#aaa', textDecoration: 'underline', padding: 0, cursor: 'pointer', marginBottom: '0.75rem', display: 'block', fontSize: '0.9rem' }}
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}>
                WhatsApp Us
              </button>
              <button style={{ background: 'none', color: '#aaa', textDecoration: 'underline', padding: 0, cursor: 'pointer', fontSize: '0.9rem' }}
                onClick={() => setIsModalOpen(true)}>
                Book Appointment
              </button>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#444', fontSize: '0.82rem' }}>© 2026 Mcarthur Trim Lounge. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ── BOOKING MODAL ── */}
      <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 500, fontFamily: "'Playfair Display', serif" }}>Claim Your VIP Spot</h3>
            <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', color: 'white', padding: '0.25rem' }}>
              <X size={26} />
            </button>
          </div>
          <form onSubmit={handleBookNow}>
            <p style={{ marginBottom: '1.5rem', color: '#999', fontSize: '0.88rem', lineHeight: 1.6 }}>Fill out the details below to bypass the queue. We will confirm your slot via WhatsApp.</p>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" name="name" className="form-control" placeholder="Enter your full name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="date" name="date" className="form-control" value={formData.date} onChange={handleInputChange} onClick={(e) => e.target.showPicker && e.target.showPicker()} required />
            </div>
            <div className="form-group">
              <label>Preferred Time</label>
              <input type="time" name="time" className="form-control" value={formData.time} onChange={handleInputChange} onClick={(e) => e.target.showPicker && e.target.showPicker()} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.75rem' }}>
              Confirm Booking via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* ── FLOATING WHATSAPP ── */}
      <button className="floating-wa" onClick={() => setIsModalOpen(true)} aria-label="Book via WhatsApp">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.738 5.469 2.027 7.77L0 32l8.469-2.004A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.77-1.854l-.485-.288-5.027 1.189 1.21-4.898-.317-.504A13.245 13.245 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.355-1.162-2.72-1.294-.364-.133-.629-.199-.894.199-.265.398-1.028 1.294-1.26 1.56-.232.265-.464.298-.862.1-.398-.2-1.68-.619-3.2-1.977-1.183-1.056-1.981-2.36-2.213-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.894-2.155-1.225-2.95-.322-.775-.65-.67-.894-.683l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.362-1.393 3.318s1.427 3.848 1.626 4.113c.199.265 2.808 4.286 6.803 6.014.951.41 1.693.655 2.271.839.954.304 1.823.261 2.51.158.765-.114 2.355-.963 2.687-1.893.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.762-.464z"/>
        </svg>
      </button>
    </>
  );
}

export default App;
