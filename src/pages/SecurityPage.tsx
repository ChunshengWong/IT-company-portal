import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Lock, Database, Globe } from 'lucide-react';

export default function SecurityPage() {

  const rbiFeatures = [
    {
      icon: Globe,
      title: '远程浏览器隔离',
      description: '用户浏览网页时，浏览器在远程隔离环境中运行，有效阻止恶意代码入侵',
    },
    {
      icon: Shield,
      title: '威胁防护',
      description: '完全隔离Web威胁，保护企业内部网络和终端安全',
    },
    {
      icon: Lock,
      title: '数据防泄漏',
      description: '敏感数据不落地，从根本上防止数据泄露',
    },
  ];

  const dataFeatures = [
    {
      icon: Database,
      title: '数据分类分级',
      description: '自动识别和分类企业敏感数据，实现精细化管理',
    },
    {
      icon: Shield,
      title: '权限管控',
      description: '细粒度的数据访问控制，确保数据访问合规',
    },
    {
      icon: Lock,
      title: '审计追溯',
      description: '完整的数据访问日志，满足合规审计需求',
    },
  ];

  const scenarios = [
    '远程办公安全接入',
    '敏感业务系统保护',
    '第三方访问管理',
    '数据安全管理',
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            安全工作空间
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            RBI 远程浏览器隔离 + 数据管理平台，保障企业数据安全
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
              安全工作空间解决方案由两部分组成：RBI（Remote Browser Isolation）远程浏览器隔离和数据管理平台。
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              RBI技术将浏览器隔离在远程云端，用户终端与Web内容完全隔离，有效防范钓鱼攻击、恶意软件等Web威胁。
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              数据管理平台提供数据发现、分类分级、访问控制、审计追溯等全生命周期安全管理能力。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8 text-center">
              RBI 远程浏览器隔离
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
              数据管理平台
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
              适用场景
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
            准备开始了吗？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            立即联系我们，获取专业的安全工作空间解决方案咨询
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
