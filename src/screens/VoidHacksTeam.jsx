import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function VoidHacksTeam() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: 'Arjun Sharma',
      role: 'Lead Organizer',
      department: 'Computer Science',
      year: 'Final Year',
      image: 'AS',
      color: '#22d3ee',
      specialty: 'Event Management & Strategy'
    },
    {
      name: 'Priya Patel',
      role: 'Technical Head',
      department: 'Information Technology',
      year: 'Third Year',
      image: 'PP',
      color: '#a855f7',
      specialty: 'Full Stack Development'
    },
    {
      name: 'Rahul Verma',
      role: 'Sponsorship Lead',
      department: 'Business Administration',
      year: 'Final Year',
      image: 'RV',
      color: '#ec4899',
      specialty: 'Corporate Relations'
    },
    {
      name: 'Sneha Gupta',
      role: 'Marketing Head',
      department: 'Design & Media',
      year: 'Third Year',
      image: 'SG',
      color: '#f59e0b',
      specialty: 'Brand & Communications'
    },
    {
      name: 'Vikram Singh',
      role: 'Operations Manager',
      department: 'Computer Science',
      year: 'Final Year',
      image: 'VS',
      color: '#10b981',
      specialty: 'Logistics & Coordination'
    },
    {
      name: 'Anjali Reddy',
      role: 'Design Lead',
      department: 'Graphic Design',
      year: 'Third Year',
      image: 'AR',
      color: '#8b5cf6',
      specialty: 'UI/UX & Visual Design'
    },
    {
      name: 'Karan Mehta',
      role: 'Developer Relations',
      department: 'Information Technology',
      year: 'Final Year',
      image: 'KM',
      color: '#06b6d4',
      specialty: 'Community Engagement'
    },
    {
      name: 'Ishita Joshi',
      role: 'Content Head',
      department: 'Mass Communication',
      year: 'Third Year',
      image: 'IJ',
      color: '#f97316',
      specialty: 'Social Media & Content'
    }
  ];

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
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: '#22d3ee',
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const shapes = [];
    for (let i = 0; i < 20; i++) {
      const geometry = new THREE.TorusGeometry(0.3, 0.1, 16, 100);
      const material = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? '#22d3ee' : '#a855f7',
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 15;
      mesh.position.y = (Math.random() - 0.5) * 15;
      mesh.position.z = (Math.random() - 0.5) * 15;

      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
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
      particlesMesh.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;

      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;

        shape.position.x += Math.sin(elapsedTime + shape.position.y) * 0.002;
        shape.position.y += Math.cos(elapsedTime + shape.position.x) * 0.002;
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

  useEffect(() => {
    let ticking = false;
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!scrollContainerRef.current || !containerRef.current) return;

          const container = containerRef.current;
          const scrollContainer = scrollContainerRef.current;
          const rect = container.getBoundingClientRect();
          
          // Check if the section is in view
          if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
            // Calculate how much of the container height we've scrolled through
            const scrollableHeight = rect.height - window.innerHeight;
            const scrolled = Math.max(0, -rect.top);
            const progress = Math.min(scrolled / scrollableHeight, 1);
            
            setScrollProgress(progress);
            
            // Apply horizontal scroll based on vertical scroll progress
            const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            scrollContainer.scrollLeft = progress * maxScroll;
            
            // Update current card index
            const index = Math.floor(progress * teamMembers.length);
            setCurrentIndex(Math.min(index, teamMembers.length - 1));
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleWheel = (e) => {
      if (!scrollContainerRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const scrollContainer = scrollContainerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Check if section is in viewport
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const progress = scrollContainer.scrollLeft / maxScroll;
        
        // If not at the end and scrolling down, prevent default
        if (e.deltaY > 0 && progress < 0.99) {
          e.preventDefault();
          
          // Scroll to a specific position to keep section in view
          const containerTop = container.offsetTop;
          const targetScroll = containerTop + (progress * (rect.height - window.innerHeight));
          window.scrollTo({
            top: targetScroll,
            behavior: 'auto'
          });
        }
        // If at beginning and scrolling up, allow normal scroll
        else if (e.deltaY < 0 && progress <= 0.01) {
          // Allow normal scrolling
        }
        // If at end and scrolling down, allow normal scroll
        else if (e.deltaY > 0 && progress >= 0.99) {
          // Allow normal scrolling
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [teamMembers.length]);

  const styles = {
    container: {
      position: 'relative',
      height: `${teamMembers.length * 120}vh`,
      backgroundColor: '#000',
      overflow: 'hidden'
    },
    stickyWrapper: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden'
    },
    canvas: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0
    },
    content: {
      position: 'relative',
      zIndex: 10,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '2rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
      animation: 'fadeInDown 1s ease-out'
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
    scrollContainer: {
      display: 'flex',
      gap: '2rem',
      overflowX: 'hidden',
      overflowY: 'hidden',
      padding: '2rem 0',
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
      pointerEvents: 'none'
    },
    cardWrapper: {
      flex: '0 0 auto',
      width: 'min(400px, 90vw)',
      perspective: '1000px'
    },
    card: {
      position: 'relative',
      width: '100%',
      height: '500px',
      transformStyle: 'preserve-3d',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      pointerEvents: 'auto'
    },
    cardInner: {
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '2rem',
      border: '2px solid',
      overflow: 'hidden',
      transition: 'all 0.6s ease'
    },
    cardGlow: {
      position: 'absolute',
      inset: '-20px',
      borderRadius: '2rem',
      opacity: 0,
      filter: 'blur(40px)',
      transition: 'opacity 0.6s ease',
      pointerEvents: 'none'
    },
    cardContent: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      zIndex: 1
    },
    avatarWrapper: {
      width: '150px',
      height: '150px',
      margin: '0 auto 1.5rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      fontWeight: '900',
      color: '#fff',
      position: 'relative',
      transition: 'all 0.6s ease'
    },
    avatarGlow: {
      position: 'absolute',
      inset: '-10px',
      borderRadius: '50%',
      filter: 'blur(20px)',
      opacity: 0.5
    },
    memberName: {
      fontSize: '2rem',
      fontWeight: '900',
      color: '#fff',
      textAlign: 'center',
      marginBottom: '0.5rem',
      letterSpacing: '-0.02em'
    },
    memberRole: {
      fontSize: '1.25rem',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '1.5rem',
      letterSpacing: '0.05em'
    },
    infoGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      marginTop: 'auto'
    },
    infoItem: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.75rem 1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '0.75rem',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    infoLabel: {
      color: '#9ca3af',
      fontSize: '0.875rem',
      fontWeight: '600'
    },
    infoValue: {
      color: '#fff',
      fontSize: '0.875rem',
      fontWeight: '700'
    },
    progressBar: {
      position: 'fixed',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '300px',
      height: '4px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '9999px',
      overflow: 'hidden',
      zIndex: 50,
      backdropFilter: 'blur(10px)'
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(to right, #22d3ee, #a855f7, #ec4899)',
      borderRadius: '9999px',
      transition: 'width 0.3s ease',
      boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)'
    },
    indicator: {
      position: 'fixed',
      bottom: '4rem',
      left: '50%',
      transform: 'translateX(-50%)',
      color: '#9ca3af',
      fontSize: '0.875rem',
      fontFamily: 'monospace',
      zIndex: 50,
      background: 'rgba(0, 0, 0, 0.5)',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }
  };

  return (
    <>
      {/* Content before team section */}
      <div style={{ height: '100vh', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '3rem', marginBottom: '1rem' }}>Scroll Down to Meet Our Team</h1>
          <p style={{ color: '#9ca3af', fontSize: '1.2rem' }}>Vertical scroll will move cards horizontally ↓</p>
        </div>
      </div>

      {/* Team section */}
      <div style={styles.container} ref={containerRef}>
        <div style={styles.stickyWrapper}>
          <canvas ref={canvasRef} style={styles.canvas} />
          
          <div style={styles.content}>
            <div style={styles.header}>
              <div style={styles.versionTag}>
                MEET THE INNOVATORS
              </div>
              <h2 style={styles.title}>
                Our <span style={styles.titleGradient}>Team</span>
              </h2>
              <p style={styles.subtitle}>
                THE PEOPLE MAKING IT HAPPEN
              </p>
            </div>

            <div ref={scrollContainerRef} style={styles.scrollContainer}>
              {teamMembers.map((member, index) => {
                const isActive = index === currentIndex;
                
                return (
                  <div key={index} style={styles.cardWrapper}>
                    <div
                      style={{
                        ...styles.card,
                        transform: isActive 
                          ? 'rotateY(0deg) scale(1.05)' 
                          : 'rotateY(-5deg) scale(0.95)',
                        opacity: isActive ? 1 : 0.6
                      }}
                    >
                      <div
                        style={{
                          ...styles.cardInner,
                          borderColor: `${member.color}60`,
                          boxShadow: isActive 
                            ? `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${member.color}40`
                            : 'none'
                        }}
                      >
                        <div
                          style={{
                            ...styles.cardGlow,
                            background: `radial-gradient(circle at 50% 0%, ${member.color}50, transparent)`,
                            opacity: isActive ? 0.8 : 0
                          }}
                        ></div>

                        <div style={styles.cardContent}>
                          <div
                            style={{
                              ...styles.avatarWrapper,
                              background: `${member.color}20`,
                              border: `3px solid ${member.color}`,
                              transform: isActive ? 'scale(1.1) rotateZ(5deg)' : 'scale(1)'
                            }}
                          >
                            <div
                              style={{
                                ...styles.avatarGlow,
                                background: member.color
                              }}
                            ></div>
                            <span style={{ position: 'relative', zIndex: 1 }}>
                              {member.image}
                            </span>
                          </div>

                          <h3 style={styles.memberName}>{member.name}</h3>
                          <p
                            style={{
                              ...styles.memberRole,
                              color: member.color
                            }}
                          >
                            {member.role}
                          </p>

                          <div style={styles.infoGrid}>
                            <div style={styles.infoItem}>
                              <span style={styles.infoLabel}>Department</span>
                              <span style={styles.infoValue}>{member.department}</span>
                            </div>
                            <div style={styles.infoItem}>
                              <span style={styles.infoLabel}>Year</span>
                              <span style={styles.infoValue}>{member.year}</span>
                            </div>
                            <div
                              style={{
                                ...styles.infoItem,
                                background: `${member.color}15`,
                                borderColor: `${member.color}40`
                              }}
                            >
                              <span style={{ ...styles.infoLabel, color: member.color }}>
                                Specialty
                              </span>
                              <span style={{ ...styles.infoValue, color: member.color }}>
                                {member.specialty}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={styles.indicator}>
            {currentIndex + 1} / {teamMembers.length} • {scrollProgress >= 0.99 ? 'Complete! Scroll down ↓' : 'Scroll down to see more →'}
          </div>

          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${scrollProgress * 100}%`
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Content after team section */}
      <div style={{ height: '100vh', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '3rem' }}>You've met the team! 🎉</h1>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          h2 { font-size: 2.5rem !important; }
        }

        ::-webkit-scrollbar {
          display: none;
        }

        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}