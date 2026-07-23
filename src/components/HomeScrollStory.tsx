'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import type { Language } from '../types/language';
import { publicImage } from '../utils/publicImage';

type StoryItem = { step: string; title: string; body: string };

const story: Record<Language, StoryItem[]> = {
  en: [
    {
      step: '01 · Frame',
      title: 'Start with the question.',
      body: 'Map the institution, the people, and the incentives before choosing a method.',
    },
    {
      step: '02 · Test',
      title: 'Move through evidence.',
      body: 'Combine field interviews, policy documents, data analysis, and technical experiments.',
    },
    {
      step: '03 · Build',
      title: 'Turn insight into something usable.',
      body: 'A recommendation, a digital system, or an AI workflow should make the next decision clearer.',
    },
  ],
  cn: [
    {
      step: '01 · 定义',
      title: '先找到真正的问题。',
      body: '理解机构、参与者与激励机制，再选择研究方法和行动路径。',
    },
    {
      step: '02 · 验证',
      title: '让证据不断靠近答案。',
      body: '把实地访谈、政策文本、数据分析与技术实验放在同一条证据链中。',
    },
    {
      step: '03 · 构建',
      title: '把洞察变成能使用的成果。',
      body: '无论是政策建议、数字系统还是 AI 工作流，都应让下一次决策更加清晰。',
    },
  ],
};

export default function HomeScrollStory({ lang }: { lang: Language }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const panelX = useTransform(scrollYProgress, [0, 0.5, 1], ['-5%', '0%', '5%']);
  const panelRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const items = story[lang];
  const activeItem = items[activeStep];

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const nextStep = latest < 0.34 ? 0 : latest < 0.67 ? 1 : 2;
    setActiveStep(current => current === nextStep ? current : nextStep);
  });

  return (
    <section ref={sectionRef} className="home-story" aria-label={lang === 'en' ? 'How I work' : '我的工作方法'}>
      <div className="home-story__sticky">
        <div className="home-story__wash" aria-hidden="true" />
        <div className="home-story__layout">
          <div className="home-story__copy">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${lang}-${activeStep}`}
                className="home-story__chapter"
                initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <span>{activeItem.step}</span>
                <h2>{activeItem.title}</h2>
                <p>{activeItem.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div className="home-story__visual" style={{ x: panelX, rotate: panelRotate }}>
            <motion.div className="home-story__frame home-story__frame--main" style={{ scale: imageScale }}>
              <Image
                src={publicImage('/gallery/数字经济峰会.jpg')}
                alt={lang === 'en' ? 'Digital Economy Summit' : '数字经济峰会'}
                fill
                sizes="(max-width: 900px) 82vw, 520px"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <div className="home-story__frame home-story__frame--top">
              <Image
                src={publicImage('/gallery/unytp-china-delegate.jpg')}
                alt={lang === 'en' ? 'United Nations youth programme' : '联合国青年人才培养计划'}
                fill
                sizes="220px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="home-story__frame home-story__frame--bottom">
              <Image
                src={publicImage('/gallery/gba_edu_2.jpeg')}
                alt={lang === 'en' ? 'Greater Bay Area research' : '粤港澳大湾区研究'}
                fill
                sizes="240px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="home-story__glass-label">
              <span>{lang === 'en' ? 'FIELD · DATA · SYSTEMS' : '实地 · 数据 · 系统'}</span>
              <strong>{lang === 'en' ? 'One connected practice' : '一套相互连接的实践'}</strong>
            </div>
          </motion.div>
        </div>

        <div className="home-story__progress" aria-hidden="true">
          <motion.span style={{ scaleX: progressScale }} />
        </div>
      </div>
    </section>
  );
}
