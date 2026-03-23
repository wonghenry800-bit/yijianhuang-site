'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const toolsData = {
  en: [
    { name: 'Claude Code', cat: 'Coding Agent', desc: "Anthropic's agentic coding environment — my primary dev tool. Full-stack development, debugging complex TypeScript/Python projects, and building this portfolio. Acts as a pair programmer that understands the entire codebase.", color: '#cc785c', icon: 'CC' },
    { name: 'GPT o3 / Codex', cat: 'Reasoning & Code', desc: "OpenAI's advanced reasoning models. Used for complex econometric problem-solving, multi-step policy analysis requiring deep logical chains, and structuring long-form research outlines.", color: '#10a37f', icon: 'OA' },
    { name: 'Minimax 2.7', cat: '日常运营 / Daily Ops', desc: "Integrated via OpenClaw for daily workflows — document summarization, Chinese-English translation, meeting notes, and rapid literature synthesis. Extended context window ideal for lengthy policy documents.", color: '#7c3aed', icon: 'MM' },
    { name: 'OpenClaw', cat: 'AI Deployment', desc: "AI orchestration platform for deploying and managing multiple model APIs. Routes tasks to the optimal model, manages context windows, and builds automation pipelines for research workflows.", color: '#0ea5e9', icon: 'OC' },
    { name: 'Cursor IDE', cat: 'Dev Environment', desc: "AI-native code editor built on VS Code. Inline AI completions and codebase-aware chat dramatically accelerate development of data analysis scripts, web apps, and automation tools.", color: '#1d1d1f', icon: 'CU' },
    { name: 'Coze Platform', cat: 'Agent Builder', desc: "Low-code platform for building conversational AI agents. Used to build the Dashboard AI Assistant — configuring RAG workflows, intent classification, and DeepSeek-V3.1 model integration for academic advising.", color: '#f59e0b', icon: 'CZ' },
    { name: 'Perplexity Pro', cat: 'Research', desc: "Real-time AI search for academic and policy research. Rapidly surveys literature, tracks breaking policy developments, and cross-references sources — especially useful for fast-changing GBA policy research.", color: '#20b8cd', icon: 'PP' },
    { name: 'Stata + AI', cat: 'Econometrics', desc: "Traditional econometric workflows in Stata combined with AI-assisted code generation and output interpretation. Claude writes regression code and explains results — dramatically accelerating empirical policy research.", color: '#1a56db', icon: 'ST' },
  ],
  cn: [
    { name: 'Claude Code', cat: '编程 Agent', desc: 'Anthropic 的 agentic 编程环境——我的主要开发工具。用于全栈开发、调试复杂的 TypeScript/Python 项目以及构建本网站。能理解整个代码库，是真正意义上的配对程序员。', color: '#cc785c', icon: 'CC' },
    { name: 'GPT o3 / Codex', cat: '推理与代码', desc: 'OpenAI 高级推理模型。用于复杂计量经济学问题求解、需要深度逻辑链的多步政策分析，以及需要战略连贯性的长篇研究提纲设计。', color: '#10a37f', icon: 'OA' },
    { name: 'Minimax 2.7', cat: '日常运营', desc: '通过 OpenClaw 接入，处理日常工作流——文件摘要、中英翻译、会议记录和快速文献综述。超长上下文窗口非常适合一次性处理冗长的政策文件和研究论文。', color: '#7c3aed', icon: 'MM' },
    { name: 'OpenClaw', cat: 'AI 部署', desc: '我的 AI 编排平台，用于部署和管理多个模型 API。将任务路由到最优模型、管理上下文窗口，为研究工作流构建轻量级自动化管道。', color: '#0ea5e9', icon: 'OC' },
    { name: 'Cursor IDE', cat: '开发环境', desc: '基于 VS Code 的 AI 原生代码编辑器。内联 AI 补全和代码库感知对话大幅加速数据分析脚本、Web 应用和自动化工具的开发。', color: '#1d1d1f', icon: 'CU' },
    { name: 'Coze 平台', cat: 'Agent 构建', desc: '低代码对话 AI 搭建平台。用于构建学业仪表盘AI助手——配置 RAG 工作流、意图分类，接入 DeepSeek-V3.1 模型，服务学术导师辅导场景。', color: '#f59e0b', icon: 'CZ' },
    { name: 'Perplexity Pro', cat: '学术研究', desc: '实时 AI 搜索，用于学术和政策研究。快速文献调研、追踪最新政策动态、交叉引用来源——尤其适合信息变化快的大湾区政策研究。', color: '#20b8cd', icon: 'PP' },
    { name: 'Stata + AI', cat: '计量经济学', desc: '将 Stata 传统计量工作流与 AI 辅助代码生成和结果解读结合。用 Claude 编写回归代码并解释输出——大幅提升实证政策研究效率。', color: '#1a56db', icon: 'ST' },
  ],
};

