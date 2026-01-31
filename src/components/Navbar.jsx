import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/compliance', label: 'Compliance' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact Us' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isTransparent
      ? 'bg-transparent text-white border-transparent py-1 sm:py-2'
      : 'bg-white/70 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] text-neutral-900 py-1 sm:py-1.5'
      }`}>
      <div className="mx-auto w-full max-w-[96%] sm:max-w-[97%] lg:max-w-[98%] 2xl:max-w-[99%] px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-9 sm:h-12 md:h-14 lg:h-16">
          {/* Left: Brand */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center gap-1.5 sm:gap-2 group"
          >
            <div className={`flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
              <img src="/Pandiyan_logo.png" alt="Pandiyan Logo" className="h-7 xs:h-8 sm:h-8 md:h-9 lg:h-10 w-auto object-contain" />
            </div>
            <span className={`${isTransparent ? 'text-white' : 'text-neutral-900'} font-black tracking-tighter text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl group-hover:text-yellow-500 transition-colors`}>
              Pandiyan
            </span>
          </Link>

          {/* Center: Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-3 2xl:gap-5 3xl:gap-6 text-sm 2xl:text-base 3xl:text-lg 4xl:text-lg font-bold tracking-tight">
            {navLinks.map((link) => {
              const isContact = link.label === 'Contact Us';
              const isActive = location.pathname === link.to;

              if (isContact) return null;

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={handleNavClick}
                  className={`relative px-3 py-1.5 group transition-all duration-300 ${isActive
                    ? isTransparent ? 'text-white' : 'text-yellow-600'
                    : isTransparent
                      ? 'text-white/70 hover:text-white'
                      : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Subtle Glow Underline */}
                  <span className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full transform origin-center transition-transform duration-500 ${isActive
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-50'
                    } ${isTransparent ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]'}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              onClick={handleNavClick}
              className={`hidden md:block px-3 sm:px-5 lg:px-6 xl:px-8 2xl:px-10 py-1 sm:py-1.5 lg:py-2 2xl:py-2.5 ${isTransparent ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'} rounded-full font-black text-xs sm:text-xs md:text-sm lg:text-sm 2xl:text-base 3xl:text-lg uppercase tracking-widest transition-all shadow-lg active:scale-95`}
            >
              Let's Talk
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden ${isTransparent ? 'text-white' : 'text-neutral-600'} hover:text-yellow-500 p-1.5 transition-colors focus:outline-none`}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h20" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu: rendered in portal so it's on top on all pages */}
      {typeof document !== 'undefined' &&
        createPortal(
          <>
            <div
              className={`xl:hidden fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div
              className={`xl:hidden fixed top-0 right-0 bottom-0 z-[9999] w-full max-w-[min(320px,85vw)] bg-white shadow-2xl border-l border-neutral-100 transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
              style={{ paddingRight: 'env(safe-area-inset-right, 0px)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
              role="dialog"
              aria-label="Mobile menu"
              aria-modal="true"
            >
              <div className="flex flex-col h-full pt-14 pb-8 px-5 sm:px-6 overflow-y-auto">
                <nav className="flex-1 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={handleNavClick}
                      className={`block py-4 px-4 -mx-4 rounded-xl text-lg font-bold uppercase tracking-tight transition-colors active:bg-neutral-100 ${location.pathname === link.to
                        ? 'text-yellow-600 bg-yellow-50'
                        : 'text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100'
                        }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="pt-6 mt-6 border-t border-neutral-200">
                  <Link
                    to="/contact"
                    onClick={handleNavClick}
                    className="block w-full text-center bg-neutral-900 text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-lg active:scale-[0.98]"
                  >
                    Let's Talk
                  </Link>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </header>
  );
}
