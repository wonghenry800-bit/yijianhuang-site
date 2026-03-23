'use client';

import { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const content = {
  en: {
    name: 'Yijian Huang',
    t1: 'Economics.', t2: 'Policy.', t3: 'Impact.',
    sub: 'CUHK-Shenzhen · UChicago Harris · UN Geneva · State Council DRC',
    cta1: 'Explore my work', cta2: 'Get in touch', scroll: 'Scroll',
    skillsLabel: 'Skills',
  },
  cn: {
    name: '黄一健',
    t1: '经济学。', t2: '政策。', t3: '影响力。',
    sub: '港中深 · 芝加哥大学 · 联合国日内瓦 · 国务院发展研究中心',
    cta1: '了解我的经历', cta2: '联系我', scroll: '向下滚动',
    skillsLabel: '技能',
  },
};

const stats = {
  en: [{ n: '6+', l: 'Internships' }, { n: '4', l: 'Policy briefs' }, { n: '6', l: 'Languages' }, { n: '3+', l: 'Countries' }],
  cn: [{ n: '6+', l: '实习经历' }, { n: '4', l: '政策简报' }, { n: '6', l: '语言' }, { n: '3+', l: '国家' }],
};

const skillsData = {
  en: [
    { name: 'Python', color: '#3776ab', detail: 'Data analysis, web scraping, automation. Used for policy research data processing, ML model implementation (scikit-learn), and building the Tevo A.I. data pipeline. Libraries: pandas, numpy, matplotlib, ggplot2 integration.' },
    { name: 'Stata', color: '#1a5276', detail: 'Primary tool for econometric analysis. Applied OLS, IV (instrumental variables), DID (difference-in-differences), and PSM (propensity score matching) in UNDP China research. Used NBER trade database for regression modeling on China-US bilateral trade flows.' },
    { name: 'R Studio', color: '#276dc3', detail: 'Statistical computing and data visualization. Used at UChicago Harris for the Data & Policy capstone — R + ggplot2 for cleaning, visualizing, and analyzing socioeconomic factors affecting US voting behavior. Also used for academic literature replication packages at HKU AI Centre.' },
    { name: 'Machine Learning', color: '#e44d26', detail: 'Applied ML in two key contexts: (1) HKU AI Centre — summarizing OLS/IV/DID/PSM methods across 260+ academic papers and building an ML-based analytical methods database; (2) Tevo A.I. — clustering & data mining for market evidence extraction, ML certainty scoring (0–1), and recommendation systems for the AI Waiter.' },
    { name: 'Policy Evaluation', color: '#0071e3', detail: 'Quantitative and qualitative policy analysis frameworks. Applied at UNDP (regression-based trade policy impact), GBA Institute (regional development policy research), State Council DRC (enterprise going-out policy tracking), and HK-Macao-Taiwan Association (healthcare governance — "港澳药械通" policy analysis).' },
    { name: 'Econometrics', color: '#1d8348', detail: 'Intermediate to advanced econometric methods. Coursework: Intermediate Econometrics + Quantitative Methods for Policy Evaluation at CUHK-Shenzhen. Applied: OLS, IV, DID, PSM across academic replication projects and policy research. Tools: Stata (primary), R (secondary).' },
    { name: 'Data Visualization', color: '#8e44ad', detail: 'Translating complex data into actionable visuals. Tools: ggplot2 (R), matplotlib (Python), Chart.js / Recharts (web). Applied in UChicago Harris capstone (voting behavior data), Student Dashboard project (GPA distribution charts, competency radar charts, credit progress visualization).' },
    { name: 'LaTeX', color: '#444', detail: 'Academic typesetting for policy papers and research reports. Used for the "港澳药械通" policy analysis report (planned for publication in Hong Kong & Macao Studies journal) and other formal academic outputs. Managed via Overleaf for collaborative editing.' },
    { name: 'Claude Code', color: '#cc785c', detail: 'Agentic AI coding environment — primary tool for building this portfolio website. Used for full-stack Next.js/TypeScript development, debugging, and rapid prototyping of the Student Dashboard UI. Represents the frontier of AI-assisted software development.' },
  ],
  cn: [
    { name: 'Python', color: '#3776ab', detail: '数据分析、网络爬取、自动化。用于政策研究数据处理、ML模型实现（scikit-learn）以及构建Tevo A.I.数据管道。常用库：pandas、numpy、matplotlib。' },
    { name: 'Stata', color: '#1a5276', detail: '计量经济学分析主要工具。在UNDP中国项目中应用OLS、IV（工具变量）、DID（双重差分）和PSM（倾向得分匹配）。使用NBER贸易数据库对中美双边贸易流进行回归建模。' },
    { name: 'R Studio', color: '#276dc3', detail: '统计计算与数据可视化。在芝加哥大学哈里斯学院顶点项目中使用R + ggplot2进行数据清洗、可视化和分析，研究社会经济因素对美国投票行为的影响。也用于港大AI中心的学术文献复现包研究。' },
    { name: '机器学习', color: '#e44d26', detail: '在两个关键场景中应用ML：(1) 港大AI中心——对260+篇学术论文中的OLS/IV/DID/PSM方法进行总结，构建ML分析方法数据库；(2) Tevo A.I.——用于市场证据提取的聚类与数据挖掘、ML确定性评分（0-1），以及AI服务生的推荐系统。' },
    { name: '政策评估', color: '#0071e3', detail: '定量和定性政策分析框架。应用于UNDP（基于回归的贸易政策影响分析）、大湾区研究院（区域发展政策研究）、国务院发展研究中心（企业出海政策跟踪）和港澳台发展研究协会（医疗治理——"港澳药械通"政策分析）。' },
    { name: '计量经济学', color: '#1d8348', detail: '中高级计量经济学方法。课程：港中深中级计量经济学 + 政策评估量化方法。应用：OLS、IV、DID、PSM用于学术文献复现和政策研究。工具：Stata（主）、R（辅）。' },
    { name: '数据可视化', color: '#8e44ad', detail: '将复杂数据转化为可行动的视觉呈现。工具：ggplot2（R）、matplotlib（Python）、Chart.js/Recharts（Web）。应用于芝加哥大学投票行为数据分析和学业仪表盘项目（GPA分布图、能力雷达图、学分进度可视化）。' },
    { name: 'LaTeX', color: '#444', detail: '用于政策论文和研究报告的学术排版。用于"港澳药械通"政策分析报告（计划发表于《港澳研究》杂志）及其他正式学术输出。通过Overleaf进行协作编辑。' },
    { name: 'Claude Code', color: '#cc785c', detail: 'Agentic AI编程环境——构建本网站的主要工具。用于全栈Next.js/TypeScript开发、调试和学业仪表盘UI的快速原型设计。代表AI辅助软件开发的前沿应用。' },
  ],
};

export default function Home() {
  const { lang, setLang } = useLanguage();
  const [selSkill, setSelSkill] = useState<number | null>(null);
  const t = content[lang];
  const s = stats[lang];
  const skills = skillsData[lang];

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="home" dark />

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(41,151,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 760, width: '100%', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} style={{ marginBottom: 40 }}>
            <img src="/avatar.jpg" alt="Yijian" style={{ width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.15)' }} />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: 24 }}>
            {t.t1}<br />{t.t2}<br /><span style={{ color: '#2997ff' }}>{t.t3}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.02em', marginBottom: 40, lineHeight: 1.6 }}>
            {t.sub}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 60 }}>
            <Link href="/experience" style={{ padding: '12px 28px', background: '#f5f5f7', color: '#1d1d1f', borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.01em' }}>{t.cta1}</Link>
            <Link href="/contact" style={{ padding: '12px 28px', background: 'rgba(255,255,255,0.08)', color: '#f5f5f7', borderRadius: 100, fontSize: 14, fontWeight: 500, textDecoration: 'none', border: '0.5px solid rgba(255,255,255,0.15)' }}>{t.cta2}</Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 20, overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.08)', marginBottom: 60 }}>
            {s.map((item, i) => (
              <div key={i} style={{ padding: '24px 16px', textAlign: 'center', background: 'rgba(0,0,0,0.4)' }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em' }}>{item.n}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 4, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{item.l}</div>
              </div>
            ))}
          </motion.div>

          {/* Skills — clickable */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 14 }}>{t.skillsLabel}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
              {skills.map((sk, i) => (
                <motion.button key={i} onClick={() => setSelSkill(selSkill === i ? null : i)}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '7px 16px', borderRadius: 100, fontSize: 13, fontWeight: 500, cursor: 'pointer', transition: 'all 0.15s', border: '0.5px solid',
                    background: selSkill === i ? sk.color : 'rgba(255,255,255,0.07)',
                    borderColor: selSkill === i ? sk.color : 'rgba(255,255,255,0.15)',
                    color: selSkill === i ? '#fff' : 'rgba(255,255,255,0.7)',
                  }}>
                  {sk.name}
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {selSkill !== null && (
                <motion.div initial={{ opacity: 0, y: -8, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }} exit={{ opacity: 0, y: -8, height: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ marginTop: 16, overflow: 'hidden' }}>
                  <div style={{ background: 'rgba(255,255,255,0.06)', border: `0.5px solid ${skills[selSkill].color}40`, borderRadius: 14, padding: '16px 20px', textAlign: 'left' }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: skills[selSkill].color, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{skills[selSkill].name}</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>{skills[selSkill].detail}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
          style={{ position: 'absolute', bottom: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.scroll}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        </motion.div>
      </section>
    </div>
  );
}
