import { Link } from 'react-router-dom';

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    color: '#4a9eff',
    title: 'Smart Discovery',
    desc: 'Browse 20+ curated, fully verified scholarships open to Pakistani students. Filter by country, level, field, and funding type to find your fit.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    color: '#22d3ee',
    title: 'AI-Powered SOP',
    desc: 'Fill in your academic profile and let Google Gemini AI write a compelling, personalised Statement of Purpose tailored to your target scholarship.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: '#a78bfa',
    title: 'Pakistan-Focused',
    desc: 'Every scholarship listed is verified as open to Pakistani nationals. No irrelevant results- everything here is relevant to you.'
  }
];

const STATS = [
  { num: '20+',  label: 'Scholarships Listed' },
  { num: '15+',  label: 'Countries Covered' },
  { num: 'Free', label: 'Always Free' },
  { num: 'Smart', label: 'Instant SOP Builder' },
];

const HOW = [
  { step: '01', title: 'Search scholarships', desc: 'Browse and filter opportunities by country, degree level, and funding type.' },
  { step: '02', title: 'Read the full details', desc: 'Review eligibility, benefits, and deadline for any scholarship that interests you.' },
  { step: '03', title: 'Generate your SOP', desc: 'Enter your profile, click generate, and get a professional SOP in seconds.' },
];

export default function Home() {
  return (
    <main className="page py-16 relative z-10">

      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-[13px] text-slate-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
          Built for Pakistani Students
        </div>

        <h1 className="text-5xl md:text-[3.75rem] font-semibold text-white leading-[1.12] tracking-tight mb-6">
          Find Your Scholarship.<br />
          <span className="text-gradient">Write a Winning SOP.</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover fully funded international scholarships for Pakistani students, then generate a professional Statement of Purpose in seconds using AI.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link to="/scholarships" className="btn-primary text-[15px] px-8 py-3.5">
            Browse Scholarships
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link to="/sop-generator" className="btn-ghost text-[15px] px-8 py-3.5">
            Generate SOP Free
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
        {STATS.map((s, i) => (
          <div key={i} className="glass-card p-6 text-center">
            <p className="text-3xl font-semibold text-gradient mb-1">{s.num}</p>
            <p className="text-slate-400 text-[13px]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <p className="section-label mb-3">What you get</p>
          <h2 className="text-2xl font-semibold text-white mb-3">Everything you need to apply</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-[15px] leading-relaxed">
            Scholarship applications are time-consuming. We handle the discovery and writing so you can focus on what matters.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className="glass-card p-8">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${f.color}18`, border: `1px solid ${f.color}30`, color: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="text-white font-semibold text-[16px] mb-3">{f.title}</h3>
              <p className="text-slate-400 text-[13px] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <p className="section-label mb-3">How it works</p>
          <h2 className="text-2xl font-semibold text-white">Three steps to your application</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 relative">
          {HOW.map((item, i) => (
            <div key={i} className="glass-card p-8">
              <p className="text-gradient font-semibold text-lg mb-4">{item.step}</p>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-[13px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div
        className="glass p-12 text-center rounded-2xl"
        style={{ background: 'rgba(74, 158, 255, 0.05)', borderColor: 'rgba(74, 158, 255, 0.18)' }}
      >
        <h2 className="text-2xl font-semibold text-white mb-3">
          Ready to write your Statement of Purpose?
        </h2>
        <p className="text-slate-400 mb-8 text-[15px]">
          Generate a professional, personalised SOP in under a minute- completely free.
        </p>
        <Link to="/sop-generator" className="btn-primary px-10 py-3.5 text-[15px]">
          Start Writing Your SOP
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </main>
  );
}
