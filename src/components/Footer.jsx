

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" style={{
      background: 'linear-gradient(135deg, #1a252f 0%, #2c3e50 50%, #34495e 100%)',
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
        <div className="footer-content" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          
          {/* Company Section */}
          <div className="footer-section" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: 'var(--spacing-lg)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
              marginBottom: 'var(--spacing-md)'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: '0 4px 15px rgba(52, 152, 219, 0.4)'
              }}>
                ✨
              </div>
              <div>
                <h3 style={{ 
                  color: 'white', 
                  fontSize: '1.3rem', 
                  fontWeight: 'var(--font-weight-bold)',
                  margin: 0,
                  lineHeight: '1.2'
                }}>
                  The Sparkling Cleaners
                </h3>
                <div style={{
                  fontSize: '0.8rem',
                  opacity: '0.8',
                  fontWeight: 'var(--font-weight-medium)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Professional Services
                </div>
              </div>
            </div>
            <p style={{ 
              lineHeight: '1.6', 
              opacity: '0.9',
              marginBottom: 'var(--spacing-lg)',
              fontSize: '0.95rem'
            }}>
              Creating cleaner, healthier environments for homes and offices across London and surrounding areas.
            </p>
            <div className="social-links" style={{
              display: 'flex',
              gap: 'var(--spacing-sm)'
            }}>
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '45px',
                  height: '45px',
                  background: 'rgba(24, 119, 242, 0.2)',
                  borderRadius: '50%',
                  fontSize: '1.4rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(5px)',
                  border: '2px solid rgba(24, 119, 242, 0.3)',
                  color: '#1877f2'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#1877f2';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.boxShadow = '0 8px 20px rgba(24, 119, 242, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(24, 119, 242, 0.2)';
                  e.target.style.color = '#1877f2';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '45px',
                  height: '45px',
                  background: 'rgba(225, 48, 108, 0.2)',
                  borderRadius: '50%',
                  fontSize: '1.4rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(5px)',
                  border: '2px solid rgba(225, 48, 108, 0.3)',
                  color: '#E1306C'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.boxShadow = '0 8px 20px rgba(225, 48, 108, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(225, 48, 108, 0.2)';
                  e.target.style.color = '#E1306C';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a 
                href="https://x.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '45px',
                  height: '45px',
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '50%',
                  fontSize: '1.4rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(5px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: 'white'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#000000';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(0, 0, 0, 0.2)';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services Section */}
          <div className="footer-section">
            <h3 style={{ 
              color: 'white', 
              marginBottom: 'var(--spacing-lg)',
              fontSize: '1.2rem',
              fontWeight: 'var(--font-weight-bold)'
            }}>
              Our Services
            </h3>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
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
                <li key={index}>
                  <a 
                    href="#services" 
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      padding: 'var(--spacing-xs) 0',
                      display: 'block',
                      transition: 'all 0.3s ease',
                      borderLeft: '3px solid transparent',
                      paddingLeft: 'var(--spacing-sm)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = 'white';
                      e.target.style.borderLeftColor = 'var(--primary-light)';
                      e.target.style.paddingLeft = 'var(--spacing-md)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                      e.target.style.borderLeftColor = 'transparent';
                      e.target.style.paddingLeft = 'var(--spacing-sm)';
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="footer-section">
            <h3 style={{ 
              color: 'white', 
              marginBottom: 'var(--spacing-lg)',
              fontSize: '1.2rem',
              fontWeight: 'var(--font-weight-bold)'
            }}>
              Get In Touch
            </h3>
            <div className="contact-info" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)' }}>
                <span style={{ fontSize: '1.2rem' }}>📍</span>
                <div style={{ opacity: '0.9', fontSize: '0.95rem' }}>
                  Currently serving London & surrounding areas<br />
                  <small style={{ opacity: '0.7' }}>Expanding to more locations soon</small>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span style={{ fontSize: '1.2rem' }}>📞</span>
                <a 
                    href="tel:+441234567890" 
                  style={{ 
                    color: 'var(--primary-light)', 
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 'var(--font-weight-medium)'
                  }}
                >
                  +44 123 456 7890
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span style={{ fontSize: '1.2rem' }}>✉️</span>
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
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-sm)' }}>
                <span style={{ fontSize: '1.2rem' }}>🕒</span>
                <div style={{ opacity: '0.9', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  Mon-Fri: 8AM-6PM<br />
                  Saturday: 9AM-4PM<br />
                  Sunday: Closed
                </div>
              </div>
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