const projectsData = {
  en: [
    {
      name: 'Student Study Progress Dashboard',
      subtitle: 'AI + Education · CUHK-Shenzhen AIE4901 Capstone',
      course: 'AIE4901 — AI Capstone Project, SAI College · Instructors: Mengmeng Liu & Marcus Chan · March 2026',
      team: 'Tian Haoyu · Huang Yijian · Wu Xitong · Ye Yijia · Lee Owen',
      status: 'In Development', statusColor: '#30d158',
      tags: ['EdTech', 'AI Dashboard', 'React + Next.js', 'FastAPI', 'Coze RAG', 'DeepSeek-V3.1'],
      color: '#2997ff',
      imgs: ['/gallery/ai/dashboard_1.jpg', '/gallery/ai/dashboard_2.jpg', '/gallery/ai/dashboard_3.jpg', '/gallery/ai/dashboard_4.jpg', '/gallery/ai/dashboard_5.jpg'],
      overview: 'A one-stop digital academic progress management platform targeting pain points of undergraduate lifecycle management. Integrates academic planning, time management, and career skill mapping for students, academic advisors (AA), and university administrators.',
      sections: [
        { title: 'The Problem & User Research', content: 'Students face three core problems: information fragmentation (course info scattered across multiple systems), blind planning (no tools to balance GPA goals with career development over 4 years), and skill-course disconnection. Administrators face data silos and decision-making without real data support. Our survey of 50+ students across CUHK-Shenzhen confirmed: "Plan all courses on a drag-and-drop timeline" was the #1 most desired feature, followed by GPA-targeted recommendations and skills visualization.' },
        { title: 'Key Module 1 — Course Drag-and-Drop Planning (My Co-design)', content: '12 semester columns from freshman to senior year. Students drag course cards from a filterable course pool into columns. Real-time validation of prerequisite conflicts, credit limits, and mutual exclusions. Course cards use distinct colors by type (major: deep blue, GE: light green, electives: light orange). I co-designed the rule validation architecture with team leader Tian Haoyu.' },
        { title: 'Key Module 2 — Competency Radar Chart (My Primary Contribution)', content: 'Three-column layout: course pool (left), semester planning (center), radar chart (right). Tracks 6 capability dimensions: Professional Foundation, Logical Thinking, Communication Expression, Teamwork Collaboration, Innovation Practice, Information Literacy. Each course has a "Capability Dimension Impact" vector (0–5 per dimension). As students drag courses in, the prediction line (blue solid) updates in real-time against the baseline (gray dashed). Clicking a dimension label highlights relevant courses.' },
        { title: 'AA Dashboard & AI Assistant', content: 'Academic Advisor dashboard (designed by Ye Yijia with my specification support): Academic Overview (GPA distribution + credit completion), Risk Snapshot (auto-flagging High Risk / Credit Alert / GPA Drop / No Contact), Communication Overview (Risk-Communication Matrix), Student Management. AI Assistant built on Coze with DeepSeek-V3.1, RAG knowledge base, and intent classification for natural language queries like "Show me students I need to contact urgently."' },
        { title: 'Tech Stack', content: 'Frontend: React 18.2 + Next.js + Shadcn + TypeScript. Backend: Python + FastAPI. Database: MySQL (Registry API integration planned). Visualizations: Chart.js + Recharts. AI: Coze platform + DeepSeek-V3.1. AI-generated mock data for demo. Bilingual support (CN/EN) throughout.' },
      ]
    },
    {
      name: 'Tevo Group — Tévo A.I. System',
      subtitle: 'Intelligent Physical Commerce Platform · AI Retail & F&B',
      course: 'MGT3650 — AI in Strategic & Entrepreneurial Management · CUHK-Shenzhen · Group 3',
      team: 'Huang Yijian (AI Architecture Lead)',
      status: 'Active', statusColor: '#ff9500',
      tags: ['SaaS', 'NLP', 'Clustering & Data Mining', 'ML Certainty Scoring', 'RecSys', 'B2B Infrastructure'],
      color: '#8b0000',
      imgs: ['/gallery/ai/tevo_1.jpg', '/gallery/ai/tevo_2.jpg', '/gallery/ai/tevo_3.jpg', '/gallery/ai/tevo_4.jpg', '/gallery/ai/tevo_5.jpg', '/gallery/ai/tevo_6.jpg'],
      overview: 'An AI-powered SaaS platform shifting retail/F&B franchise expansion from "opinion-heavy manual testing" to "auditable DD-grade verification." Built around the Tévo Operating System — a dual-layer architecture bridging macro market evidence and micro operational execution.',
      sections: [
        { title: 'The Problem — Guesswork in Franchise Decisions', content: 'In lifestyle and dining, validation is structurally weak due to fragmented consumer preferences. The core question has shifted: not "Is the product good?" but "Is the concept naturally needed?" The biggest risk is entering a market without due-diligence-grade evidence. Tevo A.I. was built to replace guesswork with auditable, structured market evidence.' },
        { title: 'Macro Layer — AI Market Evidence System (My Architecture)', content: 'Pipeline: Semantic Topic Packages → Traceable Crawling → Denoising & Clustering → Extract High-Frequency Scenarios → Certainty Score (0–1). 4 AI technologies: NLP (parses social comments, competitor menus, public discourse), Clustering & Data Mining (denoises massive datasets), Machine Learning (calibrates certainty scoring via pattern recognition), RecSys (micro layer). Fixed output: executive summary + market landscape + risk analysis + GO/CONDITIONAL/NO-GO decision.' },
        { title: 'Micro Layer — AI Waiter Architecture', content: '3-layer stack: AI Waiter Client → Recommendation Engine → POS/Mid-office OS. Customer inputs (preference signals, intent e.g. "refreshing," "social," and budget bands) flow through a Brand-Safe Recommendation engine enforcing HQ push priorities, item weights, sold-out logic, and campaign rules. Privacy-safe: preferences collected via lightweight conversation only. Store managers get customizable control panels — High/Medium/Low Priority sliders and brand guardrails.' },
        { title: 'Continuous Learning Loop & Commercialization', content: 'Self-improving loop: Customer Interactions (Micro) → Preference Signal Aggregation → Refined Market Evidence (Macro) → Optimized Retail Concepts. Real-world choices continuously validate initial due diligence. Three commercialization pillars: (1) Market Demand — investors need non-financial certainty scoring before capital deployment; (2) Scalability — software-driven franchise authorization without linear headcount growth; (3) Business Model — end-to-end B2B infrastructure licensing (due diligence SaaS + operational OS fees).' },
      ]
    }
  ],
  cn: [
    {
      name: '学生学业进度仪表盘',
      subtitle: 'AI + 教育 · 港中深 AIE4901 顶点项目',
      course: 'AIE4901 — AI顶点项目，SAI学院 · 指导老师：刘萌萌 & Marcus Chan · 2026年3月',
      team: '田昊宇 · 黄一健 · 吴希彤 · 叶怡佳 · Lee Owen',
      status: '开发中', statusColor: '#30d158',
      tags: ['教育科技', 'AI仪表盘', 'React + Next.js', 'FastAPI', 'Coze RAG', 'DeepSeek-V3.1'],
      color: '#2997ff',
      imgs: ['/gallery/ai/dashboard_1.jpg', '/gallery/ai/dashboard_2.jpg', '/gallery/ai/dashboard_3.jpg', '/gallery/ai/dashboard_4.jpg', '/gallery/ai/dashboard_5.jpg'],
      overview: '一个针对本科学业全生命周期管理痛点的一站式数字化学业进度管理平台，整合学业规划、时间管理与职业技能映射，服务学生、学术导师（AA）和大学学术管理者三类用户。',
      sections: [
        { title: '问题背景与用户调研', content: '学生面临三大核心痛点：信息碎片化（课程信息散落在多个系统）、规划盲目（缺乏工具在四年维度平衡GPA目标与职业发展）、技能与课程脱节。管理员面临数据孤岛和决策缺乏数据支撑。对港中深50+名学生的调研证实："拖拽排课时间线"是最受欢迎的功能（5.51分），其次是GPA目标课程推荐（4.18分）和技能可视化（3.37分）。' },
        { title: '核心模块一——课程拖拽规划时间线（我的共同设计）', content: '从大一到大四横向排列12个学期列。学生从可筛选的课程池中将课程卡片拖入学期列。系统实时验证先修课冲突、学分限制和互斥规则。课程卡片按类型区分颜色（专业课：深蓝；通识课：浅绿；选修课：浅橙）。我与队长田昊宇共同设计了规则校验架构。' },
        { title: '核心模块二——能力规划雷达图（我的主要贡献）', content: '三列布局：课程池（左）、学期规划列（中）、雷达图（右）。追踪6个能力维度：专业基础、逻辑思维、沟通表达、团队协作、创新实践、信息素养。每门课程在后端有"能力维度影响"向量（0-5分）。学生拖动课程时，预测线（蓝色实线）实时对比基准线（灰色虚线）更新。点击维度标签可高亮相关课程。' },
        { title: 'AA仪表盘与AI助手', content: '学术导师仪表盘（叶怡佳设计，我参与规格定义）：学业概览（GPA分布 + 学分完成进度）、风险预警（自动标记高风险/学分预警/GPA下降/长期失联）、沟通概览（风险-沟通矩阵）、学生管理。AI助手基于Coze平台和DeepSeek-V3.1构建，配置RAG知识库和意图分类，支持自然语言查询，如"显示我需要紧急联系的学生"。' },
        { title: '技术栈', content: '前端：React 18.2 + Next.js + Shadcn + TypeScript。后端：Python + FastAPI。数据库：MySQL（规划接入注册处API）。可视化：Chart.js + Recharts。AI：Coze平台 + DeepSeek-V3.1。演示使用AI生成的模拟数据。全平台支持中英双语切换。' },
      ]
    },
    {
      name: 'Tevo Group — Tévo A.I. 系统',
      subtitle: '智能实体商业平台 · AI零售与餐饮',
      course: 'MGT3650 — AI战略与创业管理 · 港中深 · 第三组',
      team: '黄一健（AI架构负责人）',
      status: '进行中', statusColor: '#ff9500',
      tags: ['SaaS', 'NLP', '聚类与数据挖掘', 'ML确定性评分', '推荐系统', 'B2B基础设施'],
      color: '#8b0000',
      imgs: ['/gallery/ai/tevo_1.jpg', '/gallery/ai/tevo_2.jpg', '/gallery/ai/tevo_3.jpg', '/gallery/ai/tevo_4.jpg', '/gallery/ai/tevo_5.jpg', '/gallery/ai/tevo_6.jpg'],
      overview: '一个AI驱动的SaaS平台，将零售和餐饮加盟扩张决策从"依赖直觉的人工测试"转变为"可审计的尽职调查级验证"。围绕Tévo操作系统构建——连接宏观市场证据与微观运营执行的双层架构。',
      sections: [
        { title: '核心问题——加盟决策中的猜测陷阱', content: '在生活方式和餐饮品类中，由于消费者偏好高度分散，市场验证结构性薄弱。核心问题已转变：不是"产品好不好"，而是"这个概念是否被市场自然需要"？最大的风险是在没有尽职调查级证据的情况下进入市场。Tevo A.I.就是为此而生。' },
        { title: '宏观层——AI市场证据系统（我的架构设计）', content: '流水线：语义主题包 → 可溯源爬取 → 去噪与聚类 → 提取高频场景 → 整体确定性分数（0-1）。4项AI技术：NLP（解析社交评论、竞品菜单、公开讨论）、聚类与数据挖掘（去噪海量数据集）、机器学习（基于模式识别校准确定性评分）、推荐系统（微观层）。固定输出结构：执行摘要 + 市场格局 + 风险分析 + GO/条件推进/NO-GO决策。' },
        { title: '微观层——AI服务生架构', content: '三层技术栈：AI服务生客户端 → 推荐引擎 → POS/中台操作系统。顾客输入（偏好信号、意图如"清爽的"、"社交场合"，以及预算区间）流经品牌安全推荐引擎，同时执行总部设定的推送优先级、商品权重、售罄逻辑和活动规则。隐私安全：偏好仅通过轻量级对话收集。店长获得可定制控制面板——高/中/低优先级滑块和品牌护栏。' },
        { title: '持续学习闭环与商业化', content: '自我改进闭环：顾客互动（微观）→ 偏好信号聚合 → 优化市场证据（宏观）→ 优化零售概念。真实顾客选择持续验证初始尽调结论。三大商业化支柱：(1) 市场需求——投资者在资本投放前需要非财务确定性评分；(2) 可扩展性——软件驱动的加盟授权无需线性增加人员；(3) 商业模式——端到端B2B基础设施授权（尽调SaaS + 运营OS费用）。' },
      ]
    }
  ]
};

