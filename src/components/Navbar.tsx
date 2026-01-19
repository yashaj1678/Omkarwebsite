import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation(); // Add useTranslation here

  // Function to change language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false); // Close mobile menu on language change
  };

  const navLinks = [
    { path: '/', label: t('home', 'Home') }, // Use t() for translation, provide fallback
    { path: '/services', label: t('ourServices', 'Our Services') },
    { path: '/documents', label: t('documents', 'Documents') },
    { path: '/valuation', label: t('valuation', 'Valuation') },
    { path: '/why-om', label: t('whyOm', 'Why OM') },
    { path: '/team', label: t('team', 'Team') },
    { path: '/contact', label: t('contact', 'Contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 navbar-scroll ${
        isScrolled ? 'scrolled' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img
              src="https://i.imgur.com/GHxe09T.png"
              alt="Om Estate Services"
              className="h-24 transform hover:scale-105 transition-transform duration-300"
              height="96"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-2 py-1 text-base font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-primary-teal'
                    : 'text-gray-700 hover:text-primary-teal'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-teal transform origin-left transition-transform duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            ))}
            {/* Language Switcher Dropdown - Desktop */}
            <div className="ml-4">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-teal focus:border-primary-teal sm:text-sm rounded-md"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="mr">मराठी</option>
              </select>
            </div>
            <a
              href="https://wa.me/919082909010"
              target="_blank"
              rel="noopener noreferrer"
              className="button-hover inline-flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Language Switcher Dropdown - Mobile (before menu toggle) */}
            <div className="mr-2">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-teal focus:border-primary-teal sm:text-sm rounded-md"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="mr">मराठी</option>
              </select>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-teal transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100 shadow-lg' : 'max-h-0 opacity-0' // Adjusted max-h for more items
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-primary-teal/10 text-primary-teal'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => {
                  setIsMenuOpen(false); // Close menu on link click
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919082909010"
              target="_blank"
              rel="noopener noreferrer"
              className="button-hover flex items-center justify-center gap-2 w-full mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// The second Navbar definition from line 133 to the end of the file should be REMOVED.