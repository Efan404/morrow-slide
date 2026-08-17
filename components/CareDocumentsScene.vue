<template>
  <section class="documents-slide">
    <header class="documents-heading">
      <p class="eyebrow">THE MISSING PIECE</p>
      <h1>盒子里，还有两样东西。</h1>
    </header>

    <div class="documents-scene" aria-label="产品说明书与保修卡从包装盒中弹出">
      <div v-click class="documents-reveal-trigger" aria-hidden="true" />

      <div class="open-box" aria-hidden="true">
        <div class="open-box-lid"><span>MORROW</span></div>
        <div class="open-box-well" />

        <article class="paper-document paper-document--manual">
          <span class="document-kicker">PRODUCT GUIDE</span>
          <div class="manual-icon">
            <span />
            <span />
            <span />
          </div>
          <strong>产品说明书</strong>
          <small>使用指南 · 安全信息</small>
        </article>

        <article class="paper-document paper-document--warranty">
          <span class="document-kicker">WARRANTY</span>
          <div class="warranty-mark">✓</div>
          <strong>保修卡</strong>
          <small>序列号 · 保修政策</small>
        </article>

        <div class="open-box-front"><span /></div>
        <span class="open-box-shadow" />
      </div>
    </div>

    <div class="documents-conclusion">
      <p>尽管很少有人注意到它们，</p>
      <strong>但售后却是必不可少的。</strong>
    </div>
  </section>
</template>

<style scoped>
.documents-slide {
  position: relative;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  min-height: 100%;
}

.documents-heading {
  position: relative;
  z-index: 6;
  text-align: center;
}

.documents-heading .eyebrow {
  text-align: center;
}

.documents-heading h1 {
  margin: 0;
  color: var(--ae-ink);
  font-size: clamp(2.45rem, 3.9vw, 3.5rem);
  font-weight: 750;
  letter-spacing: -0.055em;
  line-height: 1.04;
}

.documents-heading > p:not(.eyebrow) {
  margin: 1rem 0 0;
  color: var(--ae-ink-muted);
  font-size: 0.96rem;
}

.documents-scene {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 18.5rem;
  margin-top: 0.6rem;
  perspective: 1100px;
}

.documents-reveal-trigger {
  position: absolute;
  width: 1px;
  height: 1px;
  pointer-events: none;
}

.open-box {
  position: relative;
  width: 25rem;
  height: 18rem;
  transform-style: preserve-3d;
}

