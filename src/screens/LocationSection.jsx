import React, { useState } from 'react';

export default function LocationSection() {
  const [isMapHovered, setIsMapHovered] = useState(false);

  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#000',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      padding: '6rem 2rem 4rem'
    },
    gradientOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none'
    },
    gradient1: {
      position: 'absolute',
      top: '20%',
      left: '10%',
      width: '500px',
      height: '500px',
      backgroundColor: '#06b6d4',
      borderRadius: '50%',
      mixBlendMode: 'screen',
      filter: 'blur(120px)',
      opacity: 0.12,
      animation: 'float 10s infinite ease-in-out'
    },
    gradient2: {
      position: 'absolute',
      bottom: '20%',
      right: '10%',
      width: '500px',
      height: '500px',
      backgroundColor: '#a855f7',
      borderRadius: '50%',
      mixBlendMode: 'screen',
      filter: 'blur(120px)',
      opacity: 0.12,
      animation: 'float 10s infinite ease-in-out',
      animationDelay: '3s'
    },
    content: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem',
      animation: 'fadeInUp 1s ease-out'
    },
    badge: {
      display: 'inline-block',
      padding: '0.5rem 1.25rem',
      background: 'rgba(6, 182, 212, 0.1)',
      border: '1px solid rgba(6, 182, 212, 0.3)',
      borderRadius: '9999px',
      color: '#22d3ee',
      fontSize: '0.875rem',
      fontFamily: 'monospace',
      marginBottom: '1.5rem',
      backdropFilter: 'blur(4px)'
    },
    title: {
      fontSize: '4rem',
      fontWeight: '900',
      color: '#fff',
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      marginBottom: '1rem'
    },
    titleGradient: {
      background: 'linear-gradient(to right, #22d3ee, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.125rem',
      color: '#9ca3af',
      fontWeight: '300',
      maxWidth: '600px',
      margin: '0 auto'
    },
    mainGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      marginBottom: '2rem'
    },
    mapContainer: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1.5rem',
      border: '1px solid rgba(6, 182, 212, 0.15)',
      padding: '1.5rem',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden'
    },
    mapGlow: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))',
      opacity: 0,
      transition: 'opacity 0.4s',
      pointerEvents: 'none'
    },
    mapHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem'
    },
    mapIcon: {
      fontSize: '2rem'
    },
    mapTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#fff',
      margin: 0
    },
    mapFrame: {
      width: '100%',
      height: '400px',
      borderRadius: '1rem',
      border: '2px solid rgba(6, 182, 212, 0.2)',
      transition: 'all 0.4s'
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    infoCard: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1.25rem',
      border: '1px solid rgba(6, 182, 212, 0.15)',
      padding: '2rem',
      transition: 'all 0.3s',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    cardGlow: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(168, 85, 247, 0.08))',
      opacity: 0,
      transition: 'opacity 0.4s',
      pointerEvents: 'none'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.25rem'
    },
    iconBox: {
      width: '50px',
      height: '50px',
      borderRadius: '0.875rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      flexShrink: 0,
      transition: 'transform 0.4s'
    },
    iconBoxCyan: {
      background: 'rgba(6, 182, 212, 0.15)',
      border: '2px solid rgba(6, 182, 212, 0.3)'
    },
    iconBoxPurple: {
      background: 'rgba(168, 85, 247, 0.15)',
      border: '2px solid rgba(168, 85, 247, 0.3)'
    },
    iconBoxPink: {
      background: 'rgba(236, 72, 153, 0.15)',
      border: '2px solid rgba(236, 72, 153, 0.3)'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#fff',
      margin: 0
    },
    cardContent: {
      color: '#9ca3af',
      fontSize: '1rem',
      lineHeight: 1.6,
      position: 'relative',
      zIndex: 1
    },
    addressText: {
      marginBottom: '0.5rem'
    },
    linkButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '1rem',
      padding: '0.75rem 1.5rem',
      background: 'linear-gradient(to right, #06b6d4, #a855f7)',
      borderRadius: '9999px',
      color: '#fff',
      fontWeight: '600',
      fontSize: '0.875rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
      textDecoration: 'none'
    },
    quickInfoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      marginTop: '2rem'
    },
    quickInfoCard: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1rem',
      border: '1px solid rgba(6, 182, 212, 0.15)',
      padding: '1.5rem',
      textAlign: 'center',
      transition: 'all 0.3s',
      cursor: 'pointer'
    },
    quickIcon: {
      fontSize: '2rem',
      marginBottom: '0.75rem'
    },
    quickLabel: {
      color: '#9ca3af',
      fontSize: '0.75rem',
      marginBottom: '0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    quickValue: {
      color: '#fff',
      fontSize: '1rem',
      fontWeight: '600'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.gradientOverlay}>
        <div style={styles.gradient1}></div>
        <div style={styles.gradient2}></div>
      </div>

      <div style={styles.content}>
        <div style={styles.header}>
          <div style={styles.badge}>📍 Venue</div>
          <h1 style={styles.title}>
            Find <span style={styles.titleGradient}>Your Way</span>
          </h1>
          <p style={styles.subtitle}>
            Join us at SVVV, Indore for 36 hours of innovation and collaboration
          </p>
        </div>

        <div style={styles.mainGrid} className="main-grid">
          <div 
            style={styles.mapContainer}
            className="map-container"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.querySelector('.map-glow').style.opacity = '1';
              e.currentTarget.querySelector('.map-frame').style.borderColor = 'rgba(6, 182, 212, 0.5)';
              e.currentTarget.querySelector('.map-frame').style.boxShadow = '0 20px 60px rgba(6, 182, 212, 0.3)';
              setIsMapHovered(true);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.querySelector('.map-glow').style.opacity = '0';
              e.currentTarget.querySelector('.map-frame').style.borderColor = 'rgba(6, 182, 212, 0.2)';
              e.currentTarget.querySelector('.map-frame').style.boxShadow = 'none';
              setIsMapHovered(false);
            }}
          >
            <div className="map-glow" style={styles.mapGlow}></div>
            <div style={styles.mapHeader}>
              <span style={styles.mapIcon}>🗺️</span>
              <h3 style={styles.mapTitle}>Interactive Map</h3>
            </div>
            <iframe
              className="map-frame"
              style={styles.mapFrame}
              src="!4f13.1!3m3!1m2!1s0x3962fd43e6b4f33f%3A0xa2c3c2b5b8e0b4f5!2sShri%20Vaishnav%20Vidyapeeth%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div style={styles.infoContainer}>
            <div 
              style={styles.infoCard}
              className="info-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.querySelector('.card-glow').style.opacity = '1';
                e.currentTarget.querySelector('.icon-box').style.transform = 'scale(1.15) rotate(5deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.querySelector('.card-glow').style.opacity = '0';
                e.currentTarget.querySelector('.icon-box').style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <div className="card-glow" style={styles.cardGlow}></div>
              <div style={styles.cardHeader}>
                <div className="icon-box" style={{...styles.iconBox, ...styles.iconBoxCyan}}>
                  📍
                </div>
                <h3 style={styles.cardTitle}>Venue Address</h3>
              </div>
              <div style={styles.cardContent}>
                <p style={styles.addressText}>
                  <strong style={{color: '#fff'}}>Shri Vaishnav Vidyapeeth Vishwavidyalaya</strong>
                </p>
                <p style={styles.addressText}>
                  Gram Baroli, Sanwer Road, Indore
                </p>
                <p style={styles.addressText}>
                  Madhya Pradesh 453111, India
                </p>
                <a 
                  href="https://maps.app.goo.gl/hthsFQXSvrwkeZrK6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.linkButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(6, 182, 212, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>🧭</span>
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div 
              style={styles.infoCard}
              className="info-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.querySelector('.card-glow').style.opacity = '1';
                e.currentTarget.querySelector('.icon-box').style.transform = 'scale(1.15) rotate(-5deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.querySelector('.card-glow').style.opacity = '0';
                e.currentTarget.querySelector('.icon-box').style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <div className="card-glow" style={styles.cardGlow}></div>
              <div style={styles.cardHeader}>
                <div className="icon-box" style={{...styles.iconBox, ...styles.iconBoxPurple}}>
                  🚗
                </div>
                <h3 style={styles.cardTitle}>Getting There</h3>
              </div>
              <div style={styles.cardContent}>
                <p style={{marginBottom: '0.75rem'}}>
                  <strong style={{color: '#a855f7'}}>From Indore Airport:</strong> 15 km (25 mins)
                </p>
                <p style={{marginBottom: '0.75rem'}}>
                  <strong style={{color: '#a855f7'}}>From Indore Railway Station:</strong> 18 km (30 mins)
                </p>
                <p>
                  <strong style={{color: '#a855f7'}}>Public Transport:</strong> Local buses and cabs available
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.quickInfoGrid} className="quick-info-grid">
          <div 
            style={styles.quickInfoCard}
            className="quick-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(6, 182, 212, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={styles.quickIcon}>🏨</div>
            <div style={styles.quickLabel}>Accommodation</div>
            <div style={styles.quickValue}>On Campus</div>
          </div>

          <div 
            style={styles.quickInfoCard}
            className="quick-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={styles.quickIcon}>🍕</div>
            <div style={styles.quickLabel}>Food & Drinks</div>
            <div style={styles.quickValue}>Provided 24/7</div>
          </div>

          <div 
            style={styles.quickInfoCard}
            className="quick-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.4)';
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(236, 72, 153, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={styles.quickIcon}>📶</div>
            <div style={styles.quickLabel}>WiFi</div>
            <div style={styles.quickValue}>High Speed</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(40px, -40px);
          }
          66% {
            transform: translate(-30px, 30px);
          }
        }

        /* Tablet styles */
        @media (max-width: 968px) {
          .main-grid {
            grid-template-columns: 1fr !important;
          }

          .map-container iframe {
            height: 350px !important;
          }
        }

        /* Mobile styles */
        @media (max-width: 640px) {
          .quick-info-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }

          .map-container iframe {
            height: 300px !important;
          }

          .main-grid {
            gap: 1.5rem !important;
          }

          .info-card {
            padding: 1.5rem !important;
          }

          h1 {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}