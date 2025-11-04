import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import NavBar from './NavBar';

export default function AboutUs() {
    const navigate = useNavigate()
  const canvasRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

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

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.025,
      color: '#00ffff',
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Geometric shapes
    const shapes = [];
    const geometries = [
      new THREE.OctahedronGeometry(0.25, 0),
      new THREE.TetrahedronGeometry(0.25, 0),
      new THREE.IcosahedronGeometry(0.25, 0)
    ];

    for (let i = 0; i < 10; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? '#00ffff' : '#ff00ff',
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 10;
      mesh.position.y = (Math.random() - 0.5) * 10;
      mesh.position.z = (Math.random() - 0.5) * 10;

      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.015,
          y: (Math.random() - 0.5) * 0.015,
          z: (Math.random() - 0.5) * 0.015
        }
      };

      scene.add(mesh);
      shapes.push(mesh);
    }

    let animationFrame;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      particlesMesh.rotation.y = elapsedTime * 0.03;
      particlesMesh.rotation.x = elapsedTime * 0.02;

      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;

        shape.position.y += Math.sin(elapsedTime + shape.position.x) * 0.0008;
      });

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
  }, []);

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
      top: '10%',
      left: '20%',
      width: '400px',
      height: '400px',
      backgroundColor: '#06b6d4',
      borderRadius: '50%',
      mixBlendMode: 'screen',
      filter: 'blur(120px)',
      opacity: 0.15,
      animation: 'float 8s infinite ease-in-out'
    },
    gradient2: {
      position: 'absolute',
      bottom: '10%',
      right: '20%',
      width: '400px',
      height: '400px',
      backgroundColor: '#a855f7',
      borderRadius: '50%',
      mixBlendMode: 'screen',
      filter: 'blur(120px)',
      opacity: 0.15,
      animation: 'float 8s infinite ease-in-out',
      animationDelay: '2s'
    },
    gradient3: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      height: '400px',
      backgroundColor: '#ec4899',
      borderRadius: '50%',
      mixBlendMode: 'screen',
      filter: 'blur(140px)',
      opacity: 0.12,
      animation: 'float 8s infinite ease-in-out',
      animationDelay: '4s'
    },
    content: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '6rem 2rem 4rem',
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
      fontSize: '4.5rem',
      fontWeight: '900',
      color: '#fff',
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      marginBottom: '1rem'
    },
    titleGradient: {
      background: 'linear-gradient(to right, #22d3ee, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#9ca3af',
      fontWeight: '300',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: 1.6
    },
    sectionsGrid: {
      display: 'grid',
      gap: '2rem',
      marginBottom: '3rem'
    },
    section: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1.5rem',
      border: '1px solid rgba(6, 182, 212, 0.15)',
      padding: '2.5rem',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    sectionGlow: {
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
    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      marginBottom: '1.5rem'
    },
    iconBox: {
      width: '70px',
      height: '70px',
      borderRadius: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      flexShrink: 0,
      position: 'relative',
      transition: 'transform 0.4s'
    },
    iconBoxCyan: {
      background: 'rgba(6, 182, 212, 0.1)',
      border: '2px solid rgba(6, 182, 212, 0.3)'
    },
    iconBoxPurple: {
      background: 'rgba(168, 85, 247, 0.1)',
      border: '2px solid rgba(168, 85, 247, 0.3)'
    },
    iconBoxPink: {
      background: 'rgba(236, 72, 153, 0.1)',
      border: '2px solid rgba(236, 72, 153, 0.3)'
    },
    iconBoxGold: {
      background: 'rgba(251, 191, 36, 0.1)',
      border: '2px solid rgba(251, 191, 36, 0.3)'
    },
    sectionTitleBox: {
      flex: 1
    },
    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: '#fff',
      marginBottom: '0.5rem'
    },
    sectionSubtitle: {
      fontSize: '0.875rem',
      color: '#22d3ee',
      fontFamily: 'monospace',
      letterSpacing: '0.05em'
    },
    sectionContent: {
      color: '#9ca3af',
      fontSize: '1rem',
      lineHeight: 1.8,
      position: 'relative',
      zIndex: 1
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3rem'
    },
    statCard: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1.25rem',
      border: '1px solid rgba(6, 182, 212, 0.15)',
      padding: '2rem',
      textAlign: 'center',
      transition: 'all 0.3s',
      cursor: 'pointer'
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: '900',
      background: 'linear-gradient(to right, #22d3ee, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.5rem'
    },
    statLabel: {
      color: '#9ca3af',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    highlightBox: {
      background: 'linear-gradient(145deg, rgba(6,182,212,0.08), rgba(168,85,247,0.08))',
      backdropFilter: 'blur(20px)',
      borderRadius: '1.5rem',
      border: '1px solid rgba(6, 182, 212, 0.25)',
      padding: '2.5rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    highlightTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#fff',
      marginBottom: '1rem'
    },
    highlightText: {
      color: '#9ca3af',
      fontSize: '1.125rem',
      lineHeight: 1.7,
      maxWidth: '800px',
      margin: '0 auto'
    },
    cornerDecoration: {
      position: 'absolute',
      width: '100px',
      height: '100px',
      border: '2px solid rgba(6, 182, 212, 0.2)',
      borderRadius: '0.5rem',
      pointerEvents: 'none'
    },
    cornerTopLeft: {
      top: '-50px',
      left: '-50px',
      borderRight: 'none',
      borderBottom: 'none',
      animation: 'cornerGlow 3s infinite'
    },
    cornerBottomRight: {
      bottom: '-50px',
      right: '-50px',
      borderLeft: 'none',
      borderTop: 'none',
      animation: 'cornerGlow 3s infinite',
      animationDelay: '1.5s'
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
        alignItems: 'center',
        gap: '2rem'
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
      navLinks: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      },
      navLink: {
        color: '#fff',
        fontSize: '0.9rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'color 0.3s',
        background: 'none',
        border: 'none',
        padding: '0'
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
  };

  return (
    <div style={styles.container}>
      <canvas ref={canvasRef} style={styles.canvas} />

      <div style={styles.gradientOverlay}>
        <div style={styles.gradient1}></div>
        <div style={styles.gradient2}></div>
        <div style={styles.gradient3}></div>
      </div>

      {/* <nav style={styles.nav}>
        <div style={styles.navContent} className="nav-content">
          <div style={styles.logo}>
            <div style={styles.logoIcon} className="logo-icon">
              <span style={{ color: '#22d3ee', fontWeight: 'bold', fontSize: '1.25rem' }} className="logo-icon-text">&lt;/&gt;</span>
            </div>
            <span style={styles.logoText} className="logo-text">void<span style={styles.logoAccent}>hacks() 7.0</span></span>
          </div>

          <div style={styles.navLinks} className="nav-links">
            <button 
              style={styles.navLink} 
              className="nav-link"
              onClick={()=>{navigate("/")}}
            >
              Home
            </button>
            <button 
              style={styles.navLink} 
              className="nav-link"
              onClick={()=>{navigate("/timelines")}}
            >
              Timeline
            </button>
            <button 
              style={styles.navLink} 
              className="nav-link"
              onClick={()=>{navigate("/about-us")}}
            >
              About Us
            </button>
          </div>

          <button 
          style={styles.registerBtn} 
          className="register-btn"
          onClick={() => window.open('https://unstop.com/o/2wGEnLi?lb=5VvzCSm&utm_medium=Share&utm_source=voidhack2161&utm_campaign=Online_coding_challenge', '_blank')}
          >Register Now</button>
        </div>
      </nav> */}
      <NavBar/>

      <div style={styles.content} className="about-content">
        <div style={styles.header}>
          <div style={styles.badge}>v7.0 • About Us</div>
          <h1 style={styles.title} className="about-title">
            Empowering <span style={styles.titleGradient}>Innovation</span>
            <br />
            Since 2019
          </h1>
          <p style={styles.subtitle}>
            The flagship hackathon bringing together brilliant minds to solve real-world challenges through technology
          </p>
        </div>

        <div style={styles.sectionsGrid}>
          <div 
            style={styles.section}
            className="section-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.querySelector('.section-glow').style.opacity = '1';
              e.currentTarget.querySelector('.icon-box').style.transform = 'scale(1.1) rotate(5deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.querySelector('.section-glow').style.opacity = '0';
              e.currentTarget.querySelector('.icon-box').style.transform = 'scale(1) rotate(0deg)';
            }}
          >
            <div className="section-glow" style={styles.sectionGlow}></div>
            <div style={styles.sectionHeader}>
              <div className="icon-box" style={{...styles.iconBox, ...styles.iconBoxCyan}}>
                🚀
              </div>
              <div style={styles.sectionTitleBox}>
                <h2 style={styles.sectionTitle}>About Void Hacks</h2>
                <p style={styles.sectionSubtitle}>THE FLAGSHIP HACKATHON</p>
              </div>
            </div>
            <p style={styles.sectionContent}>
              Void Hacks v7.0 is the 36-hour flagship hackathon of Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore — a celebration of creativity, innovation, and collaboration. Every year, this national-level event brings together brilliant minds from across the country to solve real-world challenges through technology. Participants brainstorm, build, and innovate around diverse problem statements that test their skills, teamwork, and endurance. With a legacy of fostering innovation and excellence, Void Hacks has grown into one of Central India's most awaited hackathons.
            </p>
          </div>

          <div 
            style={styles.section}
            className="section-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.querySelector('.section-glow').style.opacity = '1';
              e.currentTarget.querySelector('.icon-box').style.transform = 'scale(1.1) rotate(-5deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.querySelector('.section-glow').style.opacity = '0';
              e.currentTarget.querySelector('.icon-box').style.transform = 'scale(1) rotate(0deg)';
            }}
          >
            <div className="section-glow" style={styles.sectionGlow}></div>
            <div style={styles.sectionHeader}>
              <div className="icon-box" style={{...styles.iconBox, ...styles.iconBoxPurple}}>
                🏆
              </div>
              <div style={styles.sectionTitleBox}>
                <h2 style={styles.sectionTitle}>Our Legacy</h2>
                <p style={styles.sectionSubtitle}>YEARS OF EXCELLENCE</p>
              </div>
            </div>
            <p style={styles.sectionContent}>
              Over the years, Void Hacks has evolved from a small university-level event into a grand national hackathon that attracts thousands of participants and top-tier talent. The previous edition saw over 1900+ participants, 150+ teams, 100+ colleges, and support from 30+ sponsors — reflecting the scale, diversity, and reputation the event has built over time. As we move into the 7th edition, Void Hacks v7.0 promises to raise the bar yet again, bringing together developers, designers, and innovators under one roof for 36 hours of relentless creativity and collaboration.
            </p>
          </div>

          <div 
            style={styles.section}
            className="section-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.4)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.querySelector('.section-glow').style.opacity = '1';
              e.currentTarget.querySelector('.icon-box').style.transform = 'scale(1.1) rotate(5deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.querySelector('.section-glow').style.opacity = '0';
              e.currentTarget.querySelector('.icon-box').style.transform = 'scale(1) rotate(0deg)';
            }}
          >
            <div className="section-glow" style={styles.sectionGlow}></div>
            <div style={styles.sectionHeader}>
              <div className="icon-box" style={{...styles.iconBox, ...styles.iconBoxPink}}>
                ✨
              </div>
              <div style={styles.sectionTitleBox}>
                <h2 style={styles.sectionTitle}>What Makes Us Unique</h2>
                <p style={styles.sectionSubtitle}>BEYOND JUST CODING</p>
              </div>
            </div>
            <p style={styles.sectionContent}>
              Void Hacks stands out for its immersive 36-hour experience that pushes participants beyond boundaries. The event is not just about coding — it's about solving problems that matter, networking with industry mentors, and learning through collaboration. From ideation to execution, teams experience a high-energy environment filled with workshops, mentoring sessions, and surprise challenges that keep the adrenaline alive throughout the event.
            </p>
          </div>
        </div>

        <div style={styles.statsGrid} className="stats-grid">
          <div 
            style={styles.statCard}
            className="stat-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(6, 182, 212, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={styles.statNumber}>1900+</div>
            <div style={styles.statLabel}>Participants Last Year</div>
          </div>

          <div 
            style={styles.statCard}
            className="stat-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{...styles.statNumber, background: 'linear-gradient(to right, #a855f7, #9333ea)'}}>150+</div>
            <div style={styles.statLabel}>Teams Competed</div>
          </div>

          <div 
            style={styles.statCard}
            className="stat-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.4)';
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(236, 72, 153, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{...styles.statNumber, background: 'linear-gradient(to right, #ec4899, #db2777)'}}>100+</div>
            <div style={styles.statLabel}>Colleges Represented</div>
          </div>

          <div 
            style={styles.statCard}
            className="stat-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.4)';
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(251, 191, 36, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.15)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{...styles.statNumber, background: 'linear-gradient(to right, #fbbf24, #f59e0b)'}}>30+</div>
            <div style={styles.statLabel}>Sponsors & Partners</div>
          </div>
        </div>

        <div style={styles.highlightBox} className="highlight-box">
          <div style={{...styles.cornerDecoration, ...styles.cornerTopLeft}}></div>
          <div style={{...styles.cornerDecoration, ...styles.cornerBottomRight}}></div>
          
          <div style={{...styles.iconBox, ...styles.iconBoxGold, margin: '0 auto 1.5rem', width: '80px', height: '80px'}}>
            💡
          </div>
          <h2 style={styles.highlightTitle}>An Invitation to Innovate</h2>
          <p style={styles.highlightText}>
            Void Hacks v7.0 invites the next generation of changemakers to build the future. Whether you're a first-time hacker or a seasoned developer, this is your chance to bring ideas to life, connect with innovators, and make an impact. Join us for 36 hours of innovation, collaboration, and transformation — and be part of a community that codes for change.
          </p>
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
            transform: translate(30px, -30px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
        }

        @keyframes cornerGlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        .about-content {
          animation: fadeInUp 0.8s ease-out;
        }

        @media (max-width: 768px) {
          .about-content {
            padding: 4rem 1.5rem 3rem !important;
          }

          .about-title {
            font-size: 2.5rem !important;
          }

          .section-card {
            padding: 1.75rem !important;
          }

          .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
            gap: 1rem !important;
          }

          .stat-card {
            padding: 1.5rem !important;
          }

          .highlight-box {
            padding: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          .about-content {
            padding: 3rem 1rem 2rem !important;
          }

          .about-title {
            font-size: 2rem !important;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}