.open-box-lid {
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: 2.9rem;
  display: grid;
  place-items: center;
  width: 21rem;
  height: 9.4rem;
  border: 1px solid rgba(29, 29, 31, 0.1);
  border-radius: 1.35rem;
  color: rgba(29, 29, 31, 0.4);
  background: linear-gradient(160deg, #f8f8f9, #dcdce0);
  box-shadow: 0 0.8rem 2rem rgba(29, 29, 31, 0.1);
  transform: translateX(-50%) translateY(-5.9rem) translateZ(-5rem) rotateX(62deg) scale(0.95);
}

.open-box-lid span {
  font-size: 0.7rem;
  font-weight: 720;
  letter-spacing: 0.16em;
}

.open-box-well {
  position: absolute;
  z-index: 2;
  left: 50%;
  bottom: 1.8rem;
  width: 20.5rem;
  height: 8.4rem;
  overflow: hidden;
  border: 1px solid rgba(29, 29, 31, 0.1);
  border-radius: 1.3rem;
  background: #d6d6db;
  box-shadow: inset 0 0.7rem 1.4rem rgba(29, 29, 31, 0.14);
  transform: translateX(-50%);
}

.paper-document {
  position: absolute;
  z-index: 7;
  bottom: 3.8rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1.2rem 1.15rem;
  border-radius: 0.9rem;
  opacity: 0;
  box-shadow: 0 1.5rem 3rem rgba(29, 29, 31, 0.2);
  transition: opacity 340ms ease 100ms, transform 820ms var(--ae-ease) 80ms;
}

.paper-document--manual {
  left: 4.2rem;
  width: 8.9rem;
  height: 12rem;
  color: var(--ae-ink);
  background: linear-gradient(155deg, #ffffff, #f1f2f4);
  border: 1px solid rgba(29, 29, 31, 0.1);
  transform: translateY(6.8rem) rotate(-2deg) scale(0.84);
}

.paper-document--warranty {
  right: 3.9rem;
  width: 9.1rem;
  height: 10.9rem;
  color: #ffffff;
  background: linear-gradient(150deg, #2386ee, #0057b8);
  border: 1px solid rgba(255, 255, 255, 0.35);
  transform: translateY(6.4rem) rotate(3deg) scale(0.84);
}

.document-kicker {
  font-size: 0.52rem;
  font-weight: 780;
  letter-spacing: 0.13em;
  opacity: 0.64;
}

.manual-icon {
  display: grid;
  gap: 0.45rem;
  width: 3.9rem;
  margin: 1.6rem 0 auto;
}

.manual-icon span {
  display: block;
  height: 0.18rem;
  border-radius: 999px;
  background: #b6b8bd;
}

.manual-icon span:nth-child(2) { width: 76%; }
.manual-icon span:nth-child(3) { width: 88%; }

.warranty-mark {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  margin: 1.15rem 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
  font-size: 1.4rem;
  font-weight: 780;
}

.paper-document strong {
  display: block;
  font-size: 1.05rem;
  font-weight: 750;
  letter-spacing: -0.025em;
}

.paper-document small {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.58rem;
  opacity: 0.68;
}

.open-box-front {
  position: absolute;
  z-index: 5;
  left: 50%;
  bottom: 1.2rem;
  width: 21rem;
  height: 6.3rem;
  overflow: hidden;
  border: 1px solid rgba(29, 29, 31, 0.1);
  border-radius: 0 0 1.45rem 1.45rem;
  background: linear-gradient(175deg, #efeff1, #d6d6da);
  box-shadow: 0 1.4rem 2.8rem rgba(29, 29, 31, 0.14);
  transform: translateX(-50%);
}

.open-box-front span {
  position: absolute;
  left: 50%;
  top: 0.7rem;
  width: 2.5rem;
  height: 0.2rem;
  border-radius: 999px;
  background: rgba(29, 29, 31, 0.14);
  transform: translateX(-50%);
}

.open-box-shadow {
  position: absolute;
  z-index: 0;
  left: 50%;
  bottom: 0;
  width: 21rem;
  height: 2.6rem;
  border-radius: 50%;
  opacity: 0.28;
  background: rgba(27, 48, 88, 0.38);
  filter: blur(1.15rem);
  transform: translateX(-50%);
}

.documents-conclusion {
  position: relative;
  z-index: 7;
  align-self: end;
  justify-self: center;
  display: flex;
  align-items: baseline;
  gap: 0.45rem;
  min-height: 2rem;
  margin-top: -0.2rem;
  color: var(--ae-ink-muted);
  opacity: 0;
  transform: translateY(0.8rem);
  transition: opacity 360ms ease, transform 560ms var(--ae-ease);
}

.documents-conclusion p {
  margin: 0;
  font-size: 1rem;
}

.documents-conclusion strong {
  color: var(--ae-ink);
  font-size: 1.12rem;
  font-weight: 730;
}

.documents-scene:has(.documents-reveal-trigger:not(.slidev-vclick-hidden)) .paper-document {
  opacity: 1;
}

.documents-scene:has(.documents-reveal-trigger:not(.slidev-vclick-hidden)) .paper-document--manual {
  transform: translateY(-1.85rem) rotate(-7deg) scale(1);
}

.documents-scene:has(.documents-reveal-trigger:not(.slidev-vclick-hidden)) .paper-document--warranty {
  transform: translateY(-1.35rem) rotate(8deg) scale(1);
}

.documents-slide:has(.documents-reveal-trigger:not(.slidev-vclick-hidden)) .documents-conclusion {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .paper-document,
  .documents-conclusion {
    transition-duration: 0.001ms !important;
  }
}
</style>
