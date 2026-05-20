import { useTranslation } from 'react-i18next';
import { ArrowRight, FileText, Newspaper, Lightbulb } from 'lucide-react';

export default function NewsPage() {
  const { t } = useTranslation();

  const news = [
    {
      title: t('newsPage.news1'),
      date: '2024-01-20',
      category: t('newsPage.companyNews'),
      icon: Newspaper,
      description: t('newsPage.news1Desc'),
    },
    {
      title: t('newsPage.news2'),
      date: '2024-01-15',
      category: t('newsPage.productNews'),
      icon: FileText,
      description: t('newsPage.news2Desc'),
    },
    {
      title: t('newsPage.news3'),
      date: '2024-01-10',
      category: t('newsPage.industryNews'),
      icon: Lightbulb,
      description: t('newsPage.news3Desc'),
    },
    {
      title: t('newsPage.news4'),
      date: '2024-01-05',
      category: t('newsPage.productNews'),
      icon: FileText,
      description: t('newsPage.news4Desc'),
    },
    {
      title: t('newsPage.news5'),
      date: '2024-01-01',
      category: t('newsPage.companyNews'),
      icon: Newspaper,
      description: t('newsPage.news5Desc'),
    },
    {
      title: t('newsPage.news6'),
      date: '2023-12-28',
      category: t('newsPage.industryNews'),
      icon: Lightbulb,
      description: t('newsPage.news6Desc'),
    },
  ];

  const getCategoryIcon = (category: string) => {
    if (category === t('newsPage.companyNews')) {
      return Newspaper;
    } else if (category === t('newsPage.productNews')) {
      return FileText;
    } else if (category === t('newsPage.industryNews')) {
      return Lightbulb;
    }
    return FileText;
  };

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('newsPage.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('newsPage.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {news.map((item, index) => {
              const Icon = getCategoryIcon(item.category);
              return (
                <div
                  key={index}
                  className="bg-background-secondary rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full">
                          {item.category}
                        </span>
                        <span className="text-sm text-text-secondary">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-text-primary mb-3">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary mb-4">
                        {item.description}
                      </p>
                      <button className="flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all">
                        {t('newsPage.readMore')}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}