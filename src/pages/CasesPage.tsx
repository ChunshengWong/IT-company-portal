import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CaseCard from '../components/CaseCard';

export default function CasesPage() {
  const { t } = useTranslation();

  const cases = [
    {
      title: t('casesPage.case1'),
      description: t('casesPage.case1Desc'),
      tags: [t('casesPage.securities'), t('casesPage.infrastructure')],
    },
    {
      title: t('casesPage.case2'),
      description: t('casesPage.case2Desc'),
      tags: [t('casesPage.fund'), t('casesPage.security')],
    },
    {
      title: t('casesPage.case3'),
      description: t('casesPage.case3Desc'),
      tags: [t('casesPage.securities'), t('casesPage.itGovernance')],
    },
    {
      title: t('casesPage.case4'),
      description: t('casesPage.case4Desc'),
      tags: [t('casesPage.futures'), t('casesPage.infrastructure')],
    },
    {
      title: t('casesPage.case5'),
      description: t('casesPage.case5Desc'),
      tags: [t('casesPage.asset'), t('casesPage.security')],
    },
    {
      title: t('casesPage.case6'),
      description: t('casesPage.case6Desc'),
      tags: [t('casesPage.fund'), t('casesPage.dataManagement')],
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('casesPage.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('casesPage.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cases.map((caseItem, index) => (
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