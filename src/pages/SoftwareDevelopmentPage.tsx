import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Smartphone, Cpu, Cloud } from 'lucide-react';

export default function SoftwareDevelopmentPage() {
  const { t } = useTranslation();

  const features = [
    { icon: Globe, title: 'Web应用开发', description: '响应式网站、企业级管理系统、电商平台' },
    { icon: Smartphone, title: '移动应用开发', description: 'iOS/Android原生应用、跨平台应用开发' },
    { icon: Cpu, title: '企业级系统', description: 'ERP、CRM、OA系统定制开发' },
    { icon: Cloud, title: 'API开发与集成', description: 'RESTful API、GraphQL、第三方服务集成' },
  ];

  const advantages = [
    '敏捷开发方法，快速交付高质量产品',
    '现代化技术栈，确保代码质量',
    '完善的测试体系，稳定性保障',
    '长期技术支持和维护服务',
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('services.items.0.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('services.items.0.description')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12 text-center">
              服务内容
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-6 bg-background-secondary rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary">
                      {feature.description}
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12 text-center">
              我们的优势
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg text-text-primary">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-secondary to-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            准备开始了吗？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            立即联系我们，获取专业的软件开发解决方案
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            开始咨询
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
