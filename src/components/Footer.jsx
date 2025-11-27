

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #3d566e 100%)',
      color: 'white',
      padding: 'var(--spacing-xxl) 0 var(--spacing-xl) 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='sparkles' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='0.5' fill='%23ffffff' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23sparkles)'/%3E%3C/svg%3E")`,
        opacity: 0.3
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Logo Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-xxl)'
        }}>
          <img 
            src="/logo.png" 
            alt="The Sparkling Cleaners Logo" 
            style={{
              width: '550px',
              height: '275px',
              objectFit: 'contain',
              maxWidth: '100%'
            }}
          />
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.1rem',
            marginTop: 'var(--spacing-lg)',
            maxWidth: '600px',
            margin: 'var(--spacing-lg) auto 0'
          }}>
            Creating cleaner, healthier environments for homes and offices everywhere we serve.
          </p>
        </div>

        {/* Footer Content */}
        <div className="footer-content" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-xl)',
          textAlign: 'center'
        }}>
          
          {/* Services Section */}
          <div>
            <h3 style={{ 
              color: 'white', 
              marginBottom: 'var(--spacing-lg)',
              fontSize: '1.3rem',
              fontWeight: 'var(--font-weight-bold)'
            }}>
              Services
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)'
            }}>
              {[
                'House Cleaning',
                'Window Cleaning', 
                'Deep Cleaning',
                'Office Cleaning',
                'End of Tenancy'
              ].map((service, index) => (
                <div key={index} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.95rem'
                }}>
                  {service}
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 style={{ 
              color: 'white', 
              marginBottom: 'var(--spacing-lg)',
              fontSize: '1.3rem',
              fontWeight: 'var(--font-weight-bold)'
            }}>
              Contact
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)'
            }}>
              <a 
                href="tel:+441135450050" 
                style={{ 
                  color: 'var(--primary-light)', 
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}
              >
                +44 113 545 0050
              </a>
              <a 
                href="mailto:info@sparklingcleaners.co.uk" 
                style={{ 
                  color: 'var(--primary-light)', 
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}
              >
                info@sparklingcleaners.co.uk
              </a>
              <div style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '0.9rem' 
              }}>
                23 Blackbird Crescent<br/>
                WF1 4YZ, Wakefield
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 style={{ 
              color: 'white', 
              marginBottom: 'var(--spacing-lg)',
              fontSize: '1.3rem',
              fontWeight: 'var(--font-weight-bold)'
            }}>
              Follow Us
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--spacing-md)'
            }}>
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://x.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom" style={{
          textAlign: 'center',
          paddingTop: 'var(--spacing-lg)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          background: 'rgba(0, 0, 0, 0.1)',
          margin: '0 -var(--spacing-lg)',
          padding: 'var(--spacing-lg)',
          borderRadius: '15px 15px 0 0',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ 
            margin: 0, 
            opacity: '0.8', 
            fontSize: '0.9rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'var(--spacing-sm)',
            alignItems: 'center'
          }}>
            <span>&copy; {currentYear} The Sparkling Cleaners. All rights reserved.</span>
            <span style={{ opacity: '0.5' }}>|</span>
            <a 
              href="#" 
              style={{ 
                color: 'var(--primary-light)', 
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = 'white'}
              onMouseOut={(e) => e.target.style.color = 'var(--primary-light)'}
            >
              Privacy Policy
            </a>
            <span style={{ opacity: '0.5' }}>|</span>
            <a 
              href="#" 
              style={{ 
                color: 'var(--primary-light)', 
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = 'white'}
              onMouseOut={(e) => e.target.style.color = 'var(--primary-light)'}
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer