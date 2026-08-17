---
theme: apple-basic
title: Morrow · 黑客松路演
aspectRatio: 16/9
colorSchema: light
remoteAssets: false
presenter: true
layout: cover-stage
---

<script setup lang="ts">
import './styles/index.css'
</script>

<div class="deck-signature">@不知道起什么名字</div>

<h1>Morrow</h1>
<p class="cover-tagline">消费电子品牌的 AI 售后工单决策系统<br/>把每一次售后请求，变成品牌可确认的工单。</p>
<div class="cover-meta">
  <span>Turn every after-sales request into a case the brand can act on.</span>
</div>

<!--
01 · 封面。一句话定位，随后立刻进入开场故事。
-->

---
layout: pitch-stage
---

<!--
02 · 开盒互动。第一次点击打开盒子并升起手机、充电线；第二次点击出现问号。主讲人停顿，问“还有呢？”。
-->

<UnboxingScene />

---
layout: pitch-stage
---

<!--
03 · 答案揭晓。点击后让产品说明书、保修卡与底部结论同时出现。
-->

<CareDocumentsScene />

---
layout: pitch-stage
---

<!--
04 · 核心提问。先停顿让观众回想；点击后揭示 Morrow 对消费者与品牌两端的价值主张。
-->

<section class="after-sales-question">
  <p class="eyebrow">ONE SIMPLE QUESTION</p>
  <p class="question-lead">那么 ——</p>
  <h1>你现在还能找到<br/><span>手机的产品说明书与保修卡吗？</span></h1>

  <div v-click class="after-sales-thesis">
    <p class="thesis-line">找不到，不应该意味着售后从头开始。</p>
    <div class="thesis-bridge">
      <div class="thesis-benefit">
        <small>FOR CONSUMERS</small>
        <strong>重构消费者售后体验</strong>
        <span>更容易找到入口、说明与保修状态</span>
      </div>
      <span class="thesis-plus">+</span>
      <div class="thesis-benefit">
        <small>FOR BRANDS</small>
        <strong>降低品牌维护成本</strong>
        <span>更少重复沟通，更清晰地处理每次请求</span>
      </div>
    </div>
  </div>
</section>

<style scoped>
.after-sales-question {
  position: relative;
  display: grid;
  align-content: center;
  justify-items: center;
  min-height: 100%;
  text-align: center;
}

.after-sales-question::before {
  position: absolute;
  z-index: -1;
  top: 42%;
  left: 50%;
  color: rgba(0, 113, 227, 0.05);
  content: "?";
  font-size: 26rem;
  font-weight: 760;
  letter-spacing: -0.1em;
  line-height: 0.7;
  transform: translate(-50%, -50%);
}

.after-sales-question .eyebrow {
  text-align: center;
}

.question-lead {
  margin: 0 0 0.7rem;
  color: var(--ae-ink-muted);
  font-size: 1.2rem;
  font-weight: 560;
}

.after-sales-question h1 {
  margin: 0;
  color: var(--ae-ink);
  font-size: clamp(2.4rem, 3.6vw, 3.35rem);
  font-weight: 760;
  letter-spacing: -0.06em;
  line-height: 1.04;
}

.after-sales-question h1 span {
  display: inline-block;
  color: var(--ae-blue);
  white-space: nowrap;
}

.after-sales-thesis {
  width: min(58rem, 94%);
  margin-top: 2.35rem;
  transition: opacity 360ms ease, transform 620ms var(--ae-ease), filter 620ms var(--ae-ease);
}

.after-sales-thesis.slidev-vclick-hidden {
  opacity: 0;
  filter: blur(0.35rem);
  transform: translateY(1.1rem) scale(0.98);
}

.thesis-line {
  margin: 0 0 1.1rem;
  color: var(--ae-ink);
  font-size: 1.16rem;
  font-weight: 680;
  letter-spacing: -0.02em;
}

.thesis-bridge {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: stretch;
  gap: 1rem;
}

.thesis-benefit {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.1rem 1.35rem;
  border: 1px solid rgba(29, 29, 31, 0.1);
  border-radius: var(--ae-radius-md);
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 1rem 2.6rem rgba(29, 29, 31, 0.08);
  text-align: left;
  backdrop-filter: blur(18px);
}

