import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CaseCard from '../components/CaseCard';
import { Shield, Cloud, Building2, ArrowRight } from 'lucide-react';

interface CaseItem {
  title: string;
  description: string;
  tags: string[];
}

export default function HomePage() {

  const coreServices = [
    {
      icon: Cloud,
      title: '基础架构服务',
      description: 'SmartX 超融合解决方案，为企业提供高效、稳定的基础架构支撑',
      link: '/infrastructure',
    },
    {
      icon: Shield,
      title: '安全工作空间',
      description: 'RBI 远程浏览器隔离 + 数据管理平台，保障企业数据安全',
      link: '/security',
    },
    {
      icon: Building2,
      title: '行业产品',
      description: '证券基金 IT 治理数字化产品，助力金融行业数字化转型',
      link: '/products',
    },
  ];

  const advantages = [
    { title: '行业深耕', description: '专注金融行业多年，深刻理解行业需求' },
    { title: '技术创新', description: '持续投入研发，保持技术领先' },
    { title: '专业服务', description: '专业的技术团队，提供全程支持' },
    { title: '安全合规', description: '符合行业监管要求，保障数据安全' },
  ];

  const latestNews = [
    {
      title: '公司成功签约某头部券商',
      date: '2024-01-15',
      category: '公司新闻',
    },
    {
      title: 'RBI产品获得国家级安全认证',
      date: '2024-01-10',
      category: '产品动态',
    },
    {
      title: '2024金融科技发展趋势报告发布',
      date: '2024-01-05',
      category: '行业资讯',
    },
  ];

  const latestCases = [
    {
      title: '某头部券商基础架构升级项目',
      description: '采用SmartX超融合方案，提升系统性能300%',
      tags: ['证券', '基础架构'],
    },
    {
      title: '某基金公司安全工作空间建设',
      description: 'RBI解决方案保障远程办公安全',
      tags: ['基金', '安全'],
    },
    {
      title: '某券商IT治理数字化转型',
      description: '全面提升IT运维效率和管理水平',
      tags: ['证券', 'IT治理'],
    },
  ];

  return (
    <div>
      <Hero />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              三大核心业务
            </h2>
            <p className="text-lg text-text-secondary">
              专注金融行业，提供全面的技术解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {coreServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group p-8 bg-background-secondary rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition-all duration-300">
                  <service.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-secondary font-medium">
                  了解更多
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              为什么选择我们
            </h2>
            <p className="text-lg text-text-secondary">
              专业、可信赖、创新
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                最新动态
              </h2>
              <p className="text-lg text-text-secondary">
                了解我们的最新消息
              </p>
            </div>
            <Link
              to="/news"
              className="hidden lg:flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
            >
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {latestNews.map((news, index) => (
              <Link
                key={index}
                to="/news"
                className="group p-6 bg-background-secondary rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full">
                    {news.category}
                  </span>
                  <span className="text-sm text-text-secondary">
                    {news.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-secondary transition-colors">
                  {news.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center lg:hidden">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
            >
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                成功案例
              </h2>
              <p className="text-lg text-text-secondary">
                真实案例，卓越成果
              </p>
            </div>
            <Link
              to="/cases"
              className="hidden lg:flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
            >
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {latestCases.map((caseItem: CaseItem, index: number) => (
              <CaseCard
                key={index}
                title={caseItem.title}
                description={caseItem.description}
                tags={caseItem.tags}
              />
            ))}
          </div>

          <div className="text-center mt-8 lg:hidden">
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
            >
              查看全部
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-secondary to-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            准备好开始了吗？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            立即联系我们，获取专业的解决方案咨询
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
