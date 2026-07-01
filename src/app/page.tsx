'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../components/LanguageContext';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { homeContent, homeSkills, homeStats } from '../data/home';

export default function Home() {
  const { lang, setLang } = useLanguage();
  const [selSkill, setSelSkill] = useState<number | null>(null);
  const t = homeContent[lang];
  const s = homeStats[lang];
  const skills = homeSkills[lang];

  function handleSkill(i: number) {
    setSelSkill(prev => prev === i ? null : i);
  }

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="home" dark />

      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '80px 24px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(41,151,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 760, width: '100%', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} style={{ marginBottom: 36 }}>
            <Image src="/avatar.jpg" alt="Yijian" width={84} height={84} priority style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.15)' }} />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: 'clamp(44px, 8vw, 84px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: 20 }}>
            {t.t1}<br />{t.t2}<br /><span style={{ color: '#2997ff' }}>{t.t3}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.02em', marginBottom: 32, lineHeight: 1.6 }}>
            {t.sub}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 48 }}>
            <Link href="/experience" style={{ padding: '12px 28px', background: '#f5f5f7', color: '#1d1d1f', borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>{t.cta1}</Link>
            <Link href="/contact" style={{ padding: '12px 28px', background: 'rgba(255,255,255,0.08)', color: '#f5f5f7', borderRadius: 100, fontSize: 14, fontWeight: 500, textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.15)' }}>{t.cta2}</Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 20, overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.08)', marginBottom: 48 }}>
            {s.map((item, i) => (
              <div key={i} style={{ padding: '22px 16px', textAlign: 'center', background: 'rgba(0,0,0,0.4)' }}>
                <div style={{ fontSize: 30, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em' }}>{item.n}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 4, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{item.l}</div>
              </div>
            ))}
          </motion.div>

          {/* Clickable Skills */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 12 }}>{t.skillsLabel}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 0 }}>
              {skills.map((sk, i) => (
                <button
                  key={i}
                  onClick={() => handleSkill(i)}
                  style={{
                    padding: '7px 16px',
                    borderRadius: 100,
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: 'pointer',
                    border: '0.5px solid',
                    background: selSkill === i ? sk.color : 'rgba(255,255,255,0.07)',
                    borderColor: selSkill === i ? sk.color : 'rgba(255,255,255,0.15)',
                    color: selSkill === i ? '#fff' : 'rgba(255,255,255,0.7)',
                    transition: 'all 0.2s',
                  }}
                >
                  {sk.name}
                </button>
              ))}
            </div>

            {/* Skill detail panel */}
            {selSkill !== null && (
              <div style={{
                marginTop: 16,
                background: 'rgba(255,255,255,0.06)',
                border: `0.5px solid ${skills[selSkill].color}60`,
                borderRadius: 14,
                padding: '16px 20px',
                textAlign: 'left',
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: skills[selSkill].color, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{skills[selSkill].name}</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>{skills[selSkill].detail}</p>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
          style={{ marginTop: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.scroll}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        </motion.div>
      </section>
    </div>
  );
}
