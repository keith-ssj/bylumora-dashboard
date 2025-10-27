import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

/**
 * Footer displays a copyright notice and utility links.  Links open either
 * new tabs or mail clients depending on their destination.
 */
const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <footer className="bg-brand-section border-t border-brand-gradientDark text-white/60 py-6 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        <span className="font-body">
          © Bylumora. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
        </span>
        <div className="flex space-x-4 font-body">
          <Link href="#" className="hover:text-white transition-colors">
            {language === 'en' ? 'Status' : 'Estado'}
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            {language === 'en' ? 'Terms' : 'Términos'}
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            {language === 'en' ? 'Privacy' : 'Privacidad'}
          </Link>
          <a href="mailto:info@bylumora.com" className="hover:text-white transition-colors">
            {language === 'en' ? 'Contact' : 'Contacto'}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
