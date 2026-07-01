import type { Language } from '../types/language';

type HomeHeroContent = {
  name: string;
  t1: string;
  t2: string;
  t3: string;
  sub: string;
  cta1: string;
  cta2: string;
  scroll: string;
  skillsLabel: string;
};

type HomeStat = {
  n: string;
  l: string;
};

export type HomeSkill = {
  name: string;
  color: string;
  detail: string;
};

export const homeContent: Record<Language, HomeHeroContent> = {
  en: {
    name: 'Yijian Huang',
    t1: 'Economics.',
    t2: 'Policy.',
    t3: 'Impact.',
    sub: 'CUHK-Shenzhen · UChicago Harris · UN Geneva · State Council DRC',
    cta1: 'Explore my work',
    cta2: 'Get in touch',
    scroll: 'Scroll',
    skillsLabel: 'Skills',
  },
  cn: {
    name: '黄一健',
    t1: '经济学。',
    t2: '政策。',
    t3: '影响力。',
    sub: '港中深 · 芝加哥大学 · 联合国日内瓦 · 国务院发展研究中心',
    cta1: '了解我的经历',
    cta2: '联系我',
    scroll: '向下滚动',
    skillsLabel: '技能',
  },
};

export const homeStats: Record<Language, HomeStat[]> = {
  en: [
    { n: '6+', l: 'Internships' },
    { n: '4', l: 'Policy briefs' },
    { n: '6', l: 'Languages' },
    { n: '3+', l: 'Countries' },
  ],
  cn: [
    { n: '6+', l: '实习经历' },
    { n: '4', l: '政策简报' },
    { n: '6', l: '语言' },
    { n: '3+', l: '国家' },
  ],
};

export const homeSkills: Record<Language, HomeSkill[]> = {
  en: [
    { name: 'Python', color: '#3776ab', detail: 'Data analysis, web scraping, automation. Used for policy research data processing, ML model implementation (scikit-learn), and building the Tevo A.I. data pipeline. Libraries: pandas, numpy, matplotlib.' },
    { name: 'Stata', color: '#1a5276', detail: 'Primary econometrics tool. Applied OLS, IV, DID, and PSM in UNDP China research. Used NBER trade database for regression modeling on China-US bilateral trade flows.' },
    { name: 'R Studio', color: '#276dc3', detail: 'Statistical computing and data visualization. Used at UChicago Harris for the Data & Policy capstone — R + ggplot2 for cleaning, visualizing, and analyzing socioeconomic factors affecting US voting behavior.' },
    { name: 'Machine Learning', color: '#e44d26', detail: 'Applied in two contexts: (1) HKU AI Centre — summarizing OLS/IV/DID/PSM across 260+ papers, building an ML-based methods database; (2) Tevo A.I. — clustering & data mining for market evidence, ML certainty scoring (0–1), and RecSys for the AI Waiter.' },
    { name: 'Policy Evaluation', color: '#0071e3', detail: 'Quantitative and qualitative policy analysis. Applied at UNDP (regression-based trade policy impact), GBA Institute (regional development research), State Council DRC (enterprise going-out tracking), and HK-Macao Association (healthcare governance — 港澳药械通).' },
    { name: 'Econometrics', color: '#1d8348', detail: 'Intermediate to advanced methods: OLS, IV, DID, PSM. Coursework at CUHK-Shenzhen (Intermediate Econometrics + Quantitative Methods for Policy Evaluation). Applied in academic replication projects at HKU AI Centre and UNDP policy research.' },
    { name: 'Data Visualization', color: '#8e44ad', detail: 'Tools: ggplot2 (R), matplotlib (Python), Chart.js / Recharts (web). Applied in UChicago Harris capstone (voting behavior), Student Dashboard project (GPA distribution charts, competency radar charts, credit progress visualization).' },
    { name: 'LaTeX', color: '#555', detail: 'Academic typesetting for policy papers and research reports. Used for the 港澳药械通 policy analysis report (planned for publication in Hong Kong & Macao Studies journal). Managed via Overleaf for collaborative editing.' },
    { name: 'Claude Code', color: '#cc785c', detail: "Agentic AI coding environment — primary tool for building this portfolio. Used for full-stack Next.js/TypeScript development and rapid prototyping of the Student Dashboard UI. Represents the frontier of AI-assisted software development." },
  ],
  cn: [
    { name: 'Python', color: '#3776ab', detail: '数据分析、网络爬取、自动化。用于政策研究数据处理、ML模型实现（scikit-learn）以及构建Tevo A.I.数据管道。常用库：pandas、numpy、matplotlib。' },
    { name: 'Stata', color: '#1a5276', detail: '计量经济学主要工具。在UNDP中国项目中应用OLS、IV（工具变量）、DID（双重差分）和PSM（倾向得分匹配）。使用NBER贸易数据库对中美双边贸易流进行回归建模。' },
    { name: 'R Studio', color: '#276dc3', detail: '统计计算与数据可视化。在芝加哥大学哈里斯学院顶点项目中使用R + ggplot2进行数据清洗、可视化和分析，研究社会经济因素对美国投票行为的影响。' },
    { name: '机器学习', color: '#e44d26', detail: '在两个场景中应用：(1) 港大AI中心——对260+篇学术论文的OLS/IV/DID/PSM方法进行总结，构建ML分析方法数据库；(2) Tevo A.I.——用于市场证据提取的聚类与数据挖掘、ML确定性评分（0-1），以及AI服务生的推荐系统。' },
    { name: '政策评估', color: '#0071e3', detail: '定量和定性政策分析框架。应用于UNDP（基于回归的贸易政策影响）、大湾区研究院（区域发展政策研究）、国务院发展研究中心（企业出海政策跟踪）和港澳台发展研究协会（医疗治理——港澳药械通政策分析）。' },
    { name: '计量经济学', color: '#1d8348', detail: '中高级计量方法：OLS、IV、DID、PSM。课程：港中深中级计量经济学 + 政策评估量化方法。应用于港大AI中心学术文献复现项目和UNDP政策研究。' },
    { name: '数据可视化', color: '#8e44ad', detail: '工具：ggplot2（R）、matplotlib（Python）、Chart.js/Recharts（Web）。应用于芝加哥大学投票行为数据分析和学业仪表盘项目（GPA分布图、能力雷达图、学分进度可视化）。' },
    { name: 'LaTeX', color: '#555', detail: '用于政策论文和研究报告的学术排版。用于"港澳药械通"政策分析报告（计划发表于《港澳研究》杂志）及其他正式学术输出。通过Overleaf进行协作编辑。' },
    { name: 'Claude Code', color: '#cc785c', detail: 'Agentic AI编程环境——构建本网站的主要工具。用于全栈Next.js/TypeScript开发和学业仪表盘UI的快速原型设计。代表AI辅助软件开发的前沿应用。' },
  ],
};
