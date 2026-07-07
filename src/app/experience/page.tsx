'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import { useQuerySelectedIndex } from '../../hooks/useQuerySelectedIndex';
import { expData } from '../../data/experience';
import { publicImage } from '../../utils/publicImage';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
  const { lang, setLang } = useLanguage();
  const data = expData[lang];
  const [sel, setSel] = useQuerySelectedIndex(data.length);
  const lead = data[0];

  return (
    <VisionPageShell dark accent="#00a3e0">
      <Navbar lang={lang} setLang={setLang} currentPage="experience" dark />

      <main className="experience-ultra-page">
        <section className="experience-ultra-hero">
          <motion.div className="experience-orbit" aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 32, repeat: Infinity, ease: 'linear' }} />
          <div className="experience-hero-copy">
            <motion.p className="apple-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#64d2ff', marginBottom: 16 }}>
              {lang === 'en' ? 'Career System' : '职业系统'}
            </motion.p>
            <motion.h1 className="apple-display-title" initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}>
              {lang === 'en' ? 'Consulting, policy, and technology in motion.' : '咨询、政策与技术，在同一个轨道上。'}
            </motion.h1>
            <motion.p className="apple-centered-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
              {lang === 'en' ? 'From life-sciences digital systems to policy research and global business development.' : '从生命科学数字系统，到政策研究与全球化商业拓展。'}
            </motion.p>
          </div>
          <motion.button
            type="button"
            className="experience-hero-device liquid-glass-panel"
            onClick={() => setSel(0)}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="experience-device-screen">
              <Image src={publicImage(lead.img)} alt={lead.org} fill priority sizes="(max-width: 900px) 86vw, 420px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="experience-device-caption">
              <span>{lead.org}</span>
              <strong>{lead.role}</strong>
            </div>
          </motion.button>
        </section>

        <section className="experience-ultra-section">
          <div className="apple-section-header">
            <p className="apple-eyebrow" style={{ color: '#30d158', marginBottom: 14 }}>{lang === 'en' ? `${data.length} positions` : `${data.length}段经历`}</p>
            <h2 className="apple-section-title">{lang === 'en' ? 'Built across systems, markets, and institutions.' : '在系统、市场与机构之间积累经验。'}</h2>
          </div>

          <div className="experience-ultra-grid">
            {data.map((item, i) => (
              <motion.button
                type="button"
                key={`${item.org}-${item.period}`}
                className={`experience-ultra-card liquid-glass-panel vision-interactive-card ${i === 0 ? 'experience-ultra-card--wide' : ''}`}
                onClick={() => setSel(i)}
                initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.62, delay: Math.min(i * 0.05, 0.25), ease: [0.22, 1, 0.36, 1] }}
                style={{ '--card-accent': item.color } as CSSProperties}
              >
                <div className="experience-card-image">
                  <Image src={publicImage(item.img)} alt={item.org} fill sizes="(max-width: 900px) 100vw, 520px" style={{ objectFit: 'cover' }} />
                </div>
                <div className="experience-card-copy">
                  <div className="experience-card-topline">
                    <span>{item.loc}</span>
                    {item.present && <span className="experience-live-dot" />}
                  </div>
                  <h3>{item.org}</h3>
                  <p>{item.role}</p>
                  <div className="experience-card-tags">
                    {item.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="experience-card-footer">
                    <span>{item.period}</span>
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
            <motion.div initial={{ scale: 0.94, y: 22, opacity: 0, filter: 'blur(12px)' }} animate={{ scale: 1, y: 0, opacity: 1, filter: 'blur(0px)' }} exit={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="liquid-glass-panel"
              style={{ background: '#1c1c1e', borderRadius: 24, maxWidth: 680, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <div style={{ aspectRatio: '16/10', overflow: 'hidden', background: '#2c2c2e', position: 'relative' }}>
                <Image src={publicImage(data[sel].img)} alt={data[sel].org} fill sizes="(max-width: 768px) 100vw, 680px" style={{ objectFit: 'cover', opacity: 0.9 }} />
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: data[sel].color, color: '#fff', letterSpacing: 0, textTransform: 'uppercase', marginBottom: 12 }}>{data[sel].loc}</div>
                <div style={{ fontSize: 24, fontWeight: 740, color: '#f5f5f7', letterSpacing: 0 }}>{data[sel].org}</div>
                <div style={{ fontSize: 14, color: '#64d2ff', marginTop: 4 }}>{data[sel].role}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.34)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                  {data[sel].period}
                  {data[sel].present && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#30d158', display: 'inline-block' }} />}
                </div>
                {data[sel].url && (
                  <a href={data[sel].url!} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#64d2ff', marginTop: 8, textDecoration: 'none' }}>
                    {data[sel].url}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                  </a>
                )}
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.62)', marginTop: 18, lineHeight: 1.85, whiteSpace: 'pre-line' }}>{data[sel].detail}</div>
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
