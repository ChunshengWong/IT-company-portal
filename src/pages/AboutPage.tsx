import { useTranslation } from 'react-i18next';
import { Target, Eye, Heart } from 'lucide-react';

interface ValueItem {
  title: string;
  description: string;
}

export default function AboutPage() {
  const { t } = useTranslation();

  const values = t('about.valuesItems', { returnObjects: true }) as ValueItem[];

  const teamMembers = [
    {
      name: '张明',
      role: '首席执行官',
      avatar: 'ZM',
      color: 'bg-blue-500',
    },
    {
      name: '李华',
      role: '技术总监',
      avatar: 'LH',
      color: 'bg-green-500',
    },
    {
      name: '王芳',
      role: '运营总监',
      avatar: 'WF',
      color: 'bg-purple-500',
    },
    {
      name: '刘强',
      role: '销售总监',
      avatar: 'LQ',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-text-secondary leading-relaxed mb-12">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background-secondary rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    {t('about.mission')}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {t('about.missionText')}
                </p>
              </div>

              <div className="bg-background-secondary rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    {t('about.vision')}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {t('about.visionText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              {t('about.values')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value: ValueItem, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
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

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-lg text-text-secondary">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className={`w-32 h-32 rounded-full ${member.color} flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold group-hover:scale-110 transition-transform`}>
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-text-secondary">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
