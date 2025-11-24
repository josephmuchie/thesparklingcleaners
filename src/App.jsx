import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <section className="section bg-light">
          <div className="container">
            <div className="grid grid-3" style={{ textAlign: 'center', gap: 'var(--spacing-xl)' }}>
              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <h3>Fully Insured</h3>
                <p>Complete peace of mind with comprehensive insurance coverage for all our cleaning services.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌿</div>
                <h3>Eco-Friendly</h3>
                <p>We use environmentally safe cleaning products that are gentle on your family and pets.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⏰</div>
                <h3>Flexible Scheduling</h3>
                <p>Book cleaning sessions that fit your schedule - weekly, bi-weekly, or one-time services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section" id="services">
          <div className="container">
            <h2 className="section-title">Our Cleaning Services</h2>
            <p className="text-center" style={{ marginBottom: 'var(--spacing-xxl)', color: 'var(--gray)', fontSize: '1.125rem' }}>
              Professional cleaning solutions for your home and office
            </p>
            
            <div className="grid grid-3" style={{ gap: 'var(--spacing-xl)' }}>
              <div className="card service-card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="House cleaning service" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>House Cleaning</h3>
                  <p style={{ color: 'var(--gray)', marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>
                    Regular maintenance and deep cleaning for your home. We handle everything from kitchens to bathrooms.
                  </p>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)' }}>From £25/hour</div>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Get Quote</a>
                </div>
              </div>
              
              <div className="card service-card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Window cleaning service" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Window Cleaning</h3>
                  <p style={{ color: 'var(--gray)', marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>
                    Crystal clear windows inside and out. Professional equipment for streak-free results every time.
                  </p>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)' }}>From £3/window</div>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Get Quote</a>
                </div>
              </div>
              
              <div className="card service-card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Deep cleaning service" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Deep Cleaning</h3>
                  <p style={{ color: 'var(--gray)', marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>
                    Comprehensive deep clean for move-ins, move-outs, or when you need that extra sparkle.
                  </p>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)' }}>From £120</div>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Get Quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section" id="about">
          <div className="container">
            <div className="grid grid-2" style={{ gap: 'var(--spacing-xxl)', alignItems: 'center' }}>
              <div>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 'var(--spacing-lg)' }}>About The Sparkling Cleaners</h2>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: 'var(--spacing-md)' }}>
                  We're a passionate team dedicated to providing exceptional cleaning services for homes and businesses across the UK. 
                  Our mission is to give you more time to focus on what matters most while we take care of the cleaning.
                </p>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: 'var(--spacing-lg)' }}>
                  Starting fresh with professional standards, we bring attention to detail, reliability, and a personal touch to every cleaning job.
                </p>
                <a href="#contact" className="btn btn-primary btn-lg">Get Your Free Quote</a>
              </div>
              <div className="about-image">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Professional cleaning team" 
                  style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--border-radius)' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-unified-card" style={{
              background: 'linear-gradient(135deg, var(--white) 0%, var(--secondary-color) 100%)',
              borderRadius: 'var(--border-radius-xl)',
              padding: 'var(--spacing-3xl)',
              boxShadow: '0 20px 60px rgba(52, 152, 219, 0.15)',
              border: '1px solid rgba(52, 152, 219, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              maxWidth: '1100px',
              margin: '0 auto'
            }}>
              {/* Background decoration */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0
              }}></div>
              
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(243, 156, 18, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0
              }}></div>

              {/* Header */}
              <div className="contact-header" style={{ 
                textAlign: 'center', 
                marginBottom: 'var(--spacing-3xl)',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  marginBottom: 'var(--spacing-lg)',
                  fontSize: '2rem',
                  boxShadow: '0 8px 25px rgba(52, 152, 219, 0.3)'
                }}>💬</div>
                
                <h2 className="section-title" style={{ 
                  fontSize: '2.8rem', 
                  marginBottom: 'var(--spacing-lg)',
                  background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'var(--font-weight-bold)'
                }}>Get Your Free Quote</h2>
                
                <p style={{ 
                  color: 'var(--gray)', 
                  fontSize: '1.2rem', 
                  maxWidth: '700px', 
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  Ready to transform your space? Contact us today for a personalized quote and experience the sparkling difference.
                </p>
              </div>

              {/* Unified Contact Content */}
              <div className="contact-unified-content" style={{
                position: 'relative',
                zIndex: 1
              }}>
                {/* Contact Methods Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 'var(--spacing-xl)',
                  marginBottom: 'var(--spacing-3xl)'
                }}>
                  {/* Phone Contact */}
                  <div className="contact-method" style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--border-radius-lg)',
                    padding: 'var(--spacing-2xl)',
                    textAlign: 'center',
                    border: '2px solid rgba(52, 152, 219, 0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, var(--success-color), #27ae60)',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto var(--spacing-lg)',
                      fontSize: '1.8rem',
                      boxShadow: '0 6px 20px rgba(46, 204, 113, 0.3)'
                    }}>📞</div>
                    
                    <h3 style={{ 
                      fontSize: '1.4rem', 
                      marginBottom: 'var(--spacing-md)',
                      color: 'var(--dark)'
                    }}>Call for Instant Quote</h3>
                    
                    <a href="tel:+441234567890" style={{
                      fontSize: '1.5rem',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--primary-color)',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: 'var(--spacing-md)'
                    }}>+44 123 456 7890</a>
                    
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'var(--gray)',
                      marginBottom: 'var(--spacing-lg)',
                      lineHeight: '1.4'
                    }}>Available Mon-Fri 8AM-6PM<br/>Saturday 9AM-4PM</p>
                    
                    <a href="tel:+441234567890" className="btn btn-primary" style={{
                      width: '100%',
                      fontSize: '1rem',
                      padding: 'var(--spacing-md) var(--spacing-lg)'
                    }}>
                      📞 Call Now
                    </a>
                  </div>

                  {/* Email Contact */}
                  <div className="contact-method" style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--border-radius-lg)',
                    padding: 'var(--spacing-2xl)',
                    textAlign: 'center',
                    border: '2px solid rgba(52, 152, 219, 0.1)',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto var(--spacing-lg)',
                      fontSize: '1.8rem',
                      boxShadow: '0 6px 20px rgba(52, 152, 219, 0.3)'
                    }}>✉️</div>
                    
                    <h3 style={{ 
                      fontSize: '1.4rem', 
                      marginBottom: 'var(--spacing-md)',
                      color: 'var(--dark)'
                    }}>Send Email Inquiry</h3>
                    
                    <a href="mailto:info@sparklingcleaners.co.uk" style={{
                      fontSize: '1.1rem',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--primary-color)',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: 'var(--spacing-md)',
                      wordBreak: 'break-word'
                    }}>info@sparklingcleaners.co.uk</a>
                    
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'var(--gray)',
                      marginBottom: 'var(--spacing-lg)',
                      lineHeight: '1.4'
                    }}>Detailed quotes within 2 hours<br/>Include property details for accuracy</p>
                    
                    <a href="mailto:info@sparklingcleaners.co.uk" className="btn btn-secondary" style={{
                      width: '100%',
                      fontSize: '1rem',
                      padding: 'var(--spacing-md) var(--spacing-lg)'
                    }}>
                      ✉️ Send Email
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App