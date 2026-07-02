'use client';

import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
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
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="contact" />
      <main style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>Connect</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              style={{ fontSize: 'clamp(36px,5vw,52px)', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 16 }}>
              {lang === 'en' ? 'Get in Touch' : '联系我'}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              style={{ fontSize: 17, fontWeight: 300, color: '#6e6e73' }}>
              {lang === 'en' ? "I'd love to hear from you." : '期待与你的交流。'}
            </motion.p>
          </div>

          <div className="liquid-glass-panel liquid-glass-panel--light" style={{ borderRadius: 22, overflow: 'hidden', border: '0.5px solid rgba(0,0,0,0.08)' }}>
            {contactItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 + 0.2 }}>
                {item.href ? (
                  <a href={item.href}
                    style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 22px', textDecoration: 'none', borderBottom: i < contactItems.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none', background: 'rgba(255,255,255,0.22)', transition: 'background 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.5)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)' }}>
                    <div className="liquid-glass-button liquid-glass-button--light" style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <ContactIcon item={item.id} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#aeaeb2', marginBottom: 3 }}>{item.label[lang]}</div>
                      <div style={{ fontSize: 15, fontWeight: 500, color: '#1d1d1f' }}>{item.value[lang]}</div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aeaeb2" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  </a>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 22px', borderBottom: i < contactItems.length - 1 ? '0.5px solid rgba(0,0,0,0.06)' : 'none', background: 'rgba(255,255,255,0.22)' }}>
                    <div className="liquid-glass-button liquid-glass-button--light" style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <ContactIcon item={item.id} />
                    </div>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#aeaeb2', marginBottom: 3 }}>{item.label[lang]}</div>
                      <div style={{ fontSize: 15, fontWeight: 500, color: '#1d1d1f' }}>{item.value[lang]}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{ textAlign: 'center', fontSize: 13, color: '#aeaeb2', marginTop: 48 }}>
            {lang === 'en' ? 'Response within 24 hours · Open to research collaborations worldwide' : '24小时内回复 · 欢迎全球学术与业务合作'}
          </motion.p>
        </div>
      </main>
    </div>
  );
}
