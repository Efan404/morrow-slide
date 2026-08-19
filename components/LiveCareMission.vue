<script setup lang="ts">
import WorkOrderToast from './WorkOrderToast.vue'
</script>

<template>
  <section class="care-mission">
    <div class="care-mission__copy">
      <p class="eyebrow">INTERACTIVE DEMO</p>
      <p class="care-mission__lead">现在，请把自己想象成一位</p>
      <h1>刚刚收到鼠标的<br />消费者。</h1>
      <p v-click class="care-mission__context">但它出了点问题，你需要申请退换货。</p>
    </div>

    <div v-click class="care-mission__demo">
      <div class="care-mission__task" aria-label="现场体验说明">
        <span class="care-mission__task-label">INSTRUCTION</span>
        <h2>完成一次售后申请。</h2>
        <p>碰一下 Care Card，在对话框左侧「＋」任选一个故障场景。</p>
        <div class="care-mission__steps" aria-label="操作路径">
          <span>碰卡</span>
          <i aria-hidden="true">→</i>
          <span>选择场景</span>
          <i aria-hidden="true">→</i>
          <span>提交申请</span>
        </div>
        <small>提交后，请停在结果页。</small>
      </div>

      <WorkOrderToast />
    </div>
  </section>
</template>

<style scoped>
.care-mission {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.8fr);
  align-items: center;
  gap: clamp(3.5rem, 8vw, 7.5rem);
  min-height: 100%;
}

.care-mission::before {
  position: absolute;
  z-index: -1;
  right: -6rem;
  top: -8rem;
  width: 32rem;
  height: 32rem;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 113, 227, 0.11), rgba(0, 113, 227, 0) 69%);
  content: '';
}

.care-mission__lead {
  margin: 0 0 0.35rem;
  color: var(--ae-ink-muted);
  font-size: 1.35rem;
  font-weight: 560;
  letter-spacing: -0.03em;
}

.care-mission h1 {
  margin: 0;
  color: var(--ae-ink);
  font-size: clamp(3.9rem, 6vw, 5.8rem);
  font-weight: 760;
  letter-spacing: -0.075em;
  line-height: 0.94;
}

.care-mission__context {
  margin: 1.5rem 0 0;
  color: var(--ae-ink-muted);
  font-size: 1.14rem;
  font-weight: 520;
  letter-spacing: -0.018em;
  line-height: 1.55;
  transition: opacity 320ms ease, transform 440ms var(--ae-ease);
}

.care-mission__context.slidev-vclick-hidden {
  opacity: 0;
  transform: translateY(0.7rem);
}

.care-mission__task {
  position: relative;
  z-index: 1;
  padding: 2rem 2.1rem 1.85rem;
  border: 1px solid rgba(29, 29, 31, 0.1);
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 1.3rem 3.7rem rgba(29, 29, 31, 0.1);
  backdrop-filter: blur(20px);
}

.care-mission__task-label {
  color: var(--ae-blue);
  font-size: 0.65rem;
  font-weight: 780;
  letter-spacing: 0.14em;
}

.care-mission__task h2 {
  margin: 0.55rem 0 0;
  color: var(--ae-ink);
  font-size: 1.75rem;
  font-weight: 740;
  letter-spacing: -0.045em;
}

.care-mission__task > p {
  max-width: 20rem;
  margin: 0.75rem 0 0;
  color: var(--ae-ink-muted);
  font-size: 0.96rem;
  line-height: 1.55;
}

.care-mission__steps {
  display: flex;
  align-items: center;
  gap: 0.52rem;
  margin-top: 1.6rem;
  color: var(--ae-ink);
  font-size: 0.82rem;
  font-weight: 680;
  letter-spacing: -0.015em;
  white-space: nowrap;
}

.care-mission__steps i {
  color: var(--ae-blue);
  font-size: 0.95rem;
  font-style: normal;
  font-weight: 520;
}

.care-mission__task small {
  display: block;
  margin-top: 1.1rem;
  padding-top: 0.85rem;
  border-top: 1px solid rgba(29, 29, 31, 0.08);
  color: var(--ae-ink-muted);
  font-size: 0.76rem;
  font-weight: 560;
}

.care-mission__demo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 1.5rem;
  min-height: 100%;
  width: 100%;
  transition: opacity 360ms ease, transform 520ms var(--ae-ease), filter 520ms var(--ae-ease);
}

.care-mission__demo.slidev-vclick-hidden {
  opacity: 0;
  filter: blur(0.35rem);
  transform: translateY(1rem);
}

@media (prefers-reduced-motion: reduce) {
  .care-mission__context,
  .care-mission__demo {
    transition-duration: 0.001ms !important;
  }
}

@media (max-width: 720px) {
  .care-mission {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .care-mission h1 {
    font-size: 3.4rem;
  }
}
</style>
