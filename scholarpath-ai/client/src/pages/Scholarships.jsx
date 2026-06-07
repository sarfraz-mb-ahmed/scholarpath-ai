import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ScholarshipCard from '../components/ScholarshipCard';

const LEVELS       = ['All', 'Bachelors', 'Masters', 'PhD'];
const FUNDING_TYPES = ['All', 'Fully Funded', 'Partially Funded'];

function ChevronDown() {
  return (
    <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

export default function Scholarships() {
  const [scholarships, setScholarships]   = useState([]);
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState('');
  const [search, setSearch]               = useState('');
  const [countries, setCountries]         = useState([]);
  const [filters, setFilters]             = useState({ country: 'All', level: 'All', fundingType: 'All' });

  /* ── fetch filter options once ── */
  useEffect(() => {
    axios.get('/api/scholarships/meta/filters')
      .then(res => setCountries(res.data.data.countries))
      .catch(() => {});
  }, []);

  /* ── fetch scholarships ── */
  const fetch = useCallback(async (params = {}) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get('/api/scholarships', { params });
      setScholarships(res.data.data);
    } catch {
      setError('Could not reach the server. Make sure the backend is running on port 5000.');
      setScholarships([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetch(); }, [fetch]);

  const buildParams = (s = search, f = filters) => {
    const p = {};
    if (s) p.search = s;
    if (f.country    !== 'All') p.country    = f.country;
    if (f.level      !== 'All') p.level      = f.level;
    if (f.fundingType !== 'All') p.fundingType = f.fundingType;
    return p;
  };

  const handleSearch = e => {
    e.preventDefault();
    fetch(buildParams());
  };

  const handleFilter = (key, val) => {
    const next = { ...filters, [key]: val };
    setFilters(next);
    fetch(buildParams(search, next));
  };

  const reset = () => {
    setSearch('');
    setFilters({ country: 'All', level: 'All', fundingType: 'All' });
    fetch();
  };

  const activeCount = Object.values(filters).filter(v => v !== 'All').length + (search ? 1 : 0);

  return (
    <main className="page py-12 relative z-10">

      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-white mb-1.5">Scholarships for Pakistani Students</h1>
        <p className="text-slate-400 text-[14px]">Verified opportunities from 15+ countries- all open to Pakistani nationals</p>
      </div>

      {/* Search bar */}
      <form onSubmit={handleSearch} className="flex gap-3 mb-8">
        <div className="relative flex-1">
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, country, or field..."
            className="input-glass pl-10"
          />
        </div>
        <button type="submit" className="btn-primary px-6">Search</button>
        {activeCount > 0 && (
          <button type="button" onClick={reset} className="btn-ghost px-4 text-[13px]">
            Clear ({activeCount})
          </button>
        )}
      </form>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Sidebar */}
        <aside className="lg:w-60 flex-shrink-0">
          <div className="glass-card p-6 sticky top-24">
            <div className="flex items-center justify-between mb-5">
              <span className="text-white font-semibold text-[15px]">Filters</span>
              {activeCount > 0 && (
                <button onClick={reset} className="text-blue-400 text-[12px] hover:text-blue-300 transition-colors">
                  Reset all
                </button>
              )}
            </div>

            {/* Country */}
            <div className="mb-5">
              <p className="section-label mb-2.5">Country</p>
              <div className="relative">
                <select
                  value={filters.country}
                  onChange={e => handleFilter('country', e.target.value)}
                  className="select-glass"
                >
                  <option value="All">All Countries</option>
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown />
              </div>
            </div>

            {/* Level */}
            <div className="mb-5">
              <p className="section-label mb-2.5">Degree Level</p>
              <div className="space-y-1">
                {LEVELS.map(l => (
                  <button
                    key={l}
                    onClick={() => handleFilter('level', l)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-all border ${
                      filters.level === l
                        ? 'bg-blue-500/12 text-blue-300 border-blue-500/25'
                        : 'text-slate-400 hover:text-white border-transparent hover:bg-white/[0.04]'
                    }`}
                  >
                    {l === 'All' ? 'All Levels' : l}
                  </button>
                ))}
              </div>
            </div>

            {/* Funding Type */}
            <div>
              <p className="section-label mb-2.5">Funding Type</p>
              <div className="space-y-1">
                {FUNDING_TYPES.map(f => (
                  <button
                    key={f}
                    onClick={() => handleFilter('fundingType', f)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-all border ${
                      filters.fundingType === f
                        ? 'bg-blue-500/12 text-blue-300 border-blue-500/25'
                        : 'text-slate-400 hover:text-white border-transparent hover:bg-white/[0.04]'
                    }`}
                  >
                    {f === 'All' ? 'All Types' : f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Results */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-5">
            <p className="text-slate-400 text-[13px]">
              {loading ? 'Loading...' : `${scholarships.length} scholarship${scholarships.length !== 1 ? 's' : ''} found`}
            </p>
          </div>

          {error ? (
            <div className="glass-card p-8 text-center">
              <p className="text-red-400 text-[14px] mb-4">{error}</p>
              <button onClick={() => fetch()} className="btn-ghost btn-sm">Try again</button>
            </div>
          ) : loading ? (
            <div className="flex justify-center py-24">
              <div className="loading-spinner" style={{ width: 32, height: 32, borderWidth: 3 }} />
            </div>
          ) : scholarships.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <p className="text-slate-400 mb-2 font-medium text-white">No scholarships match your search.</p>
              <p className="text-slate-500 text-[13px] mb-5">Try adjusting the filters or clearing the search.</p>
              <button onClick={reset} className="btn-ghost btn-sm">Clear all filters</button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {scholarships.map(s => <ScholarshipCard key={s.id} scholarship={s} />)}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
