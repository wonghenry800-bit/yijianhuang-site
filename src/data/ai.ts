export const toolsData = {
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

export const projectsData = {
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
      summary: 'Problem: course planning is fragmented across systems. Method: drag-and-drop planning, rule validation, competency radar, and an AA dashboard. Result: a clickable bilingual prototype with 5 interface screens, mock data, and a Coze RAG assistant for advisor queries.',
      overview: 'A one-stop academic progress platform for undergraduate lifecycle management. It addresses fragmented course information, blind four-year planning, and weak links between courses and career skills. I co-designed the rule-validation logic and led the competency radar concept, turning survey findings from 50+ students into a working prototype with dashboard screenshots, mock data, and an AI assistant workflow.',
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
      summary: 'Problem: retail and F&B franchise decisions often rely on intuition and small-sample tasting. Method: I designed a market-evidence pipeline plus an AI Waiter recommendation layer. Result: the project produced a system architecture, pitch deck, UI/demo screenshots, and a GO/CONDITIONAL/NO-GO decision output.',
      overview: 'An AI-powered SaaS concept for retail and F&B franchise expansion. Instead of relying on opinion-heavy manual testing, the system turns social comments, competitor menus, scenario signals, and store-level interaction data into auditable market evidence. My contribution was the dual-layer AI architecture: a macro market-evidence pipeline with certainty scoring, and a micro AI Waiter recommendation workflow connected to POS and store operations.',
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
      summary: '问题：课程规划信息分散，学生难以做四年路径规划。方法：拖拽排课、规则校验、能力雷达图和学术导师仪表盘。结果：完成包含5张界面截图、模拟数据和 Coze RAG 助手的双语可点击原型。',
      overview: '一个针对本科学业全生命周期管理痛点的一站式数字化学业进度管理平台，解决课程信息碎片化、四年规划盲区以及课程与职业技能脱节的问题。我参与规则校验逻辑共同设计，并主导能力雷达图概念，将50+名学生调研反馈转化为包含仪表盘截图、模拟数据和AI助手流程的原型。',
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
      summary: '问题：零售和餐饮加盟决策常依赖直觉与小样本试吃。方法：我设计市场证据流水线和 AI Waiter 推荐层。结果：产出系统架构、路演材料、界面/demo截图，以及 GO/条件推进/NO-GO 决策输出格式。',
      overview: '一个AI驱动的零售与餐饮加盟扩张SaaS概念。系统不再依赖主观判断，而是把社交评论、竞品菜单、场景信号和门店互动数据转化为可审计的市场证据。我的主要贡献是双层AI架构：宏观市场证据流水线与确定性评分，以及连接POS和门店运营的微观AI服务生推荐流程。',
      sections: [
        { title: '核心问题——加盟决策中的猜测陷阱', content: '在生活方式和餐饮品类中，由于消费者偏好高度分散，市场验证结构性薄弱。核心问题已转变：不是"产品好不好"，而是"这个概念是否被市场自然需要"？最大的风险是在没有尽职调查级证据的情况下进入市场。Tevo A.I.就是为此而生。' },
        { title: '宏观层——AI市场证据系统（我的架构设计）', content: '流水线：语义主题包 → 可溯源爬取 → 去噪与聚类 → 提取高频场景 → 整体确定性分数（0-1）。4项AI技术：NLP（解析社交评论、竞品菜单、公开讨论）、聚类与数据挖掘（去噪海量数据集）、机器学习（基于模式识别校准确定性评分）、推荐系统（微观层）。固定输出结构：执行摘要 + 市场格局 + 风险分析 + GO/条件推进/NO-GO决策。' },
        { title: '微观层——AI服务生架构', content: '三层技术栈：AI服务生客户端 → 推荐引擎 → POS/中台操作系统。顾客输入（偏好信号、意图如"清爽的"、"社交场合"，以及预算区间）流经品牌安全推荐引擎，同时执行总部设定的推送优先级、商品权重、售罄逻辑和活动规则。隐私安全：偏好仅通过轻量级对话收集。店长获得可定制控制面板——高/中/低优先级滑块和品牌护栏。' },
        { title: '持续学习闭环与商业化', content: '自我改进闭环：顾客互动（微观）→ 偏好信号聚合 → 优化市场证据（宏观）→ 优化零售概念。真实顾客选择持续验证初始尽调结论。三大商业化支柱：(1) 市场需求——投资者在资本投放前需要非财务确定性评分；(2) 可扩展性——软件驱动的加盟授权无需线性增加人员；(3) 商业模式——端到端B2B基础设施授权（尽调SaaS + 运营OS费用）。' },
      ]
    }
  ]
};
