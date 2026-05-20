interface CaseCardProps {
  title: string;
  description: string;
  tags: string[];
}

export default function CaseCard({ title, description, tags }: CaseCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="h-48 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-white/50 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg
            className="w-10 h-10 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-secondary transition-colors">
          {title}
        </h3>

        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
