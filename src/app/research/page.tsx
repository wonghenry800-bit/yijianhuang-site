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

function researchSummary(item: { detail: string; summary?: string }) {
  if (item.summary) return item.summary;

  const firstSentence = item.detail.split('\n')[0].replace(/^`|`$/g, '').match(/^.*?[.!?。！？]/)?.[0];
  return firstSentence ?? item.detail.split('\n')[0].replace(/^`|`$/g, '');
}

export default function Research() {
  const { lang, setLang } = useLanguage();
  const data = researchData[lang];
  const [sel, setSel] = useQuerySelectedIndex(data.length);
  const lead = data[0];

  return (
    <VisionPageShell dark accent="#185fa5">
      <Navbar lang={lang} setLang={setLang} currentPage="research" dark />
      <main className="research-cinematic-page">
        <section className="research-cinematic-hero">
          <motion.div className="research-signal-ring" aria-hidden="true" animate={{ rotate: -360 }} transition={{ duration: 38, repeat: Infinity, ease: 'linear' }} />
          <div className="research-hero-copy">
            <motion.p className="apple-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#64d2ff', marginBottom: 16 }}>
              {lang === 'en' ? 'Research Lab' : '研究实验室'}
            </motion.p>
            <motion.h1 className="apple-display-title" initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}>
              {lang === 'en' ? 'Policy evidence, fieldwork, and economic systems.' : '政策证据、田野调查与经济系统。'}
            </motion.h1>
            <motion.p className="apple-centered-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
              {lang === 'en' ? 'Each project is framed as a story of institutions, data, and decisions.' : '每个项目都以制度、数据与决策之间的关系展开。'}
            </motion.p>
          </div>

          <motion.button
            type="button"
            className="research-hero-visual liquid-glass-panel vision-interactive-card"
            onClick={() => setSel(0)}
            initial={{ opacity: 0, scale: 0.94, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src={publicImage(lead.imgs[0])} alt={lead.title} fill priority sizes="(max-width: 900px) 88vw, 520px" style={{ objectFit: 'cover' }} />
            <div className="research-hero-overlay">
              <span>{lead.tag}</span>
              <strong>{lead.title}</strong>
            </div>
          </motion.button>
        </section>

        <section className="research-cinematic-section">
          <div className="apple-section-header">
            <p className="apple-eyebrow" style={{ color: '#30d158', marginBottom: 14 }}>{lang === 'en' ? 'Selected work' : '精选研究'}</p>
            <h2 className="apple-section-title">{lang === 'en' ? 'Less like a list. More like a working map.' : '不是列表，而是一张工作地图。'}</h2>
            <p className="apple-section-copy">{lang === 'en' ? 'Open any tile for methodology, context, and project details.' : '点击任意卡片查看方法、背景与项目细节。'}</p>
          </div>

          <div className="research-board research-board--cinematic">
            {data.map((item, i) => (
              <motion.button
                type="button"
                key={item.title}
                className={`research-card-button liquid-glass-panel vision-interactive-card ${i === 0 ? 'research-card-button--featured' : ''} ${i === 2 ? 'research-card-button--tall' : ''}`}
                initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.62, delay: Math.min(i * 0.06, 0.24), ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSel(i)}
              >
                <div className="research-card-media">
                  <Image src={publicImage(item.imgs[0])} alt="" fill sizes="(max-width: 900px) 100vw, 620px" style={{ objectFit: 'cover' }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div className="research-card-content">
                  <div className="research-card-meta">
                    <span className="research-chip">{item.tag}</span>
                    <span className="research-chip">{item.period}</span>
                  </div>
                  <div className="research-card-title">{item.title}</div>
                  <div className="research-card-subtitle">{item.role} · {item.institution}</div>
                  <p className="research-card-detail">{researchSummary(item)}</p>
                  <div className="research-card-footer">
                    <span>{item.loc}</span>
                    <span className="apple-card-arrow" aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.68)', backdropFilter: 'blur(26px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.94, y: 24, opacity: 0, filter: 'blur(14px)' }} animate={{ scale: 1, y: 0, opacity: 1, filter: 'blur(0px)' }} exit={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="liquid-glass-panel"
              style={{ background: '#1c1c1e', borderRadius: 24, maxWidth: 680, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <ImageCarousel imgs={data[sel].imgs} alt={data[sel].title} />
              <div style={{ padding: 28 }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#185fa5', color: '#fff' }}>{data[sel].tag}</span>
                <div style={{ fontSize: 24, fontWeight: 740, color: '#f5f5f7', letterSpacing: 0, marginTop: 12 }}>{data[sel].title}</div>
                <div style={{ fontSize: 14, color: '#64d2ff', marginTop: 4 }}>{data[sel].role}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.34)', marginTop: 2 }}>{data[sel].institution} · {data[sel].loc} · {data[sel].period}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.62)', marginTop: 20, lineHeight: 1.85, whiteSpace: 'pre-line' }}>{data[sel].detail}</div>
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
