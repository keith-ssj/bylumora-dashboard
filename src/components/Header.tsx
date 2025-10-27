import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const navItems = [
  { href: '/', label: { en: 'Home', es: 'Inicio' } },
  { href: '/plans', label: { en: 'Plans', es: 'Planes' } },
  { href: '/account', label: { en: 'Account', es: 'Cuenta' } },
  { href: '/preview', label: { en: 'Generate', es: 'Generar' } },
];

/**
 * Header is a sticky navigation bar that remains at the top of the viewport.
 * It features the Bylumora logo, navigation links and a language toggle.
 */
const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-brand-gradientDark">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-title font-semibold text-white hover:text-brand-gold transition-colors">
          Bylumora
        </Link>
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-body">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-brand-gold transition-colors"
            >
              {item.label[language]}
            </Link>
          ))}
        </nav>
        {/* Right side: Language toggle and mobile menu placeholder */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="text-white/70 hover:text-brand-gold transition-colors font-body"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
