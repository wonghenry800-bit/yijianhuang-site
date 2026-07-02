'use client';

import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import VisionPageShell from '../../components/VisionPageShell';
import { contactItems } from '../../data/contact';
import type { ContactItem } from '../../data/contact';
import { motion } from 'framer-motion';

function ContactIcon({ item }: { item: ContactItem['id'] }) {
  if (item === 'email') {
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
  }

  if (item === 'phone') {
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="1.5"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>;
  }

  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>;
}

export default function Contact() {
  const { lang, setLang } = useLanguage();

  return (
    <VisionPageShell accent="#ff375f">
      <Navbar lang={lang} setLang={setLang} currentPage="contact" />
      <main className="apple-section" style={{ paddingTop: 112 }}>
        <div className="apple-container">
          <div className="vision-hero-card liquid-glass-panel liquid-glass-panel--light" style={{ textAlign: 'center', marginBottom: 26, padding: '52px 24px', borderRadius: 32 }}>
            <motion.p className="apple-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#ff375f', marginBottom: 16 }}>{lang === 'en' ? 'Connect' : '联系'}</motion.p>
            <motion.h1 className="apple-display-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              style={{ fontSize: 'clamp(42px,6vw,72px)', color: '#1d1d1f', marginBottom: 16 }}>
              {lang === 'en' ? 'Get in Touch' : '联系我'}
            </motion.h1>
            <motion.p className="apple-centered-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              style={{ fontSize: 17, fontWeight: 360, color: '#6e6e73', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
              {lang === 'en' ? "I'd love to hear from you." : '期待与你的交流。'}
            </motion.p>
          </div>

          <div className="contact-grid">
            {contactItems.map((item, i) => (
              <motion.div key={item.id} className="vision-interactive-card" initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: i * 0.08 + 0.2 }}>
                {item.href ? (
                  <a href={item.href} className="contact-tile liquid-glass-panel liquid-glass-panel--light">
                    <div>
                      <div className="contact-icon-wrap liquid-glass-button liquid-glass-button--light">
                        <ContactIcon item={item.id} />
                      </div>
                      <div className="apple-eyebrow" style={{ color: '#86868b', marginBottom: 10 }}>{item.label[lang]}</div>
                      <div className="apple-centered-copy" style={{ fontSize: 17, fontWeight: 650, color: '#1d1d1f', lineHeight: 1.45, overflowWrap: 'anywhere' }}>{item.value[lang]}</div>
                    </div>
                    <span style={{ color: '#ff375f', fontSize: 12, fontWeight: 650 }}>{lang === 'en' ? 'Open' : '打开'}</span>
                  </a>
                ) : (
                  <div className="contact-tile liquid-glass-panel liquid-glass-panel--light">
                    <div>
                      <div className="contact-icon-wrap liquid-glass-button liquid-glass-button--light">
                      <ContactIcon item={item.id} />
                      </div>
                      <div className="apple-eyebrow" style={{ color: '#86868b', marginBottom: 10 }}>{item.label[lang]}</div>
                      <div className="apple-centered-copy" style={{ fontSize: 17, fontWeight: 650, color: '#1d1d1f', lineHeight: 1.45 }}>{item.value[lang]}</div>
                    </div>
                    <span style={{ color: '#ff375f', fontSize: 12, fontWeight: 650 }}>{lang === 'en' ? 'Based in Shanghai' : '上海'}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="apple-centered-copy"
            style={{ fontSize: 13, color: '#86868b', marginTop: 48 }}>
            {lang === 'en' ? 'Response within 24 hours · Open to research collaborations worldwide' : '24小时内回复 · 欢迎全球学术与业务合作'}
          </motion.p>
        </div>
      </main>
    </VisionPageShell>
  );
}
