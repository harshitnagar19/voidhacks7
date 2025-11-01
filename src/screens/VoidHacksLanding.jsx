import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
export default function VoidHacksLanding({ scheduleRef }) {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: '#00ffff',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const shapes = [];
    const geometries = [
      new THREE.OctahedronGeometry(0.3, 0),
      new THREE.TetrahedronGeometry(0.3, 0),
      new THREE.IcosahedronGeometry(0.3, 0)
    ];

    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? '#00ffff' : '#ff00ff',
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 10;
      mesh.position.y = (Math.random() - 0.5) * 10;
      mesh.position.z = (Math.random() - 0.5) * 10;

      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        }
      };

      scene.add(mesh);
      shapes.push(mesh);
    }

    let animationFrame;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      particlesMesh.rotation.y = elapsedTime * 0.05;
      particlesMesh.rotation.x = elapsedTime * 0.03;

      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;

        shape.position.y += Math.sin(elapsedTime + shape.position.x) * 0.001;
      });

      camera.position.x = mousePosition.x * 0.5;
      camera.position.y = -mousePosition.y * 0.5;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
      renderer.dispose();
    };
  }, [mousePosition]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleViewSchedule = () => {
    scheduleRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#000',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    canvas: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0
    },
    gradientOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      pointerEvents: 'none'
    },
    gradient1: {
      position: 'absolute',
      top: 0,
      left: '25%',
      width: '384px',
      height: '384px',
      backgroundColor: '#06b6d4',
      borderRadius: '50%',
      mixBlendMode: 'screen',
      filter: 'blur(96px)',
      opacity: 0.2,
      animation: 'pulse 2s infinite'
    },
    gradient2: {
      position: 'absolute',
      bottom: 0,
      right: '25%',
      width: '384px',
      height: '384px',
      backgroundColor: '#a855f7',
      borderRadius: '50%',
      mixBlendMode: 'screen',
      filter: 'blur(96px)',
      opacity: 0.2,
      animation: 'pulse 2s infinite',
      animationDelay: '1s'
    },
    gradient3: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '384px',
      height: '384px',
      backgroundColor: '#ec4899',
      borderRadius: '50%',
      mixBlendMode: 'screen',
      filter: 'blur(96px)',
      opacity: 0.2,
      animation: 'pulse 2s infinite',
      animationDelay: '2s'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      backdropFilter: 'blur(12px)',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderBottom: '1px solid rgba(6, 182, 212, 0.2)'
    },
    navContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '1rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      border: '2px solid #22d3ee',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logoText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '1.25rem'
    },
    logoAccent: {
      color: '#22d3ee'
    },
    registerBtn: {
      padding: '0.5rem 1.5rem',
      background: 'linear-gradient(to right, #06b6d4, #a855f7)',
      borderRadius: '9999px',
      color: '#fff',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.3s',
      fontSize: '0.875rem'
    },
    heroContent: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '0 1.5rem',
      paddingTop: '5rem'
    },
    versionTag: {
      marginBottom: '2rem',
      padding: '0.5rem 1rem',
      background: 'rgba(6, 182, 212, 0.1)',
      border: '1px solid rgba(6, 182, 212, 0.3)',
      borderRadius: '9999px',
      color: '#22d3ee',
      fontSize: '0.875rem',
      fontFamily: 'monospace',
      backdropFilter: 'blur(4px)',
      animation: 'fadeIn 1s ease-out'
    },
    titleContainer: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    mainTitle: {
      fontSize: '6rem',
      fontWeight: '900',
      color: '#fff',
      letterSpacing: '-0.05em',
      lineHeight: 1,
      marginBottom: '1rem'
    },
    titleVoid: {
      display: 'inline-block',
      animation: 'glitch1 3s infinite'
    },
    titleHacks: {
      display: 'inline-block',
      background: 'linear-gradient(to right, #22d3ee, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'glitch2 3s infinite'
    },
    titleParens: {
      display: 'inline-block',
      color: '#22d3ee',
      animation: 'glitch3 2s infinite'
    },
    subtitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      fontSize: '1.5rem',
      color: '#9ca3af',
      fontWeight: '300',
      letterSpacing: '0.1em',
      flexWrap: 'wrap'
    },
    subtitleLine: {
      width: '4rem',
      height: '1px',
      background: 'linear-gradient(to right, transparent, #06b6d4)'
    },
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '0.5rem',
      marginBottom: '3rem',
      width: '100%',
      maxWidth: '1224px'
    },
    card: {
      padding: '1.5rem',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(16px)',
      borderRadius: '1rem',
      border: '1px solid rgba(6, 182, 212, 0.2)',
      transition: 'all 0.3s',
      cursor: 'pointer'
    },
    cardIcon: {
      fontSize: '2.5rem',
      marginBottom: '0.5rem'
    },
    cardTitle: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '1.125rem',
      marginBottom: '0.25rem'
    },
    cardDesc: {
      color: '#9ca3af',
      fontSize: '0.875rem'
    },
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '3rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    primaryBtn: {
      padding: '1rem 2rem',
      background: 'linear-gradient(to right, #06b6d4, #a855f7)',
      borderRadius: '9999px',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '1.125rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.3s'
    },
    secondaryBtn: {
      padding: '1rem 2rem',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(16px)',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '9999px',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '1.125rem',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    stats: {
      display: 'flex',
      gap: '2rem',
      textAlign: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center'
    },
    statItem: {
      cursor: 'pointer',
      transition: 'transform 0.3s'
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: '900',
      background: 'linear-gradient(to right, #22d3ee, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    statLabel: {
      color: '#9ca3af',
      fontSize: '0.875rem',
      marginTop: '0.25rem'
    },
    divider: {
      width: '1px',
      height: '4rem',
      background: 'linear-gradient(to bottom, transparent, #06b6d4, transparent)'
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'bounce 2s infinite'
    },
    scrollBox: {
      width: '1.5rem',
      height: '2.5rem',
      border: '2px solid #22d3ee',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '0.5rem'
    },
    scrollDot: {
      width: '0.375rem',
      height: '0.75rem',
      backgroundColor: '#22d3ee',
      borderRadius: '9999px',
      animation: 'pulse 2s infinite'
    }
  };

  return (
    <div style={styles.container}>
      <canvas ref={canvasRef} style={styles.canvas} />

      <div style={styles.gradientOverlay}>
        <div style={styles.gradient1}></div>
        <div style={styles.gradient2}></div>
        <div style={styles.gradient3}></div>
      </div>

      <nav style={styles.nav}>
        <div style={styles.navContent} className="nav-content">
          <div style={styles.logo}>
            <div style={styles.logoIcon} className="logo-icon">
              <span style={{ color: '#22d3ee', fontWeight: 'bold', fontSize: '1.25rem' }} className="logo-icon-text">&lt;/&gt;</span>
            </div>
            <span style={styles.logoText} className="logo-text">void<span style={styles.logoAccent}>hacks() 7.0</span></span>
          </div>

          <button 
          style={styles.registerBtn} 
          className="register-btn"
          onClick={() => window.open('https://unstop.com/o/2wGEnLi?lb=5VvzCSm&utm_medium=Share&utm_source=voidhack2161&utm_campaign=Online_coding_challenge', '_blank')}
          >Register Now</button>
        </div>
      </nav>

      <div style={styles.heroContent} className="hero-content">
        <div style={styles.versionTag} className="version-tag">
          Version 7.0 • November 28-29, 2025
        </div>

        <div style={styles.titleContainer}>
          <h1 style={styles.mainTitle} className="main-title">
            <span style={styles.titleVoid}>void</span>
            <span style={styles.titleHacks}>hacks</span>
            <span style={styles.titleParens}>()</span>
          </h1>
          <div style={styles.subtitle} className="subtitle">
            <div style={styles.subtitleLine} className="subtitle-line"></div>
            <p className="subtitle-text">CAPTURING THE ESSENCE OF INNOVATION</p>
            <div style={{ ...styles.subtitleLine, background: 'linear-gradient(to left, transparent, #a855f7)' }} className="subtitle-line"></div>
          </div>
        </div>

        <div style={styles.cardsGrid} className="cards-grid">
          <div style={styles.card} className="card">
            <div style={styles.cardIcon} className="card-icon">⏱️</div>
            <h3 style={styles.cardTitle} className="card-title">24 Hours</h3>
            <p style={styles.cardDesc}>Non-stop Innovation</p>
          </div>
          <div style={{ ...styles.card, borderColor: 'rgba(168, 85, 247, 0.2)' }} className="card">
            <div style={styles.cardIcon} className="card-icon">🏢</div>
            <h3 style={styles.cardTitle} className="card-title">OFFLINE</h3>
            <p style={styles.cardDesc}>SVVV, Indore</p>
          </div>
          <div style={{ ...styles.card, borderColor: 'rgba(236, 72, 153, 0.2)' }} className="card">
            <div style={styles.cardIcon} className="card-icon">🎯</div>
            <h3 style={styles.cardTitle} className="card-title">3 Tracks</h3>
            <p style={styles.cardDesc}>AI/ML • FinTech • Web/Mobile</p>
          </div>
          <div style={{
            ...styles.card,
            borderColor: 'rgba(34, 211, 238, 0.4)',
            background: 'linear-gradient(145deg, rgba(6,182,212,0.1), rgba(168,85,247,0.1))',
            boxShadow: '0 0 25px rgba(6,182,212,0.4)'
          }} className="card">
            <div style={styles.cardIcon} className="card-icon">💰</div>
            <h3 style={{
              ...styles.cardTitle,
              background: 'linear-gradient(to right, #06b6d4, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }} className="card-title">
              ₹1 Lakh+
            </h3>
            <p style={styles.cardDesc}>Total Prize Pool</p>
          </div>
        </div>

        <div style={styles.ctaButtons} className="cta-buttons">
          <button style={styles.primaryBtn} 
          className="cta-button primary-btn"
          onClick={() => window.open('https://unstop.com/o/2wGEnLi?lb=5VvzCSm&utm_medium=Share&utm_source=voidhack2161&utm_campaign=Online_coding_challenge', '_blank')}
          >Register Your Team</button>
          <button style={styles.secondaryBtn} className="cta-button secondary-btn" onClick={handleViewSchedule}>View Schedule</button>
        </div>

        <div style={styles.stats} className="stats">
          <div style={styles.statItem}>
            <div style={styles.statNumber} className="stat-number">900+</div>
            <div style={styles.statLabel} className="stat-label">Students</div>
          </div>
          <div style={styles.divider} className="divider"></div>
          <div style={styles.statItem}>
            <div style={{ ...styles.statNumber, background: 'linear-gradient(to right, #a855f7, #9333ea)' }} className="stat-number">100+</div>
            <div style={styles.statLabel} className="stat-label">Hackers</div>
          </div>
          <div style={styles.divider} className="divider"></div>
          <div style={styles.statItem}>
            <div style={{ ...styles.statNumber, background: 'linear-gradient(to right, #ec4899, #db2777)' }} className="stat-number">24hrs</div>
            <div style={styles.statLabel} className="stat-label">Of Hacking</div>
          </div>
        </div>

        <div style={styles.scrollIndicator}>
          <div style={styles.scrollBox}>
            <div style={styles.scrollDot}></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes glitch1 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }
        
        @keyframes glitch2 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(2px, -2px); }
          66% { transform: translate(-2px, 2px); }
        }
        
        @keyframes glitch3 {
          0%, 100% { transform: translate(0) rotate(0deg); }
          25% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 1px) rotate(-1deg); }
          75% { transform: translate(1px, 1px) rotate(1deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        
        button:hover {
          transform: scale(1.05);
        }
        
        /* Tablet styles */
        @media (max-width: 768px) {
          .nav-content {
            padding: 0.75rem 1rem !important;
          }
          
          .logo-icon {
            width: 32px !important;
            height: 32px !important;
          }
          
          .logo-icon-text {
            font-size: 1rem !important;
          }
          
          .logo-text {
            font-size: 1rem !important;
          }
          
          .register-btn {
            font-size: 0.75rem !important;
            padding: 0.4rem 1rem !important;
          }
          
          .hero-content {
            padding: 0 1rem !important;
            padding-top: 4rem !important;
          }
          
          .version-tag {
            font-size: 0.75rem !important;
            padding: 0.4rem 0.875rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          .main-title {
            font-size: 3.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .subtitle {
            font-size: 1rem !important;
            gap: 0.75rem !important;
          }
          
          .subtitle-line {
            width: 2.5rem !important;
          }
          
          .subtitle-text {
            font-size: 0.875rem !important;
          }
          
          .cards-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
            gap: 0.5rem !important;
            margin-bottom: 2rem !important;
          }
          
          .card {
            padding: 1rem !important;
          }
          
          .card-icon {
            font-size: 2rem !important;
            margin-bottom: 0.4rem !important;
          }
          
          .card-title {
            font-size: 1rem !important;
          }
          
          .cta-buttons {
            gap: 0.75rem !important;
            margin-bottom: 2rem !important;
          }
          
          .cta-button {
            font-size: 1rem !important;
            padding: 0.875rem 1.75rem !important;
          }
          
          .stats {
            gap: 1.5rem !important;
          }
          
          .stat-number {
            font-size: 2.25rem !important;
          }
          
          .stat-label {
            font-size: 0.75rem !important;
          }
          
          .divider {
            height: 3rem !important;
          }
        }
        
        /* Mobile styles */
        @media (max-width: 480px) {
          .nav-content {
            padding: 0.625rem 0.875rem !important;
          }
          
          .logo-icon {
            width: 28px !important;
            height: 28px !important;
          }
          
          .logo-icon-text {
            font-size: 0.875rem !important;
          }
          
          .logo-text {
            font-size: 0.875rem !important;
          }
          
          .register-btn {
            font-size: 0.7rem !important;
            padding: 0.375rem 0.875rem !important;
          }
          
          .hero-content {
            padding: 0 0.875rem !important;
            padding-top: 3.5rem !important;
          }
          
          .version-tag {
            font-size: 0.65rem !important;
            padding: 0.35rem 0.75rem !important;
            margin-bottom: 1.25rem !important;
          }
          
          .main-title {
            font-size: 2.5rem !important;
            margin-bottom: 0.625rem !important;
          }
          
          .subtitle {
            font-size: 0.875rem !important;
            gap: 0.5rem !important;
          }
          
          .subtitle-line {
            width: 2rem !important;
          }
          
          .subtitle-text {
            font-size: 0.7rem !important;
            letter-spacing: 0.05em !important;
          }
          
          .cards-grid {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
            margin-bottom: 1.75rem !important;
          }
          
          .card {
            padding: 0.875rem !important;
          }
          
          .card-icon {
            font-size: 1.75rem !important;
            margin-bottom: 0.35rem !important;
          }
          
          .card-title {
            font-size: 0.9rem !important;
          }
          
          .cta-buttons {
            gap: 0.625rem !important;
            margin-bottom: 1.75rem !important;
            flex-direction: column !important;
            width: 100% !important;
          }
          
          .cta-button {
            font-size: 0.9rem !important;
            padding: 0.75rem 1.5rem !important;
            width: 100% !important;
          }
          
          .stats {
            gap: 1rem !important;
          }
          
          .stat-number {
            font-size: 1.875rem !important;
          }
          
          .stat-label {
            font-size: 0.7rem !important;
          }
          
          .divider {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}