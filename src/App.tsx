import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  Download,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

type Page = "home" | "projects" | "procurement" | "image" | "digital" | "proof" | "contact";

const links = {
  procurement:
    "https://dichan001-d4gmwndh054e1b76e-1428943693.tcloudbaseapp.com/dichan003/",
  image:
    "https://dichan001-d4gmwndh054e1b76e-1428943693.ap-shanghai.app.tcloudbase.com/",
  digital: "https://xuehui-rewrite.zh-cn.edgeone.cool/invite",
  resume: "/assets/yang-wenxin-ai-project-manager-resume.pdf",
};

const backgroundTimeline = [
  {
    date: "2007 - 2010",
    title: "郑州大学（211）｜建筑经济管理｜全日制大专",
    text: "完成工程造价、建筑经济、招投标相关基础训练，毕业后进入工程商务与预算岗位。",
  },
  {
    date: "2010 - 2018",
    title: "从预算员到成本主管",
    text: "从商务标、建筑成本开始，逐步进入全过程成本控制和项目商务管理。",
  },
  {
    date: "2019 - 2022",
    title: "广州大学｜工程管理｜本科",
    text: "在职完成工程管理本科，同时持续沉淀招采、成本、合约与数字化管理经验。",
  },
  {
    date: "2018 - 今",
    title: "地产招采 / 成本 / 合约管理",
    text: "在星河、太东、心域等地产公司负责采购招标、供应商管理、合同范本、法务对接和预算 KPI 体系。",
  },
];

const aiTimeline = [
  {
    date: "2025.12.17",
    title: "第一次系统接触 AI",
    text: "开始判断 AI 不只是聊天工具，而是可以把业务流程做成产品的能力。",
  },
  {
    date: "2026.01.18",
    title: "生图网页部署上线",
    text: "通过 Zeabur 完成线上部署，形成可访问、可演示的 Web 产品。",
  },
  {
    date: "2026.02.04",
    title: "生图多端形态上线",
    text: "生图智能体、技能、小程序版本完成上线，形成 Web + App + 小程序 + 智能体的产品矩阵。",
  },
  {
    date: "2026.04.03",
    title: "接到数字人智能体项目需求",
    text: "开始搭建短视频自动化生成链路，覆盖素材提取、文案改写、TTS 和数字人生成。",
  },
  {
    date: "2026.04.10",
    title: "开始筹划地产招采平台",
    text: "把 15 年地产招采、成本、合约经验拆成平台模块，启动招采宝 Pro 产品设计。",
  },
  {
    date: "2026.04.30",
    title: "数字人智能体交付",
    text: "完成素材提取、LLM 文案改写、TTS / 声音克隆、LivePortrait、字幕和 BGM 合成流程。",
  },
  {
    date: "2026.05.10",
    title: "地产招采平台完成",
    text: "形成合约规划、供应商、招标文件、对标定标、招采档案、合同签署的完整业务闭环。",
  },
];

const projectCards = [
  {
    id: "image" as Page,
    no: "01",
    title: "喵喵小仙儿 AI 生图（TOC）",
    subtitle: "Web / App / 小程序 / 智能体",
    image: "/assets/cases/image-live/web-01-home.png",
    desc: "把专业提示词拆成可视化参数，解决普通用户不会写提示词的问题。",
  },
  {
    id: "digital" as Page,
    no: "02",
    title: "数字人智能体（TOC）",
    subtitle: "Web｜短视频生产自动化链路",
    image: "/assets/cases/digital/demo-frame-02.jpg",
    desc: "从素材提取、文案改写到数字人生成和字幕合成，完成项目交付。",
  },
  {
    id: "procurement" as Page,
    no: "03",
    title: "招采宝 Pro（TOB）",
    subtitle: "Web｜地产招采成本 AI 工作台",
    image: "/assets/live/procurement-click-test.png",
    desc: "围绕地产招采、成本和合约管理搭建的全流程业务系统。",
  },
];

