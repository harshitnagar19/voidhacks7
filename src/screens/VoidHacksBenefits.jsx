import React, { useState, useEffect, useRef } from 'react';
import { Gift, Award, Coffee, Users, Code, Trophy, Briefcase, Star, Zap, Target } from 'lucide-react';

export default function VoidHacksBenefits() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Trophy,
      title: '₹1 Lakh Prize Pool',
      description: 'Compete for exciting cash prizes and rewards across multiple tracks',
      color: '#22d3ee',
      gradient: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
      stats: '₹1L+',
      highlight: true
    },
    {
      icon: Award,
      title: 'Participation Certificate',
      description: 'Get officially recognized for your participation and add value to your resume',
      color: '#a855f7',
      gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
      stats: 'All Participants'
    },
    {
      icon: Gift,
      title: 'Swags & Goodies',
      description: 'Exclusive merchandise, stickers, and branded swag from top sponsors',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #db2777, #ec4899)',
      stats: 'Premium Kits'
    },
    {
      icon: Coffee,
      title: 'Food & Beverages',
      description: 'Unlimited meals, snacks, energy drinks, and refreshments throughout 24 hours',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #d97706, #f59e0b)',
      stats: '24/7 Available'
    },
    {
      icon: Users,
      title: 'Industry Mentorship',
      description: 'Get guidance from experienced industry professionals and tech leaders',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #059669, #10b981)',
      stats: '20+ Mentors'
    },
    {
      icon: Code,
      title: 'Technical Workshops',
      description: 'Hands-on workshops on AI/ML, FinTech, and latest development technologies',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
      stats: 'Live Sessions'
    },
    // {
    //   icon: Briefcase,
    //   title: 'Job & Internship Opportunities',
    //   description: 'Direct recruitment opportunities with participating companies and startups',
    //   color: '#06b6d4',
    //   gradient: 'linear-gradient(135deg, #0891b2, #06b6d4)',
    //   stats: '15+ Companies'
    // },
    // {
    //   icon: Zap,
    //   title: 'Exclusive API Access',
    //   description: 'Free credits and access to premium APIs and development tools from sponsors',
    //   color: '#ec4899',
    //   gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
    //   stats: 'Premium Tools'
    // },
    // {
    //   icon: Target,
    //   title: 'Portfolio Projects',
    //   description: 'Build impressive projects to showcase your skills to future employers',
    //   color: '#22d3ee',
    //   gradient: 'linear-gradient(135deg, #22d3ee, #67e8f9)',
    //   stats: 'Career Boost'
    // }
  ];

  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#000',
      padding: '5rem 1.5rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflowX: 'hidden',
      boxSizing: 'border-box'
    },
    backgroundEffects: {
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
      top: '10%',
      left: '5%',
      width: '600px',
      height: '600px',
      backgroundColor: '#06b6d4',
      borderRadius: '50%',
      filter: 'blur(120px)',
      opacity: 0.15,
      animation: 'float 10s ease-in-out infinite'
    },
    gradient2: {
      position: 'absolute',
      bottom: '10%',
      right: '5%',
      width: '500px',
      height: '500px',
      backgroundColor: '#a855f7',
      borderRadius: '50%',
      filter: 'blur(120px)',
      opacity: 0.15,
      animation: 'float 12s ease-in-out infinite reverse'
    },
    gradient3: {
      position: 'absolute',
      top: '40%',
      left: '50%',
      width: '400px',
      height: '400px',
      backgroundColor: '#ec4899',
      borderRadius: '50%',
      filter: 'blur(120px)',
      opacity: 0.1,
      animation: 'float 8s ease-in-out infinite'
    },
    content: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1400px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem'
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
      backdropFilter: 'blur(4px)',
      animation: 'fadeIn 1s ease-out'
    },
    title: {
      fontSize: '4rem',
      fontWeight: '900',
      color: '#fff',
      marginBottom: '0.5rem',
      lineHeight: 1
    },
    titleGradient: {
        background: 'linear-gradient(to right, #22d3ee, #a855f7, #ec4899)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      },
    subtitle: {
      color: '#9ca3af',
      fontSize: '1.25rem',
      fontWeight: '300',
      marginTop: '1rem'
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
      marginBottom: '3rem',
      boxSizing: 'border-box'
    },
    benefitCard: {
      position: 'relative',
      padding: '2rem',
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      overflow: 'hidden',
      opacity: 0,
      transform: 'translateY(30px)'
    },
    benefitCardVisible: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    benefitCardHighlight: {
      background: 'linear-gradient(145deg, rgba(6,182,212,0.1), rgba(168,85,247,0.1))',
      border: '2px solid rgba(34, 211, 238, 0.4)',
      boxShadow: '0 0 30px rgba(6,182,212,0.3)'
    },
    iconWrapper: {
      width: '80px',
      height: '80px',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      transition: 'all 0.4s ease',
      position: 'relative'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: '#fff',
      marginBottom: '0.75rem'
    },
    cardDescription: {
      color: '#9ca3af',
      fontSize: '0.95rem',
      lineHeight: 1.7,
      marginBottom: '1.5rem'
    },
    cardStats: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '700'
    },
    ctaSection: {
      marginTop: '4rem',
      padding: '3rem',
      background: 'linear-gradient(145deg, rgba(6,182,212,0.05), rgba(168,85,247,0.05))',
      backdropFilter: 'blur(20px)',
      borderRadius: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center'
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: '900',
      color: '#fff',
      marginBottom: '1rem'
    },
    ctaDescription: {
      color: '#9ca3af',
      fontSize: '1.125rem',
      marginBottom: '2rem',
      maxWidth: '600px',
      margin: '0 auto 2rem'
    },
    ctaButton: {
      padding: '1rem 2.5rem',
      background: 'linear-gradient(to right, #06b6d4, #a855f7)',
      borderRadius: '9999px',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '1.125rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <div style={styles.container} ref={sectionRef} className="benefits-container">
      <div style={styles.backgroundEffects}>
        <div style={styles.gradient1}></div>
        <div style={styles.gradient2}></div>
        <div style={styles.gradient3}></div>
      </div>

      <div style={styles.content}>
        <div style={styles.header} className="benefits-header">
          <div style={styles.versionTag} className="version-tag">WHAT YOU'LL GET</div>
          <h2 style={styles.title} className="benefits-title">
            Hackathon <span style={styles.titleGradient}>Benefits</span>
          </h2>
          <p style={styles.subtitle} className="benefits-subtitle">
            MORE THAN JUST A COMPETITION - AN EXPERIENCE OF A LIFETIME
          </p>
        </div>

        <div style={styles.benefitsGrid} className="benefits-grid">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            const isHovered = hoveredCard === i;
            return (
              <div
                key={i}
                style={{
                  ...styles.benefitCard,
                  ...(isVisible ? { ...styles.benefitCardVisible, transitionDelay: `${i * 0.1}s` } : {}),
                  ...(benefit.highlight ? styles.benefitCardHighlight : {}),
                  ...(isHovered
                    ? {
                        transform: 'translateY(-10px) scale(1.02)',
                        boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${benefit.color}40`
                      }
                    : {})
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="benefit-card"
              >
                <div
                  style={{
                    ...styles.iconWrapper,
                    background: `${benefit.color}15`,
                    border: `2px solid ${benefit.color}40`
                  }}
                  className="icon-wrapper"
                >
                  <Icon size={40} color={benefit.color} className="benefit-icon" />
                </div>
                <h3 style={styles.cardTitle} className="card-title">{benefit.title}</h3>
                <p style={styles.cardDescription} className="card-description">{benefit.description}</p>
                <div
                  style={{
                    ...styles.cardStats,
                    background: `${benefit.color}20`,
                    color: benefit.color,
                    border: `1px solid ${benefit.color}40`
                  }}
                  className="card-stats"
                >
                  {benefit.stats}
                </div>
              </div>
            );
          })}
        </div>

        <div style={styles.ctaSection} className="cta-section">
          <h3 style={styles.ctaTitle} className="cta-title">Ready to Experience It All?</h3>
          <p style={styles.ctaDescription} className="cta-description">
            Join 200+ talented hackers for 24 hours of innovation, learning, and incredible opportunities. Register now and be part of Central India's biggest hackathon!
          </p>
          <button style={styles.ctaButton} 
          className="cta-button"
          onClick={() => window.open('https://unstop.com/o/2wGEnLi?lb=5VvzCSm&utm_medium=Share&utm_source=voidhack2161&utm_campaign=Online_coding_challenge', '_blank')}
          >Register Your Team Now</button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-30px)}
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Tablet styles */
        @media (max-width: 1024px) {
          .benefits-container {
            padding: 4rem 1.25rem !important;
          }

          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }

          .benefits-title {
            font-size: 3rem !important;
          }

          .benefits-subtitle {
            font-size: 1rem !important;
          }

          .benefit-card {
            padding: 1.75rem !important;
          }

          .icon-wrapper {
            width: 70px !important;
            height: 70px !important;
            margin-bottom: 1.25rem !important;
          }

          .benefit-icon {
            width: 35px !important;
            height: 35px !important;
          }

          .card-title {
            font-size: 1.35rem !important;
          }

          .card-description {
            font-size: 0.9rem !important;
          }

          .card-stats {
            font-size: 0.8rem !important;
            padding: 0.4rem 0.85rem !important;
          }

          .cta-section {
            padding: 2.5rem !important;
          }

          .cta-title {
            font-size: 2rem !important;
          }

          .cta-description {
            font-size: 1rem !important;
          }

          .cta-button {
            padding: 0.875rem 2rem !important;
            font-size: 1rem !important;
          }
        }

        /* Mobile styles */
        @media (max-width: 640px) {
          .benefits-container {
            padding: 3rem 1rem !important;
          }

          .benefits-header {
            margin-bottom: 3rem !important;
          }

          .version-tag {
            font-size: 0.75rem !important;
            padding: 0.4rem 0.875rem !important;
          }

          .benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }

          .benefits-title {
            font-size: 2.25rem !important;
          }

          .benefits-subtitle {
            font-size: 0.875rem !important;
            padding: 0 1rem !important;
          }

          .benefit-card {
            padding: 1.5rem !important;
          }

          .icon-wrapper {
            width: 60px !important;
            height: 60px !important;
            margin-bottom: 1rem !important;
            border-radius: 15px !important;
          }

          .benefit-icon {
            width: 30px !important;
            height: 30px !important;
          }

          .card-title {
            font-size: 1.25rem !important;
            margin-bottom: 0.5rem !important;
          }

          .card-description {
            font-size: 0.875rem !important;
            line-height: 1.6 !important;
            margin-bottom: 1.25rem !important;
          }

          .card-stats {
            font-size: 0.75rem !important;
            padding: 0.375rem 0.75rem !important;
          }

          .cta-section {
            padding: 2rem 1.5rem !important;
            margin-top: 3rem !important;
          }

          .cta-title {
            font-size: 1.75rem !important;
            margin-bottom: 0.75rem !important;
          }

          .cta-description {
            font-size: 0.9375rem !important;
            margin-bottom: 1.5rem !important;
            padding: 0 !important;
          }

          .cta-button {
            padding: 0.875rem 1.75rem !important;
            font-size: 0.9375rem !important;
            width: 100%;
          }
        }

        /* Extra small mobile */
        @media (max-width: 380px) {
          .benefits-title {
            font-size: 2rem !important;
          }

          .benefits-subtitle {
            font-size: 0.8125rem !important;
          }

          .benefit-card {
            padding: 1.25rem !important;
          }

          .icon-wrapper {
            width: 55px !important;
            height: 55px !important;
          }

          .benefit-icon {
            width: 28px !important;
            height: 28px !important;
          }

          .card-title {
            font-size: 1.125rem !important;
          }

          .card-description {
            font-size: 0.8125rem !important;
          }

          .cta-title {
            font-size: 1.5rem !important;
          }

          .cta-description {
            font-size: 0.875rem !important;
          }
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
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