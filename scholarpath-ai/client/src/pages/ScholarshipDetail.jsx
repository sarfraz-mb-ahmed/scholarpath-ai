import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const LEVEL_CLASS = { Bachelors: 'badge-amber', Masters: 'badge-blue', PhD: 'badge-purple' };

export default function ScholarshipDetail() {
  const { id } = useParams();
  const [data, setData]     = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/scholarships/${id}`)
      .then(res => setData(res.data.data))
      .catch(() => setError('Scholarship not found.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="flex justify-center py-32 relative z-10">
      <div className="loading-spinner" style={{ width: 36, height: 36, borderWidth: 3 }} />
    </div>
  );

  if (error || !data) return (
    <div className="page py-24 text-center relative z-10">
      <p className="text-slate-400 mb-5">{error || 'Something went wrong.'}</p>
      <Link to="/scholarships" className="btn-ghost">Back to Scholarships</Link>
    </div>
  );

  const s = data;
  const fundingClass = s.fundingType === 'Fully Funded' ? 'badge-green' : 'badge-amber';

  return (
    <main className="page py-12 relative z-10 fade-in">

      {/* Back link */}
      <Link
        to="/scholarships"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-[13px] mb-8 transition-colors"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Back to Scholarships
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* ── Left / Main ── */}
        <div className="lg:col-span-2 space-y-6">

          {/* Overview */}
          <div className="glass-card p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`badge ${fundingClass}`}>{s.fundingType}</span>
              {s.level.map(l => <span key={l} className={`badge ${LEVEL_CLASS[l] || 'badge-gray'}`}>{l}</span>)}
            </div>
            <h1 className="text-2xl font-semibold text-white mb-1.5">{s.name}</h1>
            <p className="text-blue-400 text-[14px] font-medium mb-5">{s.country}</p>
            <p className="text-slate-300 text-[15px] leading-relaxed">{s.description}</p>
          </div>

          {/* Benefits */}
          <div className="glass-card p-8">
            <h2 className="text-white font-semibold text-[17px] mb-5">What is Covered</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {s.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl"
                     style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.14)' }}>
                  <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="text-slate-300 text-[13px]">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div className="glass-card p-8">
            <h2 className="text-white font-semibold text-[17px] mb-5">Eligibility Requirements</h2>
            <ol className="space-y-3">
              {s.eligibility.map((e, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold text-blue-300 flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.22)' }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-slate-300 text-[14px] leading-relaxed">{e}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>

        {/* ── Right / Sidebar ── */}
        <div className="space-y-5">

          {/* Key details */}
          <div className="glass-card p-6 sticky top-24">
            <h2 className="text-white font-semibold text-[15px] mb-5">Key Details</h2>
            <dl className="space-y-4">
              {[
                { label: 'Deadline',      value: s.deadline },
                { label: 'Duration',      value: s.duration },
                { label: 'GPA Required',  value: s.gpaRequired  ? `${s.gpaRequired} / 4.0 minimum`  : 'Not specified' },
                { label: 'IELTS Required',value: s.ieltsRequired ? `${s.ieltsRequired}+ overall`      : 'Not required'  },
                { label: 'Fields',        value: s.fields.join(', ') },
              ].map(item => (
                <div key={item.label}>
                  <dt className="section-label mb-1">{item.label}</dt>
                  <dd className="text-slate-200 text-[13px] leading-relaxed">{item.value}</dd>
                </div>
              ))}
            </dl>

            <hr className="divider my-5" />

            <div className="space-y-3">
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-[13px] py-2.5"
              >
                Apply on Official Website
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>

              <Link
                to={`/sop-generator?scholarship=${encodeURIComponent(s.name)}&country=${encodeURIComponent(s.country)}`}
                className="btn-ghost w-full text-[13px] py-2.5"
              >
                Generate SOP for This Scholarship
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
