import type { Language } from '../types/language';

export type ContactItem = {
  id: 'email' | 'phone' | 'location' | 'linkedin' | 'github' | 'resume';
  label: Record<Language, string>;
  value: Record<Language, string>;
  href: string | null;
};

export const contactItems: ContactItem[] = [
  {
    id: 'email',
    label: { en: 'Email', cn: '邮箱' },
    value: { en: 'wonghenry800@gmail.com', cn: 'wonghenry800@gmail.com' },
    href: 'mailto:wonghenry800@gmail.com',
  },
  {
    id: 'phone',
    label: { en: 'Phone', cn: '电话' },
    value: { en: '+86 17881804659', cn: '+86 17881804659' },
    href: 'tel:+8617881804659',
  },
  {
    id: 'location',
    label: { en: 'Location', cn: '所在地' },
    value: { en: 'Shanghai, China · Open to worldwide', cn: '中国上海 · 欢迎全球合作' },
    href: null,
  },
  {
    id: 'linkedin',
    label: { en: 'LinkedIn', cn: 'LinkedIn' },
    value: { en: 'Yijian Huang', cn: '黄一健' },
    href: 'https://www.linkedin.com/in/%E4%B8%80%E5%81%A5-%E9%BB%84-0b8b41320/',
  },
  {
    id: 'github',
    label: { en: 'GitHub', cn: 'GitHub' },
    value: { en: 'wonghenry800-bit', cn: 'wonghenry800-bit' },
    href: 'https://github.com/wonghenry800-bit',
  },
  {
    id: 'resume',
    label: { en: 'Resume', cn: '简历' },
    value: { en: 'Download PDF', cn: '下载 PDF' },
    href: '/resume-yijian-huang.pdf',
  },
];
