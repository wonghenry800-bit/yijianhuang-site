'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import { portfolioProjects, trustLinks, writingSamples } from '../../data/portfolio';
import { publicImage } from '../../utils/publicImage';

function isExternal(href: string) {
  return href.startsWith('http');
}

export default function PortfolioPage() {
  const { lang, setLang } = useLanguage();
  const lead = portfolioProjects[0];

  return (
    <VisionPageShell dark accent="#30d158">
      <Navbar lang={lang} setLang={setLang} currentPage="portfolio" dark />
      <main className="cinematic-page">
        <section className="cinematic-hero">
          <motion.div className="cinematic-orbit" aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 34, repeat: Infinity, ease: 'linear' }} />
          <div className="cinematic-hero-copy">
            <motion.p className="apple-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#30d158', marginBottom: 16 }}>
              {lang === 'en' ? 'Portfolio' : '作品集'}
            </motion.p>
            <motion.h1 className="apple-display-title" initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}>
              {lang === 'en' ? 'Work samples with evidence attached.' : '把作品、方法和证据放在一起。'}
            </motion.h1>
            <motion.p className="apple-centered-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
              {lang === 'en' ? 'A compact proof page for machine learning, writing samples, GitHub, LinkedIn, and resume download.' : '集中展示机器学习、研究摘要、GitHub、LinkedIn 和简历下载。'}
            </motion.p>
          </div>

          <motion.div
            className="cinematic-hero-panel liquid-glass-panel vision-interactive-card"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cinematic-hero-media">
              <Image src={publicImage(lead.image)} alt={lead.title[lang]} fill priority sizes="(max-width: 900px) 86vw, 520px" style={{ objectFit: 'cover', objectPosition: 'left center' }} />
            </div>
            <div className="cinematic-hero-overlay">
              <span>{lead.category[lang]}</span>
              <strong>{lead.title[lang]}</strong>
            </div>
          </motion.div>
        </section>

        <section id="machine-learning" className="cinematic-section cinematic-section--tight">
          <div className="apple-section-header">
            <p className="apple-eyebrow" style={{ color: '#64d2ff', marginBottom: 14 }}>{lang === 'en' ? 'Machine Learning' : '机器学习'}</p>
            <h2 className="apple-section-title">{lang === 'en' ? 'A complete ML project, not just keywords.' : '一个完整机器学习项目，而不是关键词堆砌。'}</h2>
          </div>

          <div className="cinematic-container cinematic-grid">
            {portfolioProjects.map(project => (
              <motion.article
                key={project.title.en}
                className="cinematic-card cinematic-card--full liquid-glass-panel vision-interactive-card"
                initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="cinematic-card-media">
                  <Image src={publicImage(project.image)} alt={project.title[lang]} fill sizes="(max-width: 900px) 100vw, 1000px" style={{ objectFit: 'cover', objectPosition: 'left center' }} />
                </div>
                <div className="cinematic-card-content">
                  <span className="cinematic-chip">{project.category[lang]}</span>
                  <h3 className="cinematic-card-title">{project.title[lang]}</h3>
                  <p className="cinematic-card-detail"><strong>{lang === 'en' ? 'Problem: ' : '问题：'}</strong>{project.problem[lang]}</p>
                  <p className="cinematic-card-detail"><strong>{lang === 'en' ? 'Method: ' : '方法：'}</strong>{project.method[lang]}</p>
                  <p className="cinematic-card-detail"><strong>{lang === 'en' ? 'Result: ' : '结果：'}</strong>{project.result[lang]}</p>
                  <div className="cinematic-pill-row" style={{ marginTop: 18 }}>
                    {project.metrics.map(metric => <span className="cinematic-chip" key={metric.en}>{metric[lang]}</span>)}
                  </div>
                  <div className="cinematic-pill-row" style={{ marginTop: 18 }}>
                    {project.links.map(link => (
                      <a
                        key={link.href}
                        className="liquid-glass-button"
                        href={link.href}
                        target={isExternal(link.href) ? '_blank' : undefined}
                        rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
                        style={{ color: '#fff', textDecoration: 'none', borderRadius: 999, padding: '9px 15px', fontSize: 12, fontWeight: 700 }}
                      >
                        {link.label[lang]}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="writing" className="cinematic-section">
          <div className="apple-section-header">
            <p className="apple-eyebrow" style={{ color: '#ffcc66', marginBottom: 14 }}>{lang === 'en' ? 'Writing Samples' : '研究作品'}</p>
            <h2 className="apple-section-title">{lang === 'en' ? 'Representative research directions with readable summaries.' : '让代表性研究方向可以被快速判断。'}</h2>
          </div>

          <div className="cinematic-container cinematic-grid">
            {writingSamples.map((sample, index) => (
              <motion.a
                key={sample.title.en}
                href={sample.href}
                className={`cinematic-text-tile liquid-glass-panel vision-interactive-card ${index === 0 ? 'cinematic-text-tile--half' : ''}`}
                style={{ textDecoration: 'none' }}
                initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: Math.min(index * 0.06, 0.18), duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="cinematic-chip">{sample.type[lang]}</span>
                <div>
                  <h3>{sample.title[lang]}</h3>
                  <p>{sample.summary[lang]}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="cinematic-section cinematic-section--tight">
          <div className="cinematic-container cinematic-grid">
            <div className="cinematic-text-tile cinematic-text-tile--half liquid-glass-panel">
              <span className="cinematic-chip">{lang === 'en' ? 'Trust links' : '信任入口'}</span>
              <div>
                <h3>{lang === 'en' ? 'Recruiter-friendly links.' : '招聘方最常找的入口。'}</h3>
                <p>{lang === 'en' ? 'LinkedIn, GitHub, and a downloadable resume are now available from the site.' : '网站已加入 LinkedIn、GitHub 和可下载简历 PDF。'}</p>
                <div className="cinematic-pill-row" style={{ marginTop: 22 }}>
                  {trustLinks.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={isExternal(link.href) ? '_blank' : undefined}
                      rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
                      className="liquid-glass-button"
                      style={{ color: '#fff', textDecoration: 'none', borderRadius: 999, padding: '9px 15px', fontSize: 12, fontWeight: 700 }}
                    >
                      {link.label[lang]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </VisionPageShell>
  );
}