.thesis-benefit small {
  color: var(--ae-blue);
  font-size: 0.58rem;
  font-weight: 780;
  letter-spacing: 0.13em;
}

.thesis-benefit strong {
  margin-top: 0.35rem;
  color: var(--ae-ink);
  font-size: 1.02rem;
  font-weight: 730;
}

.thesis-benefit span {
  margin-top: 0.35rem;
  color: var(--ae-ink-muted);
  font-size: 0.75rem;
  line-height: 1.4;
}

.thesis-plus {
  align-self: center;
  color: var(--ae-blue);
  font-size: 1.6rem;
  font-weight: 520;
}
</style>

---
layout: pitch-stage
---

<!--
05 · 发卡！宣布角色转换：各位不再是评委，而是刚买了一只鼠标的消费者。任选故障场景，碰卡片完成退换货。
-->

<section class="briefing">
  <header>
    <p class="eyebrow">LIVE DEMO</p>
    <h1>现在，请各位<br/>当一次消费者。</h1>
    <p>我们准备了一组真实消费电子售后里常见的故障场景。</p>
  </header>
  <ol class="checklist checklist--plain demo-steps">
    <li v-click>
      <span class="check">1</span>
      <div><b>领取实体 Care Card</b><p>我们的队员正在发放</p></div>
    </li>
    <li v-click>
      <span class="check">2</span>
      <div><b>任选一个故障场景</b><p>真实售后中的常见故障</p></div>
    </li>
    <li v-click>
      <span class="check">3</span>
      <div><b>碰一下卡片</b><p>NFC 触发，进入品牌售后</p></div>
    </li>
    <li v-click>
      <span class="check">4</span>
      <div><b>完成一次退换货申请</b><p>体验完整链路，直到 Resolution</p></div>
    </li>
  </ol>
</section>

<style scoped>
.demo-steps li {
  opacity: 1;
  clip-path: inset(0);
  transform: translateY(0);
  transition: clip-path 420ms var(--ae-ease), transform 520ms var(--ae-ease);
}

.demo-steps li.slidev-vclick-hidden {
  visibility: hidden;
  opacity: 1 !important;
  clip-path: inset(0 0 100% 0);
  transform: translateY(0.7rem);
}
</style>

---
layout: pitch-stage
---

<!--
06 · 章节页：互动结束，收束到正式路演。
-->

<section class="section-marker">
  <p class="eyebrow">SECTION 01 · BRAND &amp; VISION</p>
  <h1>品牌与愿景</h1>
  <span>The relationship is what comes after.</span>
</section>

---
layout: pitch-stage
---

<!--
07 · 商业故事：从刚才那张被遗忘的小卡片，讲到品牌背后一整套昂贵体系。三个痛点逐个点到，停顿在"预算紧"。
-->

<header class="slide-header">
  <p class="eyebrow">THE PROBLEM</p>
  <h1>卖出之后，才是关系的开始。</h1>
  <p class="slide-sub">刚才那张被遗忘的小卡片，对品牌来说，是一整套昂贵的体系。</p>
</header>

<div class="pain-grid">
  <article class="pain-card hover-lift">
    <div class="pain-head">
      <span class="pain-num">01</span>
      <h3>人力贵</h3>
    </div>
    <p>海外客服成本高、语言多、时区杂，7×24 小时覆盖几乎不可能。</p>
  </article>
  <article class="pain-card hover-lift">
    <div class="pain-head">
      <span class="pain-num">02</span>
      <h3>流程散</h3>
    </div>
    <p>售后请求分散在邮件、聊天和表格里，无法追踪，更无法沉淀。</p>
  </article>
  <article class="pain-card hover-lift">
    <div class="pain-head">
      <span class="pain-num">03</span>
      <h3>预算紧</h3>
    </div>
    <p>从零搭建完整售后系统成本巨大，但消费者期待的是专业体验。</p>
  </article>
</div>

---
layout: pitch-stage
---

<!--
08 · 章节页：进入服务部分。
-->

<section class="section-marker">
  <p class="eyebrow">SECTION 02 · THE SERVICE</p>
  <h1>提供的服务</h1>
  <span>售后，是一种可直接接入的能力。</span>
</section>

---
layout: pitch-stage
---

<!--
09 · 方案总览。左侧定位，右侧四件事。强调：刚才评委完成的退换货，背后就是这四件事。
-->

