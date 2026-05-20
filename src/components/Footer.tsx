import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/infrastructure', label: t('nav.infrastructure') },
    { path: '/cases', label: t('nav.cases') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">FutureTech</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t('contact.info.addressValue')}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{t('contact.info.phoneValue')}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{t('contact.info.emailValue')}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.follow')}</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="WeChat"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07.048.141.096.112l1.306-.322c.322-.08.656-.121.994-.121.214 0 .422.016.625.046l.219-1.281a.593.593 0 01.219-.104l1.844.458a.59.59 0 01.432.432l.522 2.073c.046.188.25.188.329.188a.59.59 0 00.329-.096l1.869-1.069c.144.026.289.04.438.04a.59.59 0 00.588-.496l.521-2.046c.022-.085.06-.166.112-.239l1.412-1.412a.59.59 0 01.414-.17l2.071.517c.088.022.181-.038.153-.135l-.39-1.48a.59.59 0 01.213-.664c1.832-1.348 3.002-3.338 3.002-5.55 0-4.054-3.891-7.342-8.691-7.342-2.414 0-4.657.838-6.466 2.36a.59.59 0 01-.779-.017c-.19-.169-.194-.451-.01-.633C8.943 2.988 8.819 2.188 8.691 2.188z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
