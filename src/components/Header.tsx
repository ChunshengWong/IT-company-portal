import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/cases', label: t('nav.cases') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const servicesItems = [
    { path: '/services/software-development', label: t('services.items.0.title') },
    { path: '/services/cloud-services', label: t('services.items.1.title') },
    { path: '/services/data-services', label: t('services.items.2.title') },
    { path: '/services/os-support', label: t('services.items.3.title') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/"
            className="text-xl lg:text-2xl font-bold text-primary hover:text-secondary transition-colors"
          >
            FutureTech
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-text-secondary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary ${
                  location.pathname.startsWith('/services')
                    ? 'text-primary'
                    : 'text-text-secondary'
                }`}
              >
                {t('nav.services')}
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
                  >
                    全部服务
                  </Link>
                  <div className="my-1 border-t border-gray-100"></div>
                  {servicesItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2 text-sm transition-colors hover:text-primary hover:bg-gray-50 ${
                        location.pathname === item.path
                          ? 'text-primary bg-blue-50'
                          : 'text-text-secondary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <LanguageSwitcher />
          </div>

          <button
            className="lg:hidden p-2 text-text-secondary hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium py-2 transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-text-secondary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-t pt-4">
                <div className="text-base font-medium text-text-primary mb-3">
                  {t('nav.services')}
                </div>
                <div className="flex flex-col gap-2 pl-2">
                  <Link
                    to="/services"
                    className={`text-sm py-1 transition-colors ${
                      location.pathname === '/services'
                        ? 'text-primary'
                        : 'text-text-secondary'
                    }`}
                  >
                    全部服务
                  </Link>
                  {servicesItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`text-sm py-1 transition-colors ${
                        location.pathname === item.path
                          ? 'text-primary'
                          : 'text-text-secondary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
