'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import { motion, AnimatePresence } from 'framer-motion';
import { photos } from '../../data/photos';
import { publicImage } from '../../utils/publicImage';

export default function Photos() {
  const { lang, setLang } = useLanguage();
  const [sel, setSel] = useState<number | null>(null);

  return (
    <VisionPageShell dark accent="#64d2ff">
      <Navbar lang={lang} setLang={setLang} currentPage="photos" dark />

      <div className="vision-hero-card liquid-glass-panel" style={{ maxWidth: 760, margin: '0 auto', padding: '100px 24px 48px', textAlign: 'center' }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>Gallery</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          style={{ fontSize: 'clamp(40px,6vw,68px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: 16 }}>
          {lang === 'en' ? 'Photos' : '相册'}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
          style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>
          {lang === 'en' ? 'Captured moments' : '记录的瞬间'}
        </motion.p>
      </div>

      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ columns: '3 240px', columnGap: 10 }}>
          {photos.map((p, i) => (
            <motion.div key={i} className="photo-item vision-interactive-card liquid-glass-panel" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
              onClick={() => setSel(i)}
              style={{ breakInside: 'avoid', marginBottom: 10, cursor: 'pointer', borderRadius: 14, overflow: 'hidden', background: '#111', display: 'block', position: 'relative' }}>
              <Image src={publicImage(p.src)} alt={lang === 'en' ? p.en : p.cn} width={900} height={1200}
                sizes="(max-width: 768px) 100vw, 320px"
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease', borderRadius: 14 }}
                onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.04)')}
                onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 14px 12px', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)', opacity: 0, transition: 'opacity 0.2s', borderRadius: '0 0 14px 14px' }}
                className="photo-overlay">
                <div style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>{lang === 'en' ? p.en : p.cn}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{p.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`.photo-item:hover .photo-overlay { opacity: 1 !important; }`}</style>

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(32px)' }}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '90vw' }}>
              <div style={{ position: 'relative', height: '78vh', width: '88vw', maxWidth: 1100 }}>
                <Image src={publicImage(photos[sel].src)} alt="" fill sizes="88vw" style={{ objectFit: 'contain', borderRadius: 16 }} />
              </div>
              <div style={{ textAlign: 'center', marginTop: 20 }}>
                <div style={{ fontSize: 17, fontWeight: 600, color: '#f5f5f7' }}>{lang === 'en' ? photos[sel].en : photos[sel].cn}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{photos[sel].date}</div>
              </div>
              <button className="liquid-glass-button" onClick={() => setSel(null)}
                style={{ marginTop: 24, padding: '10px 28px', borderRadius: 100, color: '#fff', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
                {lang === 'en' ? 'Close' : '关闭'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </VisionPageShell>
  );
}
