'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Navbar from '../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const toolsData = {
  en: [
    { name: 'Claude Code', cat: 'Coding Agent', desc: "Anthropic's agentic coding environment — my primary dev tool. I use it for full-stack development, debugging complex TypeScript/Python projects, and building this portfolio. It acts as a pair programmer that understands the entire codebase, not just isolated snippets.", color: '#cc785c', icon: 'CC' },
    { name: 'GPT o3 / Codex', cat: 'Reasoning & Code', desc: "OpenAI's advanced reasoning and code-generation models. I use o3 for complex econometric problem-solving, multi-step policy analysis requiring deep logical chains, and structuring long-form research outlines that need strategic coherence.", color: '#10a37f', icon: 'OA' },
    { name: 'Minimax 2.7', cat: 'Daily Operations', desc: "Integrated via OpenClaw for daily workflows — document summarization, Chinese-English translation, meeting notes, and rapid literature synthesis. Minimax's extended context window makes it ideal for processing lengthy policy documents and research papers in one pass.", color: '#7c3aed', icon: 'MM' },
    { name: 'OpenClaw', cat: 'AI Deployment', desc: "My AI orchestration platform for deploying and managing multiple model APIs. I use it to route tasks to the optimal model, manage context windows, and build lightweight automation pipelines for research workflows — essentially my personal AI control center.", color: '#0ea5e9', icon: 'OC' },
    { name: 'Cursor IDE', cat: 'Dev Environment', desc: "AI-native code editor built on VS Code. I write virtually all my code here — its inline AI completions and codebase-aware chat dramatically accelerate development of data analysis scripts, web apps, and automation tools.", color: '#1d1d1f', icon: 'CU' },
    { name: 'Perplexity Pro', cat: 'Research', desc: "Real-time AI search for academic and policy research. I use it to rapidly survey literature, track breaking policy developments, and cross-reference sources — especially useful for GBA policy research where information changes fast.", color: '#20b8cd', icon: 'PP' },
    { name: 'Coze Platform', cat: 'Agent Builder', desc: "Low-code platform for building conversational AI agents. I used it to develop the Dashboard AI Assistant for the Student Dashboard project — configuring RAG workflows, intent classification, and DeepSeek-V3.1 model integration for academic advising use cases.", color: '#f59e0b', icon: 'CZ' },
    { name: 'Stata + AI', cat: 'Econometrics', desc: "I combine traditional econometric workflows in Stata with AI-assisted code generation and output interpretation. This hybrid approach — using Claude to write regression code and explain results — dramatically accelerates empirical policy research.", color: '#1a56db', icon: 'ST' },
  ],
  cn: [
    { name: 'Claude Code', cat: '编程 Agent', desc: 'Anthropic 的 agentic 编程环境——我的主要开发工具。用于全栈开发、调试复杂的 TypeScript/Python 项目以及构建本网站。它能理解整个代码库，而不仅仅是孤立的代码片段，相当于一个真正的配对程序员。', color: '#cc785c', icon: 'CC' },
    { name: 'GPT o3 / Codex', cat: '推理与代码', desc: 'OpenAI 的高级推理和代码生成模型。用于复杂计量经济学问题求解、需要深度逻辑链的多步政策分析，以及需要战略连贯性的长篇研究提纲结构设计。', color: '#10a37f', icon: 'OA' },
    { name: 'Minimax 2.7', cat: '日常运营', desc: '通过 OpenClaw 接入，处理日常工作流——文件摘要、中英翻译、会议记录和快速文献综述。Minimax 超长上下文窗口非常适合一次性处理冗长的政策文件和研究论文。', color: '#7c3aed', icon: 'MM' },
    { name: 'OpenClaw', cat: 'AI 部署', desc: '我的 AI 编排平台，用于部署和管理多个模型 API。将任务路由到最优模型、管理上下文窗口，并为研究工作流构建轻量级自动化管道——实质上是我的个人 AI 控制中心。', color: '#0ea5e9', icon: 'OC' },
    { name: 'Cursor IDE', cat: '开发环境', desc: '基于 VS Code 的 AI 原生代码编辑器。我几乎所有代码都在这里编写——其内联 AI 补全和代码库感知对话功能大幅加速了数据分析脚本、Web 应用和自动化工具的开发。', color: '#1d1d1f', icon: 'CU' },
    { name: 'Perplexity Pro', cat: '学术研究', desc: '实时 AI 搜索，用于学术和政策研究。快速文献调研、追踪最新政策动态、交叉引用来源——尤其适合信息变化快的大湾区政策研究。', color: '#20b8cd', icon: 'PP' },
    { name: 'Coze 平台', cat: 'Agent 构建', desc: '低代码对话 AI 搭建平台。用于开发学业仪表盘项目的 AI 助手——配置 RAG 工作流、意图分类，以及接入 DeepSeek-V3.1 模型，服务学术导师辅导场景。', color: '#f59e0b', icon: 'CZ' },
    { name: 'Stata + AI', cat: '计量经济学', desc: '将 Stata 传统计量工作流与 AI 辅助代码生成和结果解读相结合。这种混合方法——用 Claude 编写回归代码并解释输出——大幅提升了实证政策研究效率。', color: '#1a56db', icon: 'ST' },
  ],
};

