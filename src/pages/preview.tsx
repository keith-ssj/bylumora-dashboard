import { useState, useContext } from 'react';
import Layout from '../components/Layout';
import { LanguageContext } from '../context/LanguageContext';
import { useRouter } from 'next/router';

interface PreviewResponse {
  site_id: string;
  preview_url: string;
  error?: string;
}

const PreviewPage = () => {
  const { language } = useContext(LanguageContext);
  const router = useRouter();
  const [form, setForm] = useState({
    businessName: '',
    description: '',
    email: '',
  });
  const [preview, setPreview] = useState<PreviewResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const translations = {
    en: {
      title: 'Generate your free website preview',
      namePlaceholder: 'Business name *',
      descriptionPlaceholder: 'Describe your business (optional)',
      emailPlaceholder: 'Email *',
      submit: 'Generate Preview',
      result: 'This is your free website preview. Choose a plan to activate hosting.',
      activateStrong: 'Activate Strong',
      upgradeExtreme: 'Upgrade to Extreme',
      vip: 'Talk to Us',
      required: 'Please fill in the required fields.',
    },
    es: {
      title: 'Genera tu vista previa gratuita',
      namePlaceholder: 'Nombre del negocio *',
      descriptionPlaceholder: 'Describe tu negocio (opcional)',
      emailPlaceholder: 'Correo electrónico *',
      submit: 'Generar vista previa',
      result: 'Esta es tu vista previa gratuita. Elige un plan para activar el alojamiento.',
      activateStrong: 'Activar Strong',
      upgradeExtreme: 'Actualizar a Extreme',
      vip: 'Habla con nosotros',
      required: 'Por favor completa los campos obligatorios.',
    },
  };
  const t = translations[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.businessName || !form.email) {
      setError(t.required);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('/api/preview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data: PreviewResponse = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'API error');
      }
      setPreview(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStrong = () => {
    alert('Thank you for activating Bylumora Strong!');
    router.push('/account');
  };
  const handleExtreme = () => {
    alert('Thank you for upgrading to Bylumora Extreme!');
    router.push('/account');
  };

  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-title mt-8 mb-6 text-center">
          {t.title}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-brand-section/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
          <input
            type="text"
            name="businessName"
            placeholder={t.namePlaceholder}
            value={form.businessName}
            onChange={handleChange}
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
          <textarea
            name="description"
            placeholder={t.descriptionPlaceholder}
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
          <input
            type="email"
            name="email"
            placeholder={t.emailPlaceholder}
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-brand-gold/20 hover:bg-brand-gold text-brand-gold hover:text-brand-primary font-medium py-3 transition-colors flex justify-center"
          >
            {loading ? (
              <span className="animate-pulse">...</span>
            ) : (
              t.submit
            )}
          </button>
        </form>
        {preview && (
          <div className="mt-10 bg-brand-section/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
            <p className="mb-4 text-white/80 text-center">{t.result}</p>
            <div className="mb-6">
              <iframe
                src={preview.preview_url}
                title="Preview"
                className="w-full h-64 md:h-96 rounded-lg border border-white/10"
              ></iframe>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={handleStrong}
                className="w-full rounded-full bg-brand-gold/20 hover:bg-brand-gold text-brand-gold hover:text-brand-primary font-medium py-3 transition-colors"
              >
                {t.activateStrong}
              </button>
              <button
                onClick={handleExtreme}
                className="w-full rounded-full bg-brand-orange/20 hover:bg-brand-orange text-brand-orange hover:text-brand-primary font-medium py-3 transition-colors"
              >
                {t.upgradeExtreme}
              </button>
              <a
                href="mailto:info@bylumora.com"
                className="w-full rounded-full text-center bg-brand-orchid/20 hover:bg-brand-orchid text-brand-orchid hover:text-brand-primary font-medium py-3 transition-colors"
              >
                {t.vip}
              </a>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default PreviewPage;