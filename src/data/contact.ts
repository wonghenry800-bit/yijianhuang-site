import type { Language } from '../types/language';

export type ContactItem = {
  id: 'email' | 'phone' | 'location';
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
    value: { en: 'Shenzhen · Open to worldwide', cn: '深圳 · 欢迎全球合作' },
    href: null,
  },
];
