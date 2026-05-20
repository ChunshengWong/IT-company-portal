import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle, Shield, Lock, Database, Globe } from 'lucide-react';

export default function SecurityPage() {
  const { t } = useTranslation();

  const rbiFeatures = [
    {
      icon: Globe,
      title: t('securityPage.rbiFeature1'),
      description: t('securityPage.rbiFeature1Desc'),
    },
    {
      icon: Shield,
      title: t('securityPage.rbiFeature2'),
      description: t('securityPage.rbiFeature2Desc'),
    },
    {
      icon: Lock,
      title: t('securityPage.rbiFeature3'),
      description: t('securityPage.rbiFeature3Desc'),
    },
  ];

  const dataFeatures = [
    {
      icon: Database,
      title: t('securityPage.dataPlatformFeature1'),
      description: t('securityPage.dataPlatformFeature1Desc'),
    },
    {
      icon: Shield,
      title: t('securityPage.dataPlatformFeature2'),
      description: t('securityPage.dataPlatformFeature2Desc'),
    },
    {
      icon: Lock,
      title: t('securityPage.dataPlatformFeature3'),
      description: t('securityPage.dataPlatformFeature3Desc'),
    },
  ];

  const scenarios = [
    t('securityPage.rbiFeature1'),
    t('securityPage.rbiFeature2'),
    t('securityPage.dataPlatformFeature2'),
    t('securityPage.dataPlatformTitle'),
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('securityPage.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('securityPage.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8 text-center">
              {t('infrastructurePage.productIntro')}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              {t('securityPage.rbiDesc')}
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              {t('securityPage.dataPlatformDesc')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8 text-center">
              {t('securityPage.rbiTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rbiFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8 text-center">
              {t('securityPage.dataPlatformTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dataFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12 text-center">
              {t('infrastructurePage.applicationScenarios')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scenarios.map((scenario, index) => (
                <div key={index} className="flex items-center gap-3 p-6 bg-background-secondary rounded-2xl">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg text-text-primary">{scenario}</span>
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