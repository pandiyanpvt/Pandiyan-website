import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/branches', label: 'Branches' },
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

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isTransparent
      ? 'bg-transparent text-white border-transparent py-4'
      : 'bg-white/70 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] text-neutral-900 py-2'
      }`}>
      <div className="mx-auto max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 4xl:px-32">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 lg:h-24">
          {/* Left: Brand */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center gap-2 sm:gap-3 group"
          >
            <div className={`flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
              <img src="/Pandiyan_logo.png" alt="Pandiyan Logo" className="h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" />
            </div>
            <span className={`${isTransparent ? 'text-white' : 'text-neutral-900'} font-black tracking-tighter text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl 2xl:text-3xl group-hover:text-yellow-500 transition-colors`}>
              Pandiyan
            </span>
          </Link>

          {/* Center: Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 3xl:gap-8 text-sm 2xl:text-base 3xl:text-lg 4xl:text-lg font-bold tracking-tight">
            {navLinks.map((link) => {
              const isContact = link.label === 'Contact Us';
              const isActive = location.pathname === link.to;

              if (isContact) return null;

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={handleNavClick}
                  className={`relative px-4 py-2 group transition-all duration-300 ${isActive
                    ? isTransparent ? 'text-white' : 'text-yellow-600'
                    : isTransparent
                      ? 'text-white/70 hover:text-white'
                      : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Subtle Glow Underline */}
                  <span className={`absolute bottom-0 left-4 right-4 h-1 rounded-full transform origin-center transition-transform duration-500 ${isActive
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
              className={`hidden md:block px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-1.5 sm:py-2 lg:py-2.5 2xl:py-3 ${isTransparent ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'} rounded-full font-black text-xs sm:text-xs md:text-sm lg:text-sm 2xl:text-base 3xl:text-lg uppercase tracking-widest transition-all shadow-lg active:scale-95`}
            >
              Let's Talk
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden ${isTransparent ? 'text-white' : 'text-neutral-600'} hover:text-yellow-500 p-2 transition-colors focus:outline-none`}
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Mobile Menu */}
      <div className={`xl:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100 pb-12' : 'max-h-0 opacity-0 overflow-hidden'} bg-white/80 backdrop-blur-2xl text-neutral-900 border-t border-white/20`}>
        <div className="px-6 py-12 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={handleNavClick}
              className={`block text-xl sm:text-2xl font-black uppercase tracking-tighter transition-colors ${location.pathname === link.to
                ? 'text-yellow-500'
                : 'text-neutral-900 hover:text-yellow-500'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-8 border-t border-neutral-100">
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="w-full block text-center bg-neutral-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
