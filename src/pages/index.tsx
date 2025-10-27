import Link from 'next/link';
import Layout from '../components/Layout';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const IndexPage = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      headline: 'Get your website in minutes. Activate hosting only if you love it.',
      subheadline: 'Preview is free. Choose your plan when you’re ready.',
      cta: 'Generate Preview',
    },
    es: {
      headline: 'Obtén tu sitio web en minutos. Activa el hosting solo si te encanta.',
      subheadline: 'La vista previa es gratis. Elige tu plan cuando estés listo.',
      cta: 'Generar vista previa',
    },
  };

  const t = translations[language];

  return (
    <Layout>
      <section className="relative flex flex-col items-center justify-center text-center px-4 lg:px-8 py-40 md:py-56 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 right-1/2 transform translate-x-1/2 w-[700px] h-[700px] bg-brand-orange/10 rounded-full blur-2xl"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-title font-semibold max-w-4xl mb-6 leading-tight text-white">
          {t.headline}
        </h1>
        <p className="text-lg md:text-xl font-body text-white/80 max-w-3xl mb-10">
          {t.subheadline}
        </p>
        <Link
          href="/preview"
          className="inline-block rounded-full bg-brand-gold/20 hover:bg-brand-gold text-brand-gold hover:text-brand-primary font-medium px-8 py-4 transition-colors">
          {t.cta}
        </Link>
      </section>
    </Layout>
  );
};

export default IndexPage;
