'use client';

import type { CSSProperties } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import ImageCarousel from '../../components/ImageCarousel';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import { aboutCards, eduData, langs, skillsDetailed } from '../../data/about';
import { publicImage } from '../../utils/publicImage';

export default function About() {
  const { lang, setLang } = useLanguage();
  const [selEdu, setSelEdu] = useState<number | null>(null);
  const [selSkill, setSelSkill] = useState<number | null>(null);
  const edu = eduData[lang];
  const cards = aboutCards[lang];
  const skills = skillsDetailed[lang];

  return (
    <VisionPageShell dark accent="#2997ff">
      <Navbar lang={lang} setLang={setLang} currentPage="about" dark />
      <main className="cinematic-page">
        <section className="cinematic-hero">
          <motion.div className="cinematic-orbit" aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 34, repeat: Infinity, ease: 'linear' }} />
          <div className="cinematic-hero-copy">
            <motion.p className="apple-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#64d2ff', marginBottom: 16 }}>
              {lang === 'en' ? 'Profile' : '个人档案'}
            </motion.p>
            <motion.h1 className="apple-display-title" initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}>
              {lang === 'en' ? 'Economics, policy, AI, and people.' : '经济学、政策、AI，以及真实的人。'}
            </motion.h1>
            <motion.p className="apple-centered-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
              {lang === 'en' ? 'A bilingual researcher and builder moving between institutions, markets, and technology.' : '在机构、市场与技术之间切换的双语研究者与创造者。'}
            </motion.p>
          </div>

          <motion.div
            className="cinematic-hero-panel cinematic-hero-panel--padded liquid-glass-panel"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div style={{ width: 96, height: 96, borderRadius: 32, overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 18px 44px rgba(0,0,0,0.3)' }}>
                <Image src={publicImage('/avatar.jpg')} alt="Yijian Huang" fill priority sizes="96px" style={{ objectFit: 'cover' }} />
              </div>
              <h2 style={{ color: '#f5f5f7', fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.02, fontWeight: 780, marginTop: 28, letterSpacing: 0 }}>
                {lang === 'en' ? 'Yijian Huang' : '黄一健'}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: 15, lineHeight: 1.75, marginTop: 14 }}>
                {lang === 'en' ? 'CUHK-Shenzhen · CEIBS MBA · ESCP MGM' : '港中深 · 中欧 MBA · ESCP MGM'}
              </p>
            </div>
            <div className="cinematic-stat-grid">
              <div className="cinematic-stat"><strong>5</strong><span>{lang === 'en' ? 'schools' : '教育经历'}</span></div>
              <div className="cinematic-stat"><strong>6</strong><span>{lang === 'en' ? 'languages' : '语言'}</span></div>
              <div className="cinematic-stat"><strong>9</strong><span>{lang === 'en' ? 'skill areas' : '技能方向'}</span></div>
            </div>
          </motion.div>
        </section>

        <section className="cinematic-section cinematic-section--tight">
          <div className="apple-section-header">
            <p className="apple-eyebrow" style={{ color: '#30d158', marginBottom: 14 }}>{lang === 'en' ? 'Operating System' : '个人系统'}</p>
            <h2 className="apple-section-title">{lang === 'en' ? 'A compact map of what drives the work.' : '我如何理解工作、研究与长期方向。'}</h2>
          </div>
          <div className="cinematic-container cinematic-grid">
            {cards.map((card, i) => (
              <motion.div
                key={card.t}
                className={`cinematic-text-tile liquid-glass-panel vision-interactive-card ${i === 0 ? 'cinematic-card--wide' : ''}`}
                initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: Math.min(i * 0.05, 0.22), duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="cinematic-icon-mark" style={{ background: i === 0 ? '#2997ff' : 'rgba(255,255,255,0.12)' }}>{card.icon}</div>
                <div>
                  <h3>{card.t}</h3>
                  <p>{card.b}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="cinematic-section">
          <div className="apple-section-header">
            <p className="apple-eyebrow" style={{ color: '#64d2ff', marginBottom: 14 }}>{lang === 'en' ? 'Education' : '教育背景'}</p>
            <h2 className="apple-section-title">{lang === 'en' ? 'Built through different cities and institutions.' : '在不同城市与机构中形成的知识结构。'}</h2>
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

        <section className="cinematic-section">
          <div className="cinematic-container cinematic-grid">
            <div className="cinematic-text-tile cinematic-text-tile--half liquid-glass-panel">
              <span className="cinematic-chip">{lang === 'en' ? 'Languages' : '语言能力'}</span>
              <div>
                <h3>{lang === 'en' ? 'Six-language working range.' : '六种语言的工作半径。'}</h3>
                <div style={{ display: 'grid', gap: 12, marginTop: 22 }}>
                  {langs.map(item => (
                    <div key={item.name}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, color: '#f5f5f7', fontSize: 13, fontWeight: 650 }}>
                        <span>{item.name}</span>
                        <span style={{ color: 'rgba(255,255,255,0.46)' }}>{item.level}</span>
                      </div>
                      <div style={{ height: 4, borderRadius: 999, background: 'rgba(255,255,255,0.12)', marginTop: 8, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${item.pct}%`, borderRadius: 999, background: item.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="cinematic-text-tile cinematic-text-tile--half liquid-glass-panel">
              <span className="cinematic-chip">{lang === 'en' ? 'Technical Skills' : '技能工具'}</span>
              <div>
                <h3>{lang === 'en' ? 'Research tools with applied context.' : '带有真实场景的研究工具。'}</h3>
                <div className="cinematic-pill-row" style={{ marginTop: 22 }}>
                  {skills.map((skill, i) => (
                    <button
                      type="button"
                      key={skill.name}
                      onClick={() => setSelSkill(selSkill === i ? null : i)}
                      className="liquid-glass-button"
                      data-active={selSkill === i}
                      style={{ '--liquid-accent': skill.color, color: '#fff', borderRadius: 999, padding: '8px 14px', fontSize: 12, fontWeight: 650, cursor: 'pointer' } as CSSProperties}
                    >
                      {skill.name}
                    </button>
                  ))}
                </div>
                {selSkill !== null && (
                  <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ color: 'rgba(255,255,255,0.68)' }}>
                    {skills[selSkill].detail}
                  </motion.p>
                )}
              </div>
            </div>
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
