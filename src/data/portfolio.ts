import type { Language } from '../types/language';

export type PortfolioLink = {
  label: Record<Language, string>;
  href: string;
};

export type PortfolioProject = {
  title: Record<Language, string>;
  category: Record<Language, string>;
  period: string;
  image: string;
  problem: Record<Language, string>;
  method: Record<Language, string>;
  result: Record<Language, string>;
  metrics: Array<Record<Language, string>>;
  links: PortfolioLink[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: {
      en: 'E-commerce Purchase Behavior Prediction',
      cn: '电商用户购买行为预测',
    },
    category: {
      en: 'Machine Learning · XGBoost · SHAP',
      cn: '机器学习 · XGBoost · SHAP',
    },
    period: '2026',
    image: '/portfolio/ml-shap-summary.png',
    problem: {
      en: 'The data contains 599,116 user-item pairs with only 1.12% purchase positives, so accuracy alone would hide missed purchases.',
      cn: '数据包含 599,116 个用户-商品对，购买正样本仅 1.12%，单看准确率会掩盖漏判购买的问题。',
    },
    method: {
      en: 'I built leakage-safe behavior sequence features, category target encoding, user-category z-scores, time-window density features, and an XGBoost model with imbalance-aware training.',
      cn: '我构建了防信息泄露的行为序列特征、类目 Target Encoding、用户-类目 z-score、时间窗口密度特征，并使用 XGBoost 处理类别不平衡。',
    },
    result: {
      en: 'The baseline reached AUC-ROC 0.9994, AUC-PR 0.9760, and F1 0.9639, with SHAP and error analysis used to explain model behavior.',
      cn: 'Baseline 达到 AUC-ROC 0.9994、AUC-PR 0.9760、F1 0.9639，并通过 SHAP 与错误分析解释模型行为。',
    },
    metrics: [
      { en: '599,116 user-item pairs', cn: '599,116 个用户-商品对' },
      { en: '1.12% positive class', cn: '1.12% 正样本率' },
      { en: '17 model features', cn: '17 个模型输入特征' },
      { en: 'AUC-PR 0.9760', cn: 'AUC-PR 0.9760' },
    ],
    links: [
      { label: { en: 'Download report PDF', cn: '下载报告 PDF' }, href: '/portfolio/ecommerce-xgboost-report.pdf' },
      { label: { en: 'Download slides', cn: '下载展示 slides' }, href: '/portfolio/ecommerce-xgboost-slides.pdf' },
    ],
  },
];

export const writingSamples = [
  {
    title: { en: 'Healthcare Governance in the GBA', cn: '粤港澳大湾区医疗治理' },
    type: { en: 'Policy analysis summary', cn: '政策分析摘要' },
    href: '/research?i=0',
    summary: {
      en: 'A policy analysis on Hong Kong-Macao Medicine and Equipment Connect, focusing on staged delegation, regulatory coordination, and expansion paths for cross-border healthcare governance.',
      cn: '关于“港澳药械通”的政策分析，聚焦分阶段授权、监管协同和跨境医疗治理的扩展路径。',
    },
  },
  {
    title: { en: 'China-US Trade Policy Research', cn: '中美贸易政策研究' },
    type: { en: 'Econometric policy brief summary', cn: '计量政策简报摘要' },
    href: '/research?i=3',
    summary: {
      en: 'A UNDP-linked research project using Stata regression and policy text analysis to connect diplomatic and tariff events with bilateral trade outcomes.',
      cn: 'UNDP 相关研究项目，使用 Stata 回归与政策文本分析，连接外交/关税事件与双边贸易结果。',
    },
  },
  {
    title: { en: 'Cross-border Education in the GBA', cn: '港澳高校内地办学研究' },
    type: { en: 'Comparative research summary', cn: '比较研究摘要' },
    href: '/research?i=1',
    summary: {
      en: 'A comparative study of CUHK-Shenzhen, HKUST(GZ), and University of Macau Hengqin, based on interviews and institutional governance analysis.',
      cn: '基于访谈与制度治理分析，比较港中深、港科大广州与澳门大学横琴校区的跨境办学模式。',
    },
  },
];

export const trustLinks: PortfolioLink[] = [
  { label: { en: 'LinkedIn', cn: 'LinkedIn' }, href: 'https://www.linkedin.com/in/%E4%B8%80%E5%81%A5-%E9%BB%84-0b8b41320/' },
  { label: { en: 'GitHub', cn: 'GitHub' }, href: 'https://github.com/wonghenry800-bit' },
  { label: { en: 'Resume PDF', cn: '简历 PDF' }, href: '/resume-yijian-huang.pdf' },
];
