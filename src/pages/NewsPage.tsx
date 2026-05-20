import { ArrowRight, FileText, Newspaper, Lightbulb } from 'lucide-react';

export default function NewsPage() {

  const news = [
    {
      title: '公司成功签约某头部券商IT治理项目',
      date: '2024-01-20',
      category: '公司新闻',
      icon: Newspaper,
      description: '近日，我们成功签约某头部券商IT治理数字化项目，将为其提供全面的IT治理解决方案...',
    },
    {
      title: 'RBI产品获得国家级安全认证',
      date: '2024-01-15',
      category: '产品动态',
      icon: FileText,
      description: '我们自主研发的RBI远程浏览器隔离产品成功获得国家级安全认证，标志着产品达到行业领先水平...',
    },
    {
      title: '2024金融科技发展趋势报告发布',
      date: '2024-01-10',
      category: '行业资讯',
      icon: Lightbulb,
      description: '近日，我们发布了《2024金融科技发展趋势报告》，深入分析金融行业技术发展方向...',
    },
    {
      title: 'SmartX超融合解决方案全面升级',
      date: '2024-01-05',
      category: '产品动态',
      icon: FileText,
      description: 'SmartX超融合解决方案完成全面升级，新版本在性能、安全性、易用性等方面均有显著提升...',
    },
    {
      title: '公司荣获"年度金融科技服务奖"',
      date: '2024-01-01',
      category: '公司新闻',
      icon: Newspaper,
      description: '在刚刚结束的金融科技年度评选中，我们公司荣获"年度金融科技服务奖"...',
    },
    {
      title: '证券公司信息安全建设指南发布',
      date: '2023-12-28',
      category: '行业资讯',
      icon: Lightbulb,
      description: '我们团队结合多年实践经验，发布了《证券公司信息安全建设指南》，为行业提供参考...',
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '公司新闻':
        return Newspaper;
      case '产品动态':
        return FileText;
      case '行业资讯':
        return Lightbulb;
      default:
        return FileText;
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            新闻动态
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            了解我们的最新消息和行业资讯
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {news.map((item, index) => {
              const Icon = getCategoryIcon(item.category);
              return (
                <div
                  key={index}
                  className="bg-background-secondary rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full">
                          {item.category}
                        </span>
                        <span className="text-sm text-text-secondary">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-text-primary mb-3">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary mb-4">
                        {item.description}
                      </p>
                      <button className="flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all">
                        阅读更多
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
