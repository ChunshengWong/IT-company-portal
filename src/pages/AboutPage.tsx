import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Target, Eye, Heart } from 'lucide-react';

export default function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      title: t('aboutPage.customerFirst'),
      description: t('aboutPage.customerFirstDesc'),
    },
    {
      title: t('aboutPage.innovationDriven'),
      description: t('aboutPage.innovationDrivenDesc'),
    },
    {
      title: t('aboutPage.winWin'),
      description: t('aboutPage.winWinDesc'),
    },
    {
      title: t('aboutPage.striveExcellence'),
      description: t('aboutPage.striveExcellenceDesc'),
    },
  ];

  const stats = [
    { value: '100+', label: t('aboutPage.enterpriseClients') },
    { value: '50+', label: t('aboutPage.successfulCases') },
    { value: '10+', label: t('aboutPage.industryExperience') },
    { value: '24/7', label: t('aboutPage.techSupport') },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('aboutPage.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('aboutPage.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8 text-center">
              {t('aboutPage.companyProfile')}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {t('aboutPage.companyDesc1')}
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-12">
              {t('aboutPage.companyDesc2')}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-background-secondary rounded-2xl">
                  <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    {t('aboutPage.mission')}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {t('aboutPage.missionDesc')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    {t('aboutPage.vision')}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {t('aboutPage.visionDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              {t('aboutPage.coreValues')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-background-secondary rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
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
          </Link>
        </div>
      </section>
    </div>
  );
}