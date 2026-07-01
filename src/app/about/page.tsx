'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../components/LanguageContext';
import ImageCarousel from '../../components/ImageCarousel';
import Navbar from '../../components/Navbar';
import { aboutCards, eduData, langs, skillsDetailed } from '../../data/about';
import { publicImage } from '../../utils/publicImage';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const { lang, setLang } = useLanguage();
  const [selEdu, setSelEdu] = useState<number | null>(null);
  const [selSkill, setSelSkill] = useState<number | null>(null);
  const edu = eduData[lang];
  const cards = aboutCards[lang];
  const skills = skillsDetailed[lang];

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="about" />
      <main style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: 80 }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>Profile</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 18 }}>
            {lang === 'en' ? 'About Me' : '关于我'}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
            style={{ fontSize: 18, fontWeight: 300, color: '#6e6e73' }}>
            {lang === 'en' ? 'Researcher · Analyst · Builder' : '研究者 · 分析师 · 创造者'}
          </motion.p>
        </div>

        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px', marginBottom: 80 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {cards.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                style={{ background: i === 0 ? '#1d1d1f' : '#f5f5f7', borderRadius: 18, padding: '22px 24px', gridColumn: i === 0 ? 'span 2' : 'span 1', border: '0.5px solid rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{c.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: i === 0 ? '#f5f5f7' : '#1d1d1f', marginBottom: 6 }}>{c.t}</div>
                <div style={{ fontSize: 13, color: i === 0 ? 'rgba(255,255,255,0.55)' : '#6e6e73', lineHeight: 1.65 }}>{c.b}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px', marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 0 }}>
            {lang === 'en' ? 'Education' : '教育背景'}
          </p>
          <div style={{ borderRadius: '0 0 18px 18px', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.08)', borderTop: 'none' }}>
            {edu.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 + 0.2 }}
                onClick={() => setSelEdu(i)}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 22px', cursor: 'pointer', borderBottom: i < edu.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none', background: 'rgba(0,0,0,0.01)', transition: 'background 0.15s' }}
                onMouseEnter={e2 => (e2.currentTarget.style.background = '#f5f5f7')}
                onMouseLeave={e2 => (e2.currentTarget.style.background = 'rgba(0,0,0,0.01)')}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#f5f5f7', border: '0.5px solid rgba(0,0,0,0.08)', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
                  <Image src={publicImage(e.imgs[0])} alt={e.abbr} fill sizes="44px" style={{ objectFit: 'cover' }} onError={ev => { (ev.currentTarget as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1d1d1f', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.school}</div>
                  <div style={{ fontSize: 12, color: '#2997ff', marginTop: 2 }}>{e.prog}</div>
                  <div style={{ fontSize: 11, color: '#aeaeb2', marginTop: 2 }}>{e.loc}</div>
                </div>
                <div style={{ fontSize: 11, color: '#aeaeb2', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
                  {e.period}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aeaeb2" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px', marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>
            {lang === 'en' ? 'Languages' : '语言能力'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {langs.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 + 0.3 }}
                style={{ background: '#f5f5f7', borderRadius: 14, padding: '14px 16px', border: '0.5px solid rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#1d1d1f' }}>{l.name}</div>
                <div style={{ fontSize: 11, color: '#86868b', marginTop: 2 }}>{l.level}</div>
                <div style={{ height: 3, borderRadius: 2, background: '#e5e5ea', marginTop: 10, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${l.pct}%`, background: l.color, borderRadius: 2 }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 16 }}>
            {lang === 'en' ? 'Technical Skills' : '技能工具'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 0 }}>
            {skills.map((sk, i) => (
              <button
                key={i}
                onClick={() => setSelSkill(selSkill === i ? null : i)}
                style={{
                  fontSize: 13, fontWeight: 500, padding: '7px 16px', borderRadius: 100,
                  cursor: 'pointer', border: '0.5px solid', transition: 'all 0.2s',
                  background: selSkill === i ? sk.color : '#f5f5f7',
                  borderColor: selSkill === i ? sk.color : 'rgba(0,0,0,0.08)',
                  color: selSkill === i ? '#fff' : '#1d1d1f',
                }}
              >
                {sk.name}
              </button>
            ))}
          </div>
          {selSkill !== null && (
            <div style={{ marginTop: 14, background: `${skills[selSkill].color}10`, border: `0.5px solid ${skills[selSkill].color}40`, borderRadius: 14, padding: '14px 18px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: skills[selSkill].color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 7 }}>{skills[selSkill].name}</div>
              <p style={{ fontSize: 13, color: '#4a4a4a', lineHeight: 1.75, margin: 0 }}>{skills[selSkill].detail}</p>
            </div>
          )}
        </div>
      </main>

      <AnimatePresence>
        {selEdu !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelEdu(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(20px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#fff', borderRadius: 22, maxWidth: 560, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.1)', boxShadow: '0 32px 80px rgba(0,0,0,0.25)' }}>
              <ImageCarousel imgs={edu[selEdu].imgs} alt={edu[selEdu].school} />
              <div style={{ padding: 28 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.02em' }}>{edu[selEdu].school}</div>
                <div style={{ fontSize: 13, color: '#2997ff', marginTop: 4 }}>{edu[selEdu].prog}</div>
                <div style={{ fontSize: 12, color: '#aeaeb2', marginTop: 2 }}>{edu[selEdu].loc} · {edu[selEdu].period}</div>
                <a href={edu[selEdu].url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#2997ff', marginTop: 8, textDecoration: 'none' }}>
                  {edu[selEdu].url}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                </a>
                <div style={{ fontSize: 14, color: '#6e6e73', marginTop: 18, lineHeight: 1.85, whiteSpace: 'pre-line' }}>{edu[selEdu].detail}</div>
                <button onClick={() => setSelEdu(null)}
                  style={{ marginTop: 24, width: '100%', padding: '12px 0', borderRadius: 100, background: '#1d1d1f', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
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
