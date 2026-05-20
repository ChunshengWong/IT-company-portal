import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import StatsCounter from '../components/StatsCounter';
import CaseCard from '../components/CaseCard';
import { Shield, Lightbulb, Users, Award, ArrowRight } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
}

interface WhyChooseItem {
  title: string;
  description: string;
}

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

interface CaseItem {
  title: string;
  description: string;
  tags: string[];
}

interface PartnerLogo {
  name: string;
  color: string;
}

export default function HomePage() {
  const { t } = useTranslation();

  const services = t('services.items', { returnObjects: true }) as ServiceItem[];
  const whyChooseUs = t('whyChooseUs.items', { returnObjects: true }) as WhyChooseItem[];
  const stats = t('stats.items', { returnObjects: true }) as StatItem[];
  const cases = t('cases.items', { returnObjects: true }) as CaseItem[];

  const icons = ['code', 'cloud', 'database', 'monitor'];

  const partnerLogos: PartnerLogo[] = [
    { name: 'Microsoft', color: 'bg-blue-500' },
    { name: 'Google', color: 'bg-red-500' },
    { name: 'AWS', color: 'bg-orange-500' },
    { name: 'Alibaba', color: 'bg-orange-600' },
    { name: 'Tencent', color: 'bg-blue-600' },
  ];

  return (
    <div>
      <Hero />

      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-text-secondary">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service: ServiceItem, index: number) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={icons[index]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              {t('whyChooseUs.title')}
            </h2>
            <p className="text-lg text-text-secondary">
              {t('whyChooseUs.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item: WhyChooseItem, index: number) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  {index === 0 && <Shield className="w-8 h-8 text-secondary" />}
                  {index === 1 && <Lightbulb className="w-8 h-8 text-secondary" />}
                  {index === 2 && <Users className="w-8 h-8 text-secondary" />}
                  {index === 3 && <Award className="w-8 h-8 text-secondary" />}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            {t('stats.title')}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat: StatItem, index: number) => (
              <StatsCounter
                key={index}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              {t('partners.title')}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className={`w-32 h-16 rounded-lg ${partner.color} flex items-center justify-center text-white font-bold text-lg hover:scale-110 transition-transform`}
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              {t('cases.title')}
            </h2>
            <p className="text-lg text-text-secondary">
              {t('cases.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cases.map((caseItem: CaseItem, index: number) => (
              <CaseCard
                key={index}
                title={caseItem.title}
                description={caseItem.description}
                tags={caseItem.tags}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all hover:scale-105"
            >
              查看更多案例
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-secondary to-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            {t('cta.button')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
