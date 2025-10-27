import Layout from '../components/Layout';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const AccountPage = () => {
  const { language } = useContext(LanguageContext);
  const translations = {
    en: {
      title: 'Your Account',
      emailLabel: 'Email',
      planLabel: 'Active Plan',
      domainLabel: 'Website',
      openWordPress: 'Open in WordPress',
      changePlan: 'Upgrade/Downgrade Plan',
      billing: 'Billing Summary',
      amount: '$50 / month',
      contactSupport: 'Contact Support',
    },
    es: {
      title: 'Tu cuenta',
      emailLabel: 'Correo electrónico',
      planLabel: 'Plan activo',
      domainLabel: 'Sitio web',
      openWordPress: 'Abrir en WordPress',
      changePlan: 'Cambiar de plan',
      billing: 'Resumen de facturación',
      amount: '$50 / mes',
      contactSupport: 'Contactar soporte',
    },
  };
  const t = translations[language];

  // Mock user data.  Replace with real data when connecting your auth layer.
  const user = {
    email: 'user@example.com',
    plan: 'Bylumora Strong (Monthly)',
    website: 'yourbrand.bylumora.com',
    amount: t.amount,
  };

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-title mt-8 mb-6 text-center">
          {t.title}
        </h1>
        <div className="space-y-6">
          <div className="bg-brand-section/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div>
                <h3 className="text-sm font-medium text-white/60">{t.emailLabel}</h3>
                <p className="text-lg font-medium text-white">{user.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white/60">{t.planLabel}</h3>
                <p className="text-lg font-medium text-white">{user.plan}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white/60">{t.domainLabel}</h3>
                <p className="text-lg font-medium text-white">{user.website}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-brand-gold/20 hover:bg-brand-gold text-brand-gold hover:text-brand-primary font-medium py-3 text-center transition-colors"
              >
                {t.openWordPress}
              </a>
              <button
                onClick={() => alert('This feature will allow plan changes in the future.')}
                className="flex-1 rounded-full bg-brand-orange/20 hover:bg-brand-orange text-brand-orange hover:text-brand-primary font-medium py-3 transition-colors"
              >
                {t.changePlan}
              </button>
            </div>
          </div>
          <div className="bg-brand-section/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
            <h3 className="text-lg font-title mb-4">{t.billing}</h3>
            <div className="flex items-center justify-between">
              <span className="text-white/80">{user.plan}</span>
              <span className="text-white font-medium">{user.amount}</span>
            </div>
          </div>
          <div className="text-center">
            <a
              href="mailto:info@bylumora.com"
              className="text-brand-orchid hover:text-brand-gold transition-colors"
            >
              {t.contactSupport}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AccountPage;