const projectsData = {
  en: [
    {
      name: 'Student Study Progress Dashboard',
      subtitle: 'AI + Education · CUHK-Shenzhen AIE4901 Capstone',
      course: 'AIE4901 — AI Capstone Project, SAI College · Instructors: Mengmeng Liu & Marcus Chan · March 2026',
      team: 'Tian Haoyu · Huang Yijian · Wu Xitong · Ye Yijia · Lee Owen',
      status: 'In Development',
      statusColor: '#30d158',
      tags: ['EdTech', 'AI Dashboard', 'React + Next.js', 'FastAPI', 'Coze RAG', 'Chart.js'],
      color: '#2997ff',
      imgs: [],
      overview: 'A one-stop digital academic progress management platform targeting the pain points of undergraduate academic lifecycle management. Integrates academic planning, time management, and career skill mapping for three stakeholders: students, academic advisors (AA), and university administrators.',
      sections: [
        {
          title: 'The Problem — Why This Matters',
          content: 'Students face three core problems: information fragmentation (course info scattered across multiple systems), blind planning (no tools to balance GPA goals with career development over 4 years), and skill-course disconnection (unable to see how coursework maps to professional competencies). Administrators face data silos, inefficient monitoring, and decision-making without real data support. Our survey of 50+ students across CUHK-Shenzhen schools confirmed: "Plan all courses on a drag-and-drop timeline" was the #1 most desired feature, followed by GPA-targeted recommendations and skills visualization.'
        },
        {
          title: 'Key Module 1 — Course Drag-and-Drop Planning Timeline',
          content: 'The student dashboard\'s core interface: 12 semester columns arranged horizontally from freshman to senior year, each with credit limits displayed in the header. Students drag course cards from a filterable course pool into semester columns. The system performs real-time validation of prerequisite conflicts, credit limits, and mutual exclusions — with immediate visual feedback when rules are violated. Course cards use distinct colors by type (major courses: deep blue, GE courses: light green, electives: light orange). I co-designed this module with team leader Tian Haoyu, focusing on the rule validation architecture.'
        },
        {
          title: 'Key Module 2 — Competency Radar Chart (My Primary Contribution)',
          content: 'I led the design of this visualization system. The interface uses a three-column layout: course pool (left), semester planning columns (center), and radar chart (right). The chart tracks 6 capability dimensions: Professional Foundation, Logical Thinking, Communication Expression, Teamwork Collaboration, Innovation Practice, and Information Literacy. Each course has a "Capability Dimension Impact" vector in the backend — assigning contribution values (0–5) to each dimension. As students drag courses into their plan, the radar chart\'s prediction line (blue solid) updates in real-time against the baseline (gray dashed). Clicking a dimension label highlights courses that contribute to it. This transforms course selection from "meeting credit requirements" to "targeted capability development."'
        },
        {
          title: 'Academic Advisor Dashboard',
          content: 'Designed by Ye Yijia with my specification support. Four modules: Academic Overview (GPA distribution charts, credit completion progress, year-level filters), Risk Snapshot (auto-flagging High Risk / Credit Alert / GPA Drop / No Contact students with customizable thresholds), Communication Overview (contact frequency distribution + Risk-Communication Matrix identifying high-risk students with insufficient contact), and Student Management (sortable list + deep-dive individual student detail panels).'
        },
        {
          title: 'AI Assistant & Technical Stack',
          content: 'Built a conversational AI assistant on Coze (low-code, fast iteration) using DeepSeek-V3.1. The agent recognizes user roles (student vs AA vs CPDO), classifies intent, calls backend tools returning JSON data, and queries a RAG knowledge base for rule explanations. Example: an AA can say "Show me the list of students I need to contact urgently" and the agent filters and surfaces the critical cases. Tech stack: React 18.2 + Next.js + Shadcn (frontend), TypeScript + Python/FastAPI (backend), MySQL (database), Chart.js + Recharts (visualizations).'
        }
      ]
    },
    {
      name: 'Tevo Group — Tévo A.I. System',
      subtitle: 'Intelligent Physical Commerce Platform · AI Retail & F&B',
      course: 'MGT3650 — AI in Strategic & Entrepreneurial Management · CUHK-Shenzhen · Group 3',
      team: 'Huang Yijian (AI Architecture Lead)',
      status: 'Active',
      statusColor: '#ff9500',
      tags: ['SaaS', 'NLP', 'Clustering & Data Mining', 'ML Certainty Scoring', 'RecSys', 'B2B'],
      color: '#8b1a1a',
      imgs: [],
      overview: 'An AI-powered SaaS platform that shifts retail and F&B franchise expansion decisions from "opinion-heavy manual testing" to "auditable DD-grade verification." Built around the Tévo Operating System — a dual-layer architecture bridging macro market evidence and micro operational execution.',
      sections: [
        {
          title: 'The Core Problem — Guesswork in Franchise Decisions',
          content: 'In lifestyle and dining categories, validation is structurally weak due to fragmented consumer preferences. Companies entering new markets typically rely on intuition, small focus groups, or limited pilots — not solid market evidence. The core question has shifted: not "Is the product good?" but "Is the concept naturally needed?" The biggest risk is entering a market without due-diligence-grade evidence. Tevo A.I. was built to provide exactly that.'
        },
        {
          title: 'Macro Layer — AI Market Evidence System (My Primary Design)',
          content: 'I led the architecture of this system. The pipeline: Semantic Topic Packages → Traceable Crawling → Denoising & Clustering → Extract Scenarios → Overall Certainty Score (0–1). Powered by 4 AI technologies: NLP (parses public discourse, social comments, and competitor menus), Clustering & Data Mining (denoises massive datasets to identify high-frequency demand scenarios), Machine Learning (calibrates certainty scoring based on pattern recognition), and Recommendation Systems (micro layer). Output is a fixed-structure DD report: executive summary + market landscape + risk analysis + Certainty Score. The score directly dictates a GO / CONDITIONAL / NO-GO decision — data replaces guesswork.'
        },
        {
          title: 'Micro Layer — AI Waiter Architecture',
          content: 'Once market validation passes, the "AI Waiter" architecture handles front-of-house operations. Three-layer stack: AI Waiter Client (customer-facing conversational interface) → Recommendation Engine → POS/Mid-office OS. Customer inputs — explicit preference signals, intent (e.g., "refreshing," "social"), and budget bands — flow through a Brand-Safe Recommendation engine that simultaneously enforces HQ-set push priorities, item weights, sold-out logic, and campaign rules. Privacy-safe: preferences collected via lightweight conversation, not invasive profiling. Store managers get a customizable control panel: High/Medium/Low Priority sliders, disallowed combinations, and real-time logistics — "strict governance with personalization."'
        },
        {
          title: 'The Continuous Learning Loop',
          content: 'The system\'s unique architectural feature: a self-improving loop. Customer Interactions (Micro) → Preference Signal Aggregation → Refined Market Evidence (Macro) → Optimized Retail Concepts → back to Customer Interactions. Real-world customer choices continuously validate or challenge the initial due diligence. Aggregated micro-interactions reveal emerging macro market trends. Execution data continuously feeds back to improve strategic market insights. The system evolves with the market rather than becoming stale.'
        },
        {
          title: 'Commercialization & B2B Infrastructure',
          content: 'Each franchise becomes a connected B2B commercial node — authorized with the full-stack AI system (Research DD + Tévo AI OS). Franchisees evolve from store owners to regional AI operators. Three commercialization pillars: Market Demand (investors and BD teams require non-financial certainty scoring before capital deployment), Scalability (software-driven franchise authorization allows rapid regional deployment without linear headcount growth), Business Models (end-to-end B2B infrastructure licensing — from initial due diligence SaaS to ongoing operational OS fees). The system defends against competition through a proprietary certainty-oriented scoring framework, not generic social listening.'
        }
      ]
    }
  ],
  cn: [
    {
      name: '学生学业进度仪表盘',
      subtitle: 'AI + 教育 · 港中深 AIE4901 顶点项目',
      course: 'AIE4901 — AI顶点项目，SAI学院 · 指导老师：刘萌萌 & Marcus Chan · 2026年3月',
      team: '田昊宇 · 黄一健 · 吴希彤 · 叶怡佳 · Lee Owen',
      status: '开发中',
      statusColor: '#30d158',
      tags: ['教育科技', 'AI仪表盘', 'React + Next.js', 'FastAPI', 'Coze RAG', 'Chart.js'],
      color: '#2997ff',
      imgs: [],
      overview: '一个针对本科学业全生命周期管理痛点的一站式数字化学业进度管理平台，整合学业规划、时间管理与职业技能映射，服务学生、学术导师（AA）和大学学术管理者三类用户。',
      sections: [
        {
          title: '问题背景——为什么要做这个',
          content: '学生面临三大核心痛点：信息碎片化（课程信息散落在多个系统）、规划盲目（缺乏工具在四年维度平衡GPA目标与职业发展）、技能与课程脱节（无法看到所修课程如何映射到职业能力）。管理员面临数据孤岛、监控效率低下、决策缺乏数据支撑的困境。我们对港中深50+名学生的调研证实："拖拽排课时间线"是最受欢迎的功能，其次是GPA目标课程推荐和技能可视化。'
        },
        {
          title: '核心模块一——课程拖拽规划时间线',
          content: '学生仪表盘的核心交互界面：从大一到大四横向排列12个学期列，每列顶部显示学期名称和学分上限。学生从可筛选的课程池中将课程卡片拖入学期列。系统实时验证先修课冲突、学分限制和互斥规则——规则触发时立即显示可视化提示。课程卡片按课程类型区分颜色（专业课：深蓝；通识课：浅绿；选修课：浅橙）。我与队长田昊宇共同设计了这一模块，重点负责规则校验架构。'
        },
        {
          title: '核心模块二——能力规划雷达图（我的主要贡献）',
          content: '我主导设计了这个可视化系统。界面采用三列布局：课程池（左）、学期规划列（中）、雷达图（右）。图表追踪6个能力维度：专业基础、逻辑思维、沟通表达、团队协作、创新实践、信息素养。每门课程在后端有一个"能力维度影响"向量，对各维度赋予贡献值（0-5分）。学生拖动课程进入计划时，雷达图的预测线（蓝色实线）实时对比基准线（灰色虚线）更新。点击维度标签可高亮该维度的相关课程。这将选课从"满足学分要求"升级为"精准能力发展规划"。'
        },
        {
          title: '学术导师（AA）仪表盘',
          content: '由叶怡佳设计，我参与功能规格定义。四大模块：学业概览（GPA分布图、学分完成进度、年级筛选器），风险预警（自动标记高风险/学分预警/GPA下降/长期失联学生，可自定义阈值），沟通概览（联系频率分布 + 风险-沟通矩阵，识别高风险但沟通不足的学生），学生管理（可排序列表 + 单个学生详情面板）。'
        },
        {
          title: 'AI助手与技术栈',
          content: '基于Coze（低代码、快速迭代）构建对话式AI助手，使用DeepSeek-V3.1模型。Agent识别用户角色（学生/AA/CPDO），分类意图，调用返回JSON数据的后端工具，并查询RAG知识库进行规则解释。示例：AA可以说"显示我需要紧急联系的学生列表"，Agent自动筛选并呈现关键案例。技术栈：React 18.2 + Next.js + Shadcn（前端），TypeScript + Python/FastAPI（后端），MySQL（数据库），Chart.js + Recharts（可视化）。'
        }
      ]
    },
    {
      name: 'Tevo Group — Tévo A.I. 系统',
      subtitle: '智能实体商业平台 · AI零售与餐饮',
      course: 'MGT3650 — AI战略与创业管理 · 港中深 · 第三组',
      team: '黄一健（AI架构负责人）',
      status: '进行中',
      statusColor: '#ff9500',
      tags: ['SaaS', 'NLP', '聚类与数据挖掘', 'ML确定性评分', '推荐系统', 'B2B'],
      color: '#8b1a1a',
      imgs: [],
      overview: '一个AI驱动的SaaS平台，将零售和餐饮加盟扩张决策从"依赖直觉的人工测试"转变为"可审计的尽职调查级验证"。围绕Tévo操作系统构建——一个连接宏观市场证据与微观运营执行的双层架构。',
      sections: [
        {
          title: '核心问题——加盟决策中的猜测陷阱',
          content: '在生活方式和餐饮品类中，由于消费者偏好高度分散，市场验证结构性薄弱。进入新市场的企业通常依赖直觉、小范围焦点小组或有限的试点测试——而非坚实的市场证据。核心问题已经转变：不是"产品好不好"，而是"这个概念是否被市场自然需要"？最大的风险是在没有尽职调查级证据的情况下进入市场。Tevo A.I.就是为此而生。'
        },
        {
          title: '宏观层——AI市场证据系统（我的主要设计）',
          content: '我主导了这个系统的架构设计。流水线：语义主题包 → 可溯源爬取 → 去噪与聚类 → 提取场景 → 整体确定性分数（0-1）。由4项AI技术驱动：NLP（解析公开讨论、社交评论和竞品菜单）、聚类与数据挖掘（去噪海量数据集以识别高频需求场景）、机器学习（基于模式识别校准确定性评分）、推荐系统（微观层）。输出为固定结构的尽职调查报告：执行摘要 + 市场格局 + 风险分析 + 确定性分数。分数直接指导GO/条件推进/NO-GO决策——用数据取代猜测。'
        },
        {
          title: '微观层——AI服务生架构',
          content: '市场验证通过后，"AI服务生"架构处理前台运营。三层技术栈：AI服务生客户端（面向顾客的对话界面）→ 推荐引擎 → POS/中台操作系统。顾客输入——明确的偏好信号、意图（如"清爽的"、"社交场合"）和预算区间——流经品牌安全推荐引擎，同时执行总部设定的推送优先级、商品权重、售罄逻辑和活动规则。隐私安全：偏好通过轻量级对话收集，而非侵入式画像。店长获得可定制的控制面板：高/中/低优先级滑块、禁止组合和实时库存限制——实现"严格治理下的个性化"。'
        },
        {
          title: '持续学习闭环',
          content: '系统独特的架构特性：自我改进的闭环。顾客互动（微观）→ 偏好信号聚合 → 优化市场证据（宏观）→ 优化零售概念 → 回到顾客互动。真实顾客选择持续验证或挑战初始尽职调查结论。聚合的微观互动揭示新兴的宏观市场趋势。执行数据持续反哺改进战略市场洞察。系统随市场演变而进化，而不是逐渐过时。'
        },
        {
          title: '商业化与B2B基础设施',
          content: '每个加盟门店成为互联的B2B商业节点——被授权使用全栈AI系统（研究尽调 + Tévo AI OS）。加盟商从门店经营者进化为区域AI运营商。三大商业化支柱：市场需求（投资者和商业发展团队在资本投放前迫切需要非财务确定性评分）、可扩展性（软件驱动的加盟授权允许快速区域部署，无需线性增加人员）、商业模式（端到端B2B基础设施授权——从初始尽调SaaS到持续运营OS费用）。通过专有的确定性导向评分框架抵御竞争，而非通用的社交监听工具。'
        }
      ]
    }
  ]
};

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

      {/* Hero */}
      <div style={{ padding: '100px 24px 70px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(41,151,255,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2997ff', marginBottom: 16 }}>
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

      {/* White section */}
      <div style={{ background: '#fff', borderRadius: '24px 24px 0 0', padding: '56px 24px 0' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>

          {/* Tools */}
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

          {/* Projects */}
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86868b', paddingBottom: 12, borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: 20 }}>
            {lang === 'en' ? 'AI Ventures' : 'AI 创业项目'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 80 }}>
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.3 }}
                onClick={() => setSel(i)}
                style={{ background: '#1d1d1f', borderRadius: 20, padding: '24px', cursor: 'pointer', border: '0.5px solid rgba(255,255,255,0.06)', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#2c2c2e')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1d1d1f')}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: p.color, color: '#fff' }}>{p.status}</span>
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

      {/* Modal */}
      <AnimatePresence>
        {sel !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 24px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(24px)', overflowY: 'auto' }}>
            <motion.div initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{ background: '#1c1c1e', borderRadius: 22, maxWidth: 640, width: '100%', overflow: 'hidden', border: '0.5px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <div style={{ padding: '28px 28px 20px', borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: projects[sel].color, color: '#fff' }}>{projects[sel].status}</span>
                  <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: projects[sel].statusColor }} />
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.02em', marginBottom: 6 }}>{projects[sel].name}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{projects[sel].subtitle}</div>
                <div style={{ fontSize: 11, color: '#2997ff', marginBottom: 4 }}>{projects[sel].course}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{lang === 'en' ? 'Team: ' : '团队：'}{projects[sel].team}</div>
              </div>
              <div style={{ padding: '24px 28px 28px' }}>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 24 }}>{projects[sel].overview}</p>
                {projects[sel].sections.map((s, i) => (
                  <div key={i} style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: projects[sel].color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{s.title}</div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, margin: 0 }}>{s.content}</p>
                  </div>
                ))}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20, paddingTop: 20, borderTop: '0.5px solid rgba(255,255,255,0.08)' }}>
                  {projects[sel].tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 100, background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }}>{tag}</span>
                  ))}
                </div>
                <button onClick={() => setSel(null)} style={{ marginTop: 24, width: '100%', padding: '12px 0', borderRadius: 100, background: projects[sel].color, color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
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
