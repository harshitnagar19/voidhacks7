import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const styles = {
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
            gap: '0.5rem',
            cursor: 'pointer'
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
        mobileMenuButton: {
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            zIndex: 60
        },
        mobileMenu: {
            position: 'fixed',
            top: 0,
            right: 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.98)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            zIndex: 55,
            transition: 'transform 0.3s ease-in-out',
            borderLeft: '1px solid rgba(6, 182, 212, 0.2)'
        },
        mobileMenuHidden: {
            transform: 'translateX(100%)'
        },
        mobileMenuVisible: {
            transform: 'translateX(0)'
        },
        mobileNavLink: {
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'color 0.3s',
            background: 'none',
            border: 'none',
            padding: '0.5rem'
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
        }
    }

    return (
        <>
            <nav style={styles.nav}>
                <div style={styles.navContent} className="nav-content">
                    <div style={styles.logo} onClick={() => navigate("/")}>
                        <div style={styles.logoIcon} className="logo-icon">
                            <span style={{ color: '#22d3ee', fontWeight: 'bold', fontSize: '1.25rem' }} className="logo-icon-text">&lt;/&gt;</span>
                        </div>
                        <span style={styles.logoText} className="logo-text">void<span style={styles.logoAccent}>hacks() 7.0</span></span>
                    </div>

                    <div style={styles.navLinks} className="nav-links">
                        <button
                            style={styles.navLink}
                            className="nav-link"
                            onClick={() => { navigate("/") }}
                        >
                            Home
                        </button>
                        <button
                            style={styles.navLink}
                            className="nav-link"
                            onClick={() => { navigate("/timelines") }}
                        >
                            Timeline
                        </button>
                        <button
                            style={styles.navLink}
                            className="nav-link"
                            onClick={() => { navigate("/about-us") }}
                        >
                            About Us
                        </button>
                    </div>

                    <button
                        style={styles.mobileMenuButton}
                        className="mobile-menu-button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>

                    <button
                        style={styles.registerBtn}
                        className="register-btn"
                        onClick={() => window.open('https://unstop.com/o/2wGEnLi?lb=5VvzCSm&utm_medium=Share&utm_source=voidhack2161&utm_campaign=Online_coding_challenge', '_blank')}
                    >Register Now</button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                style={{
                    ...styles.mobileMenu,
                    ...(isMobileMenuOpen ? styles.mobileMenuVisible : styles.mobileMenuHidden)
                }}
                className="mobile-menu"
            >
                <button
                    style={styles.mobileNavLink}
                    className="mobile-nav-link"
                    onClick={() => {
                        navigate("/");
                        setIsMobileMenuOpen(false);
                    }}
                >
                    Home
                </button>
                <button
                    style={styles.mobileNavLink}
                    className="mobile-nav-link"
                    onClick={() => {
                        navigate("/timelines");
                        setIsMobileMenuOpen(false);
                    }}
                >
                    Timeline
                </button>
                <button
                    style={styles.mobileNavLink}
                    className="mobile-nav-link"
                    onClick={() => {
                        navigate("/about-us");
                        setIsMobileMenuOpen(false);
                    }}
                >
                    About Us
                </button>
                <button
                    style={{
                        ...styles.registerBtn,
                        marginTop: '1rem',
                        padding: '1rem 2rem',
                        fontSize: '1rem'
                    }}
                    onClick={() => {
                        window.open('https://unstop.com/o/2wGEnLi?lb=5VvzCSm&utm_medium=Share&utm_source=voidhack2161&utm_campaign=Online_coding_challenge', '_blank');
                        setIsMobileMenuOpen(false);
                    }}
                >
                    Register Now
                </button>
            </div>

            <style>{`
                .nav-link:hover {
                    color: #22d3ee;
                    transform: none;
                }

                .mobile-nav-link:hover {
                    color: #22d3ee;
                }

                .register-btn:hover {
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

                    .nav-links {
                        gap: 1.5rem !important;
                    }

                    .nav-link {
                        font-size: 0.8rem !important;
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
                        display: none;
                        font-size: 0.7rem !important;
                        padding: 0.375rem 0.875rem !important;
                    }

                    .nav-links {
                        display: none !important;
                    }

                    .mobile-menu-button {
                        display: block !important;
                    }
                    
                }
            `}</style>
        </>
    )
}

export default NavBar