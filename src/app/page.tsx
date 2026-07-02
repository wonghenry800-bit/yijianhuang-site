'use client';

import type { CSSProperties } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../components/LanguageContext';
import LiquidHeroScene from '../components/LiquidHeroScene';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { homeContent, homeFeaturedWork, homeFocusAreas, homeSkills, homeStats } from '../data/home';

export default function Home() {
  const { lang, setLang } = useLanguage();
  const [selSkill, setSelSkill] = useState<number | null>(null);
  const t = homeContent[lang];
  const s = homeStats[lang];
  const skills = homeSkills[lang];
  const focusAreas = homeFocusAreas[lang];
  const featuredWork = homeFeaturedWork[lang];

  function handleSkill(i: number) {
    setSelSkill(prev => prev === i ? null : i);
  }

  return (
    <div className="apple-page">
      <Navbar lang={lang} setLang={setLang} currentPage="home" dark />

      <section className="liquid-hero-section" style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '80px 24px 40px', position: 'relative', overflow: 'hidden' }}>
        <LiquidHeroScene />
        <div className="home-hero-flow" aria-hidden="true" />

        <div style={{ maxWidth: 760, width: '100%', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, scale: 0.86, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ marginBottom: 36 }}>
            <div className="liquid-glass-button" style={{ width: 100, height: 100, borderRadius: '50%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8 }}>
              <Image src="/avatar.jpg" alt="Yijian" width={84} height={84} priority style={{ borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.28)' }} />
            </div>
          </motion.div>

          <motion.h1 className="apple-display-title" initial={{ opacity: 0, y: 34, filter: 'blur(16px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 'clamp(44px, 8vw, 84px)', color: '#f5f5f7', marginBottom: 20, textShadow: '0 0 40px rgba(41,151,255,0.22)' }}>
            {t.t1}<br />{t.t2}<br /><span style={{ color: 'transparent', background: 'linear-gradient(100deg, #9bd8ff 0%, #2997ff 44%, #d5c5ff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>{t.t3}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}
            className="apple-centered-copy"
            style={{ fontSize: 15, color: 'rgba(255,255,255,0.46)', marginBottom: 32, lineHeight: 1.6 }}>
            {t.sub}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
            <Link href="/experience" className="liquid-glass-button liquid-glass-button--primary" style={{ padding: '12px 28px', color: '#fff', borderRadius: 100, fontSize: 14, fontWeight: 650, textDecoration: 'none' }}>{t.cta1}</Link>
            <Link href="/contact" className="liquid-glass-button" style={{ padding: '12px 28px', color: '#f5f5f7', borderRadius: 100, fontSize: 14, fontWeight: 550, textDecoration: 'none' }}>{t.cta2}</Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="liquid-glass-panel"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 1, borderRadius: 24, overflow: 'hidden', marginBottom: 48 }}>
            {s.map((item, i) => (
              <div key={i} style={{ padding: '22px 16px', textAlign: 'center', background: 'rgba(0,0,0,0.18)' }}>
                <div style={{ fontSize: 30, fontWeight: 740, color: '#f5f5f7', letterSpacing: 0 }}>{item.n}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', marginTop: 4, letterSpacing: 0, textTransform: 'uppercase' }}>{item.l}</div>
              </div>
            ))}
          </motion.div>

          {/* Clickable Skills */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0, textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 12 }}>{t.skillsLabel}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 0 }}>
              {skills.map((sk, i) => (
                <button
                  key={i}
                  onClick={() => handleSkill(i)}
                  className="liquid-glass-button"
                  data-active={selSkill === i}
                  style={{
                    padding: '7px 16px',
                    borderRadius: 100,
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: 'pointer',
                    '--liquid-accent': sk.color,
                    color: selSkill === i ? '#fff' : 'rgba(255,255,255,0.7)',
                    transition: 'all 0.2s',
                  } as CSSProperties}
                >
                  {sk.name}
                </button>
              ))}
            </div>

            {/* Skill detail panel */}
            {selSkill !== null && (
              <div className="liquid-glass-panel" style={{
                marginTop: 16,
                border: `0.5px solid ${skills[selSkill].color}60`,
                borderRadius: 18,
                padding: '16px 20px',
                textAlign: 'left',
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: skills[selSkill].color, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0 }}>{skills[selSkill].name}</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>{skills[selSkill].detail}</p>
              </div>
            )}
          </motion.div>
        </div>

        <motion.a href="#overview" animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
          style={{ marginTop: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.32)', letterSpacing: 0, textTransform: 'uppercase' }}>{t.scroll}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        </motion.a>
      </section>

      <section id="overview" className="apple-section">
        <div className="apple-container">
          <motion.div className="apple-section-header" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.65 }}>
            <p className="apple-eyebrow" style={{ color: '#64d2ff', marginBottom: 14 }}>{t.introEyebrow}</p>
            <h2 className="apple-section-title">{t.introTitle}</h2>
            <p className="apple-section-copy">{t.introBody}</p>
          </motion.div>

          <div className="apple-card-grid">
            {focusAreas.map((area, i) => (
              <motion.div key={area.title} initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.62, delay: i * 0.08 }}>
                <Link
                  href={area.href}
                  className="apple-feature-card liquid-glass-panel vision-interactive-card"
                  style={{ '--card-accent': area.accent } as CSSProperties}
                >
                  <div className="apple-card-content">
                    <div className="apple-card-label">{String(i + 1).padStart(2, '0')}</div>
                    <div className="apple-card-title">{area.title}</div>
                    <p className="apple-card-body">{area.body}</p>
                  </div>
                  <span className="apple-card-arrow" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="apple-section apple-section--tight">
        <div className="apple-container">
          <motion.div className="apple-section-header" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.65 }}>
            <p className="apple-eyebrow" style={{ color: '#ff9f0a', marginBottom: 14 }}>{t.featuredEyebrow}</p>
            <h2 className="apple-section-title">{t.featuredTitle}</h2>
          </motion.div>

          <div className="home-showcase">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }}>
              <Link
                href={featuredWork[0].href}
                className="home-showcase-main apple-feature-card liquid-glass-panel vision-interactive-card"
                style={{ '--card-accent': featuredWork[0].accent } as CSSProperties}
              >
                <div className="apple-card-content">
                  <div className="apple-card-label">{featuredWork[0].label}</div>
                  <div className="apple-card-title" style={{ fontSize: 'clamp(30px, 4vw, 56px)' }}>{featuredWork[0].title}</div>
                  <p className="apple-card-body" style={{ maxWidth: 560 }}>{featuredWork[0].body}</p>
                </div>
                <span className="apple-card-arrow" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
                </span>
              </Link>
            </motion.div>

            <div className="home-showcase-side">
              {featuredWork.slice(1).map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.62, delay: i * 0.08 }}>
                  <Link
                    href={item.href}
                    className="apple-feature-card liquid-glass-panel vision-interactive-card"
                    style={{ '--card-accent': item.accent, minHeight: 202 } as CSSProperties}
                  >
                    <div className="apple-card-content">
                      <div className="apple-card-label">{item.label}</div>
                      <div className="apple-card-title">{item.title}</div>
                      <p className="apple-card-body">{item.body}</p>
                    </div>
                    <span className="apple-card-arrow" aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="apple-section apple-section--tight">
        <div className="apple-container">
          <motion.div className="apple-section-header" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.65 }}>
            <p className="apple-eyebrow" style={{ color: '#bf5af2', marginBottom: 14 }}>{t.exploreEyebrow}</p>
            <h2 className="apple-section-title">{t.exploreTitle}</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.62 }}
            style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/about" className="liquid-glass-button" style={{ padding: '12px 24px', borderRadius: 100, color: '#f5f5f7', fontSize: 14, fontWeight: 650, textDecoration: 'none' }}>{lang === 'en' ? 'About' : '关于'}</Link>
            <Link href="/research" className="liquid-glass-button liquid-glass-button--primary" style={{ padding: '12px 24px', borderRadius: 100, color: '#fff', fontSize: 14, fontWeight: 650, textDecoration: 'none' }}>{lang === 'en' ? 'Research' : '科研'}</Link>
            <Link href="/contact" className="liquid-glass-button" style={{ padding: '12px 24px', borderRadius: 100, color: '#f5f5f7', fontSize: 14, fontWeight: 650, textDecoration: 'none' }}>{lang === 'en' ? 'Contact' : '联系'}</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
