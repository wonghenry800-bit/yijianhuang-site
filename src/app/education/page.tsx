'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import ImageCarousel from '../../components/ImageCarousel';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import { eduData } from '../../data/about';
import { useQuerySelectedIndex } from '../../hooks/useQuerySelectedIndex';
import { publicImage } from '../../utils/publicImage';

export default function Education() {
  const { lang, setLang } = useLanguage();
  const edu = eduData[lang];
  const [selEdu, setSelEdu] = useQuerySelectedIndex(edu.length);
  const lead = edu[0];

  return (
    <VisionPageShell dark accent="#64d2ff">
      <Navbar lang={lang} setLang={setLang} currentPage="education" dark />
      <main className="cinematic-page">
        <section className="cinematic-hero">
          <motion.div className="cinematic-orbit" aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 34, repeat: Infinity, ease: 'linear' }} />
          <div className="cinematic-hero-copy">
            <motion.p className="apple-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#64d2ff', marginBottom: 16 }}>
              {lang === 'en' ? 'Education' : '教育背景'}
            </motion.p>
            <motion.h1 className="apple-display-title" initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}>
              {lang === 'en' ? 'Built through different cities and institutions.' : '在不同城市与机构中形成的知识结构。'}
            </motion.h1>
            <motion.p className="apple-centered-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
              {lang === 'en'
                ? 'Economics and philosophy in Shenzhen, public policy in Chicago, political economy in Hong Kong, and management between Shanghai and Europe.'
                : '在深圳学经济学与哲学，在芝加哥学公共政策，在香港学政治经济，在上海与欧洲之间学管理。'}
            </motion.p>
          </div>

          <motion.button
            type="button"
            className="cinematic-hero-panel liquid-glass-panel"
            onClick={() => setSelEdu(0)}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', border: 0, cursor: 'pointer', textAlign: 'left', width: '100%' }}
          >
            <Image src={publicImage(lead.imgs[0])} alt={lead.school} fill priority sizes="(max-width: 900px) 92vw, 460px" style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '64px 26px 24px', background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.78) 100%)' }}>
              <span style={{ display: 'block', color: 'rgba(255,255,255,0.62)', fontSize: 12, fontWeight: 600 }}>{lead.loc} · {lead.period}</span>
              <strong style={{ display: 'block', color: '#f5f5f7', fontSize: 20, fontWeight: 740, marginTop: 6, lineHeight: 1.25 }}>{lead.school}</strong>
            </div>
          </motion.button>
        </section>

        <section className="cinematic-section">
          <div className="apple-section-header">
            <p className="apple-eyebrow" style={{ color: '#30d158', marginBottom: 14 }}>{lang === 'en' ? `${edu.length} institutions` : `${edu.length} 段教育经历`}</p>
            <h2 className="apple-section-title">{lang === 'en' ? 'Degrees, programs, and summer schools.' : '学位、项目与暑期学习。'}</h2>
          </div>
          <div className="cinematic-container cinematic-grid">
            {edu.map((item, i) => (
              <motion.button
                type="button"
                key={item.school}
                className={`cinematic-card liquid-glass-panel vision-interactive-card ${i === 0 ? 'cinematic-card--wide' : ''}`}
                onClick={() => setSelEdu(i)}
                initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: Math.min(i * 0.05, 0.25), duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="cinematic-card-media">
                  <Image src={publicImage(item.imgs[0])} alt={item.school} fill sizes="(max-width: 900px) 100vw, 520px" style={{ objectFit: 'cover' }} />
                </div>
                <div className="cinematic-card-content">
                  <span className="cinematic-chip">{item.abbr}</span>
                  <h3 className="cinematic-card-title">{item.school}</h3>
                  <p className="cinematic-card-detail">{item.prog}</p>
                  <div className="cinematic-card-footer">
                    <span>{item.loc} · {item.period}</span>
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
        {selEdu !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelEdu(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.68)', backdropFilter: 'blur(26px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.94, y: 22, opacity: 0, filter: 'blur(12px)' }} animate={{ scale: 1, y: 0, opacity: 1, filter: 'blur(0px)' }} exit={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={event => event.stopPropagation()}
              className="liquid-glass-panel"
              style={{ background: '#1c1c1e', borderRadius: 24, maxWidth: 680, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <ImageCarousel imgs={edu[selEdu].imgs} alt={edu[selEdu].school} background="#2c2c2e" controlSize={30} />
              <div style={{ padding: 28 }}>
                <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#2997ff', color: '#fff', marginBottom: 12 }}>{edu[selEdu].abbr}</div>
                <div style={{ fontSize: 24, fontWeight: 740, color: '#f5f5f7', letterSpacing: 0 }}>{edu[selEdu].school}</div>
                <div style={{ fontSize: 14, color: '#64d2ff', marginTop: 4 }}>{edu[selEdu].prog}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.34)', marginTop: 4 }}>{edu[selEdu].loc} · {edu[selEdu].period}</div>
                <a href={edu[selEdu].url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#64d2ff', marginTop: 8, textDecoration: 'none' }}>
                  {edu[selEdu].url}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                </a>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.62)', marginTop: 18, lineHeight: 1.85, whiteSpace: 'pre-line' }}>{edu[selEdu].detail}</div>
                <button className="liquid-glass-button liquid-glass-button--primary" onClick={() => setSelEdu(null)} style={{ marginTop: 24, width: '100%', padding: '12px 0', borderRadius: 100, color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
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