function App() {
  const [page, setPage] = useState<Page>("home");
  const content = useMemo(() => {
    switch (page) {
      case "projects":
        return <ProjectsPage go={setPage} />;
      case "procurement":
        return <ProcurementPage go={setPage} />;
      case "image":
        return <ImagePage go={setPage} />;
      case "digital":
        return <DigitalPage go={setPage} />;
      case "proof":
        return <ProofPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage go={setPage} />;
    }
  }, [page]);

  return (
    <main>
      <TopNav page={page} go={setPage} />
      {content}
    </main>
  );
}

function TopNav({ page, go }: { page: Page; go: (p: Page) => void }) {
  return (
    <header className="top-nav">
      <button className="brand" onClick={() => go("home")}>
        <span>Y</span>
        <strong>杨文新</strong>
      </button>
      <nav>
        <button className={page === "home" ? "active" : ""} onClick={() => go("home")}>
          首页
        </button>
        <button
          className={["projects", "procurement", "image", "digital"].includes(page) ? "active" : ""}
          onClick={() => go("projects")}
        >
          项目
        </button>
        <button className={page === "proof" ? "active" : ""} onClick={() => go("proof")}>
          资质
        </button>
        <button className={page === "contact" ? "active" : ""} onClick={() => go("contact")}>
          联系
        </button>
      </nav>
    </header>
  );
}

