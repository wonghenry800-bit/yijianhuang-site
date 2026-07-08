'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import type { ContactItem } from '../../data/contact';
import { contactItems } from '../../data/contact';

function ContactIcon({ item }: { item: ContactItem['id'] }) {
  if (item === 'email') {
    return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
  }

  if (item === 'phone') {
    return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>;
  }

  if (item === 'linkedin') {
    return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
  }

  if (item === 'github') {
    return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 00-.9-2.6c3-.3 6.1-1.5 6.1-6.6a5.1 5.1 0 00-1.4-3.6 4.8 4.8 0 00-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 00-6.7 0C6.7.4 5.6.7 5.6.7a4.8 4.8 0 00-.1 3.6A5.1 5.1 0 004.1 8c0 5.1 3.1 6.3 6.1 6.6a3.4 3.4 0 00-.9 2.6V22"/></svg>;
  }

  if (item === 'resume') {
    return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>;
  }

  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>;
}

export default function Contact() {
  const { lang, setLang } = useLanguage();

  return (
    <VisionPageShell dark accent="#ff375f">
      <Navbar lang={lang} setLang={setLang} currentPage="contact" dark />
      <main className="cinematic-page">
        <section className="cinematic-hero">
          <motion.div className="cinematic-orbit" aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 32, repeat: Infinity, ease: 'linear' }} />
          <div className="cinematic-hero-copy">
            <motion.p className="apple-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#ff5f7e', marginBottom: 16 }}>
              {lang === 'en' ? 'Connect' : '联系'}
            </motion.p>
            <motion.h1 className="apple-display-title" initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}>
              {lang === 'en' ? 'Open to research, product, and business conversations.' : '欢迎研究、产品与商业方向的交流。'}
            </motion.h1>
            <motion.p className="apple-centered-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
              {lang === 'en' ? 'Based in Shanghai, working across China and global research networks.' : '常驻上海，连接中国与全球研究网络。'}
            </motion.p>
          </div>

          <motion.div
            className="cinematic-hero-panel cinematic-hero-panel--padded liquid-glass-panel contact-signal-panel"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            {[0, 1, 2, 3, 4].map(i => (
              <motion.div
                key={i}
                className="contact-signal-line"
                initial={{ scaleX: 0.35, opacity: 0.28 }}
                animate={{ scaleX: [0.42, 1, 0.56], opacity: [0.28, 0.84, 0.38] }}
                transition={{ duration: 3.2 + i * 0.28, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: i * 0.16 }}
              />
            ))}
            <div style={{ marginTop: 14 }}>
              <span className="cinematic-chip">{lang === 'en' ? 'Response window' : '回复节奏'}</span>
              <h2 style={{ color: '#f5f5f7', fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1.02, fontWeight: 780, marginTop: 18, letterSpacing: 0 }}>
                {lang === 'en' ? 'Usually within 24 hours.' : '通常 24 小时内回复。'}
              </h2>
            </div>
          </motion.div>
        </section>

        <section className="cinematic-section cinematic-section--tight">
          <div className="apple-section-header">
            <p className="apple-eyebrow" style={{ color: '#64d2ff', marginBottom: 14 }}>{lang === 'en' ? 'Channels' : '联系渠道'}</p>
            <h2 className="apple-section-title">{lang === 'en' ? 'Choose the most direct route.' : '选择最直接的方式。'}</h2>
          </div>

          <div className="cinematic-container cinematic-grid">
            {contactItems.map((item, i) => {
              const content = (
                <>
                  <div>
                    <div className="cinematic-icon-mark" style={{ background: ['#ff375f', '#30d158', '#64d2ff', '#0a66c2', '#6e6e73', '#bf5af2'][i] ?? '#64d2ff', color: '#fff' }}>
                      <ContactIcon item={item.id} />
                    </div>
                    <span className="cinematic-chip" style={{ marginTop: 22 }}>{item.label[lang]}</span>
                    <h3>{item.value[lang]}</h3>
                    <p>
                      {item.id === 'email'
                        ? (lang === 'en' ? 'Best for research, project notes, and documents.' : '适合研究合作、项目资料和正式文件。')
                        : item.id === 'phone'
                          ? (lang === 'en' ? 'Best for time-sensitive coordination.' : '适合较紧急的沟通协调。')
                          : item.id === 'location'
                            ? (lang === 'en' ? 'Shanghai added as the primary location.' : '已加入上海作为主要所在地。')
                            : item.id === 'linkedin'
                              ? (lang === 'en' ? 'Professional profile and public background.' : '职业资料与公开背景。')
                              : item.id === 'github'
                                ? (lang === 'en' ? 'Code, portfolio repo, and development footprint.' : '代码、作品集仓库和开发记录。')
                                : (lang === 'en' ? 'Downloadable resume PDF for recruiters.' : '供招聘方下载的简历 PDF。')}
                    </p>
                  </div>
                  <div className="cinematic-card-footer">
                    <span>{item.href ? (lang === 'en' ? 'Open' : '打开') : (lang === 'en' ? 'Based in Shanghai' : '上海')}</span>
                    <span className="apple-card-arrow" aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
                    </span>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={item.id}
                  className="cinematic-text-tile cinematic-text-tile--half liquid-glass-panel vision-interactive-card"
                  initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ color: 'inherit', textDecoration: 'none', display: 'contents' }}
                    >
                      {content}
                    </a>
                  ) : content}
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </VisionPageShell>
  );
}
