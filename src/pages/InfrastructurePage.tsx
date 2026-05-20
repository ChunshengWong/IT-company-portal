import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Server, Shield, Zap, Users } from 'lucide-react';

export default function InfrastructurePage() {

  const features = [
    {
      icon: Server,
      title: '超融合架构',
      description: '整合计算、存储、网络资源，简化IT基础设施',
    },
    {
      icon: Shield,
      title: '高可用保障',
      description: '多节点冗余设计，保障业务连续性',
    },
    {
      icon: Zap,
      title: '性能优化',
      description: '分布式存储技术，提供卓越性能',
    },
    {
      icon: Users,
      title: '简易运维',
      description: '统一管理平台，降低运维复杂度',
    },
  ];

  const scenarios = [
    {
      title: '核心交易系统',
      description: '为券商核心交易系统提供高性能、高可用的基础设施支撑',
    },
    {
      title: '数据中心建设',
      description: '帮助基金公司构建现代化数据中心',
    },
    {
      title: '灾备中心',
      description: '实现同城灾备，保障业务安全',
    },
    {
      title: '开发测试环境',
      description: '快速交付开发测试环境，提升研发效率',
    },
  ];

  const advantages = [
    '业界领先的超融合技术',
    '针对金融行业场景优化',
    '完善的技术支持和服务',
    '灵活的扩展能力',
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            基础架构服务
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            SmartX 超融合解决方案，为企业提供高效、稳定的基础架构支撑
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8 text-center">
              产品介绍
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              SmartX 超融合基础架构（HCI）将计算、存储、网络和虚拟化整合到一个统一的系统中，为企业提供简化、高效的IT基础设施解决方案。
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              我们作为SmartX的授权合作伙伴，为证券、基金等金融机构提供从方案咨询、部署实施到运维支持的全流程服务。
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12 text-center">
              核心功能
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              应用场景
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      <section className="py-16 lg:py-24 bg-white">
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
            立即联系我们，获取专业的SmartX解决方案咨询
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
