'use client';

import Image from 'next/image';
import { useLanguage } from '../../components/LanguageContext';
import ImageCarousel from '../../components/ImageCarousel';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import { useQuerySelectedIndex } from '../../hooks/useQuerySelectedIndex';
import { researchData } from '../../data/research';
import { publicImage } from '../../utils/publicImage';
import { motion, AnimatePresence } from 'framer-motion';

function researchSummary(detail: string) {
  return detail.split('\n')[0].replace(/^`|`$/g, '').slice(0, 190);
}

export default function Research() {
  const { lang, setLang } = useLanguage();
  const data = researchData[lang];
  const [sel, setSel] = useQuerySelectedIndex(data.length);

  return (
    <VisionPageShell accent="#185fa5">
      <Navbar lang={lang} setLang={setLang} currentPage="research" />
      <main className="apple-section" style={{ paddingTop: 112 }}>
        <div className="apple-container">
          <div className="vision-hero-card liquid-glass-panel liquid-glass-panel--light" style={{ textAlign: 'center', marginBottom: 34, padding: '48px 24px', borderRadius: 32 }}>
            <motion.p className="apple-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#185fa5', marginBottom: 16 }}>{lang === 'en' ? 'Academic' : '学术研究'}</motion.p>
            <motion.h1 className="apple-display-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              style={{ fontSize: 'clamp(42px, 7vw, 76px)', color: '#1d1d1f', marginBottom: 16 }}>
              {lang === 'en' ? 'Research Archive' : '研究档案'}
            </motion.h1>
            <motion.p className="apple-centered-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              style={{ fontSize: 18, fontWeight: 360, color: '#606068', maxWidth: 680, margin: '0 auto', lineHeight: 1.7 }}>
              {lang === 'en' ? 'Policy analysis, econometrics, and field studies organized as project stories.' : '把政策分析、计量研究与田野调查整理成可阅读的项目故事。'}
            </motion.p>
          </div>

          <div className="research-board">
            {data.map((item, i) => (
              <motion.button
                type="button"
                key={item.title}
                className="research-card-button liquid-glass-panel liquid-glass-panel--light vision-interactive-card"
                initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.58, delay: i * 0.06 }}
                onClick={() => setSel(i)}
                style={{ borderRadius: 28, overflow: 'hidden' }}
              >
                <div className="research-card-media">
                  <Image src={publicImage(item.imgs[0])} alt="" fill sizes="(max-width: 900px) 100vw, 540px" style={{ objectFit: 'cover' }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div className="research-card-content">
                  <div className="research-card-meta">
                    <span className="research-chip">{item.tag}</span>
                    <span className="research-chip">{item.period}</span>
                  </div>
                  <div className="research-card-title">{item.title}</div>
                  <div style={{ fontSize: 12, color: '#185fa5', marginTop: 8, lineHeight: 1.5 }}>{item.role} · {item.institution}</div>
                  <p className="research-card-detail">{researchSummary(item.detail)}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 18 }}>
                    <span style={{ fontSize: 12, color: '#86868b' }}>{item.loc}</span>
                    <span className="apple-card-arrow" style={{ color: '#fff' }} aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.42)', backdropFilter: 'blur(20px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.94, y: 24, opacity: 0, filter: 'blur(14px)' }} animate={{ scale: 1, y: 0, opacity: 1, filter: 'blur(0px)' }} exit={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="liquid-glass-panel liquid-glass-panel--light"
              style={{ background: '#fff', borderRadius: 22, maxWidth: 580, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.1)', boxShadow: '0 32px 80px rgba(0,0,0,0.2)' }}>
              <ImageCarousel imgs={data[sel].imgs} alt={data[sel].title} />
              <div style={{ padding: 28 }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#e8f1fb', color: '#185fa5' }}>{data[sel].tag}</span>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1d1d1f', letterSpacing: 0, marginTop: 12 }}>{data[sel].title}</div>
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
    </VisionPageShell>
  );
}
