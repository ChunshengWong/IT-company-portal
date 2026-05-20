import { Code, Cloud, Database, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  linkTo?: string;
}

const iconMap: Record<string, typeof Code> = {
  code: Code,
  cloud: Cloud,
  database: Database,
  monitor: Monitor,
};

export default function ServiceCard({ title, description, icon = 'code', linkTo }: ServiceCardProps) {
  const Icon = iconMap[icon] || Code;

  const content = (
    <div className="group p-6 lg:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
        <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-secondary group-hover:text-white" />
      </div>

      <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-secondary transition-colors">
        {title}
      </h3>

      <p className="text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{content}</Link>;
  }

  return content;
}
