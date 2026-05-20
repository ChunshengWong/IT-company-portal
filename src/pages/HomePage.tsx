import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CaseCard from '../components/CaseCard';
import { Shield, Cloud, Building2, ArrowRight, Award, TrendingUp, ShieldCheck, Users, ChevronRight } from 'lucide-react';

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
      color: 'bg-blue-50',
      iconBg: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      title: t('home.security'),
      description: t('home.securityDesc'),
      link: '/security',
      color: 'bg-purple-50',
      iconBg: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Building2,
      title: t('home.products'),
      description: t('home.productsDesc'),
      link: '/products',
      color: 'bg-orange-50',
      iconBg: 'bg-orange-500',
      gradient: 'from-orange-500 to-orange-600',
    },
  ];

  const advantages = [
    {
      icon: Award,
      title: t('home.industryExpertise'),
      description: t('home.industryExpertiseDesc'),
    },
    {
      icon: TrendingUp,
      title: t('home.techInnovation'),
      description: t('home.techInnovationDesc'),
    },
    {
      icon: Users,
      title: t('home.professionalService'),
      description: t('home.professionalServiceDesc'),
    },
    {
      icon: ShieldCheck,
      title: t('home.securityCompliance'),
      description: t('home.securityComplianceDesc'),
    },
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
    <div className="bg-gray-50">
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-secondary mb-10 max-w-2xl mx-auto font-light">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('home.coreServices')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500`}></div>
                <div className={`relative w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all duration-300">
                  {t('home.startConsultation')}
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('home.whyChoose')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('home.whyChooseDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">100+</div>
              <div className="text-white/80">{t('aboutPage.enterpriseClients')}</div>
            </div>
            <div className="text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <div className="text-white/80">{t('aboutPage.successfulCases')}</div>
            </div>
            <div className="text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">10+</div>
              <div className="text-white/80">{t('aboutPage.industryExperience')}</div>
            </div>
            <div className="text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/80">{t('aboutPage.techSupport')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('home.latestNews')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('home.latestNewsDesc')}
              </p>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
            >
              {t('home.viewAll')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <Link
                key={index}
                to="/news"
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full">
                        {news.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {news.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-secondary transition-colors truncate">
                      {news.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('home.successCases')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('home.successCasesDesc')}
              </p>
            </div>
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
            >
              {t('home.viewAll')}
              <ArrowRight className="w-5 h-5" />
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
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary via-primary to-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                {t('home.securityCompliance')}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              {t('home.ready')}
            </h2>
            <p className="text-xl text-white/90 mb-10">
              {t('home.readyDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {t('home.startConsultation')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300"
              >
                {t('home.products')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}