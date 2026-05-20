import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Building2, BarChart3, Settings, Shield } from 'lucide-react';

export default function ProductsPage() {

  const modules = [
    {
      icon: BarChart3,
      title: 'IT治理看板',
      description: '可视化展示IT运行状态和关键指标',
    },
    {
      icon: Settings,
      title: '配置管理',
      description: '统一管理IT配置项和依赖关系',
    },
    {
      icon: Shield,
      title: '变更管理',
      description: '规范变更流程，降低变更风险',
    },
    {
      icon: Building2,
      title: '供应商管理',
      description: '管理IT供应商和服务合同',
    },
  ];

  const features = [
    '符合监管要求',
    '行业最佳实践',
    '定制化开发',
    '专业实施服务',
  ];

  const scenarios = [
    {
      title: '券商IT部门',
      description: '提升IT治理水平，满足监管要求',
    },
    {
      title: '基金公司',
      description: '优化IT资源配置，降低运营成本',
    },
    {
      title: '期货公司',
      description: '加强系统稳定性，保障业务连续性',
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            行业产品
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            证券基金 IT 治理数字化产品，助力金融行业数字化转型
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
              证券基金 IT 治理数字化产品是专门为金融机构设计的IT管理平台，帮助IT部门实现数字化、精细化管理。
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              产品融合了证券基金行业的最佳实践，满足监管部门对IT治理的合规要求，帮助金融机构提升IT治理水平。
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              我们提供从咨询、实施到运维的全流程服务，确保项目成功落地。
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12 text-center">
              核心模块
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
              产品特点
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
              适用客户
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
            准备开始了吗？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            立即联系我们，获取专业的IT治理解决方案咨询
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
