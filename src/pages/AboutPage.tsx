import { Link } from 'react-router-dom';
import { Target, Eye, Heart } from 'lucide-react';

export default function AboutPage() {

  const values = [
    {
      title: '客户至上',
      description: '始终以客户需求为导向，为客户创造价值',
    },
    {
      title: '创新驱动',
      description: '持续创新，引领行业发展',
    },
    {
      title: '协作共赢',
      description: '与客户、伙伴共同成长',
    },
    {
      title: '追求卓越',
      description: '精益求精，打造精品',
    },
  ];

  const stats = [
    { value: '100+', label: '企业客户' },
    { value: '50+', label: '成功案例' },
    { value: '10+', label: '年行业经验' },
    { value: '24/7', label: '技术支持' },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            关于我们
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            您的数字化转型伙伴
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8 text-center">
              公司简介
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              我们是一家专注于金融行业IT服务的科技企业，致力于为证券、基金等金融机构提供全面的技术解决方案。公司拥有一支经验丰富的专业团队，在基础架构、安全、工作空间等领域具有深厚的技术积累和行业经验。
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-12">
              我们与国内外领先的科技厂商建立战略合作关系，包括SmartX等，为客户提供高品质的产品和服务。我们的使命是帮助金融机构实现数字化转型，提升运营效率，保障信息安全。
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-background-secondary rounded-2xl">
                  <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    使命
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  通过创新的技术解决方案，帮助金融机构实现数字化转型，创造更大价值。
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    愿景
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  成为金融行业最值得信赖的IT服务提供商。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              核心价值观
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-background-secondary rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {value.description}
                </p>
              </div>
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
