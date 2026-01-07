import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center gap-3 group"
          >
            <div className={`w-12 h-12 overflow-hidden ${isTransparent ? 'border-2 border-white/20' : 'border-2 border-yellow-400/20'} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
              <img src={logo} alt="Pandiyan Logo" className="w-full h-full object-cover" />
            </div>
            <span className={`${isTransparent ? 'text-white' : 'text-neutral-900'} font-black tracking-tighter text-2xl group-hover:text-yellow-500 transition-colors`}>
              Pandiyan
            </span>
          </Link>

          {/* Center: Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-3 text-[16px] font-bold tracking-tight">
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
              className={`hidden md:block px-8 py-3 ${isTransparent ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'} rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95`}
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
              className={`block text-3xl font-black uppercase tracking-tighter transition-colors ${location.pathname === link.to
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
