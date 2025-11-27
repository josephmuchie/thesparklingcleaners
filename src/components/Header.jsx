import React from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const services = [
    { name: 'House Cleaning', href: '#house-cleaning' },
    { name: 'Window Cleaning', href: '#window-cleaning' },
    { name: 'Deep Cleaning', href: '#deep-cleaning' },
    { name: 'Office Cleaning', href: '#office-cleaning' },
    { name: 'End of Tenancy', href: '#end-of-tenancy' }
  ];

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    // Close dropdown on escape key
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isServicesDropdownOpen]);

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
            textDecoration: 'none',
            padding: 'var(--spacing-sm) 0',
            zIndex: 1001
          }}>
            <div className="logo-icon" style={{ 
              width: '200px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: '60%',
              left: '0',
              transform: 'translateY(-50%)',
              zIndex: 10
            }}>
              <img 
                src="/logo.png" 
                alt="The Sparkling Cleaners Logo" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }} 
              />
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
            {/* Services Dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button 
                onClick={toggleServicesDropdown}
                style={{ 
                  color: 'var(--dark)', 
                  textDecoration: 'none', 
                  padding: 'var(--spacing-sm) var(--spacing-md)',
                  borderRadius: '25px',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
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
                }}
              >
                Services
              </button>
              
              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  marginTop: 'var(--spacing-sm)',
                  background: 'rgba(255,255,255,0.98)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '15px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                  border: '1px solid rgba(52, 152, 219, 0.1)',
                  minWidth: '220px',
                  zIndex: 1000,
                  overflow: 'hidden'
                }}>
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      onClick={() => setIsServicesDropdownOpen(false)}
                      style={{
                        display: 'block',
                        padding: 'var(--spacing-md) var(--spacing-lg)',
                        color: 'var(--dark)',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 'var(--font-weight-medium)',
                        transition: 'all 0.3s ease',
                        borderBottom: index < services.length - 1 ? '1px solid rgba(52, 152, 219, 0.1)' : 'none'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'var(--secondary-color)';
                        e.target.style.color = 'var(--primary-color)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = 'var(--dark)';
                      }}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
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
            <a href="tel:+441135450050" className="btn" style={{ 
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
              width: '100vw',
              height: '100vh',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)',
              backdropFilter: 'blur(20px)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Mobile Menu Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: 'var(--spacing-lg) var(--spacing-lg)',
              borderBottom: '1px solid rgba(52, 152, 219, 0.1)',
              background: 'rgba(255, 255, 255, 0.9)'
            }}>
              <button 
                onClick={closeMenu}
                style={{
                  background: 'rgba(52, 152, 219, 0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>×</span>
              </button>
            </div>

            {/* Navigation Items */}
            <div style={{
              flex: 1,
              padding: 'var(--spacing-xl) var(--spacing-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-lg)'
            }}>
              {/* Services Section - Always Expanded */}
              <div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'rgba(52, 152, 219, 0.7)',
                  marginBottom: 'var(--spacing-md)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Services
                </div>
                
                {/* Services List */}
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: 'var(--spacing-sm)',
                  border: '2px solid rgba(52, 152, 219, 0.1)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}>
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      onClick={closeMenu}
                      style={{
                        display: 'block',
                        padding: 'var(--spacing-md)',
                        color: 'var(--dark)',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 'var(--font-weight-medium)',
                        borderRadius: '12px',
                        marginBottom: index < services.length - 1 ? 'var(--spacing-xs)' : '0',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'var(--secondary-color)';
                        e.target.style.color = 'var(--primary-color)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = 'var(--dark)';
                      }}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* About */}
              <a 
                href="#about" 
                onClick={closeMenu}
                style={{
                  background: 'white',
                  border: '2px solid rgba(52, 152, 219, 0.1)',
                  borderRadius: '16px',
                  padding: 'var(--spacing-lg)',
                  fontSize: '1.2rem',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--dark)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  display: 'block'
                }}
                onMouseOver={(e) => {
                  e.target.style.borderColor = 'var(--primary-color)';
                  e.target.style.backgroundColor = 'var(--secondary-color)';
                }}
                onMouseOut={(e) => {
                  e.target.style.borderColor = 'rgba(52, 152, 219, 0.1)';
                  e.target.style.backgroundColor = 'white';
                }}
              >
                About Us
              </a>
              
              {/* Contact */}
              <a 
                href="#contact" 
                onClick={closeMenu}
                style={{
                  background: 'white',
                  border: '2px solid rgba(52, 152, 219, 0.1)',
                  borderRadius: '16px',
                  padding: 'var(--spacing-lg)',
                  fontSize: '1.2rem',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--dark)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  display: 'block'
                }}
                onMouseOver={(e) => {
                  e.target.style.borderColor = 'var(--primary-color)';
                  e.target.style.backgroundColor = 'var(--secondary-color)';
                }}
                onMouseOut={(e) => {
                  e.target.style.borderColor = 'rgba(52, 152, 219, 0.1)';
                  e.target.style.backgroundColor = 'white';
                }}
              >
                Contact
              </a>
            </div>

            {/* Call to Action */}
            <div style={{
              padding: 'var(--spacing-xl) var(--spacing-lg)',
              borderTop: '1px solid rgba(52, 152, 219, 0.1)',
              background: 'rgba(255, 255, 255, 0.5)'
            }}>
              <a 
                href="tel:+441135450050" 
                onClick={closeMenu}
                style={{
                  background: 'linear-gradient(135deg, var(--primary-color), #2980b9)',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.3rem',
                  fontWeight: 'var(--font-weight-bold)',
                  padding: 'var(--spacing-lg) var(--spacing-xl)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--spacing-md)',
                  boxShadow: '0 8px 25px rgba(52, 152, 219, 0.4)',
                  transition: 'all 0.3s ease',
                  width: '100%'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 30px rgba(52, 152, 219, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.4)';
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>📞</span>
                Call Now - Free Quote
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header