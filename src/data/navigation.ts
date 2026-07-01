import type { Language } from '../types/language';

export const navItems = ['about', 'experience', 'research', 'campus', 'ai', 'photos', 'contact'] as const;

export type NavItem = (typeof navItems)[number];

export type NavLink = {
  t: string;
  h: string;
};

export const navLabels: Record<Language, Record<NavItem, string>> = {
  en: {
    about: 'About',
    experience: 'Experience',
    research: 'Research',
    campus: 'Campus',
    ai: 'AI',
    photos: 'Photos',
    contact: 'Contact',
  },
  cn: {
    about: '关于',
    experience: '经历',
    research: '科研',
    campus: '校园',
    ai: 'AI',
    photos: '相册',
    contact: '联系',
  },
};

export const navDropdowns: Record<Language, Record<NavItem, NavLink[]>> = {
  en: {
    about: [
      { t: 'Introduction', h: '/about' },
      { t: 'Education', h: '/about#education' },
      { t: 'Languages & Skills', h: '/about#skills' },
    ],
    experience: [
      { t: 'State Council DRC', h: '/experience?i=0' },
      { t: 'HKU Centre for AI', h: '/experience?i=1' },
      { t: 'NetEase Interactive', h: '/experience?i=2' },
      { t: 'UN Youth Program', h: '/experience?i=3' },
      { t: 'UNDP China', h: '/experience?i=4' },
      { t: 'Rongtai VC', h: '/experience?i=5' },
    ],
    research: [
      { t: 'Healthcare Governance GBA', h: '/research?i=0' },
      { t: 'Cross-border Education', h: '/research?i=1' },
      { t: 'WVS Social Survey', h: '/research?i=2' },
      { t: 'China-US Trade Policy', h: '/research?i=3' },
    ],
    campus: [
      { t: 'Cantonese Club', h: '/campus?i=0' },
      { t: 'Economics Club', h: '/campus?i=1' },
      { t: '"Go South" Project', h: '/campus?i=2' },
    ],
    ai: [
      { t: 'AI Tools Stack', h: '/ai' },
      { t: 'Academic Dashboard', h: '/ai?i=0' },
      { t: 'Tevo A.I. System', h: '/ai?i=1' },
    ],
    photos: [{ t: 'All Photos', h: '/photos' }],
    contact: [{ t: 'Email & Phone', h: '/contact' }],
  },
  cn: {
    about: [
      { t: '个人介绍', h: '/about' },
      { t: '教育背景', h: '/about#education' },
      { t: '语言与技能', h: '/about#skills' },
    ],
    experience: [
      { t: '国务院发展研究中心', h: '/experience?i=0' },
      { t: '香港大学AI中心', h: '/experience?i=1' },
      { t: '网易互娱', h: '/experience?i=2' },
      { t: '联合国青年项目', h: '/experience?i=3' },
      { t: 'UNDP中国', h: '/experience?i=4' },
      { t: '融泰私募', h: '/experience?i=5' },
    ],
    research: [
      { t: '粤港澳医疗治理', h: '/research?i=0' },
      { t: '港澳高校内地办学', h: '/research?i=1' },
      { t: '新时代社会治理调查', h: '/research?i=2' },
      { t: '中美贸易政策', h: '/research?i=3' },
    ],
    campus: [
      { t: '粤语社', h: '/campus?i=0' },
      { t: '经济学会', h: '/campus?i=1' },
      { t: '"下南洋"项目', h: '/campus?i=2' },
    ],
    ai: [
      { t: 'AI工具栈', h: '/ai' },
      { t: '学业仪表盘项目', h: '/ai?i=0' },
      { t: 'Tevo A.I. 系统', h: '/ai?i=1' },
    ],
    photos: [{ t: '全部照片', h: '/photos' }],
    contact: [{ t: '邮件与电话', h: '/contact' }],
  },
};
