import Layout from '../components/Layout';
import PlanCard from '../components/PlanCard';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const PlansPage = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      title: 'Choose your plan',
      note: 'Every plan starts with a free preview website. Activate hosting only if you love it.',
      strong: 'Bylumora Strong',
      extreme: 'Bylumora Extreme',
      vip: 'Bylumora VIP',
      strongFeatures: [
        'Hosting + SSL + daily backups (7d)',
        'Free subdomain (yourbrand.bylumora.com)',
        'Ticket support ≤48h • 99.5% uptime',
      ],
      extremeFeatures: [
        'Enterprise CDN + Cloudflare security',
        'Domain included',
        'SEO basics + light content review',
        'Priority support ≤24h • 99.9% uptime',
      ],
      vipFeatures: [
        'Priority channel ≤4h response',
        'Monthly care + reports',
        '1:1 onboarding + 1h/month adjustments',
      ],
      activateStrong: 'Activate Strong',
      upgradeExtreme: 'Upgrade to Extreme',
      talkToUs: 'Talk to Us',
    },
    es: {
      title: 'Elige tu plan',
      note: 'Todos los planes comienzan con una vista previa gratuita. Activa el alojamiento solo si te encanta.',
      strong: 'Bylumora Strong',
      extreme: 'Bylumora Extreme',
      vip: 'Bylumora VIP',
      strongFeatures: [
        'Alojamiento + SSL + copias de seguridad diarias (7d)',
        'Subdominio gratis (tuMarca.bylumora.com)',
        'Soporte vía ticket ≤48h • 99.5% uptime',
      ],
      extremeFeatures: [
        'CDN empresarial + seguridad Cloudflare',
        'Dominio incluido',
        'SEO básico + revisión ligera de contenido',
        'Soporte prioritario ≤24h • 99.9% uptime',
      ],
      vipFeatures: [
        'Canal prioritario ≤4h de respuesta',
        'Cuidado mensual + informes',
        'Onboarding 1:1 + 1h/mes de ajustes',
      ],
      activateStrong: 'Activar Strong',
      upgradeExtreme: 'Actualizar a Extreme',
      talkToUs: 'Habla con nosotros',
    },
  };

  const t = translations[language];

  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-title mt-8 mb-10 text-center">
          {t.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PlanCard
            title={t.strong}
            priceMonthly="$50"
            priceYearly="$460"
            features={t.strongFeatures}
            buttonLabel={t.activateStrong}
            badge={language === 'en' ? 'Most Affordable' : 'Más asequible'}
import Layout from '../components/Layout';
import PlanCard from '../components/PlanCard';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const PlansPage = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      title: 'Choose your plan',
      note: 'Every plan starts with a free preview website. Activate hosting only if you love it.',
      strong: 'Bylumora Strong',
      extreme: 'Bylumora Extreme',
      vip: 'Bylumora VIP',
      strongFeatures: [
        'Hosting + SSL + daily backups (7d)',
        'Free subdomain (yourbrand.bylumora.com)',
        'Ticket support ≤48h • 99.5% uptime',
      ],
      extremeFeatures: [
        'Enterprise CDN + Cloudflare security',
        'Domain included',
        'SEO basics + light content review',
        'Priority support ≤24h • 99.9% uptime',
      ],
      vipFeatures: [
        'Priority channel ≤4h response',
        'Monthly care + reports',
        '1:1 onboarding + 1h/month adjustments',
      ],
      activateStrong: 'Activate Strong',
      upgradeExtreme: 'Upgrade to Extreme',
      talkToUs: 'Talk to Us',
    },
    es: {
      title: 'Elige tu plan',
      note: 'Todos los planes comienzan con una vista previa gratuita. Activa el alojamiento solo si te encanta.',
      strong: 'Bylumora Strong',
      extreme: 'Bylumora Extreme',
      vip: 'Bylumora VIP',
      strongFeatures: [
        'Alojamiento + SSL + copias de seguridad diarias (7d)',
        'Subdominio gratis (tuMarca.bylumora.com)',
        'Soporte vía ticket ≤48h • 99.5% uptime',
      ],
      extremeFeatures: [
        'CDN empresarial + seguridad Cloudflare',
        'Dominio incluido',
        'SEO básico + revisión ligera de contenido',
        'Soporte prioritario ≤24h • 99.9% uptime',
      ],
      vipFeatures: [
        'Canal prioritario ≤4h de respuesta',
        'Cuidado mensual + informes',
        'Onboarding 1:1 + 1h/mes de ajustes',
      ],
      activateStrong: 'Activar Strong',
      upgradeExtreme: 'Actualizar a Extreme',
      talkToUs: 'Habla con nosotros',
    },
  };

  const t = translations[language];

  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-title mt-8 mb-10 text-center">
          {t.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PlanCard
            title={t.strong}
            priceMonthly="$50"
            priceYearly="$460"
            features={t.strongFeatures}
            buttonLabel={t.activateStrong}
            badge={language === 'en' ? 'Most Affordable' : 'Más asequible'}
            badgeColor="bg-brand-orange/30 text-brand-orange"
            onClick={() => alert('Thank you for activating Bylumora Strong!')}
          />
          <PlanCard
            title={t.extreme}
            priceMonthly="$100"
            priceYearly="$960"
            features={t.extremeFeatures}
            buttonLabel={t.upgradeExtreme}
            badge={language === 'en' ? 'Best Performance' : 'Mejor rendimiento'}
            badgeColor="bg-brand-gold/30 text-brand-gold"
            onClick={() => alert('Thank you for upgrading to Bylumora Extreme!')}
          />
          <PlanCard
            title={t.vip}
            priceMonthly="Custom"
            priceYearly="Custom"
            features={t.vipFeatures}
            buttonLabel={t.talkToUs}
            badge={language === 'en' ? 'Concierge' : 'Conserjería'}
            badgeColor="bg-brand-orchid/30 text-brand-orchid"
            onClick={() => window.location.href = 'mailto:info@bylumora.com'}
          />
        </div>
        <p className="mt-8 text-center text-white/60 text-sm font-body">
          {t.note}
        </p>
      </section>
    </Layout>
  );
};

export default PlansPage;
       
            onClick={() => alert('Thank you for activating Bylumora Strong!')}
          />
          <PlanCard
            title={t.extreme}
            priceMonthly="$100"
            priceYearly="$960"
            features={t.extremeFeatures}
            buttonLabel={t.upgradeExtreme}
            badge={language === 'en' ? 'Best Performance' : 'Mejor rendimiento'}
            badgeColor="bg-brand-gold/30 text-brand-gold"
            onClick={() => alert('Thank you for upgrading to Bylumora Extreme!')}
          />
          <PlanCard
            title={t.vip}
            priceMonthly="Custom"
            priceYearly="Custom"
            features={t.vipFeatures}
            buttonLabel={t.talkToUs}
            badge={language === 'en' ? 'Concierge' : 'Conserjería'}
            badgeColor="bg-brand-orchid/30 text-brand-orchid"
            onClick={() => window.location.href = 'mailto:info@bylumora.com'}
          />
        </div>
        <p className="mt-8 text-center text-white/60 text-sm font-body">
          {t.note}
        </p>
      </section>
    </Layout>
  );
};

export default PlansPage;
