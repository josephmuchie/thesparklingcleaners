

function Hero() {
  return (
    <section className="hero" style={{
      backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.85), rgba(52, 152, 219, 0.85)), url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: 'var(--spacing-xxl) 0'
    }}>
      <div className="container">
        <div className="hero-content animate-fade-in" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 'var(--font-weight-bold)', 
            marginBottom: 'var(--spacing-lg)',
            textShadow: '3px 3px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.9)',
            color: '#ffffff !important'
          }}>
            Professional Cleaning Services
            <span className="sparkle" style={{ color: '#ffffff !important' }}> ✨</span>
          </h1>
          
          <p className="hero-subtitle" style={{ 
            fontSize: '1.25rem', 
            marginBottom: 'var(--spacing-xl)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.9)',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-xl) auto',
            lineHeight: '1.6',
            color: '#ffffff'
          }}>
            Transform your space with our reliable, eco-friendly cleaning solutions. 
            Perfect for homes and offices across the UK.
          </p>
          
          <div className="hero-features" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 'var(--spacing-lg)', 
            marginBottom: 'var(--spacing-xl)',
            flexWrap: 'wrap'
          }}>
            <div className="feature-item" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-sm)',
              backgroundColor: 'rgba(255,255,255,0.2)',
              padding: 'var(--spacing-sm) var(--spacing-md)',
              borderRadius: 'var(--border-radius)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff'
            }}>
              <span className="feature-icon">🛡️</span>
              <span>Fully Insured</span>
            </div>
            <div className="feature-item" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-sm)',
              backgroundColor: 'rgba(255,255,255,0.2)',
              padding: 'var(--spacing-sm) var(--spacing-md)',
              borderRadius: 'var(--border-radius)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff'
            }}>
              <span className="feature-icon">🌿</span>
              <span>Eco-Friendly</span>
            </div>
            <div className="feature-item" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-sm)',
              backgroundColor: 'rgba(255,255,255,0.2)',
              padding: 'var(--spacing-sm) var(--spacing-md)',
              borderRadius: 'var(--border-radius)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff'
            }}>
              <span className="feature-icon">⚡</span>
              <span>Flexible Booking</span>
            </div>
          </div>
          
          <div className="hero-buttons" style={{ 
            display: 'flex', 
            gap: 'var(--spacing-md)', 
            justifyContent: 'center',
            marginBottom: 'var(--spacing-xl)',
            flexWrap: 'wrap'
          }}>
            <a href="#contact" className="btn btn-lg" style={{
              backgroundColor: 'white',
              color: 'var(--primary-color)',
              border: '2px solid white',
              fontWeight: 'var(--font-weight-bold)',
              padding: 'var(--spacing-md) var(--spacing-lg)',
              minWidth: '200px',
              textDecoration: 'none'
            }}>
              📋 Get Free Quote
            </a>
            <a href="tel:+441234567890" className="btn btn-lg" style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              fontWeight: 'var(--font-weight-bold)',
              padding: 'var(--spacing-md) var(--spacing-lg)',
              minWidth: '200px',
              textDecoration: 'none'
            }}>
              📞 Call Now
            </a>
          </div>
          
          <div className="hero-trust" style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--border-radius)',
            backdropFilter: 'blur(10px)',
            color: '#ffffff'
          }}>
            <p style={{ margin: 0, fontSize: '1rem', color: '#ffffff' }}>
              <strong style={{ color: '#ffffff' }}>🌟 Starting fresh with professional standards</strong><br />
              <small style={{ color: '#ffffff' }}>Free quotes • Flexible scheduling • Satisfaction guaranteed</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero