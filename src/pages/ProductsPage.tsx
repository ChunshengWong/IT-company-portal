import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle, BarChart3, Settings, Shield, Building2 } from 'lucide-react';

export default function ProductsPage() {
  const { t } = useTranslation();

  const modules = [
    {
      icon: BarChart3,
      title: t('productsPage.module1'),
      description: t('productsPage.module1Desc'),
    },
    {
      icon: Settings,
      title: t('productsPage.module2'),
      description: t('productsPage.module2Desc'),
    },
    {
      icon: Shield,
      title: t('productsPage.module3'),
      description: t('productsPage.module3Desc'),
    },
    {
      icon: Building2,
      title: t('productsPage.module4'),
      description: t('productsPage.module4Desc'),
    },
  ];

  const features = [
    t('infrastructurePage.advantage2'),
    t('aboutPage.innovationDriven'),
    t('aboutPage.striveExcellence'),
    t('home.professionalService'),
  ];

  const scenarios = [
    {
      title: t('casesPage.securities'),
      description: t('productsPage.module3Desc'),
    },
    {
      title: t('casesPage.fund'),
      description: t('productsPage.module1Desc'),
    },
    {
      title: t('casesPage.futures'),
      description: t('infrastructurePage.highAvailabilityDesc'),
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('productsPage.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('productsPage.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8 text-center">
              {t('productsPage.productIntro')}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              {t('productsPage.productDesc')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12 text-center">
              {t('productsPage.modules')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module, index) => (
                <div key={index} className="flex gap-4 p-6 bg-background-secondary rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {module.title}
                    </h3>
                    <p className="text-text-secondary">
                      {module.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12 text-center">
              {t('infrastructurePage.advantages')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg text-text-primary">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12 text-center">
              {t('infrastructurePage.applicationScenarios')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scenarios.map((scenario, index) => (
                <div key={index} className="bg-white rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {scenario.title}
                  </h3>
                  <p className="text-text-secondary">
                    {scenario.description}
                  </p>
                </div>
              ))}
            </div>
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