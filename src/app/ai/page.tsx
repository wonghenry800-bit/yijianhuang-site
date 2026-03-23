'use client';

import { useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const tools = [
  { name: 'Claude Code', cat: 'Coding Agent', desc: 'Anthropic\'s agentic coding environment. I use it for full-stack development, debugging complex TypeScript/Python projects, and building this portfolio — treating it as a pair programmer that understands the entire codebase.', color: '#cc785c', icon: 'CC' },
  { name: 'GPT Codex / o3', cat: 'Reasoning & Code', desc: 'OpenAI\'s code-generation and advanced reasoning models. I leverage o3 for complex econometric problem-solving, research outline structuring, and multi-step policy analysis tasks requiring deep logical chains.', color: '#10a37f', icon: 'OA' },
  { name: 'Minimax 2.7', cat: 'Daily Operations', desc: 'Integrated via OpenClaw for handling daily workflows — document summarization, Chinese-English translation, meeting notes, and rapid literature synthesis. Minimax\'s long-context window makes it ideal for processing lengthy policy documents.', color: '#7c3aed', icon: 'MM' },
  { name: 'OpenClaw', cat: 'AI Deployment', desc: 'My primary AI orchestration platform for deploying and managing multiple model APIs. I use it to route tasks to the optimal model, manage context windows, and build lightweight automation pipelines for research workflows.', color: '#0ea5e9', icon: 'OC' },
  { name: 'Cursor IDE', cat: 'Dev Environment', desc: 'AI-native code editor built on VS Code. I write virtually all my code here — its inline AI completions and codebase-aware chat dramatically accelerate development of data analysis scripts, web apps, and research tools.', color: '#1d1d1f', icon: 'CU' },
  { name: 'Perplexity Pro', cat: 'Research', desc: 'Real-time AI search for academic and policy research. I use it to rapidly survey literature, track breaking policy developments, and cross-reference sources — especially useful for GBA policy research where information changes fast.', color: '#20b8cd', icon: 'PP' },
  { name: 'Stata + AI', cat: 'Econometrics', desc: 'I combine traditional econometric workflows in Stata with AI-assisted code generation and interpretation. This hybrid approach — using Claude to write regression code and explain output — dramatically accelerates empirical policy research.', color: '#1a56db', icon: 'ST' },
  { name: 'NotebookLM', cat: 'Knowledge Mgmt', desc: 'Google\'s AI notebook for synthesizing research corpora. I upload policy documents, academic papers, and interview transcripts, then use AI-powered Q&A to extract insights across large document collections.', color: '#4285f4', icon: 'NL' },
];

const projects = {
  en: [
    {
      name: 'Student Academic Dashboard',
      subtitle: 'AI + Education · CUHK-Shenzhen AIE4901 Capstone',
      course: 'AIE4901 — AI Capstone Project, SAI College, CUHK-Shenzhen',
      status: 'In Development',
      statusColor: '#30d158',
      tags: ['EdTech', 'AI Dashboard', 'Data Visualization', 'Product Design'],
      color: '#2997ff',
      overview: 'A digital platform addressing a core pain point in undergraduate academic management: fragmented course information, intuition-driven planning, and the disconnect between coursework and skill development. Designed for two user roles — students and Academic Advisors (AA).',
      sections: [
        {
          title: 'The Problem',
          content: 'Undergraduate academic management is fragmented. Course information is scattered, major selection and career planning rely on intuition, and there\'s no clear mapping between courses taken and skills actually developed. Academic Advisors face data silos, struggle to proactively identify at-risk students, and make decisions without data support.'
        },
        {
          title: 'Student Dashboard — My Contribution',
          content: 'I led the design of two core modules. First: a drag-and-drop course planning timeline, where students can intuitively arrange their entire 4-year learning path like puzzle pieces, with real-time credit and prerequisite validation. Second: a Competency Radar Chart — my primary design responsibility. I decomposed program learning objectives into specific competencies (programming, data analysis, communication, etc.), linked each course to these capability tags, and built a visualization showing which "skill nodes" a student\'s current course selection is activating — and what gaps remain toward their target competency profile.'
        },
        {
          title: 'Academic Advisor Dashboard',
          content: 'On the AA side, I helped define feature specifications to free advisors from manual data compilation. Modules include: Academic Overview (aggregating all student progress), Risk Alerts (flagging GPA drops, failed core courses), Communication Log (tracking advising history), and Student Management (batch operations + individual deep-dive). All designed to provide data-driven decision support and proactive student intervention.'
        },
        {
          title: 'My Role',
          content: 'Core team member — translated abstract user needs into concrete product feature specifications. Led user research and data collection in early stages. Primary designer of the Competency Radar Chart visualization system. The greatest satisfaction: taking "optimize academic management" from a vague ambition to specific, buildable product features.'
        }
      ]
    },
    {
      name: 'Tevo Group — Tévo A.I. System',
      subtitle: 'Intelligent Physical Commerce Platform · AI Retail & F&B',
      course: 'MGT3650 — AI in Strategic & Entrepreneurial Management, CUHK-Shenzhen',
      status: 'Active',
      statusColor: '#ff9500',
      tags: ['SaaS', 'Retail AI', 'NLP', 'Market Intelligence', 'B2B'],
      color: '#ff9500',
      overview: 'An AI-powered SaaS platform revolutionizing how global retail and F&B brands make market expansion decisions — shifting from intuition-driven to evidence-driven strategy. Built around a dual-layer "Tévo Operating System" architecture.',
      sections: [
        {
          title: 'The Problem We\'re Solving',
          content: 'When companies decide whether to enter a new market with a retail or F&B concept, they typically rely on gut instinct, small focus groups, or limited pilot testing — not solid market evidence. In lifestyle and dining categories where consumer preferences are highly fragmented, this subjective decision-making carries enormous risk. We built Tevo A.I. to change this.'
        },
        {
          title: 'Macro Layer — Strategic Validation',
          content: 'I led development of an AI Market Evidence System using NLP, clustering analysis, and machine learning to automatically scrape and analyze massive public datasets from target markets (social media discussions, user reviews, competitor intelligence). The system identifies high-frequency genuine consumer need scenarios and generates a structured, audit-grade due diligence report with a quantified "Certainty Score" (0–1) — directly recommending "Proceed," "Proceed with Caution," or "Abandon" for a market entry plan. Data replaces guesswork.'
        },
        {
          title: 'Micro Layer — Operational Execution',
          content: 'Once market validation passes, I designed the "AI Waiter" architecture for front-line stores — an intelligent platform integrating AI interaction interface, recommendation engine, and POS/middleware systems. It generates personalized product recommendations in real-time based on customers\' expressed preferences, intent, and budget in conversation, while strictly adhering to headquarters-set brand strategy, pricing rules, and inventory constraints. Store managers get a customizable parameter control panel: "strict governance with personalization."'
        },
        {
          title: 'The Learning Loop & Business Model',
          content: 'The system\'s unique feature: a continuous learning loop where micro-level customer interaction data feeds back to optimize macro-level market evidence analysis. Beyond powering our own Tévo Lounge brand and PiPi Program distribution system, the platform has enormous independent commercialization potential as end-to-end B2B infrastructure — licensable to any retail/F&B brand seeking global expansion with data-driven, low-risk scaling.'
        }
      ]
    }
  ],
  cn: [
    {
      name: '学生学业进度仪表盘',
      subtitle: 'AI + 教育 · 港中深 AIE4901 顶点项目',
      course: 'AIE4901 — AI顶点项目，港中深SAI学院',
      status: '开发中',
      statusColor: '#30d158',
      tags: ['教育科技', 'AI仪表盘', '数据可视化', '产品设计'],
      color: '#2997ff',
      overview: '一个解决本科学业管理核心痛点的数字化平台：信息碎片化、规划凭直觉、课程学习与能力发展脱节。面向学生和学术导师（AA）两个用户角色设计。',
      sections: [
        {
          title: '我们要解决的问题',
          content: '本科生的学业管理通常是碎片化的——课程信息散落各处，选课和职业规划凭感觉，所学课程与实际需要培养的技能之间缺乏清晰映射。学术导师同样面临数据孤岛、难以主动发现学生风险、决策缺乏数据支持的困境。'
        },
        {
          title: '学生端仪表盘——我的贡献',
          content: '我主导设计了两大核心模块。一是课程拖拽规划时间线——学生能像拼图一样直观拖拽课程，规划四年学习路径，系统实时进行学分和先修课校验。二是能力规划雷达图（我直接负责的可视化模块）——将专业培养目标分解为多项具体能力，将每门课程与能力标签关联，让学生能直观看到当前选课组合正在"点亮"哪些技能点，以及距离目标能力模型还有哪些差距。'
        },
        {
          title: '学术导师（AA）端仪表盘',
          content: '在AA端，我协助定义了功能模块规格，旨在将导师从繁琐数据整理和被动响应中解放出来。包括：学业概览（聚合所有学生整体进度）、风险预警（GPA波动、关键课程挂科等指标）、沟通概览（记录辅导历史）、学生管理（批量操作+单个学生深度查看）。全部为AA提供数据驱动的决策支持。'
        },
        {
          title: '我的角色',
          content: '核心团队成员——将抽象用户需求转化为具体产品功能规格。主导早期用户调研和数据收集。能力雷达图可视化系统的主要设计者。最大的成就感：将"优化学业管理"这个宏大命题，通过具体可构建的产品功能真正落地。'
        }
      ]
    },
    {
      name: 'Tevo Group — Tévo A.I. 系统',
      subtitle: '智能实体商业平台 · AI零售与餐饮',
      course: 'MGT3650 — AI战略与创业管理，港中深',
      status: '进行中',
      statusColor: '#ff9500',
      tags: ['SaaS', '零售AI', 'NLP', '市场情报', 'B2B'],
      color: '#ff9500',
      overview: '一个AI驱动的SaaS平台，革新全球零售和餐饮品牌的市场扩张决策模式——从直觉驱动转变为证据驱动。围绕双层"Tévo操作系统"架构构建。',
      sections: [
        {
          title: '我们要解决的问题',
          content: '企业在决定将新的零售或餐饮概念引入新市场时，往往依赖直觉、小范围焦点小组或有限的试点测试，而非坚实的市场证据。在生活方式和餐饮这类消费者偏好高度分散的行业，这种主观决策模式风险极高。Tevo A.I.的使命，就是改变这一现状。'
        },
        {
          title: '宏观层——战略验证层',
          content: '我领导开发了AI市场证据系统，利用NLP、聚类分析和机器学习，自动抓取并分析目标市场的海量公开数据（社交媒体讨论、用户评价、竞争对手信息）。系统识别高频真实消费者需求场景，生成结构化的审计级尽职调查报告，提供量化"确定性分数"（0-1分），直接建议"推进"、"谨慎推进"或"放弃"——用数据替代猜测。'
        },
        {
          title: '微观层——运营执行层',
          content: '市场验证通过后，我主导设计了面向终端门店的"AI服务生"架构——整合AI交互界面、推荐引擎和POS/中台系统的智能平台。根据顾客在对话中表达的偏好、意图和预算，实时生成个性化产品推荐，同时严格遵守总部设定的品牌策略、定价规则和库存限制。店长获得可自定义参数的控制面板，实现"严格治理下的个性化"。'
        },
        {
          title: '持续学习闭环与商业模式',
          content: '系统独特之处：微观运营中收集的顾客交互数据，反哺并优化宏观层市场证据分析，形成持续进化的学习闭环。除赋能自营品牌Tévo Lounge和PiPi Program分销系统外，该平台作为端到端B2B基础设施具有巨大独立商业化潜力，可授权给任何寻求全球扩张的零售和餐饮品牌。'
        }
      ]
    }
  ]
};

export default function AIPage() {
  const { lang, setLang } = useLanguage();
  const [sel, setSel] = useState<number | null>(null);
  const data = projects[lang];

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="ai" dark />

      {/* Hero */}
      <div style={{ padding: '100px 24px 70px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(41,151,255,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>
          {lang === 'en' ? 'Technology' : '技术'}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: 20 }}>
          {lang === 'en' ? 'AI Applications' : 'AI 应用'}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.4)', maxWidth: 560, margin: '0 auto' }}>
          {lang === 'en'
            ? 'Building at the frontier — from daily workflows to AI-native ventures'
            : '在AI前沿构建——从日常工作流到AI原生创业项目'}
        </motion.p>
      </div>

      {/* Tools Grid */}
      <div style={{ background: '#fff', borderRadius: '24px 24px 0 0', padding: '56px 24px 0' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 20 }}>
            {lang === 'en' ? 'Daily Stack' : '工具栈'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 60 }}>
            {tools.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                style={{ background: '#f5f5f7', borderRadius: 16, padding: '18px 20px', border: '0.5px solid rgba(0,0,0,0.06)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                  {t.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#1d1d1f' }}>{t.name}</span>
                    <span style={{ fontSize: 10, fontWeight: 600, padding: '1px 7px', borderRadius: 100, background: 'rgba(0,0,0,0.06)', color: '#6e6e73' }}>{t.cat}</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#6e6e73', lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Projects */}
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 20 }}>
            {lang === 'en' ? 'AI Ventures' : 'AI 创业项目'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 80 }}>
            {data.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.3 }}
                onClick={() => setSel(i)}
                style={{ background: '#1d1d1f', borderRadius: 20, padding: '24px', cursor: 'pointer', border: '0.5px solid rgba(255,255,255,0.06)', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#2c2c2e')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1d1d1f')}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: p.color, color: '#fff' }}>
                    {p.status}
                  </span>
                  <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: p.statusColor }} />
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.02em', marginBottom: 6 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>{p.subtitle}</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: '0 0 16px' }}>{p.overview}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {p.tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 100, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(24px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#1c1c1e', borderRadius: 22, maxWidth: 600, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              {/* Header */}
              <div style={{ padding: '28px 28px 20px', borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: data[sel].color, color: '#fff' }}>{data[sel].status}</span>
                  <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: data[sel].statusColor }} />
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.02em', marginBottom: 6 }}>{data[sel].name}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{data[sel].subtitle}</div>
                <div style={{ fontSize: 11, color: '#2997ff' }}>{data[sel].course}</div>
              </div>
              {/* Content */}
              <div style={{ padding: '24px 28px 28px' }}>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 24 }}>{data[sel].overview}</p>
                {data[sel].sections.map((s, i) => (
                  <div key={i} style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: data[sel].color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{s.title}</div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: 0 }}>{s.content}</p>
                  </div>
                ))}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20, paddingTop: 20, borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
                  {data[sel].tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 100, background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }}>{tag}</span>
                  ))}
                </div>
                <button onClick={() => setSel(null)} style={{ marginTop: 24, width: '100%', padding: '12px 0', borderRadius: 100, background: data[sel].color, color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                  {lang === 'en' ? 'Close' : '关闭'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
