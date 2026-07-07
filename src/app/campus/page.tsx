'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import { campusData } from '../../data/campus';
import { publicImage } from '../../utils/publicImage';

export default function Campus() {
  const { lang, setLang } = useLanguage();
  const [sel, setSel] = useState<number | null>(null);
  const data = campusData[lang];
  const lead = data[0];

  return (
    <VisionPageShell dark accent="#ff9f0a">
      <Navbar lang={lang} setLang={setLang} currentPage="campus" dark />
      <main className="cinematic-page">
        <section className="cinematic-hero">
          <motion.div className="cinematic-orbit" aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 36, repeat: Infinity, ease: 'linear' }} />
          <div className="cinematic-hero-copy">
            <motion.p className="apple-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#ffcc66', marginBottom: 16 }}>
              {lang === 'en' ? 'Campus System' : '校园系统'}
            </motion.p>
            <motion.h1 className="apple-display-title" initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}>
              {lang === 'en' ? 'Culture, leadership, and community in motion.' : '文化、领导力与社群，在校园里生长。'}
            </motion.h1>
            <motion.p className="apple-centered-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
              {lang === 'en' ? 'Student life as a design problem: building formats that help people participate, learn, and belong.' : '把校园生活当成设计问题：创造让人参与、学习并产生归属感的活动形式。'}
            </motion.p>
          </div>

          <motion.button
            type="button"
            className="cinematic-hero-panel liquid-glass-panel vision-interactive-card"
            onClick={() => setSel(0)}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cinematic-hero-media">
              <Image src={publicImage(lead.img)} alt={lead.title} fill priority sizes="(max-width: 900px) 86vw, 420px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="cinematic-hero-overlay">
              <span>{lead.org}</span>
              <strong>{lead.title}</strong>
            </div>
          </motion.button>
        </section>

        <section className="cinematic-section cinematic-section--tight">
          <div className="apple-section-header">
            <p className="apple-eyebrow" style={{ color: '#30d158', marginBottom: 14 }}>{lang === 'en' ? `${data.length} activities` : `${data.length}个校园角色`}</p>
            <h2 className="apple-section-title">{lang === 'en' ? 'Designed across language, economics, fieldwork, and brand strategy.' : '从语言文化、经济学社群、田野调研到品牌策略。'}</h2>
          </div>

          <div className="cinematic-container cinematic-grid">
            {data.map((item, i) => (
              <motion.button
                type="button"
                key={`${item.title}-${item.period}`}
                className={`cinematic-card liquid-glass-panel vision-interactive-card ${i === 0 ? 'cinematic-card--wide' : ''}`}
                onClick={() => setSel(i)}
                initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.62, delay: Math.min(i * 0.06, 0.24), ease: [0.22, 1, 0.36, 1] }}
                style={{ '--vision-accent': item.color } as CSSProperties}
              >
                <div className="cinematic-card-media">
                  <Image src={publicImage(item.img)} alt={item.title} fill sizes="(max-width: 900px) 100vw, 520px" style={{ objectFit: 'cover' }} />
                </div>
                <div className="cinematic-card-content">
                  <span className="cinematic-chip" style={{ background: item.color }}>{item.badge}</span>
                  <h3 className="cinematic-card-title">{item.title}</h3>
                  <p className="cinematic-card-detail">{item.org}</p>
                  <div className="cinematic-card-footer">
                    <span>{item.period}{item.present ? ` · ${lang === 'en' ? 'Present' : '至今'}` : ''}</span>
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
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(26px)' }}>
            <motion.div initial={{ scale: 0.94, y: 20, opacity: 0, filter: 'blur(12px)' }} animate={{ scale: 1, y: 0, opacity: 1, filter: 'blur(0px)' }} exit={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={event => event.stopPropagation()}
              className="liquid-glass-panel"
              style={{ background: '#1c1c1e', borderRadius: 24, maxWidth: 620, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#2c2c2e', position: 'relative' }}>
                <Image src={publicImage(data[sel].img)} alt={data[sel].title} fill sizes="(max-width: 768px) 100vw, 620px" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 28 }}>
                <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: data[sel].color, color: '#fff' }}>{data[sel].badge}</span>
                <div style={{ fontSize: 24, fontWeight: 740, color: '#f5f5f7', letterSpacing: 0, marginTop: 12 }}>{data[sel].title}</div>
                <div style={{ fontSize: 13, color: '#ffcc66', marginTop: 4 }}>{data[sel].org}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.34)', marginTop: 4 }}>{data[sel].period}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.62)', marginTop: 18, lineHeight: 1.85 }}>{data[sel].detail}</div>
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