<section class="briefing">
  <header>
    <p class="eyebrow">THE SOLUTION</p>
    <h1>售后，是一种<br/>可接入的能力。</h1>
    <p>企业定义规则，复杂处理交给 Morrow。</p>
  </header>
  <ol class="checklist checklist--plain">
    <li>
      <span class="check">✓</span>
      <div><b>结构化工单</b><p>把消费者的售后请求转化为持续存在的 Service Case</p></div>
    </li>
    <li>
      <span class="check">✓</span>
      <div><b>证据收集</b><p>通过 AI 客服或 Public API 收集凭证、序列号、故障信息</p></div>
    </li>
    <li>
      <span class="check">✓</span>
      <div><b>政策判定</b><p>根据品牌 Policy 自动判断退换 / 维修条件与下一步</p></div>
    </li>
    <li>
      <span class="check">✓</span>
      <div><b>品牌确认</b><p>判断结果推到 Console，品牌只做最后一道确认</p></div>
    </li>
  </ol>
</section>

---
layout: pitch-stage
---

<!--
10 · 链路回顾：快速带过，别逐格念。一句话："各位刚才碰的那张卡，走的就是这条路。"
-->

<header class="slide-header">
  <p class="eyebrow">HOW IT WORKS</p>
  <h1>一条链路，从请求到 Resolution。</h1>
</header>

<FlowPipeline :steps="[
  { num: '01', title: 'Support Entry', desc: '碰一下卡片，进入品牌售后' },
  { num: '02', title: 'Case', desc: 'AI 理解需求，生成工单' },
  { num: '03', title: 'Evidence', desc: '凭证、序列号，来源可溯' },
  { num: '04', title: 'Policy', desc: '品牌政策决定下一步' },
  { num: '05', title: 'Resolution', desc: '换新 + 人工审批' },
  { num: '06', title: 'Console', desc: '品牌看到同一张 Case' },
]" />

<p class="center-note">渠道会变化，Case 持续存在。<span class="note-em">Channels change. Cases persist.</span></p>

<style scoped>
.center-note {
  margin: 2.2rem 0 0;
  text-align: center;
  color: var(--ae-ink-muted);
  font-size: 0.95rem;
}

.center-note .note-em {
  margin-left: 0.6rem;
  color: var(--ae-blue);
  font-weight: 650;
}
</style>

---
layout: pitch-stage
---

<!--
11 · 证据与信任：这是与"AI 客服"区分的关键页。讲清"不编置信度"，最后一句点出 AI 与规则的分工。
-->

<header class="slide-header">
  <p class="eyebrow">EVIDENCE, NOT CONFIDENCE</p>
  <h1>不用「AI 有 87% 把握」，用证据说话。</h1>
  <p class="slide-sub">「用户说了」≠「已经验证」。每条 Evidence 都有类型、数值、来源与状态。</p>
</header>

<EvidenceBadges :items="[
  { status: 'verified', label: 'VERIFIED', desc: '已验证，可作为决策依据' },
  { status: 'supported', label: 'SUPPORTED', desc: '有佐证，可支撑判断' },
  { status: 'claimed', label: 'CLAIMED', desc: '用户声称，待验证' },
  { status: 'missing', label: 'MISSING', desc: '缺失，需要继续收集' },
  { status: 'conflicted', label: 'CONFLICTED', desc: '相互冲突，转人工审核' },
  { status: 'invalid', label: 'INVALID', desc: '无效，不可采用' },
]" />

<p class="center-note">AI 负责理解与沟通，<b>规则负责边界</b>。</p>

<style scoped>
.center-note {
  margin: 1.8rem 0 0;
  text-align: center;
  color: var(--ae-ink-muted);
  font-size: 1rem;
}

.center-note b {
  color: var(--ae-ink);
  font-weight: 680;
}
</style>

---
layout: pitch-stage
---

<!--
12 · 差异化。四个标签各一句，重点讲"AI 是可选项"。
-->

<header class="slide-header">
  <p class="eyebrow">WHY MORROW</p>
  <h1>工单是核心，AI 只是入口之一。</h1>
</header>

