import type { Language } from '../types/language';

type HomeHeroContent = {
  name: string;
  t1: string;
  t2: string;
  t3: string;
  sub: string;
  introEyebrow: string;
  introTitle: string;
  introBody: string;
  featuredEyebrow: string;
  featuredTitle: string;
  exploreEyebrow: string;
  exploreTitle: string;
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

export type HomeFocusArea = {
  title: string;
  body: string;
  href: string;
  accent: string;
};

export type HomeFeaturedWork = {
  label: string;
  title: string;
  body: string;
  href: string;
  accent: string;
};

export const homeContent: Record<Language, HomeHeroContent> = {
  en: {
    name: 'Yijian Huang',
    t1: 'Economics.',
    t2: 'Policy.',
    t3: 'Impact.',
    sub: 'CUHK-Shenzhen · UChicago Harris · UN Geneva · State Council DRC',
    introEyebrow: 'Personal operating system',
    introTitle: 'Research, analysis, and AI tools in one workflow.',
    introBody: 'I connect policy questions with data, field evidence, and product thinking — building work that can move from research notes to usable systems.',
    featuredEyebrow: 'Selected directions',
    featuredTitle: 'A portfolio built around public impact.',
    exploreEyebrow: 'Explore more',
    exploreTitle: 'Open any section and keep moving.',
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
    introEyebrow: '个人工作系统',
    introTitle: '把研究、分析与 AI 工具放进同一个工作流。',
    introBody: '我把政策问题、数据证据、实地调研和产品思维连接起来，让研究不只停留在报告里，也能变成可使用的系统。',
    featuredEyebrow: '精选方向',
    featuredTitle: '围绕公共影响力展开的作品集。',
    exploreEyebrow: '继续探索',
    exploreTitle: '进入任意页面，查看完整经历。',
    cta1: '了解我的经历',
    cta2: '联系我',
    scroll: '向下滚动',
    skillsLabel: '技能',
  },
};

export const homeStats: Record<Language, HomeStat[]> = {
  en: [
    { n: '7+', l: 'Internships' },
    { n: '4', l: 'Policy briefs' },
    { n: '6', l: 'Languages' },
    { n: '3+', l: 'Countries' },
  ],
  cn: [
    { n: '7+', l: '实习经历' },
    { n: '4', l: '政策简报' },
    { n: '6', l: '语言' },
    { n: '3+', l: '国家' },
  ],
};

export const homeFocusAreas: Record<Language, HomeFocusArea[]> = {
  en: [
    {
      title: 'Policy research',
      body: 'Healthcare governance, GBA integration, trade policy, and field research translated into structured recommendations.',
      href: '/research',
      accent: '#64d2ff',
    },
    {
      title: 'Economic analysis',
      body: 'Econometrics, survey evidence, and institutional analysis for understanding how public decisions shape outcomes.',
      href: '/experience',
      accent: '#30d158',
    },
    {
      title: 'AI product building',
      body: 'AI-native workflows, research assistants, dashboards, and practical tools designed around real user needs.',
      href: '/ai',
      accent: '#ff9f0a',
    },
  ],
  cn: [
    {
      title: '政策研究',
      body: '关注医疗治理、大湾区融合、贸易政策与实地调研，把复杂问题整理成可执行的政策建议。',
      href: '/research',
      accent: '#64d2ff',
    },
    {
      title: '经济分析',
      body: '使用计量、问卷与制度分析方法，理解公共决策如何影响市场、组织与个体行为。',
      href: '/experience',
      accent: '#30d158',
    },
    {
      title: 'AI 产品构建',
      body: '搭建 AI 原生工作流、研究助手、数据仪表盘和面向真实需求的实用工具。',
      href: '/ai',
      accent: '#ff9f0a',
    },
  ],
};

export const homeFeaturedWork: Record<Language, HomeFeaturedWork[]> = {
  en: [
    {
      label: 'Research',
      title: 'Greater Bay Area healthcare governance',
      body: 'A policy analysis project on cross-border medical access, regulatory innovation, and institutional coordination.',
      href: '/research?i=0',
      accent: '#64d2ff',
    },
    {
      label: 'Experience',
      title: 'UNDP China trade policy research',
      body: 'Regression-based policy analysis and text research on China-US economic relations and trade frameworks.',
      href: '/experience',
      accent: '#30d158',
    },
    {
      label: 'AI',
      title: 'AI-native productivity experiments',
      body: 'Building tools that connect research, structured data, and interface design into repeatable workflows.',
      href: '/ai',
      accent: '#bf5af2',
    },
  ],
  cn: [
    {
      label: '科研',
      title: '粤港澳大湾区医疗治理',
      body: '围绕跨境医疗准入、监管创新与制度协调展开的政策分析项目。',
      href: '/research?i=0',
      accent: '#64d2ff',
    },
    {
      label: '经历',
      title: 'UNDP 中国贸易政策研究',
      body: '基于回归分析与文本研究，分析中美经济关系与贸易政策框架。',
      href: '/experience',
      accent: '#30d158',
    },
    {
      label: 'AI',
      title: 'AI 原生效率工具实验',
      body: '把研究、结构化数据与界面设计连接成可重复使用的工作流。',
      href: '/ai',
      accent: '#bf5af2',
    },
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
