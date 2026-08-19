<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type PulseCounts = {
  submitted: number
  resolved: number
}

const PULSE_URL = import.meta.env.VITE_MORROW_PRESENTATION_PULSE_URL
  || 'https://xzwjqspdajwpwijumtcc.supabase.co/functions/v1/presentation-pulse-count'
const POLL_INTERVAL_MS = 1400

const approved = ref(false)
const showResult = ref(false)
let resolvedBaseline: number | undefined
let pollTimer: ReturnType<typeof window.setInterval> | undefined
let resultTimer: ReturnType<typeof window.setTimeout> | undefined
let polling = false
let removeApprovalListener: (() => void) | undefined

function revealResolution() {
  approved.value = true
  showResult.value = true
  if (resultTimer) window.clearTimeout(resultTimer)
  resultTimer = window.setTimeout(() => { showResult.value = false }, 1600)
}

async function readResolutionCount() {
  if (polling) return
  polling = true

  try {
    const response = await fetch(PULSE_URL, { cache: 'no-store' })
    if (!response.ok) return

    const counts = await response.json() as Partial<PulseCounts>
    if (typeof counts.resolved !== 'number') return

    if (resolvedBaseline === undefined) {
      resolvedBaseline = counts.resolved
      return
    }

    if (counts.resolved > resolvedBaseline) revealResolution()
    resolvedBaseline = Math.max(resolvedBaseline, counts.resolved)
  } catch {
    // The Console itself remains the source of truth if the projector is offline.
  } finally {
    polling = false
  }
}

onMounted(() => {
  const handleApproval = () => revealResolution()
  window.addEventListener('morrow:case-approved', handleApproval)
  removeApprovalListener = () => window.removeEventListener('morrow:case-approved', handleApproval)

  void readResolutionCount()
  pollTimer = window.setInterval(() => void readResolutionCount(), POLL_INTERVAL_MS)

  if (new URLSearchParams(window.location.search).get('resolutionPreview') === '1') {
    resultTimer = window.setTimeout(revealResolution, 900)
  }
})

onBeforeUnmount(() => {
  if (pollTimer) window.clearInterval(pollTimer)
  if (resultTimer) window.clearTimeout(resultTimer)
  removeApprovalListener?.()
})
</script>

<template>
  <section class="resolution-moment" aria-live="polite">
    <div class="resolution-moment__copy">
      <p class="eyebrow">BRAND CONSOLE · LIVE</p>
      <h1>同一张售后单，<br />正在品牌端继续往前走。</h1>
      <p>打开刚才提交的最新一条申请。在需要品牌确认的地方，由人工做最后决定。</p>
    </div>

    <div class="resolution-moment__stage">
      <div class="resolution-moment__line" :class="{ 'resolution-moment__line--approved': approved }">
        <div class="resolution-moment__line-top">
          <span>最新售后申请</span>
          <b :class="{ 'resolution-moment__approved': approved }">{{ approved ? '已通过' : '等待审核' }}</b>
        </div>
        <strong>{{ approved ? '换新申请已通过' : '正在核对信息与保修条件' }}</strong>
        <p>{{ approved ? '消费者端已收到处理结果。' : '在 Console 中完成审核后，结果会同步回消费者端。' }}</p>
      </div>
      <span class="resolution-moment__connector" aria-hidden="true">↓</span>
      <div class="resolution-moment__consumer" :class="{ 'resolution-moment__consumer--approved': approved }">
        <small>CONSUMER</small>
        <strong>{{ approved ? '你的申请已进入换新处理' : '等待品牌处理结果' }}</strong>
      </div>
    </div>

    <Transition name="resolution-flash">
      <div v-if="showResult" class="resolution-moment__result">
        <small>RESULT UPDATED</small>
        <strong>换新申请已通过</strong>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.resolution-moment {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.94fr) minmax(19rem, 0.8fr);
  align-items: center;
  gap: clamp(3rem, 7vw, 6.5rem);
  min-height: 100%;
}

.resolution-moment__copy h1 {
  margin: 0;
  color: var(--ae-ink);
  font-size: clamp(2.5rem, 3.9vw, 3.55rem);
  font-weight: 750;
  letter-spacing: -0.062em;
  line-height: 1.02;
}

.resolution-moment__copy > p:not(.eyebrow) {
  max-width: 27rem;
  margin: 1.3rem 0 0;
  color: var(--ae-ink-muted);
  font-size: 1.02rem;
  line-height: 1.56;
}

.resolution-moment__stage {
  display: grid;
  justify-items: center;
}

.resolution-moment__line,
.resolution-moment__consumer {
  width: min(23rem, 100%);
  box-sizing: border-box;
  border: 1px solid var(--ae-line);
  border-radius: 1.45rem;
  background: rgba(255, 255, 255, 0.84);
  box-shadow: 0 1.2rem 3rem rgba(29, 29, 31, 0.09);
}

.resolution-moment__line {
  padding: 1.4rem 1.45rem;
  transition: border-color 300ms var(--ae-ease), background 300ms var(--ae-ease), transform 300ms var(--ae-ease);
}

.resolution-moment__line--approved {
  border-color: rgba(0, 113, 227, 0.44);
  background: linear-gradient(135deg, #e8f2ff, #fff);
  transform: translateY(-0.2rem);
}

.resolution-moment__line-top {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: var(--ae-ink-muted);
  font-size: 0.66rem;
  font-weight: 730;
  letter-spacing: 0.09em;
}

.resolution-moment__line-top b {
  color: #9d6b00;
  letter-spacing: 0;
}

.resolution-moment__line-top .resolution-moment__approved {
  color: #187a3d;
}

.resolution-moment__line strong {
  display: block;
  margin-top: 1.25rem;
  color: var(--ae-ink);
  font-size: 1.33rem;
  font-weight: 740;
  letter-spacing: -0.04em;
}

.resolution-moment__line p {
  margin: 0.58rem 0 0;
  color: var(--ae-ink-muted);
  font-size: 0.85rem;
  line-height: 1.5;
}

.resolution-moment__connector {
  margin: 1rem 0;
  color: var(--ae-blue);
  font-size: 1.35rem;
}

.resolution-moment__consumer {
  padding: 1.05rem 1.2rem;
  transition: border-color 300ms var(--ae-ease), background 300ms var(--ae-ease);
}

.resolution-moment__consumer small {
  display: block;
  color: var(--ae-ink-muted);
  font-size: 0.52rem;
  font-weight: 760;
  letter-spacing: 0.13em;
}

.resolution-moment__consumer strong {
  display: block;
  margin-top: 0.35rem;
  color: var(--ae-ink);
  font-size: 0.91rem;
  font-weight: 690;
}

.resolution-moment__consumer--approved {
  border-color: rgba(52, 199, 89, 0.3);
  background: rgba(232, 250, 240, 0.9);
}

.resolution-moment__result {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.95rem;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  color: #fff;
  background: var(--ae-blue);
  box-shadow: 0 1rem 2.8rem rgba(0, 113, 227, 0.28);
}

.resolution-moment__result small {
  font-size: 0.56rem;
  font-weight: 750;
  letter-spacing: 0.12em;
}

.resolution-moment__result strong {
  font-size: 1.14rem;
  font-weight: 720;
  letter-spacing: -0.025em;
}

.resolution-flash-enter-active,
.resolution-flash-leave-active {
  transition: opacity 240ms ease, transform 360ms var(--ae-ease);
}

.resolution-flash-enter-from,
.resolution-flash-leave-to {
  opacity: 0;
  transform: translateY(0.8rem);
}

@media (max-width: 720px) {
  .resolution-moment {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
