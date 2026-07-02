'use client';

import Image from 'next/image';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { useQuerySelectedIndex } from '../../hooks/useQuerySelectedIndex';
import { expData } from '../../data/experience';
import { publicImage } from '../../utils/publicImage';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
  const { lang, setLang } = useLanguage();
  const data = expData[lang];
  const [sel, setSel] = useQuerySelectedIndex(data.length);

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="experience" dark />

      <div style={{ padding: '100px 24px 60px', textAlign: 'center' }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>Career</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          style={{ fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: 16 }}>
          {lang === 'en' ? 'Experience' : '工作经历'}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>
          {lang === 'en' ? "Where I've worked and what I've built" : '我的工作经历与成果'}
        </motion.p>
      </div>

      <div style={{ background: '#fff', borderRadius: '24px 24px 0 0', minHeight: '60vh', padding: '48px 24px 80px' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 0 }}>
            {lang === 'en' ? `${data.length} positions` : `${data.length}段经历`}
          </p>
          <div style={{ borderRadius: '0 0 18px 18px', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.08)', borderTop: 'none' }}>
            {data.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                onClick={() => setSel(i)}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 22px', cursor: 'pointer', borderBottom: i < data.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none', background: 'rgba(0,0,0,0.01)', transition: 'background 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f7')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.01)')}>
                <div style={{ width: 44, height: 44, borderRadius: 12, overflow: 'hidden', background: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.08)', flexShrink: 0, position: 'relative' }}>
                  <Image src={publicImage(item.img)} alt={item.abbr} fill sizes="44px" style={{ objectFit: 'cover' }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.01em' }}>{item.org}</div>
                  <div style={{ fontSize: 12, color: '#6e6e73', marginTop: 2 }}>{item.role}</div>
                  <div style={{ display: 'flex', gap: 5, marginTop: 6, flexWrap: 'wrap' }}>
                    {item.tags.map((tag, j) => (
                      <span key={j} style={{ fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 100, background: 'rgba(0,0,0,0.05)', color: '#6e6e73' }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ flexShrink: 0, textAlign: 'right' }}>
                  <div style={{ fontSize: 11, color: '#aeaeb2', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 5 }}>
                    {item.period}
                    {item.present && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#30d158', display: 'inline-block' }} />}
                  </div>
                  <div style={{ fontSize: 10, color: '#c7c7cc', marginTop: 2 }}>{item.loc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(24px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="liquid-glass-panel"
              style={{ background: '#1c1c1e', borderRadius: 22, maxWidth: 560, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#2c2c2e', position: 'relative' }}>
                <Image src={publicImage(data[sel].img)} alt={data[sel].org} fill sizes="(max-width: 768px) 100vw, 560px" style={{ objectFit: 'cover', opacity: 0.85 }} />
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: data[sel].color, color: '#fff', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 12 }}>{data[sel].loc}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.02em' }}>{data[sel].org}</div>
                <div style={{ fontSize: 13, color: '#2997ff', marginTop: 4 }}>{data[sel].role}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                  {data[sel].period}
                  {data[sel].present && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#30d158', display: 'inline-block' }} />}
                </div>
                {data[sel].url && (
                  <a href={data[sel].url!} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#2997ff', marginTop: 8, textDecoration: 'none' }}>
                    {data[sel].url}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                  </a>
                )}
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 18, lineHeight: 1.85, whiteSpace: 'pre-line' }}>{data[sel].detail}</div>
                <button className="liquid-glass-button liquid-glass-button--primary" onClick={() => setSel(null)} style={{ marginTop: 24, width: '100%', padding: '12px 0', borderRadius: 100, color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                  {lang === 'en' ? 'Close' : '关闭'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
