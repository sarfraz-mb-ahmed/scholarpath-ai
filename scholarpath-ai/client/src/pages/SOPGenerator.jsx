import { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const DEGREES = ['Bachelors', 'Masters', 'PhD', 'Postdoc'];

const FIELD_TIPS = {
  name:              'Your full legal name as on documents',
  scholarship:       'e.g. Chevening Scholarship or University of Toronto',
  country:           'e.g. United Kingdom, Germany',
  field:             'e.g. Computer Science, Public Health, Law',
  currentInstitution:'e.g. NUST Islamabad, UET Lahore',
  cgpa:              'e.g. 3.8 / 4.0 or 85%',
  workExperience:    'Total years of full-time professional experience',
  researchInterests: 'Describe your specific academic research interests with examples of work or curiosity',
  careerGoals:       'Where do you want to be in 5-10 years? What problem will you solve?',
  whyScholarship:    'Why this specific scholarship and country- not generic reasons',
  achievements:      'Awards, publications, leadership, projects (optional but recommended)',
};

const INITIAL = (sp) => ({
  name: '',
  scholarship: sp.get('scholarship') || '',
  country:     sp.get('country')     || '',
  degree:      'Masters',
  field:       '',
  currentInstitution: '',
  cgpa:           '',
  workExperience: '',
  researchInterests: '',
  careerGoals:       '',
  whyScholarship:    '',
  achievements:      '',
});

function InputField({ label, name, placeholder, value, onChange, required = true, type = 'text', tip }) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-slate-300 text-[13px] font-medium mb-1.5">
        {label}
        {required && <span className="text-blue-400 text-xs">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || tip}
        className="input-glass"
      />
      {tip && placeholder && <p className="text-slate-600 text-[11px] mt-1">{tip}</p>}
    </div>
  );
}

function TextareaField({ label, name, value, onChange, required = true, tip, minH = 100 }) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-slate-300 text-[13px] font-medium mb-1.5">
        {label}
        {required && <span className="text-blue-400 text-xs">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={tip}
        className="input-glass"
        style={{ minHeight: minH }}
      />
    </div>
  );
}

