import React, { useState, useEffect, useRef } from 'react';
import { Brain, DollarSign, Smartphone, Code, Sparkles, TrendingUp, Cpu, Zap } from 'lucide-react';

export default function VoidHacksDomains() {
  const [activeTab, setActiveTab] = useState(0);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const domains = [
    {
      id: 'aiml',
      title: 'AI/ML',
      fullTitle: 'Artificial Intelligence & Machine Learning',
      icon: Brain,
      color: '#22d3ee',
      gradient: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
      description: 'Build intelligent systems that learn, predict, and automate',
      detailedDescription: 'Create smart solutions using machine learning algorithms, neural networks, and AI-powered applications that solve real-world problems.',
      examples: [
        'Predictive analytics platforms',
        'Computer vision applications',
        'Natural language processing tools',
        'Recommendation systems',
        'Chatbots and virtual assistants'
      ],
      techStack: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Hugging Face'],
      challenges: [
        'Healthcare diagnosis systems',
        'Smart city solutions',
        'Educational AI tools',
        'Agriculture optimization'
      ]
    },
    {
      id: 'fintech',
      title: 'FinTech',
      fullTitle: 'Financial Technology',
      icon: DollarSign,
      color: '#a855f7',
      gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
      description: 'Revolutionize finance with cutting-edge digital solutions',
      detailedDescription: 'Develop innovative financial products, payment systems, and banking solutions that make transactions seamless and secure.',
      examples: [
        'Digital payment gateways',
        'Personal finance managers',
        'Investment tracking platforms',
        'Blockchain-based solutions',
        'Fraud detection systems'
      ],
      techStack: ['Node.js', 'React', 'Blockchain', 'Stripe API', 'Plaid', 'Web3.js'],
      challenges: [
        'UPI-based payment solutions',
        'Cryptocurrency wallets',
        'Budget management apps',
        'Peer-to-peer lending platforms'
      ]
    },
    {
      id: 'webmobile',
      title: 'Web/Mobile',
      fullTitle: 'Web & Mobile Development',
      icon: Smartphone,
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #db2777, #ec4899)',
      description: 'Create stunning applications that users love',
      detailedDescription: 'Build responsive websites and mobile apps with modern frameworks, delivering exceptional user experiences across all devices.',
      examples: [
        'Progressive web applications',
        'E-commerce platforms',
        'Social networking apps',
        'Productivity tools',
        'Real-time collaboration platforms'
      ],
      techStack: ['React', 'Next.js', 'React Native', 'Flutter', 'Firebase', 'Tailwind CSS'],
      challenges: [
        'Student-focused platforms',
        'Local business solutions',
        'Community engagement apps',
        'Gaming and entertainment'
      ]
    }
  ];

  const styles = {
    container: {
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#000',
      padding: '5rem 1.5rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: 'hidden'
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
      top: '15%',
      left: '10%',
      width: '500px',
      height: '500px',
      backgroundColor: '#06b6d4',
      borderRadius: '50%',
      filter: 'blur(120px)',
      opacity: 0.15,
      animation: 'float 8s ease-in-out infinite'
    },
    gradient2: {
      position: 'absolute',
      bottom: '15%',
      right: '10%',
      width: '500px',
      height: '500px',
      backgroundColor: '#a855f7',
      borderRadius: '50%',
      filter: 'blur(120px)',
      opacity: 0.15,
      animation: 'float 10s ease-in-out infinite reverse'
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
      backdropFilter: 'blur(4px)'
    },
    title: {
      fontSize: '4rem',
      fontWeight: '900',
      color: '#fff',
      letterSpacing: '-0.05em',
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
      letterSpacing: '0.1em',
      marginTop: '1rem'
    },
    tabsContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      marginBottom: '3rem',
      flexWrap: 'wrap'
    },
    tab: {
      padding: '1rem 2rem',
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '9999px',
      border: '2px solid rgba(255, 255, 255, 0.1)',
      color: '#9ca3af',
      fontSize: '1.125rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    tabActive: {
      color: '#fff',
      transform: 'scale(1.05)'
    },
    domainContent: {
      opacity: 0,
      animation: 'fadeIn 0.6s ease-out forwards'
    },
    mainCard: {
      padding: '3rem',
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '2rem',
      border: '2px solid',
      marginBottom: '2rem',
      position: 'relative',
      overflow: 'hidden'
    },
    cardGlow: {
      position: 'absolute',
      top: '-50%',
      right: '-25%',
      width: '100%',
      height: '150%',
      opacity: 0.3,
      pointerEvents: 'none'
    },
    mainCardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      marginBottom: '2rem',
      position: 'relative',
      zIndex: 1
    },
    iconWrapper: {
      width: '100px',
      height: '100px',
      borderRadius: '25px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    iconGlow: {
      position: 'absolute',
      inset: '-10px',
      borderRadius: '30px',
      filter: 'blur(20px)',
      opacity: 0.5
    },
    mainCardTitle: {
      fontSize: '3rem',
      fontWeight: '900',
      color: '#fff',
      marginBottom: '0.5rem'
    },
    mainCardSubtitle: {
      fontSize: '1.25rem',
      color: '#9ca3af',
      fontWeight: '300'
    },
    mainCardDescription: {
      color: '#d1d5db',
      fontSize: '1.125rem',
      lineHeight: 1.8,
      marginBottom: '2rem',
      position: 'relative',
      zIndex: 1
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem'
    },
    card: {
      padding: '2rem',
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '800',
      color: '#fff',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    listItem: {
      color: '#9ca3af',
      fontSize: '0.95rem',
      marginBottom: '0.75rem',
      paddingLeft: '1.5rem',
      position: 'relative',
      lineHeight: 1.6
    },
    bullet: {
      position: 'absolute',
      left: 0,
      top: '0.5rem',
      width: '6px',
      height: '6px',
      borderRadius: '50%'
    },
    techStackGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gap: '0.75rem'
    },
    techBadge: {
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '600',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }
  };

  const activeDomain = domains[activeTab];
  const Icon = activeDomain.icon;

  return (
    <div style={styles.container} ref={sectionRef}>
      <div style={styles.backgroundEffects}>
        <div style={styles.gradient1}></div>
        <div style={styles.gradient2}></div>
      </div>

      <div style={styles.content}>
        <div style={styles.header}>
          <div style={styles.versionTag}>
            CHOOSE YOUR TRACK
          </div>
          <h2 style={styles.title}>
            Hackathon <span style={styles.titleGradient}>Domains</span>
          </h2>
          <p style={styles.subtitle}>
            PICK YOUR PASSION • BUILD YOUR FUTURE
          </p>
        </div>

        <div style={styles.tabsContainer}>
          {domains.map((domain, index) => {
            const TabIcon = domain.icon;
            const isActive = activeTab === index;
            
            return (
              <button
                key={domain.id}
                style={{
                  ...styles.tab,
                  ...(isActive ? {
                    ...styles.tabActive,
                    background: `${domain.color}15`,
                    borderColor: `${domain.color}60`,
                    boxShadow: `0 0 30px ${domain.color}40`
                  } : {})
                }}
                onClick={() => setActiveTab(index)}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = `${domain.color}40`;
                    e.currentTarget.style.color = domain.color;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#9ca3af';
                  }
                }}
              >
                <TabIcon size={24} color={isActive ? domain.color : '#9ca3af'} />
                {domain.title}
              </button>
            );
          })}
        </div>

        <div style={styles.domainContent} key={activeTab}>
          <div
            style={{
              ...styles.mainCard,
              borderColor: `${activeDomain.color}40`
            }}
          >
            <div
              style={{
                ...styles.cardGlow,
                background: `radial-gradient(circle at 100% 0%, ${activeDomain.color}30 0%, transparent 70%)`
              }}
            ></div>

            <div style={styles.mainCardHeader}>
              <div
                style={{
                  ...styles.iconWrapper,
                  background: `${activeDomain.color}15`,
                  border: `3px solid ${activeDomain.color}60`
                }}
              >
                <div
                  style={{
                    ...styles.iconGlow,
                    background: activeDomain.gradient
                  }}
                ></div>
                <Icon size={50} color={activeDomain.color} style={{ position: 'relative', zIndex: 1 }} />
              </div>
              <div>
                <h3 style={styles.mainCardTitle}>{activeDomain.fullTitle}</h3>
                <p style={styles.mainCardSubtitle}>{activeDomain.description}</p>
              </div>
            </div>

            <p style={styles.mainCardDescription}>
              {activeDomain.detailedDescription}
            </p>

            <div style={styles.grid}>
              <div
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${activeDomain.color}40`;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h4 style={styles.cardTitle}>
                  <Sparkles size={20} color={activeDomain.color} />
                  What to Build
                </h4>
                <ul style={styles.list}>
                  {activeDomain.examples.map((example, idx) => (
                    <li key={idx} style={styles.listItem}>
                      <div
                        style={{
                          ...styles.bullet,
                          background: activeDomain.gradient
                        }}
                      ></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${activeDomain.color}40`;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h4 style={styles.cardTitle}>
                  <Code size={20} color={activeDomain.color} />
                  Tech Stack
                </h4>
                <div style={styles.techStackGrid}>
                  {activeDomain.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      style={{
                        ...styles.techBadge,
                        background: `${activeDomain.color}15`,
                        color: activeDomain.color,
                        border: `1px solid ${activeDomain.color}40`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = activeDomain.gradient;
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${activeDomain.color}15`;
                        e.currentTarget.style.color = activeDomain.color;
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${activeDomain.color}40`;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h4 style={styles.cardTitle}>
                  <TrendingUp size={20} color={activeDomain.color} />
                  Problem Areas
                </h4>
                <ul style={styles.list}>
                  {activeDomain.challenges.map((challenge, idx) => (
                    <li key={idx} style={styles.listItem}>
                      <div
                        style={{
                          ...styles.bullet,
                          background: activeDomain.gradient
                        }}
                      ></div>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          h2 { font-size: 2.5rem !important; }
          h3 { font-size: 2rem !important; }
        }
      `}</style>
    </div>
  );
}