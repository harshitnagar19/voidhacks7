import React from 'react';
import apptestify from "../assets/previousSponsers/logos/apptestify.png"
import dmw from "../assets/previousSponsers/logos/dmw.png"
import gitHub from "../assets/previousSponsers/logos/gitHub.png"
import helloIceCream from "../assets/previousSponsers/logos/helloIceCream.png"
import ieee from "../assets/previousSponsers/logos/ieee.png"
import infoviam from "../assets/previousSponsers/logos/infoviam.png"
import innogent from "../assets/previousSponsers/logos/innogent.png"
import jetBrains from "../assets/previousSponsers/logos/jetBrains.png"
import microsoft from "../assets/previousSponsers/logos/microsoft.png"
import plam from "../assets/previousSponsers/logos/plam.png"
import programmerPoint from "../assets/previousSponsers/logos/programmerPoint.png"
import simpleShiksha from "../assets/previousSponsers/logos/simpleShiksha.png"
import stickermule from "../assets/previousSponsers/logos/stickermule.png"
import yhills from "../assets/previousSponsers/logos/yhills.png"

export default function VoidHacksSponsors() {

  const sponsors = [
    { name: 'apptestify', tier: 'platinum', color: '#06b6d4', logo: apptestify },
    { name: 'DMW', tier: 'platinum', color: '#8b5cf6', logo: dmw },
    { name: 'GitHub', tier: 'gold', color: '#22d3ee', logo: gitHub },
    { name: 'helloIceCream', tier: 'gold', color: '#a855f7', logo: helloIceCream },
    { name: 'IEEE', tier: 'silver', color: '#ec4899', logo: ieee },
    { name: 'infoviam', tier: 'silver', color: '#06b6d4', logo: infoviam },
    { name: 'innogent', tier: 'silver', color: '#8b5cf6', logo: innogent },
    { name: 'jetBrains', tier: 'bronze', color: '#22d3ee', logo: jetBrains },
    { name: 'microsoft', tier: 'bronze', color: '#a855f7', logo: microsoft },
    { name: 'plam', tier: 'bronze', color: '#ec4899', logo: plam },
    { name: 'programmerPoint', tier: 'bronze', color: '#ec4899', logo: programmerPoint },
    { name: 'simpleShiksha', tier: 'bronze', color: '#ec4899', logo: simpleShiksha },
    { name: 'stickermule', tier: 'bronze', color: '#ec4899', logo: stickermule },
    { name: 'yhills', tier: 'bronze', color: '#ec4899', logo: yhills }
  ];

  // Duplicate for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      padding: '4rem 0',
      backgroundColor: '#000',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    backgroundEffects: {
      position: 'absolute',
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
      left: '0',
      width: '400px',
      height: '400px',
      backgroundColor: '#06b6d4',
      borderRadius: '50%',
      filter: 'blur(100px)',
      opacity: 0.1,
      animation: 'pulse 4s ease-in-out infinite'
    },
    gradient2: {
      position: 'absolute',
      top: '20%',
      right: '0',
      width: '400px',
      height: '400px',
      backgroundColor: '#a855f7',
      borderRadius: '50%',
      filter: 'blur(100px)',
      opacity: 0.1,
      animation: 'pulse 4s ease-in-out infinite',
      animationDelay: '2s'
    },
    content: {
      position: 'relative',
      zIndex: 10
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
      padding: '0 1.5rem'
    },
    versionTag: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      background: 'rgba(6, 182, 212, 0.1)',
      border: '1px solid rgba(6, 182, 212, 0.3)',
      borderRadius: '9999px',
      color: '#22d3ee',
      fontSize: '0.875rem',
      fontFamily: 'monospace',
      marginBottom: '1rem',
      backdropFilter: 'blur(4px)'
    },
    title: {
      fontSize: '3rem',
      fontWeight: '900',
      color: '#fff',
      letterSpacing: '-0.05em',
      marginBottom: '0.5rem'
    },
    titleGradient: {
      background: 'linear-gradient(to right, #22d3ee, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      color: '#9ca3af',
      fontSize: '1rem',
      fontWeight: '300',
      letterSpacing: '0.1em'
    },
    marqueeWrapper: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden'
    },
    marqueeContent: {
      display: 'flex',
      gap: '2rem',
      animation: 'scroll 40s linear infinite',
      willChange: 'transform'
    },
    marqueeContentFast: {
      display: 'flex',
      gap: '2rem',
      animation: 'scroll 30s linear infinite',
      willChange: 'transform'
    },
    marqueeRow: {
      marginBottom: '2rem'
    },
    sponsorCard: {
      flex: '0 0 auto',
      width: '280px',
      height: '140px',
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      padding: '1.5rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    cardGlow: {
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },
    sponsorName: {
      fontSize: '1.5rem',
      fontWeight: '900',
      color: '#fff',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      position: 'relative',
      zIndex: 1,
      marginTop: '0.5rem'
    },
    sponsorLogo: {
      width: '120px',
      height: '60px',
      objectFit: 'contain',
      opacity: 0.9,
      transition: 'all 0.3s ease',
      position: 'relative',
      zIndex: 1
    },
    tierBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      position: 'relative',
      zIndex: 1
    },
    fadeLeft: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '200px',
      height: '100%',
      background: 'linear-gradient(to right, #000 0%, transparent 100%)',
      zIndex: 20,
      pointerEvents: 'none'
    },
    fadeRight: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: '200px',
      height: '100%',
      background: 'linear-gradient(to left, #000 0%, transparent 100%)',
      zIndex: 20,
      pointerEvents: 'none'
    },
    statsBar: {
      display: 'flex',
      justifyContent: 'center',
      gap: '3rem',
      marginTop: '3rem',
      padding: '2rem',
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      maxWidth: '800px',
      margin: '3rem auto 0',
      marginLeft: '1.5rem',
      marginRight: '1.5rem'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '900',
      background: 'linear-gradient(to right, #22d3ee, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.25rem'
    },
    statLabel: {
      color: '#9ca3af',
      fontSize: '0.875rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    info:{
        display:'flex',
        justifyContent: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundEffects}>
        <div style={styles.gradient1}></div>
        <div style={styles.gradient2}></div>
      </div>

      <div style={styles.content}>
        <div style={styles.header}>
          <div style={styles.versionTag}>
            TRUSTED BY THE BEST
          </div>
          <h2 style={styles.title}>
            Previous Year <span style={styles.titleGradient}>Sponsors</span>
          </h2>
          <p style={styles.subtitle}>POWERING INNOVATION SINCE 2018</p>
        </div>

        <div style={styles.marqueeRow}>
          <div style={styles.marqueeWrapper}>
            <div style={styles.fadeLeft}></div>
            <div style={styles.fadeRight}></div>
            <div style={styles.marqueeContent}>
              {duplicatedSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.sponsorCard,
                    borderColor: `${sponsor.color}30`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                    e.currentTarget.style.borderColor = `${sponsor.color}60`;
                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.5), 0 0 20px ${sponsor.color}40`;
                    e.currentTarget.querySelector('.glow').style.opacity = '1';
                    const logo = e.currentTarget.querySelector('.sponsor-logo');
                    if (logo) {
                      logo.style.opacity = '1';
                      logo.style.transform = 'scale(1.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = `${sponsor.color}30`;
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.querySelector('.glow').style.opacity = '0';
                    const logo = e.currentTarget.querySelector('.sponsor-logo');
                    if (logo) {
                      logo.style.opacity = '0.9';
                      logo.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <div 
                    className="glow"
                    style={{
                      ...styles.cardGlow,
                      background: `radial-gradient(circle, ${sponsor.color}30 0%, transparent 70%)`
                    }}
                  ></div>
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="sponsor-logo"
                    style={styles.sponsorLogo}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div style={styles.sponsorName}>{sponsor.name}</div>
                  <div
                    style={{
                      ...styles.tierBadge,
                      backgroundColor: `${sponsor.color}20`,
                      color: sponsor.color,
                      border: `1px solid ${sponsor.color}40`
                    }}
                  >
                    {sponsor.tier}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.marqueeRow}>
          <div style={styles.marqueeWrapper}>
            <div style={styles.fadeLeft}></div>
            <div style={styles.fadeRight}></div>
            <div style={styles.marqueeContentFast}>
              {[...duplicatedSponsors].reverse().map((sponsor, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.sponsorCard,
                    borderColor: `${sponsor.color}30`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                    e.currentTarget.style.borderColor = `${sponsor.color}60`;
                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.5), 0 0 20px ${sponsor.color}40`;
                    e.currentTarget.querySelector('.glow').style.opacity = '1';
                    const logo = e.currentTarget.querySelector('.sponsor-logo');
                    if (logo) {
                      logo.style.opacity = '1';
                      logo.style.transform = 'scale(1.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = `${sponsor.color}30`;
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.querySelector('.glow').style.opacity = '0';
                    const logo = e.currentTarget.querySelector('.sponsor-logo');
                    if (logo) {
                      logo.style.opacity = '0.9';
                      logo.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <div 
                    className="glow"
                    style={{
                      ...styles.cardGlow,
                      background: `radial-gradient(circle, ${sponsor.color}30 0%, transparent 70%)`
                    }}
                  ></div>
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="sponsor-logo"
                    style={styles.sponsorLogo}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div style={styles.sponsorName}>{sponsor.name}</div>
                  <div
                    style={{
                      ...styles.tierBadge,
                      backgroundColor: `${sponsor.color}20`,
                      color: sponsor.color,
                      border: `1px solid ${sponsor.color}40`
                    }}
                  >
                    {sponsor.tier}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div style={styles.info}>
        <div style={styles.statsBar}>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>10+</div>
            <div style={styles.statLabel}>Sponsors</div>
          </div>
          <div style={styles.statItem}>
            <div style={{...styles.statNumber, background: 'linear-gradient(to right, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>6+</div>
            <div style={styles.statLabel}>Years</div>
          </div>
          <div style={styles.statItem}>
            <div style={{...styles.statNumber, background: 'linear-gradient(to right, #ec4899, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>₹10L+</div>
            <div style={styles.statLabel}>Prize Pool</div>
          </div>
        </div>
        </div>
        
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        @media (max-width: 768px) {
          h2 { font-size: 2rem !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}