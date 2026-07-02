'use client';

import Image from 'next/image';
import { useLanguage } from '../../components/LanguageContext';
import ImageCarousel from '../../components/ImageCarousel';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import { useQuerySelectedIndex } from '../../hooks/useQuerySelectedIndex';
import { projectsData, toolsData } from '../../data/ai';
import { publicImage } from '../../utils/publicImage';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIPage() {
  const { lang, setLang } = useLanguage();
  const tools = toolsData[lang];
  const projects = projectsData[lang];
  const [sel, setSel] = useQuerySelectedIndex(projects.length);

  return (
    <VisionPageShell dark accent="#bf5af2">
      <Navbar lang={lang} setLang={setLang} currentPage="ai" dark />

      <div className="vision-hero-card liquid-glass-panel" style={{ maxWidth: 780, margin: '0 auto', padding: '100px 24px 70px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>
          {lang === 'en' ? 'Technology' : '技术'}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: 20 }}>
          {lang === 'en' ? 'AI Applications' : 'AI 应用'}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.4)', maxWidth: 560, margin: '0 auto' }}>
          {lang === 'en' ? 'Building at the frontier — from daily workflows to AI-native ventures' : '在AI前沿构建——从日常工作流到AI原生创业项目'}
        </motion.p>
      </div>

      <div className="liquid-glass-panel liquid-glass-panel--light" style={{ background: 'rgba(255,255,255,0.86)', borderRadius: '24px 24px 0 0', padding: '56px 24px 0', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 20 }}>
            {lang === 'en' ? 'Daily Stack' : '工具栈'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 60 }}>
            {tools.map((t, i) => (
              <motion.div key={i} className="vision-interactive-card liquid-glass-panel liquid-glass-panel--light" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                style={{ background: '#f5f5f7', borderRadius: 16, padding: '18px 20px', border: '0.5px solid rgba(0,0,0,0.06)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0 }}>{t.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#1d1d1f' }}>{t.name}</span>
                    <span style={{ fontSize: 10, fontWeight: 600, padding: '1px 7px', borderRadius: 100, background: 'rgba(0,0,0,0.06)', color: '#6e6e73' }}>{t.cat}</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#6e6e73', lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 20 }}>
            {lang === 'en' ? 'AI Ventures' : 'AI 创业项目'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 80 }}>
            {projects.map((p, i) => (
              <motion.div key={i} className="vision-interactive-card liquid-glass-panel" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.3 }}
                onClick={() => setSel(i)}
                style={{ background: '#1d1d1f', borderRadius: 20, overflow: 'hidden', cursor: 'pointer', border: '0.5px solid rgba(255,255,255,0.06)', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#2c2c2e')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1d1d1f')}>
                {/* Preview image */}
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#2c2c2e', position: 'relative' }}>
                  <Image src={publicImage(p.imgs[0])} alt={p.name} fill sizes="(max-width: 768px) 100vw, 360px" style={{ objectFit: 'cover', opacity: 0.85 }}
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div style={{ padding: '18px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: p.color, color: '#fff' }}>{p.status}</span>
                    <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: p.statusColor }} />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.01em', marginBottom: 5 }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>{p.subtitle}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {p.tags.slice(0, 4).map((tag, j) => (
                      <span key={j} style={{ fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 100, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.45)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(24px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="liquid-glass-panel"
              style={{ background: '#1c1c1e', borderRadius: 22, maxWidth: 640, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <ImageCarousel imgs={projects[sel].imgs} alt={projects[sel].name} background="#2c2c2e" controlSize={30} />
              <div style={{ padding: '24px 28px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: projects[sel].color, color: '#fff' }}>{projects[sel].status}</span>
                  <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: projects[sel].statusColor }} />
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.02em', marginBottom: 6 }}>{projects[sel].name}</div>
                <div style={{ fontSize: 12, color: '#2997ff', marginBottom: 3 }}>{projects[sel].course}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>{lang === 'en' ? 'Team: ' : '团队：'}{projects[sel].team}</div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 20 }}>{projects[sel].overview}</p>
                {projects[sel].sections.map((s, i) => (
                  <div key={i} style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: projects[sel].color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{s.title}</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, margin: 0 }}>{s.content}</p>
                  </div>
                ))}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16, paddingTop: 16, borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
                  {projects[sel].tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 100, background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }}>{tag}</span>
                  ))}
                </div>
                <button className="liquid-glass-button liquid-glass-button--primary" onClick={() => setSel(null)} style={{ marginTop: 20, width: '100%', padding: '12px 0', borderRadius: 100, color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
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
