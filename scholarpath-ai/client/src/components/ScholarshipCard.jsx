import { Link } from 'react-router-dom';

const LEVEL_CLASS = {
  Bachelors: 'badge-amber',
  Masters:   'badge-blue',
  PhD:       'badge-purple',
};

export default function ScholarshipCard({ scholarship: s }) {
  const fundingClass = s.fundingType === 'Fully Funded' ? 'badge-green' : 'badge-amber';

  return (
    <Link
      to={`/scholarships/${s.id}`}
      className="glass-card p-6 flex flex-col fade-in"
      style={{ textDecoration: 'none' }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-[15px] leading-snug mb-0.5 truncate">
            {s.name}
          </h3>
          <p className="text-slate-400 text-[13px]">{s.country}</p>
        </div>
        <span className={`badge ${fundingClass} flex-shrink-0 text-[11px]`}>
          {s.fundingType}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-[13px] leading-relaxed line-clamp-2 mb-4 flex-1">
        {s.description}
      </p>

      {/* Level badges */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {s.level.map(l => (
          <span key={l} className={`badge ${LEVEL_CLASS[l] || 'badge-gray'} text-[11px]`}>{l}</span>
        ))}
      </div>

      <hr className="divider mb-4" />

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-[12px] text-slate-500">
          Deadline: <span className="text-slate-300">{s.deadline}</span>
        </span>
        <span className="flex items-center gap-1 text-blue-400 text-[13px] font-medium">
          View Details
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}
