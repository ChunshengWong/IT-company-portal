import { useTranslation } from 'react-i18next';
import CaseCard from '../components/CaseCard';

interface CaseItem {
  title: string;
  description: string;
  tags: string[];
}

export default function CasesPage() {
  const { t } = useTranslation();

  const cases = t('cases.items', { returnObjects: true }) as CaseItem[];

  const allCases: CaseItem[] = [
    ...cases,
    {
      title: '医疗健康平台',
      description: '构建智能化医疗健康管理系统，提升医疗服务效率',
      tags: ['医疗', 'SaaS'],
    },
    {
      title: '智慧物流系统',
      description: '实现仓储物流全流程数字化管理',
      tags: ['物流', '物联网'],
    },
    {
      title: '在线教育平台',
      description: '打造沉浸式在线学习体验，支持万人并发',
      tags: ['教育', '直播'],
    },
    {
      title: '企业资源计划(ERP)',
      description: '整合企业核心业务流程，提升运营效率',
      tags: ['企业', 'ERP'],
    },
    {
      title: '智能客服系统',
      description: 'AI驱动的智能客服，提升客户满意度',
      tags: ['AI', '客服'],
    },
    {
      title: '区块链溯源系统',
      description: '利用区块链技术实现产品全链路溯源',
      tags: ['区块链', '溯源'],
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('nav.cases')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('cases.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allCases.map((caseItem: CaseItem, index: number) => (
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
    </div>
  );
}
