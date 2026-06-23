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
    if(!name || !date || !time) return alert("Please fill all fields");
    
    const message = `Hello Mcarthur Trim Lounge! I would like to secure my VIP appointment.\n\nName: ${name}\nDate: ${date}\nTime: ${time}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
    setIsModalOpen(false);
    setFormData({ name: '', date: '', time: '' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Header */}
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
              <img src={logo} alt="Mcarthur Trim Lounge Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(3.5)' }} />
            </div>
            <span style={{ fontSize: '0.95rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }} className="hide-on-mobile">Mcarthur Trim Lounge</span>
            <span style={{ fontSize: '0.95rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }} className="show-on-mobile">MTL</span>
          </div>
          <button className="btn btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.75rem' }} onClick={() => setIsModalOpen(true)}>
            Book Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-dark" style={{ 
        minHeight: '100vh', 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center',
        backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.97) 100%), url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        paddingTop: '90px',
        paddingBottom: '4rem'
      }}>
        <div className="container scroll-animate" style={{ opacity: 0 }}>
          <div style={{ maxWidth: '700px' }} className="hero-content">
            <p style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.25rem', fontSize: '0.78rem' }}>— The Grooming Standard</p>
            <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4.8rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Stop Settling for Haircuts That <span style={{ fontStyle: 'italic', color: '#999' }}>Disappear After One Wash.</span>
            </h1>
            <p style={{ fontSize: '1rem', marginBottom: '1.25rem', color: '#aaa', maxWidth: '560px', lineHeight: 1.8 }}>
              You know the feeling. You leave the chair looking decent, but two days later the lineup fades, the shape is lost, and the magic is gone. A bad fade isn't just a mistake — it's a blow to your confidence.
            </p>
            <p style={{ fontSize: '1.05rem', marginBottom: '2.5rem', color: '#ddd', fontWeight: 500 }}>
              Kumasi deserves better. Welcome to a higher standard of grooming.
            </p>
            <button className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '1rem 2rem' }} onClick={() => setIsModalOpen(true)}>
              Experience The Difference
            </button>
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="section-light" style={{ padding: '8rem 0' }}>
        <div className="container scroll-animate" style={{ opacity: 0 }}>
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <p style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem', fontSize: '0.9rem' }}>— The Mcarthur Standard</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>We Don't Just Trim Hair.<br/>We Engineer Your <span style={{ fontStyle: 'italic' }}>First Impression</span>.</h2>
            <p style={{ fontSize: '1.2rem', color: '#444', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
              Most barbers rush through their appointments, treating your head like an assembly line. At Mcarthur Trim Lounge, we believe grooming is a calculated science. From perfect structural symmetry to flawless skin preparation, we ensure you command respect the moment you walk into any room.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center', marginTop: '4rem' }}>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Zero</h3>
              <p style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Guesswork or Rushing</p>
            </div>
            <div style={{ padding: '2rem', borderLeft: '1px solid #eee', borderRight: '1px solid #eee' }} className="stats-border">
              <h3 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Elite</h3>
              <p style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Hygiene Standards</p>
            </div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>100%</h3>
              <p style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Unwavering Consistency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Services Section */}
      <section className="section-dark" style={{ padding: '8rem 0' }}>
        <div className="container scroll-animate" style={{ opacity: 0 }}>
          <div className="text-center" style={{ marginBottom: '5rem' }}>
             <p style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem', fontSize: '0.9rem' }}>— Our Expertise</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Precision Services.<br/>No Compromises.</h2>
            <p style={{ fontSize: '1.2rem', color: '#aaa', maxWidth: '700px', margin: '0 auto' }}>
              Whether you need a boardroom-ready taper or an artistic fade, our master barbers execute with surgical precision.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {[
              { title: "The Executive Cut", desc: "Immaculate tapers and fades designed to grow out naturally and maintain their shape for weeks." },
              { title: "The Master Beard Sculpt", desc: "Hot towel preparation and razor-sharp alignment that accentuates your jawline and commands attention." },
              { title: "Feminine Precision", desc: "Bold, elegant short styles crafted specifically for women who refuse to blend in with the crowd." },
              { title: "Texture Mastery", desc: "Premium loc retwisting, maintenance, and styling using top-tier products for healthy, vibrant hair." },
              { title: "The Young Gentlemen", desc: "A calm, patient environment guaranteeing the sharpest look for the next generation without the fuss." },
              { title: "Signature Linework", desc: "Crisp, mathematically defined edges that turn a regular haircut into a flawless masterpiece." }
            ].map((service, idx) => (
              <div key={idx} style={{ padding: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#666', fontSize: '1rem' }}>✦</span> {service.title}
                </h3>
                <p style={{ color: '#aaa', lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '4rem' }}>
             <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Book a Service →</button>
          </div>
        </div>
      </section>

      {/* The Artist Section */}
      <section className="section-light" style={{ padding: '8rem 0', backgroundColor: '#fafafa' }}>
        <div className="container scroll-animate" style={{ opacity: 0 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem', fontSize: '0.9rem' }}>— The Philosophy</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem', lineHeight: 1.1 }}>Craftsmanship Meets <br/><span style={{ fontStyle: 'italic' }}>Obsession</span>.</h2>
            <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              We built Mcarthur Trim Lounge because we were tired of seeing bad fades and pushed-back hairlines in our city. Our barbers are hand-picked not just for their technical ability, but for their obsessive attention to detail and unwavering passion for the craft.
            </p>
            <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.8, marginBottom: '3rem' }}>
              When you secure a slot in our lounge, you aren't just paying for a haircut—you are making a high-yield investment in your personal confidence.
            </p>
            <p style={{ fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 600 }}>"Your appearance is your loudest introduction. Make it undeniable."</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-dark" style={{ padding: '8rem 0' }}>
        <div className="container scroll-animate" style={{ opacity: 0 }}>
           <div className="text-center" style={{ marginBottom: '5rem' }}>
            <p style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem', fontSize: '0.9rem' }}>— Our Portfolio</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>The Proof Is In The Look</h2>
            <p style={{ color: '#aaa', fontSize: '1.2rem' }}>A showcase of undeniable style, crafted in our lounge.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[testimonial1, testimonial2, testimonial3].map((img, idx) => (
              <div key={idx} style={{ height: '450px', overflow: 'hidden' }}>
                 <img src={img} alt={`MTL Client ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', filter: 'grayscale(20%)' }} className="gallery-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-light" style={{ padding: '8rem 0' }}>
        <div className="container scroll-animate" style={{ opacity: 0 }}>
           <div className="text-center" style={{ marginBottom: '5rem' }}>
            <p style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem', fontSize: '0.9rem' }}>— The Verdict</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>What Our Clients Say</h2>
            <p style={{ color: '#444', fontSize: '1.2rem' }}>The men and women who refuse to settle anywhere else.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { name: "Jürgen Schirm", review: "Very relaxed place. Excellent service and dedication!" },
              { name: "Kwakye", review: "Customer Service is top notch." },
              { name: "Kwaku Addai", review: "i had a very neat cut. i loved it." },
              { name: "Arbhena Sketches", review: "Had nice and neat cut" },
              { name: "Ayizi Tashiru", review: "They made me look nice" },
              { name: "Christopher Kumah", review: "Neat cut, nice services" }
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '2.5rem', backgroundColor: '#fff', border: '1px solid #eaeaea', transition: 'box-shadow 0.3s ease' }} className="review-card">
                 <div style={{ display: 'flex', gap: '2px', color: '#111', marginBottom: '1.5rem' }}>
                   {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
                 <p style={{ color: '#333', fontStyle: 'italic', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>"{item.review}"</p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#111', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p style={{ color: '#111', fontWeight: 600, margin: 0 }}>{item.name}</p>
                      <p style={{ color: '#888', fontSize: '0.8rem', margin: 0 }}>Google Review</p>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-dark" style={{ padding: '8rem 0', textAlign: 'center', backgroundColor: '#050505' }}>
        <div className="container scroll-animate" style={{ opacity: 0 }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Your Chair is Waiting.</h2>
          <p style={{ fontSize: '1.2rem', color: '#aaa', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Join the hundreds of Kumasi residents who have already elevated their image. Don't leave your look to chance.
          </p>
          <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }} onClick={() => setIsModalOpen(true)}>
            Secure Your VIP Spot Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-dark" style={{ padding: '6rem 0 2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '2px' }}>Mcarthur Trim Lounge</h2>
              <p style={{ color: '#888', fontStyle: 'italic', marginBottom: '1rem' }}>Engineering your best first impression.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ccc' }}>
                <MapPin size={18}/> Kumasi, Ghana
              </div>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.2rem', margin: '0 0 1.5rem 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Opening Hours</h3>
              <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>Monday – Saturday</p>
              <p style={{ color: '#888', marginBottom: '1.5rem' }}>9:00 AM – 9:00 PM</p>
              <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>Sunday</p>
              <p style={{ color: '#888' }}>1:00 PM – 9:00 PM</p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.2rem', margin: '0 0 1.5rem 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Get in Touch</h3>
              <p style={{ color: '#ccc', marginBottom: '1rem' }}>+233 54 717 0323</p>
              <button style={{ background: 'none', color: 'white', textDecoration: 'underline', padding: 0, cursor: 'pointer', marginBottom: '1rem', display: 'block', fontSize: '1rem' }} onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}>
                WhatsApp Us
              </button>
              <button style={{ background: 'none', color: 'white', textDecoration: 'underline', padding: 0, cursor: 'pointer', fontSize: '1rem' }} onClick={() => setIsModalOpen(true)}>
                Book Appointment
              </button>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#555', fontSize: '0.9rem' }}>© 2026 Mcarthur Trim Lounge. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Booking Modal */}
      <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 500, fontFamily: "'Playfair Display', serif" }}>Claim Your VIP Spot</h3>
            <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', color: 'white' }}>
              <X size={28} />
            </button>
          </div>
          
          <form onSubmit={handleBookNow}>
            <p style={{ marginBottom: '1.5rem', color: '#ccc', fontSize: '0.9rem' }}>Fill out the details below to bypass the line. We will confirm your slot immediately via WhatsApp.</p>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" name="name" className="form-control" placeholder="Enter your full name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="date" name="date" className="form-control" value={formData.date} onChange={handleInputChange} onClick={(e) => e.target.showPicker && e.target.showPicker()} required />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input type="time" name="time" className="form-control" value={formData.time} onChange={handleInputChange} onClick={(e) => e.target.showPicker && e.target.showPicker()} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Confirm Booking via WhatsApp
            </button>
          </form>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <button className="floating-wa" onClick={() => setIsModalOpen(true)} aria-label="Book via WhatsApp">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.738 5.469 2.027 7.77L0 32l8.469-2.004A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.77-1.854l-.485-.288-5.027 1.189 1.21-4.898-.317-.504A13.245 13.245 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.355-1.162-2.72-1.294-.364-.133-.629-.199-.894.199-.265.398-1.028 1.294-1.26 1.56-.232.265-.464.298-.862.1-.398-.2-1.68-.619-3.2-1.977-1.183-1.056-1.981-2.36-2.213-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.894-2.155-1.225-2.95-.322-.775-.65-.67-.894-.683l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.362-1.393 3.318s1.427 3.848 1.626 4.113c.199.265 2.808 4.286 6.803 6.014.951.41 1.693.655 2.271.839.954.304 1.823.261 2.51.158.765-.114 2.355-.963 2.687-1.893.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.762-.464z"/>
        </svg>
      </button>

      {/* Inline styles for hover effects */}
      <style>{`
        .gallery-img:hover { transform: scale(1.03); filter: grayscale(0%) !important; }
        .review-card:hover { box-shadow: 0 15px 40px rgba(0,0,0,0.08); transform: translateY(-5px); }
        @media (max-width: 768px) {
           .stats-border { border: none !important; border-top: 1px solid #eee !important; border-bottom: 1px solid #eee !important; }
        }
      `}</style>
    </>
  );
}

export default App;
