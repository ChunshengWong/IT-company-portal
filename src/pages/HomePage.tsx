import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import CaseCard from '../components/CaseCard';
import { Shield, Cloud, Building2, ArrowRight } from 'lucide-react';

interface CaseItem {
  title: string;
  description: string;
  tags: string[];
}

export default function HomePage() {
  const { t } = useTranslation();

  const coreServices = [
    {
      icon: Cloud,
      title: t('home.infrastructure'),
      description: t('home.infrastructureDesc'),
      link: '/infrastructure',
    },
    {
      icon: Shield,
      title: t('home.security'),
      description: t('home.securityDesc'),
      link: '/security',
    },
    {
      icon: Building2,
      title: t('home.products'),
      description: t('home.productsDesc'),
      link: '/products',
    },
  ];

  const advantages = [
    { title: t('home.industryExpertise'), description: t('home.industryExpertiseDesc') },
    { title: t('home.techInnovation'), description: t('home.techInnovationDesc') },
    { title: t('home.professionalService'), description: t('home.professionalServiceDesc') },
    { title: t('home.securityCompliance'), description: t('home.securityComplianceDesc') },
  ];

  const latestNews = [
    {
      title: t('home.news1'),
      date: '2024-01-15',
      category: t('home.companyNews'),
    },
    {
      title: t('home.news2'),
      date: '2024-01-10',
      category: t('home.productNews'),
    },
    {
      title: t('home.news3'),
      date: '2024-01-05',
      category: t('home.industryNews'),
    },
  ];

  const latestCases = [
    {
      title: t('home.case1'),
      description: t('home.case1Desc'),
      tags: [t('casesPage.securities'), t('casesPage.infrastructure')],
    },
    {
      title: t('home.case2'),
      description: t('home.case2Desc'),
      tags: [t('casesPage.fund'), t('casesPage.security')],
    },
    {
      title: t('home.case3'),
      description: t('home.case3Desc'),
      tags: [t('casesPage.securities'), t('casesPage.itGovernance')],
    },
  ];

  return (
    <div>
      <Hero />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              {t('home.coreServices')}
            </h2>
            <p className="text-lg text-text-secondary">
              {t('home.coreServicesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {coreServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group p-8 bg-background-secondary rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition-all duration-300">
                  <service.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-secondary font-medium">
                  {t('home.startConsultation')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              {t('home.whyChoose')}
            </h2>
            <p className="text-lg text-text-secondary">
              {t('home.whyChooseDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
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

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                {t('home.latestNews')}
              </h2>
              <p className="text-lg text-text-secondary">
                {t('home.latestNewsDesc')}
              </p>
            </div>
            <Link
              to="/news"
              className="hidden lg:flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
            >
              {t('home.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {latestNews.map((news, index) => (
              <Link
                key={index}
                to="/news"
                className="group p-6 bg-background-secondary rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full">
                    {news.category}
                  </span>
                  <span className="text-sm text-text-secondary">
                    {news.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-secondary transition-colors">
                  {news.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center lg:hidden">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
            >
              {t('home.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                {t('home.successCases')}
              </h2>
              <p className="text-lg text-text-secondary">
                {t('home.successCasesDesc')}
              </p>
            </div>
            <Link
              to="/cases"
              className="hidden lg:flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
            >
              {t('home.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {latestCases.map((caseItem: CaseItem, index: number) => (
              <CaseCard
                key={index}
                title={caseItem.title}
                description={caseItem.description}
                tags={caseItem.tags}
              />
            ))}
          </div>

          <div className="text-center mt-8 lg:hidden">
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
            >
              {t('home.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-secondary to-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t('home.ready')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('home.readyDesc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            {t('home.startConsultation')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}