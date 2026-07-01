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
    value: { en: 'Yijianhuang@link.cuhk.edu.cn', cn: 'Yijianhuang@link.cuhk.edu.cn' },
    href: 'mailto:Yijianhuang@link.cuhk.edu.cn',
  },
  {
    id: 'phone',
    label: { en: 'Phone', cn: '电话' },
    value: { en: '+86 136 3137 9946', cn: '+86 136 3137 9946' },
    href: 'tel:+8613631379946',
  },
  {
    id: 'location',
    label: { en: 'Location', cn: '所在地' },
    value: { en: 'Shenzhen · Open to worldwide', cn: '深圳 · 欢迎全球合作' },
    href: null,
  },
];
