'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import ImageCarousel from '../../components/ImageCarousel';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import { useQuerySelectedIndex } from '../../hooks/useQuerySelectedIndex';
import { projectsData, toolsData } from '../../data/ai';
import { publicImage } from '../../utils/publicImage';

export default function AIPage() {
  const { lang, setLang } = useLanguage();
  const tools = toolsData[lang];
  const projects = projectsData[lang];
  const [sel, setSel] = useQuerySelectedIndex(projects.length);
  const lead = projects[0];

  return (
    <VisionPageShell dark accent="#bf5af2">
      <Navbar lang={lang} setLang={setLang} currentPage="ai" dark />
      <main className="cinematic-page">
        <section className="cinematic-hero">
          <motion.div className="cinematic-orbit" aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} />
          <div className="cinematic-hero-copy">
            <motion.p className="apple-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#bf5af2', marginBottom: 16 }}>
              {lang === 'en' ? 'AI Workbench' : 'AI 工作台'}
            </motion.p>
            <motion.h1 className="apple-display-title" initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}>
              {lang === 'en' ? 'From daily agents to AI-native ventures.' : '从日常 Agent，到 AI 原生项目。'}
            </motion.h1>
            <motion.p className="apple-centered-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
              {lang === 'en' ? 'A practical stack for research, coding, operations, and product prototypes.' : '一套用于研究、编程、运营和产品原型的实用 AI 栈。'}
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
              <Image src={publicImage(lead.imgs[0])} alt={lead.name} fill priority sizes="(max-width: 900px) 86vw, 420px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="cinematic-hero-overlay">
              <span>{lead.subtitle}</span>
              <strong>{lead.name}</strong>
            </div>
          </motion.button>
        </section>

        <section className="cinematic-section cinematic-section--tight">
          <div className="apple-section-header">
            <p className="apple-eyebrow" style={{ color: '#64d2ff', marginBottom: 14 }}>{lang === 'en' ? 'Daily Stack' : '日常工具栈'}</p>
            <h2 className="apple-section-title">{lang === 'en' ? 'Tools arranged by how they actually enter the workflow.' : '按照真实工作流组织，而不是简单罗列工具。'}</h2>
          </div>

          <div className="cinematic-container cinematic-grid">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                className="cinematic-text-tile liquid-glass-panel vision-interactive-card"
                initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: Math.min(i * 0.04, 0.22), duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="cinematic-icon-mark" style={{ background: tool.color }}>{tool.icon}</div>
                <div>
                  <span className="cinematic-chip">{tool.cat}</span>
                  <h3>{tool.name}</h3>
                  <p>{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="cinematic-section">
          <div className="apple-section-header">
            <p className="apple-eyebrow" style={{ color: '#30d158', marginBottom: 14 }}>{lang === 'en' ? 'AI Ventures' : 'AI 项目'}</p>
            <h2 className="apple-section-title">{lang === 'en' ? 'Product ideas moving from coursework into systems.' : '从课程项目延伸为系统化产品想法。'}</h2>
          </div>

          <div className="cinematic-container cinematic-grid">
            {projects.map((project, i) => (
              <motion.button
                type="button"
                key={project.name}
                className={`cinematic-card liquid-glass-panel vision-interactive-card ${i === 0 ? 'cinematic-card--wide' : ''}`}
                onClick={() => setSel(i)}
                initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.62, delay: Math.min(i * 0.06, 0.24), ease: [0.22, 1, 0.36, 1] }}
                style={{ '--vision-accent': project.color } as CSSProperties}
              >
                <div className="cinematic-card-media">
                  <Image src={publicImage(project.imgs[0])} alt={project.name} fill sizes="(max-width: 900px) 100vw, 520px" style={{ objectFit: 'cover' }} />
                </div>
                <div className="cinematic-card-content">
                  <span className="cinematic-chip" style={{ background: project.color }}>{project.status}</span>
                  <h3 className="cinematic-card-title">{project.name}</h3>
                  <p className="cinematic-card-detail">{project.summary}</p>
                  <div className="cinematic-pill-row" style={{ marginTop: 18 }}>
                    {project.tags.slice(0, 4).map(tag => <span className="cinematic-chip" key={tag}>{tag}</span>)}
                  </div>
                  <div className="cinematic-card-footer">
                    <span>{project.team}</span>
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
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(26px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.94, y: 22, opacity: 0, filter: 'blur(12px)' }} animate={{ scale: 1, y: 0, opacity: 1, filter: 'blur(0px)' }} exit={{ scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={event => event.stopPropagation()}
              className="liquid-glass-panel"
              style={{ background: '#1c1c1e', borderRadius: 24, maxWidth: 720, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <ImageCarousel imgs={projects[sel].imgs} alt={projects[sel].name} background="#2c2c2e" controlSize={30} />
              <div style={{ padding: '24px 28px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: projects[sel].color, color: '#fff' }}>{projects[sel].status}</span>
                  <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: projects[sel].statusColor }} />
                </div>
                <div style={{ fontSize: 24, fontWeight: 740, color: '#f5f5f7', letterSpacing: 0 }}>{projects[sel].name}</div>
                <div style={{ fontSize: 13, color: '#bf5af2', marginTop: 4 }}>{projects[sel].course}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.34)', marginTop: 4 }}>{lang === 'en' ? 'Team: ' : '团队：'}{projects[sel].team}</div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginTop: 18 }}>{projects[sel].summary}</p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.58)', lineHeight: 1.8, marginTop: 14 }}>{projects[sel].overview}</p>
                {projects[sel].sections.map(section => (
                  <div key={section.title} style={{ marginTop: 18 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: projects[sel].color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{section.title}</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.56)', lineHeight: 1.85, margin: 0 }}>{section.content}</p>
                  </div>
                ))}
                <div className="cinematic-pill-row" style={{ marginTop: 20, paddingTop: 18, borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
                  {projects[sel].tags.map(tag => <span className="cinematic-chip" key={tag}>{tag}</span>)}
                </div>
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
