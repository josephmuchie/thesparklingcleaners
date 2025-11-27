import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { FaPhone, FaEnvelope, FaCalendarAlt } from 'react-icons/fa'
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
            <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
              <div className="feature-item" style={{ marginBottom: 'var(--spacing-md)' }}>
                <div className="feature-icon">
                  <FaCalendarAlt style={{ fontSize: '3.5rem', color: '#006bff' }} />
                </div>
                <h3>Flexible Scheduling</h3>
                <p style={{ marginBottom: 'var(--spacing-md)' }}>Book cleaning sessions that fit your schedule - weekly, bi-weekly, or one-time services.</p>
              
                {/* Calendly Widget */}
                <iframe
                  src="https://calendly.com/your-calendly-username"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Schedule a cleaning service"
                  style={{ 
                    border: 'none',
                    borderRadius: 'var(--border-radius)',
                    height: '700px'
                  }}
                  className="calendly-iframe"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Sparkling Team Promises Section */}
        <section className="section bg-light" style={{
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Sparkling Icons Decorations */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            fontSize: '2.5rem',
            color: '#3498db',
            animation: 'sparkle 2s ease-in-out infinite'
          }}>✨</div>
          <div style={{
            position: 'absolute',
            top: '60px',
            right: '40px',
            fontSize: '1.8rem',
            color: '#f39c12',
            animation: 'sparkleRotate 2.5s ease-in-out infinite'
          }}>✨</div>
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '60px',
            fontSize: '2rem',
            color: '#3498db',
            animation: 'sparkle 3s ease-in-out infinite'
          }}>✨</div>
          <div style={{
            position: 'absolute',
            bottom: '80px',
            right: '30px',
            fontSize: '2.5rem',
            color: '#f39c12',
            animation: 'sparkleRotate 2.2s ease-in-out infinite'
          }}>✨</div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            fontSize: '1.5rem',
            color: '#3498db',
            animation: 'sparkle 2.8s ease-in-out infinite'
          }}>✨</div>
          <div style={{
            position: 'absolute',
            top: '30%',
            right: '15%',
            fontSize: '1.8rem',
            color: '#f39c12',
            animation: 'sparkleRotate 2.3s ease-in-out infinite'
          }}>✨</div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              textAlign: 'center',
              marginBottom: 'var(--spacing-xl)'
            }}>
              <h2 className="section-title">✨ Our Sparkling Team Promise ✨</h2>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--gray)',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Complete peace of mind with every clean
              </p>
            </div>

            <div style={{
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {[
                'We are not worried with dirty floors - The Sparkling Team would deep clean it.',
                'We are not worried about greasy oven -- The Sparkling Team de-greasy it completely.',
                'We are not worried with greasy kitchen sinks-- The Sparkling Team de-greasy it completely.',
                'We are not worried with greasy kitchen walls-- The Sparkling Team de-greasy it completely.',
                'We are not worried with dusty carpet-- The Sparkling Team will hoove it.',
                'We are not worried with smudges on windows & mirrors -- The Sparkling Team will wipe them out.',
                'We are not worried about unattended laundry -- The Sparkling Team will wash it, iron it and pack it.',
                'We are not worried about dirty couches/ sofas -- The Sparkling Team will vacuum them.'
              ].map((promise, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--spacing-sm)',
                  padding: 'var(--spacing-sm) var(--spacing-md)',
                  marginBottom: 'var(--spacing-xs)',
                  background: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--secondary-color)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(52, 152, 219, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = '#fbbf24';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}>
                  <div style={{
                    fontSize: '1.5rem',
                    minWidth: '28px',
                    flexShrink: 0
                  }}>
                    ✨
                  </div>
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.5',
                    margin: 0,
                    color: 'var(--dark)'
                  }}>
                    {promise.split('The Sparkling Team')[0]}
                    <span style={{
                      color: 'var(--primary-color)',
                      fontWeight: 'var(--font-weight-bold)'
                    }}>
                      The Sparkling Team
                    </span>
                    {promise.split('The Sparkling Team')[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section" id="services">
          <div className="container">
            <h2 className="section-title">Do You Need Any Cleaning Services?</h2>
            <p className="text-center" style={{ marginBottom: 'var(--spacing-xxl)', color: 'var(--gray)', fontSize: '1.125rem' }}>
              One Stop Shop For All Your Cleaning Needs
            </p>
            
            <div className="grid grid-3" style={{ gap: 'var(--spacing-xl)' }}>
              <div className="card service-card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="General cleaning service" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>✓ General Cleaning</h3>
                  <p style={{ color: 'var(--gray)', marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>
                    Regular maintenance and deep cleaning for your home. We handle everything from kitchens to bathrooms.
                  </p>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Get Quote</a>
                </div>
              </div>
              
              <div className="card service-card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Office cleaning service" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>✓ Office Cleaning</h3>
                  <p style={{ color: 'var(--gray)', marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>
                    Professional office cleaning to keep your workspace fresh, organized, and productive.
                  </p>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Get Quote</a>
                </div>
              </div>
              
              <div className="card service-card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Move-in/move-out cleaning service" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>✓ Move-In/Move-Out Cleaning</h3>
                  <p style={{ color: 'var(--gray)', marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>
                    Comprehensive cleaning for moving in or out. Make your new place sparkle or leave your old one pristine.
                  </p>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Get Quote</a>
                </div>
              </div>

              <div className="card service-card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Warehouse cleaning service" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>✓ Warehouse Cleaning</h3>
                  <p style={{ color: 'var(--gray)', marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>
                    Industrial-strength cleaning for warehouses and large commercial spaces.
                  </p>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Get Quote</a>
                </div>
              </div>

              <div className="card service-card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Kitchen deep cleaning service" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>✓ Kitchen Deep Cleaning</h3>
                  <p style={{ color: 'var(--gray)', marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>
                    Thorough kitchen cleaning including ovens, sinks, walls, and all surfaces. Grease-free guaranteed.
                  </p>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Get Quote</a>
                </div>
              </div>

              <div className="card service-card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="After-party cleaning service" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>✓ After-Party Cleaning</h3>
                  <p style={{ color: 'var(--gray)', marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>
                    Complete post-event cleanup. We'll restore your space to its pre-party condition.
                  </p>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Get Quote</a>
                </div>
              </div>

              <div className="card service-card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Upholstery and carpet cleaning service" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>✓ Upholstery/Carpet Cleaning</h3>
                  <p style={{ color: 'var(--gray)', marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>
                    Deep cleaning for carpets, sofas, and upholstered furniture. Remove stains and refresh fabrics.
                  </p>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Get Quote</a>
                </div>
              </div>

              <div className="card service-card" style={{ overflow: 'hidden', height: '100%' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Window and glass cleaning service" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>✓ Window/Glass Cleaning</h3>
                  <p style={{ color: 'var(--gray)', marginBottom: 'var(--spacing-md)', fontSize: '0.95rem' }}>
                    Crystal clear windows and glass surfaces inside and out. Streak-free results guaranteed.
                  </p>
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
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--border-radius-xl)',
              padding: 'var(--spacing-3xl)',
              boxShadow: '0 20px 60px rgba(52, 152, 219, 0.15)',
              border: '2px solid rgba(52, 152, 219, 0.1)',
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              {/* Header with Icon */}
              <div style={{
                fontSize: '3.5rem',
                marginBottom: 'var(--spacing-md)'
              }}>✨</div>
              
              <h2 style={{ 
                fontSize: '2.5rem', 
                marginBottom: 'var(--spacing-md)',
                color: 'var(--dark)',
                fontWeight: 'var(--font-weight-bold)'
              }}>Ready to Get Started?</h2>
              
              <p style={{ 
                color: 'var(--gray)', 
                fontSize: '1.1rem', 
                maxWidth: '600px', 
                margin: '0 auto var(--spacing-xl) auto',
                lineHeight: '1.6'
              }}>
                Book your cleaning service today and let our professional team transform your space into a sparkling clean haven.
              </p>

              {/* Contact Info Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--spacing-xl)',
                marginBottom: 'var(--spacing-xl)',
                paddingTop: 'var(--spacing-lg)',
                borderTop: '1px solid rgba(52, 152, 219, 0.15)'
              }}>
                {/* Phone Info */}
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)', color: 'var(--primary-color)' }}>
                    <FaPhone />
                  </div>
                  <h4 style={{ 
                    fontSize: '1rem',
                    marginBottom: 'var(--spacing-sm)',
                    color: 'var(--dark)',
                    fontWeight: 'var(--font-weight-bold)'
                  }}>Call Us</h4>
                  <a href="tel:+441135450050" style={{
                    fontSize: '1.1rem',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--primary-color)',
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: 'var(--spacing-xs)'
                  }}>+44 113 545 0050</a>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--gray)',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>Mon-Fri 8AM-6PM<br/>Sat 9AM-4PM</p>
                </div>

                {/* Email Info */}
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)', color: 'var(--primary-color)' }}>
                    <FaEnvelope />
                  </div>
                  <h4 style={{ 
                    fontSize: '1rem',
                    marginBottom: 'var(--spacing-sm)',
                    color: 'var(--dark)',
                    fontWeight: 'var(--font-weight-bold)'
                  }}>Email Us</h4>
                  <a href="mailto:info@sparklingcleaners.co.uk" style={{
                    fontSize: '0.85rem',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--primary-color)',
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: 'var(--spacing-xs)',
                    wordBreak: 'keep-all',
                    whiteSpace: 'nowrap'
                  }}>info@sparklingcleaners.co.uk</a>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--gray)',
                    margin: 0
                  }}>Response within 2 hours</p>
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