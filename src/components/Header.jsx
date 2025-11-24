import React from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header" style={{ 
      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(52, 152, 219, 0.1)',
      padding: 'var(--spacing-md) 0'
    }}>
      <div className="container">
        <nav className="navbar" style={{ 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: 0,
          position: 'relative'
        }}>
          {/* Logo */}
          <a href="#" className="logo" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'var(--spacing-sm)', 
            textDecoration: 'none',
            padding: 'var(--spacing-sm) 0',
            zIndex: 1001
          }}>
            <div className="logo-icon" style={{ 
              background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)'
            }}>
              ✨
            </div>
            <div className="logo-text">
              <div style={{ 
                fontSize: '1.2rem', 
                fontWeight: 'var(--font-weight-bold)', 
                color: 'var(--primary-color)',
                lineHeight: '1.2'
              }}>
                The Sparkling Cleaners
              </div>
              <div className="logo-tagline" style={{ 
                fontSize: '0.7rem', 
                color: 'var(--gray)', 
                fontWeight: 'var(--font-weight-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Professional Cleaning Services
              </div>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="desktop-nav" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'var(--spacing-xl)',
            backgroundColor: 'rgba(255,255,255,0.8)',
            padding: 'var(--spacing-sm) var(--spacing-lg)',
            borderRadius: '50px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <a href="#services" style={{ 
              color: 'var(--dark)', 
              textDecoration: 'none', 
              padding: 'var(--spacing-sm) var(--spacing-md)',
              borderRadius: '25px',
              fontWeight: 'var(--font-weight-medium)',
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'var(--secondary-color)';
              e.target.style.color = 'var(--primary-color)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'var(--dark)';
              e.target.style.transform = 'translateY(0)';
            }}>
              Services
            </a>
            <a href="#about" style={{ 
              color: 'var(--dark)', 
              textDecoration: 'none', 
              padding: 'var(--spacing-sm) var(--spacing-md)',
              borderRadius: '25px',
              fontWeight: 'var(--font-weight-medium)',
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'var(--secondary-color)';
              e.target.style.color = 'var(--primary-color)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'var(--dark)';
              e.target.style.transform = 'translateY(0)';
            }}>
              About
            </a>
            <a href="#contact" style={{ 
              color: 'var(--dark)', 
              textDecoration: 'none', 
              padding: 'var(--spacing-sm) var(--spacing-md)',
              borderRadius: '25px',
              fontWeight: 'var(--font-weight-medium)',
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'var(--secondary-color)';
              e.target.style.color = 'var(--primary-color)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'var(--dark)';
              e.target.style.transform = 'translateY(0)';
            }}>
              Contact
            </a>
            <a href="tel:+441234567890" className="btn" style={{ 
              whiteSpace: 'nowrap',
              background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
              color: 'white',
              border: 'none',
              padding: 'var(--spacing-sm) var(--spacing-lg)',
              borderRadius: '30px',
              fontWeight: 'var(--font-weight-bold)',
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(52, 152, 219, 0.4)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-xs)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 25px rgba(52, 152, 219, 0.5)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(52, 152, 219, 0.4)';
            }}>
              <span style={{ fontSize: '1.1rem' }}>📞</span>
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            style={{
              display: 'none',
              background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
              border: 'none',
              borderRadius: '12px',
              padding: 'var(--spacing-sm)',
              color: 'white',
              fontSize: '1.2rem',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(52, 152, 219, 0.4)',
              transition: 'all 0.3s ease',
              zIndex: 1001,
              width: '48px',
              height: '48px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              transition: 'all 0.3s ease'
            }}>
              <span style={{
                width: '20px',
                height: '2px',
                backgroundColor: 'white',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
              }}></span>
              <span style={{
                width: '20px',
                height: '2px',
                backgroundColor: 'white',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                opacity: isMenuOpen ? '0' : '1'
              }}></span>
              <span style={{
                width: '20px',
                height: '2px',
                backgroundColor: 'white',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
              }}></span>
            </div>
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div 
              className="mobile-menu-overlay"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999,
                backdropFilter: 'blur(5px)'
              }}
              onClick={closeMenu}
            />
          )}

          {/* Mobile Menu */}
          <div 
            className="mobile-menu"
            style={{
              position: 'fixed',
              top: 0,
              right: isMenuOpen ? '0' : '-100%',
              width: '280px',
              height: '100vh',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: isMenuOpen ? '-10px 0 30px rgba(0,0,0,0.1)' : 'none',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              padding: 'var(--spacing-xl) var(--spacing-lg)',
              paddingTop: '100px'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)'
            }}>
              <a 
                href="#services" 
                onClick={closeMenu}
                style={{
                  color: 'var(--dark)',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'var(--font-weight-medium)',
                  padding: 'var(--spacing-md) var(--spacing-lg)',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(52, 152, 219, 0.05)',
                  border: '1px solid rgba(52, 152, 219, 0.1)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--secondary-color)';
                  e.target.style.color = 'var(--primary-color)';
                  e.target.style.borderColor = 'var(--primary-color)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'rgba(52, 152, 219, 0.05)';
                  e.target.style.color = 'var(--dark)';
                  e.target.style.borderColor = 'rgba(52, 152, 219, 0.1)';
                }}
              >
                <span>🧽</span> Services
              </a>
              
              <a 
                href="#about" 
                onClick={closeMenu}
                style={{
                  color: 'var(--dark)',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'var(--font-weight-medium)',
                  padding: 'var(--spacing-md) var(--spacing-lg)',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(52, 152, 219, 0.05)',
                  border: '1px solid rgba(52, 152, 219, 0.1)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--secondary-color)';
                  e.target.style.color = 'var(--primary-color)';
                  e.target.style.borderColor = 'var(--primary-color)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'rgba(52, 152, 219, 0.05)';
                  e.target.style.color = 'var(--dark)';
                  e.target.style.borderColor = 'rgba(52, 152, 219, 0.1)';
                }}
              >
                <span>ℹ️</span> About
              </a>
              
              <a 
                href="#contact" 
                onClick={closeMenu}
                style={{
                  color: 'var(--dark)',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'var(--font-weight-medium)',
                  padding: 'var(--spacing-md) var(--spacing-lg)',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(52, 152, 219, 0.05)',
                  border: '1px solid rgba(52, 152, 219, 0.1)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--secondary-color)';
                  e.target.style.color = 'var(--primary-color)';
                  e.target.style.borderColor = 'var(--primary-color)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'rgba(52, 152, 219, 0.05)';
                  e.target.style.color = 'var(--dark)';
                  e.target.style.borderColor = 'rgba(52, 152, 219, 0.1)';
                }}
              >
                <span>💬</span> Contact
              </a>
            </div>

            <div style={{
              marginTop: 'var(--spacing-xl)',
              paddingTop: 'var(--spacing-xl)',
              borderTop: '1px solid rgba(52, 152, 219, 0.1)'
            }}>
              <a 
                href="tel:+441234567890" 
                onClick={closeMenu}
                style={{
                  background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'var(--font-weight-bold)',
                  padding: 'var(--spacing-md) var(--spacing-lg)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--spacing-sm)',
                  boxShadow: '0 4px 15px rgba(52, 152, 219, 0.4)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(52, 152, 219, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(52, 152, 219, 0.4)';
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>📞</span>
                Call Now
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header