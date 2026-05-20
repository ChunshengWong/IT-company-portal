import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { Code, Cloud, Database, Monitor, ArrowRight } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
}

interface DetailedService {
  icon: typeof Code;
  title: string;
  description: string;
  features: string[];
  linkTo: string;
}

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = t('services.items', { returnObjects: true }) as ServiceItem[];

  const icons = ['code', 'cloud', 'database', 'monitor'];
  const links = [
    '/services/software-development',
    '/services/cloud-services',
    '/services/data-services',
    '/services/os-support',
  ];

  const detailedServices: DetailedService[] = [
    {
      icon: Code,
      title: t('services.items.0.title'),
      description: t('services.items.0.description'),
      features: [
        'Web应用开发',
        '移动应用开发',
        '企业级系统',
        'API开发与集成',
      ],
      linkTo: '/services/software-development',
    },
    {
      icon: Cloud,
      title: t('services.items.1.title'),
      description: t('services.items.1.description'),
      features: [
        '云架构设计',
        '云迁移服务',
        'DevOps自动化',
        '容器化部署',
      ],
      linkTo: '/services/cloud-services',
    },
    {
      icon: Database,
      title: t('services.items.2.title'),
      description: t('services.items.2.description'),
      features: [
        '数据仓库建设',
        '机器学习平台',
        '实时数据分析',
        'BI报表系统',
      ],
      linkTo: '/services/data-services',
    },
    {
      icon: Monitor,
      title: t('services.items.3.title'),
      description: t('services.items.3.description'),
      features: [
        '24/7监控运维',
        '故障快速响应',
        '性能优化',
        '安全加固',
      ],
      linkTo: '/services/os-support',
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('nav.services')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {services.map((service: ServiceItem, index: number) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={icons[index]}
                linkTo={links[index]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {detailedServices.map((service, index) => (
              <Link
                key={index}
                to={service.linkTo}
                className={`block bg-white rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:flex lg:items-center lg:gap-12">
                  <div className="lg:w-1/3 mb-6 lg:mb-0">
                    <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <service.icon className="w-10 h-10 text-secondary group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-secondary transition-colors flex items-center gap-2">
                      {service.title}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-text-secondary">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature: string, featureIndex: number) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 p-4 bg-background-secondary rounded-lg"
                        >
                          <div className="w-2 h-2 rounded-full bg-secondary"></div>
                          <span className="text-sm font-medium text-text-primary">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