function HomePage({ go }: { go: (p: Page) => void }) {
  return (
    <section className="cv-home">
      <div className="cv-hero">
        <div className="intro-panel">
          <p className="kicker">AI Project Manager / Shenzhen</p>
          <h1>杨文新</h1>
          <h2>业务型 AI 项目经理</h2>
          <p>
            2010 年开始进入工程与地产行业，长期做招采、成本、合约和供应商管理。
            2025 年 12 月开始系统转向 AI 产品，把真实业务痛点做成可运行的网页、App、智能体和自动化流程。
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => go("projects")}>
              查看作品 <ArrowRight size={18} />
            </button>
            <a className="secondary-btn" href={links.resume} download>
              下载简历 <Download size={18} />
            </a>
          </div>
        </div>

        <aside className="profile-photo-card">
          <img src="/assets/profile-photo.jpg" alt="杨文新形象照片" />
        </aside>
      </div>

      <div className="home-proof cv-proof">
        {[
          ["2010", "开始进入工程与地产相关行业"],
          ["15年", "地产建筑行业经验"],
          ["2本", "一级造价师 / 二建市政"],
          ["5个月", "AI 自学从 0 到 1"],
          ["3个", "核心 AI 产品作品"],
          ["4端", "Web / App / 小程序 / 智能体"],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <section className="timeline-section">
        <SectionHeading label="Background" title="行业经历与资质背景" />
        <Timeline items={backgroundTimeline} />
      </section>

      <section className="timeline-section">
        <SectionHeading label="AI Product Timeline" title="三个作品相关里程碑" />
        <Timeline items={aiTimeline} compact />
      </section>

      <section className="home-projects">
        <SectionHeading label="" title="行业经验 TOB 产品 × 生活场景 TOC 产品" />
        <div className="compact-projects">
          {projectCards.map((project) => (
            <button className="compact-project" key={project.id} onClick={() => go(project.id)}>
              <img src={project.image} alt={project.title} />
              <span>{project.no}</span>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <em>
                查看详情 <ArrowRight size={15} />
              </em>
            </button>
          ))}
        </div>
      </section>

    </section>
  );
}

function Timeline({
  items,
  compact = false,
}: {
  items: { date: string; title: string; text: string }[];
  compact?: boolean;
}) {
  return (
    <div className={compact ? "timeline compact" : "timeline"}>
      {items.map((item) => (
        <article key={`${item.date}-${item.title}`}>
          <time>{item.date}</time>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className={`section-heading${label ? "" : " no-label"}`}>
      {label ? <p>{label}</p> : null}
      <h2>{title}</h2>
    </div>
  );
}

function ProjectsPage({ go }: { go: (p: Page) => void }) {
  return (
    <section className="page-shell">
      <PageTitle kicker="Selected Work" title="三个已完成的 AI 产品项目" />
      <div className="project-grid">
        {projectCards.map((project) => (
          <article className="project-card" key={project.id} onClick={() => go(project.id)}>
            <img src={project.image} alt={project.title} />
            <div>
              <span>{project.no}</span>
              <h2>{project.title}</h2>
              <p className="card-subtitle">{project.subtitle}</p>
              <p>{project.desc}</p>
              <button>
                查看详情 <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcurementPage({ go }: { go: (p: Page) => void }) {
  return (
    <DetailShell go={go} label="Project 03" title="招采宝 Pro" subtitle="地产招采成本 AI 工作台">
      <div className="detail-hero procurement-summary">
        <div className="detail-panel">
          <p>主案例</p>
          <h2>招采宝 Pro：把地产招采经验沉淀成一套可运行的 AI 工作台。</h2>
          <ul>
            <li>基于 15 年地产招采、成本、合约管理经验设计，覆盖从合约规划到合同签署的完整流程。</li>
            <li>我负责产品结构、业务规则拆解、页面流程设计和 AI 能力接入，完成可访问的线上系统。</li>
            <li>系统内置专业知识库、规划向导、供应商管理、招标文件、对标定标和报告导出。</li>
            <li>项目已完成线上部署，包含可演示的页面流程、业务数据和导出结果。</li>
          </ul>
        </div>
      </div>
      <ProcurementCaseSections />
      <ProcurementModules />
      <ProcurementAi />
      <FeatureRow
        items={[
          ["产品能力", "把复杂招采流程拆成模块、状态和成果物"],
          ["业务能力", "合约规划、供应商、招标、评标、合同闭环"],
          ["AI 能力", "AI 规划、寻源、条款建议、报价清单解析"],
          ["工程能力", "React/Vite、LLM API、Supabase 用户注册登录与项目数据存储、Excel解析"],
        ]}
      />
      <a className="external-btn" href={links.procurement} target="_blank" rel="noreferrer">
        访问线上项目 <ExternalLink size={18} />
      </a>
    </DetailShell>
  );
}

function ProcurementOverview() {
  return (
    <section className="project-overview">
      <div className="overview-copy">
        <span>Project Overview</span>
        <h2>地产招采平台，核心是把合约规划、供应商、招标文件、定标和合同签署放进同一套流程。</h2>
        <p>
          页面上方只保留项目关键界面：线上主页、工作台入口、专业知识库、规划向导和规划报告。
          下面的功能地图和 AI 能力总结，集中说明这个项目的完整度和亮点。
        </p>
      </div>
      <div className="overview-shots">
        {[
          ["网站主页", "/assets/cases/procurement/live-homepage.png"],
          ["工作台模块", "/assets/cases/procurement/real/home-workbench-sharp.png"],
          ["专业知识库", "/assets/cases/procurement/real/knowledge-base-sharp.png"],
          ["规划向导", "/assets/cases/procurement/planning-wizard-2x.png"],
          ["规划报告", "/assets/procurement/real/planning-report.png"],
        ].map(([title, image]) => (
          <figure key={title}>
            <figcaption>{title}</figcaption>
            <img src={image} alt={`招采宝 Pro ${title}`} />
          </figure>
        ))}
      </div>
    </section>
  );
}

function ProcurementCaseSections() {
  const sections = [
    {
      image: "/assets/cases/procurement/live-homepage.png",
      screenshot: "网站主页",
      title: "01｜网站主页：产品定位与系统入口",
      eyebrow: "Homepage",
      text:
        "面向地产招采采购场景，首页说明产品定位、核心能力、六大招采模块和知识库能力，并提供登录、注册和创建项目入口。",
    },
    {
      image: "/assets/cases/procurement/real/home-workbench-sharp.png",
      screenshot: "工作台模块",
      title: "02｜工作台：六个核心业务入口",
      eyebrow: "Workbench",
      text:
        "工作台把日常招采动作集中到一个页面：合约规划、供应商管理、招标文件、对标定标、招采档案、合同签署，入口清楚，适合持续处理项目。",
    },
    {
      image: "/assets/procurement/real/planning-report.png",
      screenshot: "合约规划报告",
      title: "03｜合约规划：从项目信息生成规划报告",
      eyebrow: "Contract Planning",
      text:
        "以“锦绣华庭（二期）”为演示项目，系统保存项目面积、开工日期、目标成本、标段划分等信息，并生成合约规划报告，可继续导出 Word。",
    },
    {
      image: "/assets/cases/procurement/real/knowledge-base-sharp.png",
      screenshot: "专业知识库",
      title: "04｜知识库：工程资料与模板沉淀",
      eyebrow: "Knowledge Base",
      text:
        "知识库核心沉淀各专业工程的工作内容、界面划分、成本指标、合同范本和甲供材推荐，用来支撑合约规划、招标文件和合同生成。",
    },
    {
      image: "/assets/cases/procurement/real/tender-documents-live.png",
      screenshot: "招标文件包",
      title: "05｜招标文件：生成标准标书和投标模板",
      eyebrow: "Tender Documents",
      text:
        "按合约包生成招标文件、投标报价书模板、合同协议书、工程量清单和设计图纸清单，并可维护付款比例、履约保证金、评标方法等商务变量。",
    },
    {
      image: "/assets/cases/procurement/real/bid-award-live.png",
      screenshot: "对标定标",
      title: "06｜对标定标：报价比对与定标结果",
      eyebrow: "Bid Award",
      text:
        "支持 AI 对标：对已回标合约包进行价格、工期、履约保证金、特殊条款等横向对比，辅助识别报价差异和风险点，形成定标信息后承接到合同签署页面。",
    },
    {
      image: "/assets/cases/procurement/real/procurement-archive-live.png",
      screenshot: "招采档案",
      title: "07｜招采档案：过程文件归档",
      eyebrow: "Archive",
      text:
        "按合约包归档招标邀请函、答疑澄清、开标签到、谈判纪要、交底记录等文件，让招采过程有记录可追溯。",
    },
    {
      image: "/assets/cases/procurement/real/contract-signing-live.png",
      screenshot: "合同签署",
      title: "08｜合同签署：合同正文、附件和盖章版回传",
      eyebrow: "Contract Signing",
      text:
        "定标后进入合同签署中心，完善乙方名称、合同总价和签署日期，管理中标清单、技术标准、甲供材清单、合同附图等附件，并导出签约版。",
    },
  ];

  return (
    <section className="case-stack">
      {sections.map((section) => (
        <article className="case-section" key={section.title}>
          <figure className="case-figure">
            <figcaption>{section.screenshot}</figcaption>
            <img src={section.image} alt={section.title} />
          </figure>
          <div className="case-copy">
            <span>{section.eyebrow}</span>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function ProcurementModules() {
  const modules = [
    ["合约规划", "项目参数、发包模式、甲供材、界面划分、规划报告、合约明细表、采购计划图。"],
    ["供应商管理", "供应商库、AI 寻源、考察报告、准入流程和合格库管理。"],
    ["招标文件", "合同模板、前附表、评标办法、招标文件包和关键商务条款。"],
    ["对标定标", "Excel 报价清单解析、多维对标、商务条款分析和定标报告。"],
    ["招采档案", "答疑、开标、谈判、交底等文件归档，形成项目过程证据。"],
    ["合同签署", "合同细节、附件、盖章版回传和导出，承接招标成果。"],
  ];

  return (
    <section className="module-section">
      <SectionHeading label="Function Map" title="六个模块，把地产招采流程做成闭环" />
      <div className="module-grid">
        {modules.map(([title, text]) => (
          <article className="module-card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcurementAi() {
  const capabilities = [
    ["AI 智能规划", "根据项目参数辅助生成合约规划、预算拆分和采购节奏建议。"],
    ["AI 供应商寻源", "围绕工程类别、区域和资质要求，辅助生成候选供应商方向。"],
    ["AI 条款建议", "针对合同特殊补充条款、商务条件和风险点给出结构化建议。"],
    ["AI 解析兜底", "Excel 报价清单规则解析失败时，可调用 AI 辅助识别清单结构。"],
    ["多模型配置", "支持 DeepSeek、阿里云百炼/Qwen、硅基流动、智谱 AI 等模型入口。"],
    ["本地化配置", "API Key 由用户在前端配置，不在公开页面暴露密钥。"],
  ];

  return (
    <section className="ai-capability-section">
      <SectionHeading label="AI Layer" title="AI 接入位置与调用场景" />
      <div className="ai-capability-grid">
        {capabilities.map(([title, text]) => (
          <article key={title}>
            <strong>{title}</strong>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcurementScreens() {
  return (
    <section className="procurement-screens" aria-label="地产招采平台内容截图">
      <div className="screen-card screen-large">
        <div className="screen-bar">
          <span />
          <span />
          <span />
          <strong>合约规划工作台</strong>
        </div>
        <div className="planning-ui">
          <aside>
            <b>六大模块</b>
            {["合约规划", "供应商管理", "招标文件", "对标定标", "招采档案", "合同签署"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </aside>
          <main>
            <div className="ui-heading">
              <div>
                <small>AI 智能规划</small>
                <h3>合约包预算与招标时间建议</h3>
              </div>
              <em>54 个合约包</em>
            </div>
            <div className="table-ui">
              {[
                ["A7", "监理造价招标勘察审图", "邀请招标", "计划中"],
                ["B11", "总包工程", "邀请招标", "重点包"],
                ["C21", "消防工程", "邀请招标", "需界面划分"],
                ["D28", "室内批量精装修", "战略落地", "高金额"],
              ].map((row) => (
                <div key={row[0]}>
                  {row.map((cell) => (
                    <span key={cell}>{cell}</span>
                  ))}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <div className="screen-card">
        <div className="screen-bar">
          <span />
          <span />
          <span />
          <strong>招标文件包</strong>
        </div>
        <div className="doc-ui">
          <FileText size={34} />
          <h3>合同模板 + 商务条款 + 界面划分</h3>
          <p>从招标阶段确定付款比例、履约保证金、质保期、调价条款，流入签约版合同。</p>
          <ul>
            <li>总包合同</li>
            <li>消防工程合同</li>
            <li>精装修合同</li>
          </ul>
        </div>
      </div>

      <div className="screen-card">
        <div className="screen-bar">
          <span />
          <span />
          <span />
          <strong>导出成果</strong>
        </div>
        <div className="report-ui">
          <BarChart3 size={34} />
          <h3>报告、明细表、采购甘特图</h3>
          <p>系统输出包含 Excel 明细、规划报告和采购计划图，方便继续用于招采执行。</p>
          <div className="mini-bars">
            {[56, 82, 42, 74, 64, 91].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImagePage({ go }: { go: (p: Page) => void }) {
  return (
    <DetailShell go={go} label="Project 01" title="喵喵小仙儿 AI 生图" subtitle="把提示词能力产品化">
      <div className="detail-panel full">
        <p>核心洞察</p>
        <h2>产品围绕“提示词生成”设计，把专业 Prompt 拆成可选择的步骤。</h2>
        <p>
          所以我没有只做一个输入框，而是把专业提示词拆成可点选的产品系统：
          艺术风格、基础参数、高级特效、反向提示词等控制项，让普通用户也能稳定出图。
        </p>
      </div>
      <ImageCaseSections />
      <div className="button-row">
        <a className="external-btn" href={links.image} target="_blank" rel="noreferrer">
          访问生图网站 <ExternalLink size={18} />
        </a>
      </div>
    </DetailShell>
  );
}

function ImageCaseSections() {
  const webSteps = [
    ["/assets/cases/image-live/web-01-home.png", "01｜品牌首页", "品牌首页负责建立产品识别，提供开始创作和历史记录入口。"],
    ["/assets/cases/image-live/web-02-inspiration.png", "02｜灵感描述 / API 配置", "顶部配置平台、模型和 API Key；主体输入画面描述，也可以上传参考图进入图生图流程。"],
    ["/assets/cases/image-live/web-03-style-real.png", "03｜艺术风格", "提供 29 种艺术风格选择，支持用户自定义风格方向。"],
    ["/assets/cases/image-live/web-04-advanced-real.png", "04｜参数设置", "14 项基本参数、22 项高级参数、25 项反向提示词分层配置，并提供可视化预览。"],
    ["/assets/cases/image-live/web-05-review-real.png", "05｜生成确认", "生成前回看画面描述、参考图片、风格、基础参数、高级特效和反向提示词。"],
    ["/assets/cases/image-live/web-06-result-real.png", "06｜生成结果示例", "真实生成页截图，能看到配置回顾和由智能体生成的结果图。"],
  ];

  const appSteps = [
    ["/assets/cases/image/app-home.png", "App 首页"],
    ["/assets/cases/image/app-inspiration.png", "灵感描述"],
    ["/assets/cases/image/app-style.png", "风格选择"],
    ["/assets/cases/image/app-params.png", "参数调整"],
    ["/assets/cases/image/app-generate.png", "生成前确认"],
    ["/assets/cases/image/app-result.png", "生成结果"],
  ];

  return (
    <section className="case-stack">
      <div className="overview-copy">
        <span>Web Flow</span>
        <h2>网页端包含 API 配置、灵感描述、参考图上传、风格选择、参数设置、生成确认和结果展示。</h2>
      </div>
      <section className="step-grid web-step-grid">
        {webSteps.map(([image, title, text]) => (
          <article key={title}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <article className="app-flow-section">
        <div className="case-copy">
          <span>Mobile Product</span>
          <h2>App 端：同一套提示词体系迁移到移动端</h2>
          <p>App 端包含首页、灵感描述、风格选择、参数调整、生成确认和结果页，操作路径适配手机屏幕。</p>
          <ul>
            <li>移动端完整链路</li>
            <li>已完成 V1.0</li>
            <li>后续可推进上架流程</li>
          </ul>
        </div>
        <section className="phone-strip">
          {appSteps.map(([image, title]) => (
            <article key={title}>
              <img src={image} alt={title} />
              <span>{title}</span>
            </article>
          ))}
        </section>
      </article>
      <article className="skill-mini-section">
        <div className="case-copy">
          <span>Mini Program / Skill</span>
          <h2>小程序端与 Skill 端：把提示词能力放到不同入口</h2>
          <p>小程序端方便微信用户使用；Skill 已上架扣子，适合作为大众轻量入口，也可以被其他智能体搭载调用。</p>
        </div>
        <div className="skill-shot-grid">
          <figure>
            <img src="/assets/cases/image/skill-coze.png" alt="喵喵小仙儿 Skill 端页面" />
            <figcaption>Skill 端：提示词生成工具入口</figcaption>
          </figure>
          <figure>
            <img src="/assets/cases/image/mini-program.png" alt="喵喵小仙儿小程序端页面" />
            <figcaption>小程序端：移动端产品入口</figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
}

function DigitalPage({ go }: { go: (p: Page) => void }) {
  return (
    <DetailShell go={go} label="Project 02" title="数字人智能体" subtitle="短视频内容生产流水线">
      <section className="digital-brief">
        <div>
          <span>项目描述</span>
          <h2>真实交付项目：短视频内容生产流水线。</h2>
        </div>
        <p>
          这个项目来自真实交付需求：客户需要降低短视频制作的人力成本。页面围绕 8 步流程设计：
          场景设定、爆款词根、爆款选题、脚本生成、分镜脚本、素材上传、视频生成、剪辑合成。
          前端使用 Next.js，后端部署在 AutoDL，通过 FastAPI 调用文案改写、TTS、声音克隆和 LivePortrait 等能力。
        </p>
      </section>
      <figure className="digital-demo">
        <figcaption>使用教程 Demo：演示从素材输入、脚本生成到数字人口播视频合成的完整操作流程</figcaption>
        <video src="/assets/digital-human-demo.mp4" poster="/assets/digital/poster.jpg" controls />
      </figure>
      <DigitalCaseSections />
      <FeatureRow
        items={[
          ["Next.js", "前端工作台"],
          ["FastAPI", "AutoDL 后端服务"],
          ["LLM 接入", "用户在网页填写模型和 API Key，用于文案改写、标题生成和脚本生成"],
          ["HeyGem / LivePortrait", "后端内置数字人生成模型"],
          ["TTS / 声音克隆", "生成口播音频和角色声音"],
          ["剪辑与素材工具", "拉取抖音文案，处理素材、字幕、BGM 和剪辑合成"],
        ]}
      />
      <div className="button-row">
        <a className="external-btn" href={links.digital} target="_blank" rel="noreferrer">
          访问数字人项目 <ExternalLink size={18} />
        </a>
        <span className="inline-note">入口需要邀请码/授权，如需体验请联系作者。</span>
      </div>
    </DetailShell>
  );
}

function DigitalCaseSections() {
  return (
    <section className="case-stack">
      <article className="digital-single-screen">
        <div className="case-copy">
          <span>Agent Page</span>
          <h2>智能体页面：一个页面承接文案、口播、素材、生成和历史记录。</h2>
          <p>
            左侧处理素材文案、脚本和提示词；中间配置数字人口播、头像素材、语音、背景音乐和生成参数；
            右侧查看预览、历史记录和任务状态。
          </p>
        </div>
        <figure>
          <figcaption>数字人智能体核心页面</figcaption>
          <img src="/assets/cases/digital/demo-frame-02.jpg" alt="数字人智能体核心工作台页面" />
        </figure>
      </article>
    </section>
  );
}

function ProofPage() {
  const cards = [
    [Award, "一级造价工程师", "工程成本、合约、结算与风险控制资质", "/assets/proofs/cost-engineer.jpg"],
    [ShieldCheck, "二级建造师", "市政方向，工程实施和项目管理基础", "/assets/proofs/builder.jpg"],
    [BadgeCheck, "建筑经济管理专科", "郑州大学（211），2007 - 2010 全日制专科", "/assets/proofs/college.jpg"],
    [BadgeCheck, "工程管理本科", "广州大学，2019 - 2022 在职就读", "/assets/proofs/bachelor.jpg"],
  ] as const;
  return (
    <section className="page-shell">
      <PageTitle kicker="Credentials" title="工程行业资质与教育背景" />
      <div className="proof-grid">
        {cards.map(([Icon, title, text, image]) => (
          <article className="proof-item" key={title}>
            <figure>
              <img src={image} alt={`${title}脱敏证明`} />
            </figure>
            <Icon size={26} />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-heading">
        <p>Contact</p>
        <h1>联系杨文新</h1>
        <span>希望找业务型 AI 项目经理岗位，欢迎沟通项目、作品或面试机会。</span>
      </div>
      <div className="contact-layout">
        <a href="tel:18688776218">
          <Phone />
          <span>手机 / 微信</span>
          <strong>18688776218</strong>
        </a>
        <a href="mailto:ywxaswd@gmail.com">
          <Mail />
          <span>邮箱</span>
          <strong>ywxaswd@gmail.com</strong>
        </a>
        <div>
          <MapPin />
          <span>城市</span>
          <strong>深圳，可沟通出差</strong>
        </div>
      </div>
    </section>
  );
}

function DetailShell({
  go,
  label,
  title,
  subtitle,
  children,
}: {
  go: (p: Page) => void;
  label: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="page-shell detail-page">
      <button className="back-btn" onClick={() => go("projects")}>
        <ArrowLeft size={16} /> 返回项目
      </button>
      <PageTitle kicker={label} title={title} subtitle={subtitle} />
      {children}
    </section>
  );
}

function PageTitle({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="page-title">
      <p>{kicker}</p>
      <h1>{title}</h1>
      {subtitle && <span>{subtitle}</span>}
    </div>
  );
}

function EvidenceGallery({
  items,
}: {
  items: { image: string; title: string; text: string }[];
}) {
  return (
    <section className="evidence-gallery">
      {items.map((item) => (
        <article className="evidence-card" key={item.image}>
          <img src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function FeatureRow({ items }: { items: [string, string][] }) {
  return (
    <div className="feature-row">
      {items.map(([title, text]) => (
        <div key={title}>
          <strong>{title}</strong>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
