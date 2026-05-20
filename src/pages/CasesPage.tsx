import { Link } from 'react-router-dom';
import CaseCard from '../components/CaseCard';

export default function CasesPage() {
  const cases = [
    {
      title: '某头部券商基础架构升级项目',
      description: '采用SmartX超融合方案，提升系统性能300%，实现业务系统稳定运行',
      tags: ['证券', '基础架构'],
    },
    {
      title: '某基金公司安全工作空间建设',
      description: 'RBI解决方案保障远程办公安全，数据泄露风险降低90%',
      tags: ['基金', '安全'],
    },
    {
      title: '某券商IT治理数字化转型',
      description: '全面提升IT运维效率，管理流程时间缩短60%',
      tags: ['证券', 'IT治理'],
    },
    {
      title: '某期货公司数据中心建设',
      description: '构建高可用数据中心，满足监管合规要求',
      tags: ['期货', '基础架构'],
    },
    {
      title: '某资产管理公司安全加固项目',
      description: '全面的安全解决方案，顺利通过安全评估',
      tags: ['资产', '安全'],
    },
    {
      title: '某基金公司数据管理平台',
      description: '数据分类分级和权限管控，满足监管要求',
      tags: ['基金', '数据管理'],
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            案例展示
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            真实案例，卓越成果
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
          </Link>
        </div>
      </section>
    </div>
  );
}
