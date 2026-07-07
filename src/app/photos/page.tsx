'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import { photos } from '../../data/photos';
import { publicImage } from '../../utils/publicImage';

export default function Photos() {
  const { lang, setLang } = useLanguage();
  const [sel, setSel] = useState<number | null>(null);
  const lead = photos[0];

  return (
    <VisionPageShell dark accent="#64d2ff">
      <Navbar lang={lang} setLang={setLang} currentPage="photos" dark />
      <main className="cinematic-page">
        <section className="cinematic-hero">
          <motion.div className="cinematic-orbit" aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 38, repeat: Infinity, ease: 'linear' }} />
          <div className="cinematic-hero-copy">
            <motion.p className="apple-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#64d2ff', marginBottom: 16 }}>
              {lang === 'en' ? 'Visual Archive' : '视觉档案'}
            </motion.p>
            <motion.h1 className="apple-display-title" initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}>
              {lang === 'en' ? 'Places, people, and field notes.' : '地点、人物与现场记忆。'}
            </motion.h1>
            <motion.p className="apple-centered-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
              {lang === 'en' ? 'A more cinematic gallery for conferences, campuses, travel, and research moments.' : '用更有空间感的方式，整理会议、校园、旅行与调研现场。'}
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
              <Image src={publicImage(lead.src)} alt={lang === 'en' ? lead.en : lead.cn} fill priority sizes="(max-width: 900px) 86vw, 420px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="cinematic-hero-overlay">
              <span>{lead.date}</span>
              <strong>{lang === 'en' ? lead.en : lead.cn}</strong>
            </div>
          </motion.button>
        </section>

        <section className="cinematic-section cinematic-section--tight">
          <div className="apple-section-header">
            <p className="apple-eyebrow" style={{ color: '#30d158', marginBottom: 14 }}>{lang === 'en' ? `${photos.length} frames` : `${photos.length}张照片`}</p>
            <h2 className="apple-section-title">{lang === 'en' ? 'A gallery that behaves more like a visual wall.' : '让相册像一面可浏览的视觉墙。'}</h2>
          </div>
          <div className="photo-cinematic-grid">
            {photos.map((photo, i) => (
              <motion.button
                type="button"
                key={`${photo.src}-${i}`}
                className="photo-cinematic-item liquid-glass-panel vision-interactive-card"
                onClick={() => setSel(i)}
                initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.58, delay: Math.min(i * 0.035, 0.25), ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src={publicImage(photo.src)} alt={lang === 'en' ? photo.en : photo.cn} fill sizes="(max-width: 900px) 100vw, 420px" style={{ objectFit: 'cover' }} />
                <div className="photo-cinematic-caption">
                  <div style={{ fontSize: 15, fontWeight: 720, color: '#fff', lineHeight: 1.25 }}>{lang === 'en' ? photo.en : photo.cn}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.58)', marginTop: 5 }}>{photo.date}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(30px)' }}>
            <motion.div initial={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }} animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }} exit={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={event => event.stopPropagation()}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '92vw' }}>
              <div style={{ position: 'relative', height: '78vh', width: '88vw', maxWidth: 1120 }}>
                <Image src={publicImage(photos[sel].src)} alt="" fill sizes="88vw" style={{ objectFit: 'contain', borderRadius: 18 }} />
              </div>
              <div style={{ textAlign: 'center', marginTop: 20 }}>
                <div style={{ fontSize: 17, fontWeight: 650, color: '#f5f5f7' }}>{lang === 'en' ? photos[sel].en : photos[sel].cn}</div>
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
