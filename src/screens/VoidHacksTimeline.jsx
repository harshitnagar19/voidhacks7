import React, { useEffect, useRef, useState } from 'react';

export default function VoidHacksTimeline({props, ref}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [show, setShow] = useState(true);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const timelineEvents = [
    {
      day: 'Day 1',
      date: '28 Nov 2025',
      time: '09:00 AM',
      title: 'Registration & Check-in',
      description: 'Team registration, ID verification, and welcome kit distribution',
      icon: '📝',
      color: '#06b6d4',
      category: 'Arrival'
    },
    {
      day: 'Day 1',
      date: '28 Nov 2025',
      time: '10:30 AM',
      title: 'Opening Ceremony',
      description: 'Welcome address, sponsor introductions, and hackathon rules briefing',
      icon: '🎤',
      color: '#22d3ee',
      category: 'Ceremony'
    },
    {
      day: 'Day 1',
      date: '28 Nov 2025',
      time: '11:00 AM',
      title: 'Hacking Begins!',
      description: 'Official start of the 24-hour coding marathon',
      icon: '🚀',
      color: '#a855f7',
      category: 'Start'
    },
    {
      day: 'Day 1',
      date: '28 Nov 2025',
      time: '01:00 PM',
      title: 'Lunch Break',
      description: 'Fuel up with delicious food and network with fellow hackers',
      icon: '🍕',
      color: '#ec4899',
      category: 'Break'
    },
    {
      day: 'Day 1',
      date: '28 Nov 2025',
      time: '03:00 PM',
      title: 'Mentor Session 1',
      description: 'Industry experts available for guidance and technical support',
      icon: '👨‍🏫',
      color: '#8b5cf6',
      category: 'Workshop'
    },
    {
      day: 'Day 1',
      date: '28 Nov 2025',
      time: '05:00 PM',
      title: 'Mini Challenge 1',
      description: 'Quick coding challenge with exciting prizes',
      icon: '⚡',
      color: '#06b6d4',
      category: 'Activity'
    },
    {
      day: 'Day 1',
      date: '28 Nov 2025',
      time: '07:00 PM',
      title: 'Tech Talk: AI/ML',
      description: 'Special session on latest AI/ML trends and implementations',
      icon: '🤖',
      color: '#22d3ee',
      category: 'Workshop'
    },
    {
      day: 'Day 1',
      date: '28 Nov 2025',
      time: '09:00 PM',
      title: 'Dinner & Networking',
      description: 'Evening meal with team bonding activities',
      icon: '🍜',
      color: '#a855f7',
      category: 'Break'
    },
    {
      day: 'Day 1',
      date: '28 Nov 2025',
      time: '11:00 PM',
      title: 'Midnight Snacks',
      description: 'Coffee, energy drinks, and late-night fuel',
      icon: '☕',
      color: '#ec4899',
      category: 'Break'
    },
  ];

  const timelineEvents2 = [
    {
      day: 'Day 2',
      date: '29 Nov 2025',
      time: '01:00 AM',
      title: 'Gaming Break',
      description: 'Take a break with fun gaming sessions to recharge',
      icon: '🎮',
      color: '#8b5cf6',
      category: 'Activity'
    },
    {
      day: 'Day 2',
      date: '29 Nov 2025',
      time: '03:00 AM',
      title: 'Mentor Session 2',
      description: 'Late-night guidance for final sprint',
      icon: '💡',
      color: '#06b6d4',
      category: 'Workshop'
    },
    {
      day: 'Day 2',
      date: '29 Nov 2025',
      time: '06:00 AM',
      title: 'Sunrise Breakfast',
      description: 'Energizing breakfast to power through the final hours',
      icon: '🌅',
      color: '#22d3ee',
      category: 'Break'
    },
    {
      day: 'Day 2',
      date: '29 Nov 2025',
      time: '09:00 AM',
      title: 'Final Sprint',
      description: 'Last 2 hours to polish your projects',
      icon: '⏰',
      color: '#a855f7',
      category: 'Activity'
    },
    {
      day: 'Day 2',
      date: '29 Nov 2025',
      time: '11:00 AM',
      title: 'Hacking Ends',
      description: 'Code freeze! Submit your final projects',
      icon: '🏁',
      color: '#ec4899',
      category: 'End'
    },
    {
      day: 'Day 2',
      date: '29 Nov 2025',
      time: '12:00 PM',
      title: 'Lunch Break',
      description: 'Relax and refuel before presentations',
      icon: '🍽️',
      color: '#8b5cf6',
      category: 'Break'
    },
    {
      day: 'Day 2',
      date: '29 Nov 2025',
      time: '01:00 PM',
      title: 'Project Presentations',
      description: 'Teams present their innovations to judges',
      icon: '📊',
      color: '#06b6d4',
      category: 'Judging'
    },
    {
      day: 'Day 2',
      date: '29 Nov 2025',
      time: '04:00 PM',
      title: 'Closing Ceremony',
      description: 'Winner announcements, prizes, and celebration',
      icon: '🏆',
      color: '#22d3ee',
      category: 'Ceremony'
    },
    {
      day: 'Day 2',
      date: '29 Nov 2025',
      time: '05:00 PM',
      title: 'Photo Session & Farewell',
      description: 'Group photos and goodbye to new friends',
      icon: '📸',
      color: '#a855f7',
      category: 'End'
    }
  ];

  const styles = {
    container: {
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#000',
      padding: '5rem 1.5rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflowX: 'hidden',
      overflowY: 'auto',
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
      bottom: '20%',
      right: '10%',
      width: '400px',
      height: '400px',
      backgroundColor: '#a855f7',
      borderRadius: '50%',
      filter: 'blur(120px)',
      opacity: 0.15,
      animation: 'float 10s ease-in-out infinite reverse'
    },
    gradient3: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '300px',
      height: '300px',
      backgroundColor: '#ec4899',
      borderRadius: '50%',
      filter: 'blur(120px)',
      opacity: 0.1,
      animation: 'float 12s ease-in-out infinite'
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
      letterSpacing: '0.1em'
    },
    dateRange: {
      color: '#22d3ee',
      fontSize: '1rem',
      fontWeight: '600',
      marginTop: '0.5rem',
      fontFamily: 'monospace'
    },
    timelineContainer: {
      position: 'relative',
      padding: '2rem 0'
    },
    timelineWrapper: {
      position: 'relative',
      paddingLeft: '2rem'
    },
    centralLine: {
      position: 'absolute',
      left: '2.5rem',
      top: 0,
      bottom: 0,
      width: '2px',
      background: 'linear-gradient(to bottom, transparent, #06b6d4, #a855f7, #ec4899, transparent)',
      opacity: 0.5
    },
    glowingLine: {
      position: 'absolute',
      left: '2.5rem',
      top: 0,
      width: '2px',
      height: '200px',
      background: 'linear-gradient(to bottom, transparent, #22d3ee, #22d3ee, transparent)',
      boxShadow: '0 0 20px #22d3ee, 0 0 40px #22d3ee',
      animation: 'lineGlow 15s linear infinite',
      zIndex: 1
    },
    glowingLine2: {
      position: 'absolute',
      left: '2.5rem',
      top: 0,
      width: '2px',
      height: '200px',
      background: 'linear-gradient(to bottom, transparent, #a855f7, #a855f7, transparent)',
      boxShadow: '0 0 20px #a855f7, 0 0 40px #a855f7',
      animation: 'lineGlow 15s linear infinite',
      animationDelay: '3s',
      zIndex: 1
    },
    glowingLine3: {
      position: 'absolute',
      left: '2.5rem',
      top: 0,
      width: '2px',
      height: '200px',
      background: 'linear-gradient(to bottom, transparent, #ec4899, #ec4899, transparent)',
      boxShadow: '0 0 20px #ec4899, 0 0 40px #ec4899',
      animation: 'lineGlow 15s linear infinite',
      animationDelay: '6s',
      zIndex: 1
    },
    glowingLine4: {
      position: 'absolute',
      left: '2.5rem',
      top: 0,
      width: '2px',
      height: '200px',
      background: 'linear-gradient(to bottom, transparent, #06b6d4, #06b6d4, transparent)',
      boxShadow: '0 0 20px #06b6d4, 0 0 40px #06b6d4',
      animation: 'lineGlow 15s linear infinite',
      animationDelay: '9s',
      zIndex: 1
    },
    glowingLine5: {
      position: 'absolute',
      left: '2.5rem',
      top: 0,
      width: '2px',
      height: '200px',
      background: 'linear-gradient(to bottom, transparent, #8b5cf6, #8b5cf6, transparent)',
      boxShadow: '0 0 20px #8b5cf6, 0 0 40px #8b5cf6',
      animation: 'lineGlow 15s linear infinite',
      animationDelay: '12s',
      zIndex: 1
    },
    timelineItem: {
      position: 'relative',
      marginBottom: '3rem',
      opacity: 0,
      transform: 'translateX(-50px)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    timelineItemVisible: {
      opacity: 1,
      transform: 'translateX(0)'
    },
    dayLabel: {
      position: 'absolute',
      left: '-2rem',
      top: 0,
      transform: 'translateX(-100%)',
      fontSize: '0.75rem',
      color: '#9ca3af',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      writingMode: 'vertical-rl',
      textOrientation: 'mixed'
    },
    timelineNode: {
      position: 'absolute',
      left: '1.5rem',
      top: '1.5rem',
      width: '2rem',
      height: '2rem',
      borderRadius: '50%',
      border: '3px solid',
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    timelineNodeActive: {
      transform: 'scale(1.3)',
      boxShadow: '0 0 20px'
    },
    nodeInner: {
      width: '0.5rem',
      height: '0.5rem',
      borderRadius: '50%',
      transition: 'all 0.3s ease'
    },
    timelineCard: {
      marginLeft: '5rem',
      padding: '1.5rem',
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    timelineCardHover: {
      background: 'rgba(255, 255, 255, 0.05)',
      transform: 'translateX(10px)',
      borderColor: 'rgba(6, 182, 212, 0.3)'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '0.75rem'
    },
    cardIcon: {
      fontSize: '2rem',
      filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))'
    },
    cardTime: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    },
    time: {
      fontSize: '1.5rem',
      fontWeight: '900',
      color: '#fff',
      fontFamily: 'monospace',
      letterSpacing: '0.05em'
    },
    date: {
      fontSize: '0.75rem',
      color: '#9ca3af',
      fontWeight: '600',
      letterSpacing: '0.1em'
    },
    categoryBadge: {
      marginLeft: 'auto',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    cardBody: {
      marginLeft: '3rem'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#fff',
      marginBottom: '0.5rem'
    },
    cardDescription: {
      color: '#9ca3af',
      fontSize: '0.875rem',
      lineHeight: 1.6
    },
    toggleButton: {
      padding: '0.875rem 2rem',
      background: 'linear-gradient(to right, #06b6d4, #a855f7)',
      borderRadius: '9999px',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
      marginTop: '2rem',
      marginLeft: '5rem',
      boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
    },
    legend: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'center',
      marginTop: '4rem',
      padding: '2rem',
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    legendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    legendDot: {
      width: '1rem',
      height: '1rem',
      borderRadius: '50%'
    },
    legendLabel: {
      color: '#9ca3af',
      fontSize: '0.875rem',
      fontWeight: '600'
    }
  };

  const categories1 = [...new Set(timelineEvents.map(e => e.category))];
  const categories2 = [...new Set(timelineEvents2.map(e => e.category))];
  const categories = [...new Set([...categories1, ...categories2])];

  return (
    <div style={styles.container} ref={timelineRef} >
      <div ref={ref} id="schedule">
      <div style={styles.backgroundEffects}>
        <div style={styles.gradient1}></div>
        <div style={styles.gradient2}></div>
        <div style={styles.gradient3}></div>
      </div>

      <div style={styles.content}>
        <div style={styles.header} className="timeline-header">
          <div style={styles.versionTag} className="version-tag">
            SCHEDULE v7.0
          </div>
          <h2 style={styles.title} className="timeline-title">
            Event <span style={styles.titleGradient}>Timeline</span>
          </h2>
          <p style={styles.subtitle} className="timeline-subtitle">24 HOURS OF PURE INNOVATION</p>
          <p style={styles.dateRange} className="date-range">28 NOV 2025 → 29 NOV 2025</p>
        </div>

        <div style={styles.timelineContainer}>
          <div style={styles.timelineWrapper} className="timeline-wrapper">
            <div style={styles.centralLine} className="central-line"></div>
            <div style={styles.glowingLine}></div>
            <div style={styles.glowingLine2}></div>
            <div style={styles.glowingLine3}></div>
            <div style={styles.glowingLine4}></div>
            <div style={styles.glowingLine5}></div>
            
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                style={{
                  ...styles.timelineItem,
                  ...(isVisible ? {
                    ...styles.timelineItemVisible,
                    transitionDelay: `${index * 0.1}s`
                  } : {})
                }}
                onMouseEnter={() => setActiveIndex(index)}
                className="timeline-item"
              >
                {index === 0 || timelineEvents[index - 1].day !== event.day ? (
                  <div style={styles.dayLabel} className="day-label">{event.day}</div>
                ) : null}
                
                <div
                  style={{
                    ...styles.timelineNode,
                    borderColor: event.color,
                    ...(activeIndex === index ? {
                      ...styles.timelineNodeActive,
                      boxShadow: `0 0 20px ${event.color}`
                    } : {})
                  }}
                  className="timeline-node"
                >
                  <div
                    style={{
                      ...styles.nodeInner,
                      backgroundColor: activeIndex === index ? event.color : 'transparent'
                    }}
                  ></div>
                </div>

                <div
                  style={{
                    ...styles.timelineCard,
                    borderLeftColor: event.color,
                    borderLeftWidth: '3px',
                    ...(activeIndex === index ? styles.timelineCardHover : {})
                  }}
                  className="timeline-card"
                >
                  <div style={styles.cardHeader} className="card-header">
                    <div style={styles.cardIcon} className="card-icon">{event.icon}</div>
                    <div style={styles.cardTime}>
                      <div style={styles.time} className="event-time">{event.time}</div>
                      <div style={styles.date} className="event-date">{event.date}</div>
                    </div>
                    <div
                      style={{
                        ...styles.categoryBadge,
                        backgroundColor: `${event.color}20`,
                        color: event.color,
                        border: `1px solid ${event.color}40`
                      }}
                      className="category-badge"
                    >
                      {event.category}
                    </div>
                  </div>
                  <div style={styles.cardBody} className="card-body">
                    <h3 style={styles.cardTitle} className="card-title">{event.title}</h3>
                    <p style={styles.cardDescription} className="card-description">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {show ? (
              <button 
                onClick={() => setShow(!show)} 
                style={styles.toggleButton}
                className="toggle-button"
              >
                Show Day 2 Schedule →
              </button>
            ) : (
              <>
                {timelineEvents2.map((event, index) => (
                  <div
                    key={`day2-${index}`}
                    style={{
                      ...styles.timelineItem,
                      ...(isVisible ? {
                        ...styles.timelineItemVisible,
                        transitionDelay: `${index * 0.1}s`
                      } : {})
                    }}
                    onMouseEnter={() => setActiveIndex(timelineEvents.length + index)}
                    className="timeline-item"
                  >
                    {index === 0 ? (
                      <div style={styles.dayLabel} className="day-label">{event.day}</div>
                    ) : null}
                    
                    <div
                      style={{
                        ...styles.timelineNode,
                        borderColor: event.color,
                        ...(activeIndex === timelineEvents.length + index ? {
                          ...styles.timelineNodeActive,
                          boxShadow: `0 0 20px ${event.color}`
                        } : {})
                      }}
                      className="timeline-node"
                    >
                      <div
                        style={{
                          ...styles.nodeInner,
                          backgroundColor: activeIndex === timelineEvents.length + index ? event.color : 'transparent'
                        }}
                      ></div>
                    </div>

                    <div
                      style={{
                        ...styles.timelineCard,
                        borderLeftColor: event.color,
                        borderLeftWidth: '3px',
                        ...(activeIndex === timelineEvents.length + index ? styles.timelineCardHover : {})
                      }}
                      className="timeline-card"
                    >
                      <div style={styles.cardHeader} className="card-header">
                        <div style={styles.cardIcon} className="card-icon">{event.icon}</div>
                        <div style={styles.cardTime}>
                          <div style={styles.time} className="event-time">{event.time}</div>
                          <div style={styles.date} className="event-date">{event.date}</div>
                        </div>
                        <div
                          style={{
                            ...styles.categoryBadge,
                            backgroundColor: `${event.color}20`,
                            color: event.color,
                            border: `1px solid ${event.color}40`
                          }}
                          className="category-badge"
                        >
                          {event.category}
                        </div>
                      </div>
                      <div style={styles.cardBody} className="card-body">
                        <h3 style={styles.cardTitle} className="card-title">{event.title}</h3>
                        <p style={styles.cardDescription} className="card-description">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button 
                  onClick={() => setShow(!show)} 
                  style={styles.toggleButton}
                  className="toggle-button"
                >
                  ← Show Less
                </button>
              </>
            )}
          </div>
        </div>

        <div style={styles.legend} className="legend">
          {categories.map((category, index) => {
            const color = timelineEvents.find(e => e.category === category)?.color || 
                         timelineEvents2.find(e => e.category === category)?.color || '#06b6d4';
            return (
              <div key={index} style={styles.legendItem} className="legend-item">
                <div style={{ ...styles.legendDot, backgroundColor: color }}></div>
                <span style={styles.legendLabel}>{category}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @keyframes lineGlow {
          0% { top: 0; opacity: 0; }
          5% { opacity: 1; }
          75% { opacity: 1; }
          80% { top: 100%; opacity: 0; }
          100% { top: 100%; opacity: 0; }
        }

        .toggle-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(6, 182, 212, 0.5);
        }

        /* Tablet styles */
        @media (max-width: 768px) {
          .timeline-header {
            margin-bottom: 3rem !important;
          }
          
          .version-tag {
            font-size: 0.75rem !important;
            padding: 0.4rem 0.875rem !important;
          }
          
          .timeline-title {
            font-size: 2.5rem !important;
          }
          
          .timeline-subtitle {
            font-size: 1rem !important;
          }
          
          .date-range {
            font-size: 0.875rem !important;
          }
          
          .timeline-wrapper {
            padding-left: 1rem !important;
          }
          
          
          .timeline-node {
            left: 0.5rem !important;
            width: 1.75rem !important;
            height: 1.75rem !important;
            top: 1.25rem !important;
          }
          
          .timeline-card {
            margin-left: 3.5rem !important;
            padding: 1rem !important;
          }
          
          .card-header {
            gap: 0.75rem !important;
            flex-wrap: wrap !important;
          }
          
          .card-icon {
            font-size: 1.75rem !important;
          }
          
          .event-time {
            font-size: 1.25rem !important;
          }
          
          .event-date {
            font-size: 0.7rem !important;
          }
          
          .category-badge {
            font-size: 0.65rem !important;
            padding: 0.2rem 0.6rem !important;
          }
          
          .card-body {
            margin-left: 2.5rem !important;
          }
          
          .card-title {
            
          }
          
          .card-description {
            font-size: 0.8125rem !important;
          }
          
          .toggle-button {
            margin-left: 3.5rem !important;
            font-size: 0.875rem !important;
            padding: 0.75rem 1.5rem !important;
          }
          
          .legend {
            padding: 1.5rem !important;
            gap: 0.75rem !important;
          }
          
          .legend-item {
            font-size: 0.8125rem !important;
          }
        }

        /* Mobile styles */
        @media (max-width: 480px) {
          .timeline-title {
            font-size: 2rem !important;
          }
          
          .timeline-subtitle {
            font-size: 0.875rem !important;
          }
          
          .card-header {
            
            align-items: flex-start !important;
          }
          
          .category-badge {
            margin-left: 0 !important;
          }
          
          .card-body {
            margin-left: 0 !important;
          }
        }
      `}</style>
      </div>
    </div>
  );
}