'use client';

import Image from 'next/image';
import { useLanguage } from '../../components/LanguageContext';
import ImageCarousel from '../../components/ImageCarousel';
import Navbar from '../../components/Navbar';
import { useQuerySelectedIndex } from '../../hooks/useQuerySelectedIndex';
import { researchData } from '../../data/research';
import { publicImage } from '../../utils/publicImage';
import { motion, AnimatePresence } from 'framer-motion';

export default function Research() {
  const { lang, setLang } = useLanguage();
  const data = researchData[lang];
  const [sel, setSel] = useQuerySelectedIndex(data.length);

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="research" />
      <main style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>Academic</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 16 }}>
              {lang === 'en' ? 'Research' : '研究经历'}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              style={{ fontSize: 18, fontWeight: 300, color: '#6e6e73' }}>
              {lang === 'en' ? 'Policy · Econometrics · Field Studies' : '政策 · 计量 · 实地调研'}
            </motion.p>
          </div>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 0 }}>Projects</p>
          <div style={{ borderRadius: '0 0 18px 18px', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.08)', borderTop: 'none' }}>
            {data.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                onClick={() => setSel(i)}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 22px', cursor: 'pointer', borderBottom: i < data.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none', background: 'rgba(0,0,0,0.01)', transition: 'background 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f7')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.01)')}>
                <div style={{ width: 44, height: 44, borderRadius: 12, overflow: 'hidden', background: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.08)', flexShrink: 0, position: 'relative' }}>
                  <Image src={publicImage(item.imgs[0])} alt="" fill sizes="44px" style={{ objectFit: 'cover' }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: '#e8f1fb', color: '#185fa5' }}>{item.tag}</span>
                    <span style={{ fontSize: 10, color: '#aeaeb2', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.institution}</span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f' }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: '#6e6e73', marginTop: 2 }}>{item.role} · {item.loc}</div>
                </div>
                <div style={{ fontSize: 11, color: '#aeaeb2', flexShrink: 0, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 4 }}>
                  {item.period}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aeaeb2" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.42)', backdropFilter: 'blur(20px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="liquid-glass-panel liquid-glass-panel--light"
              style={{ background: '#fff', borderRadius: 22, maxWidth: 580, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.1)', boxShadow: '0 32px 80px rgba(0,0,0,0.2)' }}>
              <ImageCarousel imgs={data[sel].imgs} alt={data[sel].title} />
              <div style={{ padding: 28 }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#e8f1fb', color: '#185fa5' }}>{data[sel].tag}</span>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.02em', marginTop: 12 }}>{data[sel].title}</div>
                <div style={{ fontSize: 13, color: '#2997ff', marginTop: 4 }}>{data[sel].role}</div>
                <div style={{ fontSize: 12, color: '#aeaeb2', marginTop: 2 }}>{data[sel].institution} · {data[sel].loc} · {data[sel].period}</div>
                <div style={{ fontSize: 14, color: '#4a4a4a', marginTop: 20, lineHeight: 1.85, whiteSpace: 'pre-line' }}>{data[sel].detail}</div>
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
