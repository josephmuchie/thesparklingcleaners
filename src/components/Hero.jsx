

function Hero() {
  return (
    <section className="hero" style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      padding: 'var(--spacing-xl) 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(243, 156, 18, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content" style={{ 
          animation: 'fadeInUp 1s ease-out',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: 'var(--spacing-lg)',
            fontSize: '0.95rem',
            color: 'var(--gray)',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            <div style={{
              width: '40px',
              height: '1px',
              backgroundColor: 'var(--primary-color)'
            }}></div>
            <span style={{ color: 'var(--accent-color)' }}>✨</span>
            <span>Professional & Trusted Service</span>
            <span style={{ color: 'var(--accent-color)' }}>✨</span>
            <div style={{
              width: '40px',
              height: '1px',
              backgroundColor: 'var(--primary-color)'
            }}></div>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', 
            fontWeight: 'var(--font-weight-bold)', 
            marginBottom: 'var(--spacing-md)',
            color: 'var(--dark)',
            lineHeight: '1.1'
          }}>
            The <span style={{ color: 'var(--primary-color)' }}>Sparkling</span> Clean You Deserve
          </h1>
          
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: 'var(--spacing-lg)',
            lineHeight: '1.6',
            color: 'var(--gray)',
            maxWidth: '650px',
            margin: '0 auto var(--spacing-lg) auto'
          }}>
            Transform your space with our professional cleaning services. We bring shine, freshness, and care to every corner.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: 'var(--spacing-md)', 
            marginBottom: 'var(--spacing-lg)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a href="#contact" className="btn btn-lg" style={{
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              border: 'none',
              fontWeight: 'var(--font-weight-bold)',
              padding: 'var(--spacing-sm) var(--spacing-lg)',
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}>
              Get Free Quote →
            </a>
            <a href="tel:+441135450050" className="btn btn-lg" style={{
              backgroundColor: 'white',
              color: 'var(--primary-color)',
              border: '2px solid var(--primary-color)',
              fontWeight: 'var(--font-weight-bold)',
              padding: 'var(--spacing-sm) var(--spacing-lg)',
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}>
              📞 Call Now
            </a>
          </div>
          
          <div style={{ 
            paddingTop: 'var(--spacing-md)',
            borderTop: '1px solid #e0e0e0',
            maxWidth: '400px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '4px' }}>100%</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>Satisfaction Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero