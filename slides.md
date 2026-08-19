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
<p class="cover-tagline">产品交付后的事情，从这里开始。</p>
<div class="cover-meta">
  <span>After-sales, carried through.</span>
</div>

---
layout: pitch-stage
---

<!-- 02 · 实体开箱。问完“还有什么”再点击。 -->
<UnboxingScene />

---
layout: pitch-stage
---

<!-- 03 · 说明书与保修卡。 -->
<CareDocumentsScene />

---
layout: pitch-stage
---

<!-- 04 · 从纸质物料到 Care Card。 -->
<section class="card-thesis">
  <p class="eyebrow">PRODUCT CARE</p>
  <p class="card-thesis__dim">它们被认真地设计、印刷、装进包装盒。</p>
  <h1>但未来，也许不再需要<br /><span>一本需要被保存的说明书。</span></h1>
  <div class="card-thesis__card" v-click>
    <small>MORROW · PRODUCT CARE</small>
    <strong>说明、保修、售后入口。</strong>
    <span>一碰就能开始。</span>
  </div>
</section>

<style scoped>
.card-thesis {
  display: grid;
  align-content: center;
  justify-items: center;
  min-height: 100%;
  text-align: center;
}

.card-thesis__dim {
  margin: 0;
  color: var(--ae-ink-muted);
  font-size: 1.12rem;
}

.card-thesis h1 {
  margin: 0.85rem 0 0;
  color: var(--ae-ink);
  font-size: clamp(2.65rem, 4.3vw, 4rem);
  font-weight: 760;
  letter-spacing: -0.065em;
  line-height: 1.04;
}

.card-thesis h1 span { color: var(--ae-blue); }

.card-thesis__card {
  display: grid;
  justify-items: start;
  width: min(31rem, 76%);
  margin-top: 2.5rem;
  padding: 1.25rem 1.55rem;
  border: 1px solid rgba(0, 113, 227, 0.18);
  border-radius: 1.35rem;
  background: linear-gradient(135deg, #e8f2ff, #fff 72%);
  box-shadow: 0 1.2rem 3.5rem rgba(0, 113, 227, 0.13);
  text-align: left;
}

.card-thesis__card small { color: var(--ae-blue); font-size: 0.56rem; font-weight: 760; letter-spacing: 0.13em; }
.card-thesis__card strong { margin-top: 0.52rem; color: var(--ae-ink); font-size: 1.28rem; letter-spacing: -0.035em; }
.card-thesis__card span { margin-top: 0.35rem; color: var(--ae-ink-muted); font-size: 0.82rem; }
</style>

---
layout: pitch-stage
---

<!-- 05 · 评委体验；Supabase 新单计数驱动右上角工单通知。 -->
<LiveCareMission />

---
layout: pitch-stage
---

<!-- 06 · 第一张售后单的交接。 -->
<section class="case-handoff">
  <div class="case-handoff__copy">
    <p class="eyebrow">THE HANDOFF</p>
    <h1>你刚才提交的，<br /><span>已经进了系统后台。</span></h1>
    <p>消费者的一段对话，已经是一张品牌可以处理的售后单。</p>
  </div>
  <div class="case-handoff__flow" aria-label="消费者端到品牌端的售后交接">
    <div class="handoff-node"><small>CONSUMER</small><strong>一次售后申请</strong></div>
    <span class="handoff-arrow" aria-hidden="true">→</span>
    <div class="handoff-node handoff-node--blue"><small>MORROW</small><strong>一张售后单</strong></div>
    <span class="handoff-arrow" aria-hidden="true">→</span>
    <div class="handoff-node"><small>BRAND</small><strong>品牌开始处理</strong></div>
  </div>
</section>

<style scoped>
.case-handoff { display: grid; align-content: center; justify-items: center; min-height: 100%; text-align: center; }
.case-handoff .eyebrow { text-align: center; }
.case-handoff h1 { margin: 0; color: var(--ae-ink); font-size: clamp(2.7rem, 4.45vw, 4rem); font-weight: 750; letter-spacing: -0.065em; line-height: 1.03; }
.case-handoff h1 span { color: var(--ae-blue); }
.case-handoff__copy > p:not(.eyebrow) { margin: 1.2rem 0 0; color: var(--ae-ink-muted); font-size: 1.05rem; }
.case-handoff__flow { display: flex; align-items: center; justify-content: center; gap: 1.1rem; margin-top: 3rem; }
.handoff-node { display: grid; gap: 0.36rem; min-width: 10.5rem; padding: 1.2rem 1.3rem; border: 1px solid var(--ae-line); border-radius: 1.2rem; background: rgba(255, 255, 255, 0.76); box-shadow: 0 0.8rem 2rem rgba(29, 29, 31, 0.07); text-align: left; }
.handoff-node small { color: var(--ae-ink-muted); font-size: 0.54rem; font-weight: 750; letter-spacing: 0.12em; }
.handoff-node strong { color: var(--ae-ink); font-size: 1.03rem; font-weight: 710; letter-spacing: -0.025em; }
.handoff-node--blue { border-color: rgba(0, 113, 227, 0.28); background: linear-gradient(145deg, rgba(235, 246, 255, 0.98), rgba(255, 255, 255, 0.92)); }
.handoff-node--blue small { color: var(--ae-blue); }
.handoff-arrow { color: var(--ae-blue); font-size: 1.7rem; font-weight: 430; }
</style>

---
layout: pitch-stage
---

<!-- 07 · 说明这张售后单为什么能被品牌处理。 -->
<section class="case-contents">
  <header>
    <p class="eyebrow">WHAT JUST ENTERED THE BACKEND</p>
    <h1>一段对话，先变成<br /><span>一张可以处理的申请。</span></h1>
    <p>不是提醒品牌“有人来问了”，而是把做决定需要的东西放到一起。</p>
  </header>
  <div class="case-contents__grid">
    <article><small>01 · 哪个产品</small><strong>型号、订单、序列号</strong></article>
    <article><small>02 · 出了什么问题</small><strong>故障描述、图片或视频</strong></article>
    <article><small>03 · 用户想怎么解决</small><strong>维修、换新或退款</strong></article>
    <article class="case-contents__decision"><small>04 · 品牌怎么处理</small><strong>核对保修规则，需要时人工审核</strong></article>
  </div>
  <p class="case-contents__line">信息在同一张单里，消费者不用反复说，品牌也不用重新找。</p>
</section>

<style scoped>
.case-contents { display: grid; align-content: center; min-height: 100%; }
.case-contents h1 { margin: 0; color: var(--ae-ink); font-size: clamp(2.65rem, 4.15vw, 3.65rem); font-weight: 750; letter-spacing: -0.064em; line-height: 1.04; }
.case-contents h1 span { color: var(--ae-blue); }
.case-contents header > p:not(.eyebrow) { margin: 0.9rem 0 0; color: var(--ae-ink-muted); font-size: 1.03rem; }
.case-contents__grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.8rem; margin-top: 2.7rem; }
.case-contents__grid article { min-height: 9.4rem; padding: 1.25rem 1.05rem; border: 1px solid var(--ae-line); border-radius: 1.15rem; background: rgba(255,255,255,.72); }
.case-contents__grid small { display: block; color: var(--ae-blue); font-size: .56rem; font-weight: 760; letter-spacing: .1em; }
.case-contents__grid strong { display: block; margin-top: .85rem; color: var(--ae-ink); font-size: 1.05rem; font-weight: 710; letter-spacing: -.035em; line-height: 1.26; }
.case-contents__decision { border-color: rgba(0,113,227,.32) !important; background: linear-gradient(145deg,#e8f2ff,#fff) !important; }
.case-contents__line { margin: 1.6rem 0 0; color: var(--ae-ink-muted); font-size: .9rem; text-align: center; }
</style>

---
layout: pitch-stage
---

<!-- 08 · 解释产品的分界：回复问题与完成一件售后是两回事。 -->
<section class="finish-contrast">
  <header>
    <p class="eyebrow">THE DIFFERENCE</p>
    <h1>客服把话说完，<br /><span>不等于售后被处理。</span></h1>
  </header>
  <div class="finish-contrast__paths">
    <article class="finish-contrast__path finish-contrast__path--grey">
      <small>只停在对话里</small>
      <strong>回复一次问题</strong>
      <p>订单、图片、规则和处理结果，仍然散在不同的人和地方。</p>
    </article>
    <i aria-hidden="true">→</i>
    <article class="finish-contrast__path finish-contrast__path--blue">
      <small>MORROW 继续往下走</small>
      <strong>把这件售后推进到结果</strong>
      <p>问齐信息 → 留下售后单 → 核对条件 → 品牌给出结果</p>
    </article>
  </div>
  <p class="finish-contrast__line">Morrow 不在比谁更会聊天。<b>我们让品牌少漏掉一件需要处理的售后。</b></p>
</section>

<style scoped>
.finish-contrast { display: grid; align-content: center; min-height: 100%; }
.finish-contrast h1 { margin: 0; color: var(--ae-ink); font-size: clamp(2.8rem,4.35vw,3.85rem); font-weight: 750; letter-spacing: -.066em; line-height: 1.03; }
.finish-contrast h1 span { color: var(--ae-blue); }
.finish-contrast__paths { display: grid; grid-template-columns: minmax(16rem,1fr) 3.5rem minmax(16rem,1fr); align-items: center; gap: 1.2rem; margin-top: 2.7rem; }
.finish-contrast__path { min-height: 10.5rem; padding: 1.5rem 1.65rem; border: 1px solid var(--ae-line); border-radius: 1.25rem; background: rgba(255,255,255,.72); }
.finish-contrast__path small { color: var(--ae-ink-muted); font-size: .58rem; font-weight: 760; letter-spacing: .11em; }
.finish-contrast__path strong { display: block; margin-top: .72rem; color: var(--ae-ink); font-size: 1.33rem; font-weight: 730; letter-spacing: -.045em; }
.finish-contrast__path p { margin: .72rem 0 0; color: var(--ae-ink-muted); font-size: .84rem; line-height: 1.5; }
.finish-contrast__paths > i { color: var(--ae-blue); font-size: 2rem; font-style: normal; text-align: center; }
.finish-contrast__path--grey { opacity: .62; }
.finish-contrast__path--blue { border-color: rgba(0,113,227,.32); background: linear-gradient(145deg,#e8f2ff,#fff); }
.finish-contrast__path--blue small { color: var(--ae-blue); }
.finish-contrast__line { margin: 1.75rem 0 0; color: var(--ae-ink-muted); font-size: .94rem; text-align: center; }
.finish-contrast__line b { color: var(--ae-ink); }
</style>

---
layout: pitch-stage
---

<!-- 09 · 同一张售后单在品牌端审批。Supabase 更新计数触发蓝色结果条。 -->
<LiveResolutionMoment />

---
layout: pitch-stage
---

<!-- 10 · 用刚才发生的事件证明 MVP 的完整链路。 -->
<section class="build-proof">
  <header>
    <p class="eyebrow">WHAT YOU JUST SAW</p>
    <h1>刚才那条申请，已经走完售后链路。</h1>
  </header>
  <div class="build-proof__columns">
    <article><small>01 · CARE CARD</small><strong>碰一下，进入售后</strong><p>实体卡或网页入口<br />选择场景，开始对话</p></article>
    <i aria-hidden="true">→</i>
    <article class="build-proof__core"><small>02 · MORROW CASE</small><strong>资料与状态汇入工单</strong><p>订单、序列号、图片<br />持续保存处理进度</p></article>
    <i aria-hidden="true">→</i>
    <article><small>03 · SYSTEM BACKEND</small><strong>核对规则并给出结果</strong><p>规则核对与人工审核<br />结果同步给消费者</p></article>
  </div>
  <div class="build-proof__checks"><span>✓ 对话推进申请</span><span>✓ 资料与状态进入工单</span><span>✓ 规则核对并人工审核</span></div>
</section>

<style scoped>
.build-proof { display: grid; align-content: center; min-height: 100%; }
.build-proof h1 { margin: 0; color: var(--ae-ink); font-size: clamp(2.35rem, 3.4vw, 3rem); font-weight: 750; letter-spacing: -0.062em; line-height: 1.03; }
.build-proof__columns { display: grid; grid-template-columns: minmax(0, 1fr) 2.25rem minmax(0, 1fr) 2.25rem minmax(0, 1fr); align-items: stretch; gap: 0.8rem; margin-top: 2.4rem; }
.build-proof__columns article { min-width: 0; min-height: 10.5rem; padding: 1.35rem 1.4rem; border: 1px solid var(--ae-line); border-radius: 1.25rem; background: rgba(255, 255, 255, 0.72); box-shadow: 0 1rem 2.4rem rgba(29, 29, 31, 0.07); }
.build-proof__columns article small { color: var(--ae-ink-muted); font-size: 0.54rem; font-weight: 760; letter-spacing: 0.12em; }
.build-proof__columns article strong { display: block; margin-top: 0.72rem; color: var(--ae-ink); font-size: 1.22rem; font-weight: 730; letter-spacing: -0.04em; line-height: 1.18; }
.build-proof__columns article p { margin: 0.7rem 0 0; color: var(--ae-ink-muted); font-size: 0.84rem; line-height: 1.55; }
.build-proof__columns > i { align-self: center; color: var(--ae-blue); font-size: 1.45rem; font-style: normal; text-align: center; }
.build-proof__core { border-color: rgba(0, 113, 227, 0.3) !important; background: linear-gradient(145deg, #e8f2ff, #fff) !important; }
.build-proof__core small { color: var(--ae-blue) !important; }
.build-proof__checks { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.8rem; margin-top: 1rem; color: var(--ae-ink-muted); font-size: 0.72rem; }
.build-proof__checks span { padding: 0.62rem 0.85rem; border: 1px solid rgba(0, 113, 227, 0.1); border-radius: 0.8rem; background: rgba(232, 242, 255, 0.42); text-align: center; }
.build-proof__checks span::first-letter { color: var(--ae-blue); }
</style>

---
layout: pitch-stage
---

<!-- 11 · 后半段的记忆点：人机协同的可验证效率证据。 -->
<section class="productivity-proof">
  <div class="productivity-proof__copy">
    <p class="eyebrow">WHY A BRAND CARES</p>
    <h1>当 AI 先把重复工作接住，<br /><span>人工才能去处理真正需要判断的售后。</span></h1>
    <p>这不是“让 AI 替人拍板”。它是让品牌把人的时间，留给换新、退款和例外情况。</p>
  </div>
  <div class="productivity-proof__number">
    <small>CUSTOMER SUPPORT STUDY</small>
    <strong class="productivity-proof__stat" aria-label="34 percent, see source note"><span>34</span><span class="productivity-proof__unit">%</span><sup>*</sup></strong>
    <p>经验较少的客服获得 AI 辅助后，<br />每小时处理问题的提升</p>
  </div>
  <p class="productivity-proof__source">* 研究对象：5,179 名客户支持人员；NBER《Generative AI at Work》，2023。34% 为经验较少客服的研究结果。</p>
</section>

<style scoped>
.productivity-proof { position: relative; display: grid; grid-template-columns: minmax(24rem,1.08fr) minmax(19rem,.72fr); align-items: center; gap: clamp(3rem,8vw,8rem); min-height: 100%; }
.productivity-proof__copy h1 { margin: 0; color: var(--ae-ink); font-size: clamp(2.5rem,3.95vw,3.55rem); font-weight: 750; letter-spacing: -.063em; line-height: 1.04; }
.productivity-proof__copy h1 span { color: var(--ae-blue); }
.productivity-proof__copy > p:not(.eyebrow) { max-width: 29rem; margin: 1.25rem 0 0; color: var(--ae-ink-muted); font-size: 1.01rem; line-height: 1.55; }
.productivity-proof__number { padding: 1.45rem 0 1.3rem 2.8rem; border-left: 1px solid var(--ae-line); }
.productivity-proof__number small { color: var(--ae-blue); font-size: .57rem; font-weight: 770; letter-spacing: .12em; }
.productivity-proof__stat { display: flex; align-items: flex-start; width: max-content; margin-top: .35rem; color: var(--ae-blue); font-size: clamp(6.8rem,12vw,10rem); font-variant-numeric: tabular-nums; font-weight: 770; letter-spacing: -.055em; line-height: .82; white-space: nowrap; }
.productivity-proof__unit { margin-left: .035em; font-size: .82em; letter-spacing: -.035em; }
.productivity-proof__stat sup { margin: .1em 0 0 .03em; font-size: .15em; font-weight: 720; letter-spacing: 0; line-height: 1; }
.productivity-proof__number p { margin: 1.1rem 0 0; color: var(--ae-ink); font-size: 1rem; font-weight: 650; line-height: 1.42; }
.productivity-proof__source { position: absolute; right: 0; bottom: 0; width: 42%; margin: 0; color: #949499; font-size: .54rem; line-height: 1.4; text-align: right; }
</style>

---
layout: pitch-stage
---

<!-- 12 · 从刚才那种复杂、需要判断的售后开始。 -->
<section class="first-customers">
  <header>
    <p class="eyebrow">WHERE WE START</p>
    <h1>我们先从这类电子品牌开始。</h1>
    <p>它们不是没有客服，而是每一件售后都开始需要判断和交接。</p>
  </header>
  <div class="first-customers__reasons">
    <span>型号和保修规则变多</span><i>+</i>
    <span>订单、序列号、证据要核对</span><i>+</i>
    <span>售后结果影响口碑和成本</span>
  </div>
  <p class="first-customers__answer">它们需要把“客户说了什么”变成“品牌接下来要做什么”，<b>但不想自己从零搭系统。</b></p>
</section>

<style scoped>
.first-customers { display: grid; align-content: center; justify-items: center; min-height: 100%; text-align: center; }
.first-customers .eyebrow { text-align: center; }
.first-customers h1 { margin: 0; color: var(--ae-ink); font-size: clamp(3rem, 4.7vw, 4.1rem); font-weight: 750; letter-spacing: -0.068em; }
.first-customers header > p:not(.eyebrow) { margin: 0.75rem 0 0; color: var(--ae-ink-muted); font-size: 1.12rem; }
.first-customers__reasons { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 0.8rem; max-width: 55rem; margin-top: 2.8rem; }
.first-customers__reasons span { padding: 0.72rem 1rem; border: 1px solid var(--ae-line); border-radius: 999px; color: var(--ae-ink); background: rgba(255, 255, 255, 0.7); font-size: 0.88rem; font-weight: 620; }
.first-customers__reasons i { color: var(--ae-blue); font-size: 1.05rem; font-style: normal; }
.first-customers__answer { margin: 2rem 0 0; color: var(--ae-ink-muted); font-size: 1.05rem; }
.first-customers__answer b { color: var(--ae-ink); }
</style>

---
layout: pitch-stage
---

<!-- 13 · 商业模式：先服务更愿意尝新的品牌，再按服务持续收费。 -->
<section class="business-model">
  <header>
    <p class="eyebrow">BUSINESS MODEL</p>
    <h1>先服务敢尝新的品牌，按售后收费。</h1>
  </header>
  <div class="business-model__audiences">
    <article>
      <carbon:rocket class="business-model__icon" aria-hidden="true" />
      <div>
        <small>01 · STARTUP / UNICORN</small>
        <strong>决策链短，愿意尝试新东西</strong>
        <p>更容易接受新的售后入口和 AI 协作方式，先从一个产品线开始。</p>
      </div>
    </article>
    <article>
      <carbon:earth class="business-model__icon" aria-hidden="true" />
      <div>
        <small>02 · GLOBAL DEVICE BRANDS</small>
        <strong>出海中小电子设备品牌</strong>
        <p>跨市场、跨语言、跨保修规则，需要一套轻量的售后系统。</p>
      </div>
    </article>
  </div>
  <div class="business-model__economics">
    <article class="business-model__revenue">
      <small>REVENUE MODEL</small>
      <strong>品牌订阅 + 工单服务费</strong>
      <p>基础订阅覆盖接入与规则；再按工单量和增值模块扩展。</p>
    </article>
    <article class="business-model__signal">
      <small>MARKET SIGNAL · NRF 2025</small>
      <strong>$849.9B</strong>
      <p>2025 年美国零售预计退货规模</p>
      <span>Claimlane case benchmark · <b>77% faster</b> complex RMA</span>
    </article>
  </div>
  <p class="business-model__source">Sources: NRF / Happy Returns, 2025 Retail Returns Landscape · Claimlane MaxGaming case, company-reported.</p>
</section>

<style scoped>
.business-model { display: grid; align-content: start; min-height: 100%; padding-top: .35rem; }
.business-model h1 { margin: 0; color: var(--ae-ink); font-size: clamp(2.35rem, 3.6vw, 3.1rem); font-weight: 750; letter-spacing: -0.062em; line-height: 1.03; }
.business-model__audiences { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin-top: 1.55rem; }
.business-model__audiences article { display: grid; grid-template-columns: 2.35rem minmax(0, 1fr); gap: .85rem; min-height: 7.25rem; padding: 1.05rem 1.2rem; border: 1px solid var(--ae-line); border-radius: 1.15rem; background: rgba(255,255,255,.72); }
.business-model__icon { width: 1.95rem; height: 1.95rem; padding: .4rem; border-radius: .7rem; color: var(--ae-blue); background: #e8f2ff; }
.business-model__audiences small, .business-model__economics small { color: var(--ae-blue); font-size: .53rem; font-weight: 760; letter-spacing: .1em; }
.business-model__audiences strong { display: block; margin-top: .55rem; color: var(--ae-ink); font-size: 1rem; font-weight: 720; letter-spacing: -.035em; line-height: 1.16; }
.business-model__audiences p { margin: .45rem 0 0; color: var(--ae-ink-muted); font-size: .75rem; line-height: 1.4; }
.business-model__economics { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(17rem, .85fr); gap: 1rem; margin-top: .8rem; }
.business-model__economics article { min-height: 5.7rem; padding: .9rem 1.15rem; border: 1px solid var(--ae-line); border-radius: 1rem; background: rgba(255,255,255,.72); }
.business-model__revenue strong { display: block; margin-top: .45rem; color: var(--ae-ink); font-size: 1.12rem; font-weight: 720; letter-spacing: -.035em; }
.business-model__revenue p { max-width: 32rem; margin: .35rem 0 0; color: var(--ae-ink-muted); font-size: .75rem; line-height: 1.35; }
.business-model__signal { background: rgba(255,255,255,.72); }
.business-model__signal strong { display: block; margin-top: .12rem; color: var(--ae-blue); font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 780; letter-spacing: -.07em; line-height: .95; }
.business-model__signal p { margin: .25rem 0 0; color: var(--ae-ink); font-size: .75rem; font-weight: 650; }
.business-model__signal span { display: block; margin-top: .25rem; color: var(--ae-ink-muted); font-size: .62rem; }
.business-model__signal b { color: var(--ae-blue); }
.business-model__source { margin: .5rem 0 0; color: #949499; font-size: .48rem; line-height: 1.25; text-align: right; }
</style>

---
layout: pitch-stage
---

<!-- 14 · 愿景只基于前面已经说明的服务关系。 -->
<section class="stripe-analogy">
  <p>Stripe 让商家不必从零搭一套支付系统。</p>
  <h1>Morrow，让品牌不必从零搭<br /><span>一整套售后系统。</span></h1>
  <div><span>对消费者，一碰就能开始售后。</span><i>·</i><span>对品牌，一套能把售后处理下去的系统。</span></div>
</section>

<style scoped>
.stripe-analogy { display: grid; align-content: center; justify-items: center; min-height: 100%; text-align: center; }
.stripe-analogy > p { margin: 0; color: var(--ae-ink-muted); font-size: 1.3rem; font-weight: 560; }
.stripe-analogy h1 { margin: 1rem 0 0; color: var(--ae-ink); font-size: clamp(2.65rem, 4.3vw, 4rem); font-weight: 760; letter-spacing: -.067em; line-height: 1.04; }
.stripe-analogy h1 span { color: var(--ae-blue); }
.stripe-analogy div { display: flex; gap: .85rem; justify-content: center; margin-top: 2.25rem; color: var(--ae-ink-muted); font-size: .92rem; }
.stripe-analogy i { color: var(--ae-blue); font-style: normal; }
</style>

---
layout: pitch-stage
---

<!-- 15 · 收束回到观众刚刚体验到的事。 -->
<section class="morrow-close">
  <p class="eyebrow">MORROW</p>
  <h1>别只把话聊完。<br /><span>把售后做完。</span></h1>
  <p>The relationship is what comes after.</p>
</section>

<style scoped>
.morrow-close { display: grid; align-content: center; justify-items: center; min-height: 100%; text-align: center; }
.morrow-close .eyebrow { text-align: center; }
.morrow-close h1 { margin: 0; color: var(--ae-ink); font-size: clamp(3.4rem, 5.6vw, 4.9rem); font-weight: 760; letter-spacing: -.078em; line-height: .98; }
.morrow-close h1 span { color: var(--ae-blue); }
.morrow-close > p:not(.eyebrow) { margin: 1.65rem 0 0; color: var(--ae-ink-muted); font-size: 1rem; font-weight: 560; }
</style>