<div class="diff-grid">
  <article class="diff-card hover-lift">
    <span class="diff-tag diff-tag--blue">Channels change</span>
    <h3>Case 持续存在</h3>
    <p>官网、订单页、二维码、NFC 都只是入口。渠道会变化，Case 才是品牌资产。</p>
  </article>
  <article class="diff-card hover-lift">
    <span class="diff-tag diff-tag--green">Optional AI</span>
    <h3>AI 客服是可选项</h3>
    <p>用 Morrow 托管 AI，或只用工单系统、通过 Public API 接入自己的客服与 Agent。</p>
  </article>
  <article class="diff-card hover-lift">
    <span class="diff-tag diff-tag--purple">Evidence-based</span>
    <h3>证据驱动决策</h3>
    <p>不使用未经校准的置信度。已知什么、来自哪里、还缺什么，显式可查。</p>
  </article>
  <article class="diff-card hover-lift">
    <span class="diff-tag diff-tag--orange">Human in the loop</span>
    <h3>高风险动作人工审批</h3>
    <p>Replacement 等高权限动作进入 REVIEW，由 Console 人工 Approve / Reject。</p>
  </article>
</div>

---
layout: pitch-stage
---

<!--
13 · 章节页：进入商业部分。
-->

<section class="section-marker">
  <p class="eyebrow">SECTION 03 · BUSINESS</p>
  <h1>商业与 B 端</h1>
  <span>从一次 Demo，到一门生意。</span>
</section>

---
layout: pitch-stage
---

<!--
14 · 商业模式。两种接入方式：只用工单底座（API），或全托管（AI + Console + Care Card）。
-->

<header class="slide-header">
  <p class="eyebrow">BUSINESS</p>
  <h1>两种接入，一个底座。</h1>
  <p class="slide-sub">目标客户：正在出海的消费电子品牌 —— 工单量大、人力贵、预算有限。</p>
</header>

<div class="diff-grid">
  <article class="diff-card hover-lift">
    <span class="diff-tag diff-tag--blue">API 接入</span>
    <h3>只用工单底座</h3>
    <p>品牌保留自有客服或 AI Agent，通过 Public API 接入 Case、Evidence 与 Policy，按调用量计费。</p>
  </article>
  <article class="diff-card hover-lift">
    <span class="diff-tag diff-tag--green">全托管</span>
    <h3>AI 客服 + Console</h3>
    <p>Morrow 托管 AI 入口与审批台，Care Card 打通线下交付场景，按品牌订阅。</p>
  </article>
</div>

---
layout: pitch-stage
---

<!--
15 · B 端展示。讲完切到 Console 现场演示：评委刚才产生的 Case，出现在企业端。
-->

<section class="briefing">
  <header>
    <p class="eyebrow">CONSOLE · B 端</p>
    <h1>企业端，<br/>看到同一张 Case。</h1>
    <p>刚才各位产生的售后请求，已经成为企业可处理的一张真实工单。</p>
    <p class="console-cta">接下来 → 切换 Console，现场演示同一张 Case。</p>
  </header>
  <ol class="checklist checklist--plain">
    <li>
      <span class="check">✓</span>
      <div><b>Case 列表与状态</b><p>从 CREATED 到 RESOLVED 全程可视</p></div>
    </li>
    <li>
      <span class="check">✓</span>
      <div><b>事实与 Evidence</b><p>每条信息的来源与验证状态</p></div>
    </li>
    <li>
      <span class="check">✓</span>
      <div><b>缺失信息提示</b><p>还缺什么，一目了然</p></div>
    </li>
    <li>
      <span class="check">✓</span>
      <div><b>Approve / Reject</b><p>高权限动作由人工复核</p></div>
    </li>
  </ol>
</section>

<style scoped>
.console-cta {
  margin: 1.4rem 0 0;
  color: var(--ae-blue);
  font-size: 0.9rem;
  font-weight: 650;
}
</style>

---
layout: pitch-stage
---

<!--
16 · 收尾。一句 tagline，鞠躬，进入评委提问。
-->

<section class="thank-you">
  <p class="eyebrow">MORROW</p>
  <h1>After-sales decisions,<br/>made effortless.</h1>
  <p class="tagline">把每一次售后请求，变成品牌可确认的工单。</p>
  <div class="cta-row">
    <span class="cta-btn cta-btn--primary">现场 Demo · Demo Brand</span>
    <span class="cta-btn cta-btn--secondary">After-sales powered by Morrow</span>
  </div>
</section>
