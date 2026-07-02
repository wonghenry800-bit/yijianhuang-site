'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navDropdowns, navItems, navLabels } from '../data/navigation';
import type { Language } from '../types/language';

export default function Navbar({ lang, setLang, currentPage, dark = false }: { lang: Language; setLang: (l: Language) => void; currentPage: string; dark?: boolean; }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const t = navLabels[lang];
  const d = navDropdowns[lang];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const bg = dark ? (scrolled ? 'rgba(8,10,16,0.68)' : 'rgba(8,10,16,0.24)') : (scrolled ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.38)');
  const border = dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)';
  const textColor = dark ? '#f5f5f7' : '#1d1d1f';
  const mutedColor = dark ? 'rgba(255,255,255,0.5)' : '#6e6e73';
  const dropBg = dark ? 'rgba(28,28,30,0.68)' : 'rgba(255,255,255,0.74)';
  const dropBorder = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';
  const dropText = dark ? '#f5f5f7' : '#1d1d1f';
  const dropMuted = dark ? 'rgba(255,255,255,0.4)' : '#86868b';
  const dropDivider = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: bg, backdropFilter: 'saturate(180%) blur(22px)', WebkitBackdropFilter: 'saturate(180%) blur(22px)', borderBottom: `0.5px solid ${border}`, boxShadow: scrolled ? '0 12px 36px rgba(0,0,0,0.12)' : 'none', transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px', height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <Image src="/avatar.jpg" width={24} height={24} style={{ borderRadius: '50%', objectFit: 'cover' }} alt="" />
          <span style={{ fontSize: 14, fontWeight: 600, color: textColor, letterSpacing: 0 }}>{lang === 'cn' ? '黄一健' : 'Yijian'}</span>
        </Link>
        <div style={{ display: 'flex' }}>
          {navItems.map(key => (
            <div key={key} style={{ position: 'relative' }} onMouseEnter={() => setHovered(key)} onMouseLeave={() => setHovered(null)}>
              <Link href={`/${key}`} style={{ display: 'block', padding: '0 10px', fontSize: 12, fontWeight: 500, color: currentPage === key ? textColor : mutedColor, textDecoration: 'none', lineHeight: '44px', transition: 'color 0.15s' }}>
                {t[key]}
              </Link>
              <AnimatePresence>
                {hovered === key && d[key].length > 0 && (
                  <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }}
                    style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: 8, minWidth: 180, zIndex: 200 }}>
                    <div className={`liquid-glass-panel ${dark ? '' : 'liquid-glass-panel--light'}`} style={{ background: dropBg, border: `0.5px solid ${dropBorder}`, borderRadius: 18, overflow: 'hidden' }}>
                      <Link href={`/${key}`} style={{ display: 'block', padding: '8px 16px 6px', fontSize: 10, fontWeight: 700, color: dropMuted, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', borderBottom: `0.5px solid ${dropDivider}` }} onClick={() => setHovered(null)}>{t[key]}</Link>
                      {d[key].map((item, i) => (
                        <Link key={i} href={item.h} style={{ display: 'block', padding: '10px 16px', fontSize: 13, color: dropText, textDecoration: 'none', borderBottom: i < d[key].length - 1 ? `0.5px solid ${dropDivider}` : 'none', transition: 'background 0.1s' }}
                          onMouseEnter={e => (e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)')}
                          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                          onClick={() => setHovered(null)}>{item.t}</Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <button className={`liquid-glass-button ${dark ? '' : 'liquid-glass-button--light'}`} onClick={() => setLang(lang === 'en' ? 'cn' : 'en')} style={{ borderRadius: 999, padding: '6px 11px', cursor: 'pointer', fontSize: 12, fontWeight: 600, color: mutedColor, transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = textColor)} onMouseLeave={e => (e.currentTarget.style.color = mutedColor)}>
          {lang === 'en' ? '中文' : 'EN'}
        </button>
      </div>
    </nav>
  );
}
