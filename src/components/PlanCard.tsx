import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

interface PlanCardProps {
  title: string;
  priceMonthly: string;
  priceYearly: string;
  features: string[];
  buttonLabel: string;
  badge: string;
  badgeColor: string; // Tailwind CSS class for background color of badge
  onClick?: () => void;
}

/**
 * PlanCard renders pricing information with a frosted glass effect.  It shows
 * the plan title, monthly/yearly pricing, a list of features, a CTA button
 * and an optional badge.  The `badgeColor` prop should be a Tailwind class
 * referencing one of the accent colours (e.g. bg-brand-gold).
 */
const PlanCard: React.FC<PlanCardProps> = ({
  title,
  priceMonthly,
  priceYearly,
  features,
  buttonLabel,
  badge,
  badgeColor,
  onClick,
}) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 flex flex-col shadow-xl transition-transform hover:scale-[1.02]">
      {badge && (
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${badgeColor}`}
        >
          {badge}
        </span>
      )}
      <h3 className="text-2xl font-title mb-4 text-white">
        {title}
      </h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-brand-gold">{priceMonthly}</span>
        <span className="text-sm ml-1 text-white/60">/{language === 'en' ? 'mo' : 'mes'}</span>
      </div>
      <div className="mb-6">
        <span className="text-brand-orange font-medium">{priceYearly}</span>
        <span className="text-sm ml-1 text-white/60">/{language === 'en' ? 'yr' : 'año'}</span>
      </div>
      <ul className="flex-1 space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start space-x-2 text-white/80">
            <span className="text-brand-gold">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onClick}
        className="mt-auto w-full rounded-xl bg-brand-gold/20 hover:bg-brand-gold text-brand-gold hover:text-brand-primary font-medium py-3 transition-colors"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default PlanCard;