export default function SOPGenerator() {
  const [sp]                  = useSearchParams();
  const [form, setForm]       = useState(() => INITIAL(sp));
  const [sop, setSop]         = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const [copied, setCopied]   = useState(false);
  const sopRef                = useRef(null);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  };

  const validate = () => {
    const required = ['name','scholarship','country','field','currentInstitution','cgpa','researchInterests','careerGoals','whyScholarship'];
    for (const key of required) {
      if (!form[key].trim()) {
        const label = key.replace(/([A-Z])/g, ' $1').toLowerCase();
        return `Please fill in "${label}".`;
      }
    }
    return null;
  };

  const generate = async () => {
    const err = validate();
    if (err) { setError(err); return; }

    setLoading(true);
    setSop('');
    setError('');

    try {
      const res = await axios.post('/api/sop/generate', form);
      setSop(res.data.sop);
      setTimeout(() => sopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    } catch (e) {
      setError(e.response?.data?.message || 'Failed to generate SOP. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(sop);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const download = () => {
    const fname = `SOP_${form.name.replace(/\s+/g,'_')}_${form.scholarship.replace(/\s+/g,'_')}.txt`;
    const url   = URL.createObjectURL(new Blob([sop], { type: 'text/plain' }));
    Object.assign(document.createElement('a'), { href: url, download: fname }).click();
    URL.revokeObjectURL(url);
  };

  const SectionHead = ({ title }) => (
    <div className="flex items-center gap-3 mb-5">
      <h2 className="text-white font-semibold text-[15px]">{title}</h2>
      <div className="flex-1 h-px bg-white/[0.06]" />
    </div>
  );

  return (
    <main className="page py-12 relative z-10">

      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-white mb-1.5">SOP Generator</h1>
        <p className="text-slate-400 text-[14px]">
          Fill in your academic profile and Gemini AI will write a professional, personalised Statement of Purpose.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">

        {/* ── Form ── */}
        <div className="space-y-6">

          {/* Academic Profile */}
          <div className="glass-card p-7">
            <SectionHead title="Academic Profile" />
            <div className="space-y-4">
              <InputField label="Full Name"             name="name"              value={form.name}              onChange={handleChange} placeholder="e.g. Muhammad Ahmed Khan" tip={FIELD_TIPS.name} />
              <InputField label="Target Scholarship / University" name="scholarship" value={form.scholarship}   onChange={handleChange} placeholder="e.g. Chevening Scholarship" tip={FIELD_TIPS.scholarship} />
              <InputField label="Target Country"        name="country"           value={form.country}           onChange={handleChange} placeholder="e.g. United Kingdom" tip={FIELD_TIPS.country} />
              <div>
                <label className="text-slate-300 text-[13px] font-medium block mb-1.5">
                  Degree Level <span className="text-blue-400 text-xs">*</span>
                </label>
                <div className="relative">
                  <select name="degree" value={form.degree} onChange={handleChange} className="select-glass">
                    {DEGREES.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>
              <InputField label="Field of Study"         name="field"             value={form.field}             onChange={handleChange} placeholder="e.g. Computer Science / AI" tip={FIELD_TIPS.field} />
              <InputField label="Current / Previous Institution" name="currentInstitution" value={form.currentInstitution} onChange={handleChange} placeholder="e.g. NUST Islamabad" tip={FIELD_TIPS.currentInstitution} />
              <div className="grid grid-cols-2 gap-4">
                <InputField label="CGPA / GPA"           name="cgpa"              value={form.cgpa}              onChange={handleChange} placeholder="3.8 / 4.0" tip={FIELD_TIPS.cgpa} />
                <InputField label="Work Experience (yrs)" name="workExperience"   value={form.workExperience}    onChange={handleChange} placeholder="0" tip={FIELD_TIPS.workExperience} required={false} type="number" />
              </div>
            </div>
          </div>

          {/* Personal Statement */}
          <div className="glass-card p-7">
            <SectionHead title="Personal Statement" />
            <div className="space-y-4">
              <TextareaField label="Research Interests"    name="researchInterests" value={form.researchInterests} onChange={handleChange} tip={FIELD_TIPS.researchInterests} minH={110} />
              <TextareaField label="Career Goals"          name="careerGoals"       value={form.careerGoals}       onChange={handleChange} tip={FIELD_TIPS.careerGoals}       minH={100} />
              <TextareaField label="Why This Scholarship / Country?" name="whyScholarship" value={form.whyScholarship} onChange={handleChange} tip={FIELD_TIPS.whyScholarship} minH={100} />
              <TextareaField label="Achievements & Awards (optional)" name="achievements" value={form.achievements} onChange={handleChange} tip={FIELD_TIPS.achievements} required={false} minH={80} />
            </div>
          </div>

          {error && (
            <div className="p-4 rounded-xl text-red-300 text-[13px]"
                 style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.18)' }}>
              {error}
            </div>
          )}

          <button onClick={generate} disabled={loading} className="btn-primary w-full py-3.5 text-[15px]">
            {loading
              ? <><div className="loading-spinner" /> Generating your SOP...</>
              : <>Generate SOP with AI <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></>
            }
          </button>
        </div>

        {/* ── Output ── */}
        <div ref={sopRef}>
          {sop ? (
            <div className="glass-card p-7 fade-in sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-white font-semibold text-[15px]">Your Generated SOP</h2>
                <div className="flex gap-2">
                  <button onClick={copy} className="btn-ghost btn-sm text-[12px]">
                    {copied ? 'Copied!' : 'Copy text'}
                  </button>
                  <button onClick={download} className="btn-ghost btn-sm text-[12px]">
                    Download .txt
                  </button>
                </div>
              </div>

              <div
                className="text-slate-300 text-[13.5px] leading-relaxed whitespace-pre-line overflow-y-auto pr-2"
                style={{ maxHeight: '72vh' }}
              >
                {sop}
              </div>

              <hr className="divider mt-5 mb-4" />
              
            </div>
          ) : (
            <div className="glass-card p-10 text-center sticky top-24">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: 'rgba(74,158,255,0.08)', border: '1px solid rgba(74,158,255,0.18)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="1.7">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Your SOP will appear here</h3>
              <p className="text-slate-400 text-[13px] leading-relaxed max-w-xs mx-auto">
                Fill in your profile on the left, then click "Generate SOP with AI" to receive a personalised Statement of Purpose in seconds.
              </p>
              <hr className="divider my-5" />
              <div className="space-y-2 text-left">
                {['Opens with a compelling, specific hook', 'Tailored to your target scholarship', '600 – 800 words in flowing paragraphs', 'Copy or download instantly'].map((t, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[12px] text-slate-500">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4a9eff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
