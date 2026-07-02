'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import { motion, AnimatePresence } from 'framer-motion';
import { campusData } from '../../data/campus';
import { publicImage } from '../../utils/publicImage';

export default function Campus() {
  const { lang, setLang } = useLanguage();
  const [sel, setSel] = useState<number | null>(null);
  const data = campusData[lang];

  return (
    <VisionPageShell dark accent="#ff9f0a">
      <Navbar lang={lang} setLang={setLang} currentPage="campus" dark />

      <div className="vision-hero-card liquid-glass-panel" style={{ maxWidth: 760, margin: '0 auto', padding: '100px 24px 60px', textAlign: 'center' }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>Student Life</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          style={{ fontSize: 'clamp(40px,6vw,68px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: 16 }}>
          {lang === 'en' ? 'Campus Life' : '校园活动'}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>
          {lang === 'en' ? 'Leadership · Culture · Community' : '领导力 · 文化 · 社群'}
        </motion.p>
      </div>

      <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {data.map((item, i) => (
            <motion.div key={i} className="vision-interactive-card liquid-glass-panel" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              onClick={() => setSel(i)}
              style={{ background: '#111', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: 18, overflow: 'hidden', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
              onMouseLeave={e => (e.currentTarget.style.background = '#111')}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#222', position: 'relative' }}>
                <Image src={publicImage(item.img)} alt={item.title} fill sizes="(max-width: 768px) 100vw, 360px" style={{ objectFit: 'cover', opacity: 0.8 }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
              </div>
              <div style={{ padding: '16px 18px' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.01em', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>{item.period}{item.present && <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: '#30d158', marginLeft: 6, verticalAlign: 'middle' }} />}</div>
                <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: item.color, color: '#fff' }}>{item.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(24px)' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="liquid-glass-panel"
              style={{ background: '#1c1c1e', borderRadius: 22, maxWidth: 520, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)' }}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#2c2c2e', position: 'relative' }}>
                <Image src={publicImage(data[sel].img)} alt="" fill sizes="(max-width: 768px) 100vw, 520px" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 28 }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: data[sel].color, color: '#fff' }}>{data[sel].badge}</span>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.02em', marginTop: 12 }}>{data[sel].title}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                  {data[sel].period}{data[sel].present && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#30d158', display: 'inline-block' }} />}
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 18, lineHeight: 1.8 }}>{data[sel].detail}</div>
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
