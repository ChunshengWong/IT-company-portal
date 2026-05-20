import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Database, ArrowRight, CheckCircle, BarChart3, Brain, Zap } from 'lucide-react';

export default function DataServicesPage() {
  const { t } = useTranslation();

  const features = [
    { icon: Database, title: '数据仓库建设', description: '企业级数据仓库、数据湖解决方案' },
    { icon: Brain, title: '机器学习平台', description: 'AI模型开发、训练和部署平台' },
    { icon: Zap, title: '实时数据分析', description: '流式数据处理、实时监控和预警' },
    { icon: BarChart3, title: 'BI报表系统', description: '可视化仪表板、数据洞察和报告' },
  ];

  const advantages = [
    '深厚的数据分析和AI技术积累',
    '全栈数据解决方案，从数据采集到可视化',
    '定制化的模型训练和调优服务',
    '可扩展的大数据架构',
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('services.items.2.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('services.items.2.description')}
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
            立即联系我们，获取专业的数据服务解决方案
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
