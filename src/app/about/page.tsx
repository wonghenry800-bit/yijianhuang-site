'use client';

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import { aboutCards, langs, skillsDetailed } from '../../data/about';
import { publicImage } from '../../utils/publicImage';

export default function About() {
  const { lang, setLang } = useLanguage();
  const [selCard, setSelCard] = useState<number | null>(null);
  const [selSkill, setSelSkill] = useState<number | null>(null);
  const cards = aboutCards[lang];
  const skills = skillsDetailed[lang];
  const card = selCard !== null ? cards[selCard] : null;

  useEffect(() => {
    if (selCard === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelCard(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [selCard]);

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
                {lang === 'en' ? 'CUHK-Shenzhen · CEIBS GMiM · ESCP GMiM' : '港中深 · 中欧 GMiM · ESCP GMiM'}
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
              <motion.button
                type="button"
                key={card.t}
                onClick={() => setSelCard(i)}
                aria-haspopup="dialog"
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
                  <span className="cinematic-read-more">
                    {lang === 'en' ? 'Read more' : '阅读全文'}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <section id="skills" className="cinematic-section">
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
        {card && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelCard(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '56px 16px 40px', background: 'rgba(0,0,0,0.68)', backdropFilter: 'blur(26px)', WebkitBackdropFilter: 'blur(26px)', overflowY: 'auto' }}>
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-labelledby="about-article-title"
              initial={{ scale: 0.94, y: 22, opacity: 0, filter: 'blur(12px)' }} animate={{ scale: 1, y: 0, opacity: 1, filter: 'blur(0px)' }} exit={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={event => event.stopPropagation()}
              className="liquid-glass-panel about-article"
              style={{ background: '#1c1c1e', borderRadius: 28, maxWidth: 720, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)', position: 'relative' }}>
              <button type="button" onClick={() => setSelCard(null)} aria-label={lang === 'en' ? 'Close' : '关闭'} className="liquid-glass-button"
                style={{ position: 'absolute', top: 18, right: 18, width: 34, height: 34, borderRadius: 999, display: 'grid', placeItems: 'center', color: '#f5f5f7', cursor: 'pointer', zIndex: 1 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
              <header style={{ padding: '34px 30px 26px', background: 'linear-gradient(160deg, rgba(41,151,255,0.22) 0%, rgba(28,28,30,0) 70%)', borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>
                <div className="cinematic-icon-mark" style={{ background: selCard === 0 ? '#2997ff' : 'rgba(255,255,255,0.12)' }}>{card.icon}</div>
                <p style={{ marginTop: 20, color: '#64d2ff', fontSize: 12, fontWeight: 700, letterSpacing: '0.04em' }}>{card.kicker}</p>
                <h2 id="about-article-title" style={{ marginTop: 8, color: '#f5f5f7', fontSize: 'clamp(26px, 4vw, 38px)', lineHeight: 1.12, fontWeight: 780, letterSpacing: 0, paddingRight: 36 }}>{card.t}</h2>
                <p style={{ marginTop: 12, color: 'rgba(255,255,255,0.58)', fontSize: 14, lineHeight: 1.75 }}>{card.b}</p>
              </header>
              <div style={{ padding: '8px 30px 30px' }}>
                {card.article.map(section => (
                  <section key={section.h} style={{ marginTop: 26 }}>
                    <h3 style={{ color: '#f5f5f7', fontSize: 18, fontWeight: 720, lineHeight: 1.35 }}>{section.h}</h3>
                    {section.p.map(paragraph => (
                      <p key={paragraph.slice(0, 32)} style={{ marginTop: 10, color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.9 }}>{paragraph}</p>
                    ))}
                  </section>
                ))}
                <div style={{ display: 'flex', gap: 10, marginTop: 32, flexWrap: 'wrap' }}>
                  {card.cta && (
                    <Link href={card.cta.href} className="liquid-glass-button liquid-glass-button--primary"
                      style={{ flex: '1 1 200px', textAlign: 'center', padding: '12px 0', borderRadius: 100, color: '#fff', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                      {card.cta.label}
                    </Link>
                  )}
                  <button type="button" className={`liquid-glass-button ${card.cta ? '' : 'liquid-glass-button--primary'}`} onClick={() => setSelCard(null)}
                    style={{ flex: '1 1 200px', padding: '12px 0', borderRadius: 100, color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                    {lang === 'en' ? 'Close' : '关闭'}
                  </button>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </VisionPageShell>
  );
}