function ImageCarousel({ imgs }: { imgs: string[] }) {
  const [cur, setCur] = useState(0);
  if (!imgs || imgs.length === 0) return <div style={{ aspectRatio: '16/9', background: '#2c2c2e' }} />;
  return (
    <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#2c2c2e', position: 'relative' }}>
      <img src={imgs[cur]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
      {imgs.length > 1 && (
        <>
          <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 5 }}>
            {imgs.map((_, i) => (
              <button key={i} onClick={() => setCur(i)} style={{ width: i === cur ? 18 : 6, height: 6, borderRadius: 3, background: i === cur ? '#fff' : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.2s' }} />
            ))}
          </div>
          <button onClick={() => setCur((cur - 1 + imgs.length) % imgs.length)} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', width: 30, height: 30, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 18, lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
          <button onClick={() => setCur((cur + 1) % imgs.length)} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', width: 30, height: 30, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 18, lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
        </>
      )}
    </div>
  );
}

export default function AIPage() {
  const { lang, setLang } = useLanguage();
  const [sel, setSel] = useState<number | null>(null);
  const tools = toolsData[lang];
  const projects = projectsData[lang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const i = params.get('i');
    if (i !== null) setSel(parseInt(i));
  }, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} currentPage="ai" dark />

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
          {lang === 'en' ? 'Building at the frontier — from daily workflows to AI-native ventures' : '在AI前沿构建——从日常工作流到AI原生创业项目'}
        </motion.p>
      </div>

      <div style={{ background: '#fff', borderRadius: '24px 24px 0 0', padding: '56px 24px 0' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 20 }}>
            {lang === 'en' ? 'Daily Stack' : '工具栈'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 60 }}>
            {tools.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                style={{ background: '#f5f5f7', borderRadius: 16, padding: '18px 20px', border: '0.5px solid rgba(0,0,0,0.06)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0 }}>{t.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#1d1d1f' }}>{t.name}</span>
                    <span style={{ fontSize: 10, fontWeight: 600, padding: '1px 7px', borderRadius: 100, background: 'rgba(0,0,0,0.06)', color: '#6e6e73' }}>{t.cat}</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#6e6e73', lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 20 }}>
            {lang === 'en' ? 'AI Ventures' : 'AI 创业项目'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 80 }}>
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.3 }}
                onClick={() => setSel(i)}
                style={{ background: '#1d1d1f', borderRadius: 20, overflow: 'hidden', cursor: 'pointer', border: '0.5px solid rgba(255,255,255,0.06)', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#2c2c2e')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1d1d1f')}>
                {/* Preview image */}
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#2c2c2e' }}>
                  <img src={p.imgs[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div style={{ padding: '18px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: p.color, color: '#fff' }}>{p.status}</span>
                    <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: p.statusColor }} />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.01em', marginBottom: 5 }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>{p.subtitle}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {p.tags.slice(0, 4).map((tag, j) => (
                      <span key={j} style={{ fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 100, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.45)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(24px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#1c1c1e', borderRadius: 22, maxWidth: 640, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <ImageCarousel imgs={projects[sel].imgs} />
              <div style={{ padding: '24px 28px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: projects[sel].color, color: '#fff' }}>{projects[sel].status}</span>
                  <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: projects[sel].statusColor }} />
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.02em', marginBottom: 6 }}>{projects[sel].name}</div>
                <div style={{ fontSize: 12, color: '#2997ff', marginBottom: 3 }}>{projects[sel].course}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>{lang === 'en' ? 'Team: ' : '团队：'}{projects[sel].team}</div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 20 }}>{projects[sel].overview}</p>
                {projects[sel].sections.map((s, i) => (
                  <div key={i} style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: projects[sel].color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{s.title}</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, margin: 0 }}>{s.content}</p>
                  </div>
                ))}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16, paddingTop: 16, borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
                  {projects[sel].tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 100, background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }}>{tag}</span>
                  ))}
                </div>
                <button onClick={() => setSel(null)} style={{ marginTop: 20, width: '100%', padding: '12px 0', borderRadius: 100, background: projects[sel].color, color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
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
