<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type CaseEvent = {
  issue?: string
  status?: string
}

type PulseCounts = {
  submitted: number
  resolved: number
}

type FloatingBubble = {
  id: number
  text: string
  tone: 'consumer' | 'system'
  left: string
  delay: string
  duration: string
  drift: string
  opacity: string
}

const PULSE_URL = import.meta.env.VITE_MORROW_PRESENTATION_PULSE_URL
  || 'https://xzwjqspdajwpwijumtcc.supabase.co/functions/v1/presentation-pulse-count'
const POLL_INTERVAL_MS = 1400

const cases = ref<Required<CaseEvent>[]>([])
const floatingBubbles = ref<FloatingBubble[]>([])
let removeListener: (() => void) | undefined
let previewTimer: ReturnType<typeof window.setTimeout> | undefined
let pollTimer: ReturnType<typeof window.setInterval> | undefined
let submittedBaseline: number | undefined
let polling = false
let bubbleId = 0
const bubbleTimers: ReturnType<typeof window.setTimeout>[] = []

function releaseBubbles(caseItem: Required<CaseEvent>) {
  const issue = caseItem.issue === '新的售后申请' ? '产品出了点问题' : caseItem.issue
  const bubbles: FloatingBubble[] = [
    [`“${issue}”`, 'consumer', '6%', '0ms', '2050ms', '-0.55rem', '.94'],
    ['正在整理售后申请…', 'system', '42%', '150ms', '2260ms', '0.7rem', '.9'],
    [caseItem.status, 'system', '22%', '320ms', '1940ms', '-0.25rem', '.92'],
  ].map(([text, tone, left, delay, duration, drift, opacity]) => ({
    id: bubbleId += 1,
    text,
    tone: tone as FloatingBubble['tone'],
    left,
    delay,
    duration,
    drift,
    opacity,
  }))

  floatingBubbles.value = [...floatingBubbles.value, ...bubbles]
  const timer = window.setTimeout(() => {
    const ids = new Set(bubbles.map(bubble => bubble.id))
    floatingBubbles.value = floatingBubbles.value.filter(bubble => !ids.has(bubble.id))
  }, 2700)
  bubbleTimers.push(timer)
}

function submitCase(payload: CaseEvent = {}) {
  const nextCase: Required<CaseEvent> = {
    issue: payload.issue || '新的售后申请',
    status: payload.status || '已进入审核',
  }

  cases.value = [nextCase, ...cases.value].slice(0, 3)
  releaseBubbles(nextCase)
}

function submitDemo() {
  // 本地模拟触发，不会写入 Supabase / 数据库。
  submitCase({ issue: '模拟售后申请', status: '已进入审核' })
}

async function readPulseCount() {
  if (polling) return
  polling = true

  try {
    const response = await fetch(PULSE_URL, { cache: 'no-store' })
    if (!response.ok) return

    const counts = await response.json() as Partial<PulseCounts>
    if (typeof counts.submitted !== 'number') return

    if (submittedBaseline === undefined) {
      submittedBaseline = counts.submitted
      return
    }

    const arrived = Math.min(Math.max(counts.submitted - submittedBaseline, 0), 3)
    submittedBaseline = Math.max(submittedBaseline, counts.submitted)

    for (let index = 0; index < arrived; index += 1) submitCase()
  } catch {
    // The presentation keeps working if the projector temporarily loses the network.
  } finally {
    polling = false
  }
}

onMounted(() => {
  const handleEvent = (event: Event) => submitCase((event as CustomEvent<CaseEvent>).detail)
  window.addEventListener('morrow:case-submitted', handleEvent)
  removeListener = () => window.removeEventListener('morrow:case-submitted', handleEvent)

  // Local rehearsal hook:
  // window.dispatchEvent(new CustomEvent('morrow:case-submitted'))
  ;(window as Window & { morrowCasePulse?: { submit: (payload?: CaseEvent) => void } }).morrowCasePulse = {
    submit: submitCase,
  }

  void readPulseCount()
  pollTimer = window.setInterval(() => void readPulseCount(), POLL_INTERVAL_MS)

  if (new URLSearchParams(window.location.search).get('casePulsePreview') === '1') {
    previewTimer = window.setTimeout(() => submitCase({ issue: '滚轮歪斜', status: '已进入审核' }), 900)
  }
})

onBeforeUnmount(() => {
  removeListener?.()
  if (previewTimer) window.clearTimeout(previewTimer)
  if (pollTimer) window.clearInterval(pollTimer)
  bubbleTimers.forEach(timer => window.clearTimeout(timer))
})
</script>

<template>
  <aside class="case-pulse" aria-live="polite" aria-label="实时售后申请状态">
    <div class="case-pulse__bubbles" aria-hidden="true">
      <span
        v-for="bubble in floatingBubbles"
        :key="bubble.id"
        class="case-pulse__bubble"
        :class="`case-pulse__bubble--${bubble.tone}`"
        :style="{
          '--bubble-left': bubble.left,
          '--bubble-delay': bubble.delay,
          '--bubble-duration': bubble.duration,
          '--bubble-drift': bubble.drift,
          '--bubble-opacity': bubble.opacity,
        }"
      >{{ bubble.text }}</span>
    </div>
    <div class="case-pulse__label">
      <span class="case-pulse__dot" />
      <span>LIVE REQUEST FEED</span>
      <b>{{ cases.length }}</b>
      <button class="case-pulse__demo" type="button" @click="submitDemo">模拟</button>
    </div>

    <div class="case-pulse__items">
      <article
        v-for="(caseItem, index) in cases"
        :key="`${caseItem.issue}-${index}`"
        class="case-pulse__case"
        :style="{
          '--stack-index': index,
          transform: `translateY(${index * 0.45}rem) scale(${1 - index * 0.03})`,
          opacity: 1 - index * 0.25,
          zIndex: 10 - index,
        }"
      >
        <div>
          <small>NEW AFTER-SALES REQUEST</small>
          <strong>已接入品牌后台</strong>
        </div>
        <p>{{ caseItem.issue }}</p>
        <span>{{ caseItem.status }}</span>
      </article>
    </div>
  </aside>
</template>

<style scoped>
.case-pulse {
  position: relative;
  width: min(22rem, 100%);
  margin-left: auto;
}

.case-pulse__bubbles {
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: -0.3rem;
  left: 0;
  height: 11rem;
  pointer-events: none;
  overflow: visible;
}

.case-pulse__bubble {
  position: absolute;
  bottom: 0;
  left: var(--bubble-left);
  max-width: 10rem;
  padding: .36rem .58rem;
  border: 1px solid rgba(0, 113, 227, 0.2);
  border-radius: .82rem .82rem .82rem .2rem;
  color: var(--ae-ink-muted);
  background: rgba(255,255,255,.92);
  box-shadow: 0 .32rem .9rem rgba(0,113,227,.12);
  font-size: .58rem;
  font-weight: 650;
  line-height: 1.2;
  white-space: nowrap;
  opacity: 0;
  transform: translate3d(0, .85rem, 0) scale(.55);
  animation: case-bubble-rise var(--bubble-duration) cubic-bezier(.2,.78,.35,1) var(--bubble-delay) forwards;
}

.case-pulse__bubble--system {
  border-radius: .82rem .82rem .2rem .82rem;
  color: var(--ae-blue-deep);
  background: rgba(232,242,255,.94);
}

.case-pulse__label,
.case-pulse__items {
  position: relative;
  z-index: 3;
}

.case-pulse__label {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--ae-ink-muted);
  font-size: 0.6rem;
  font-weight: 760;
  letter-spacing: 0.12em;
}

.case-pulse__label b {
  display: grid;
  place-items: center;
  min-width: 1.12rem;
  height: 1.12rem;
  margin-left: 0.12rem;
  border-radius: 50%;
  color: var(--ae-blue-deep);
  background: var(--ae-blue-soft);
  font-size: 0.58rem;
  letter-spacing: 0;
}

.case-pulse__dot {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
  background: #34c759;
  box-shadow: 0 0 0 0.25rem rgba(52, 199, 89, 0.12);
}

.case-pulse__demo {
  margin-left: 0.45rem;
  padding: 0.18rem 0.55rem;
  border: none;
  border-radius: 999px;
  background: var(--ae-blue);
  color: #fff;
  cursor: pointer;
  font-family: var(--ae-font-zh);
  font-size: 0.52rem;
  font-weight: 680;
  letter-spacing: 0.02em;
  line-height: 1.25;
  transition: background 150ms var(--ae-ease), transform 150ms var(--ae-ease);
}

.case-pulse__demo:hover {
  background: var(--ae-blue-deep);
}

.case-pulse__demo:active {
  transform: scale(0.94);
}

.case-pulse__items {
  position: relative;
  height: 5.5rem;
  margin-top: 0.6rem;
}

.case-pulse__case {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.3rem 0.65rem;
  padding: 0.9rem 1rem;
  border: 1px solid rgba(0, 113, 227, 0.17);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 0.75rem 1.8rem rgba(0, 113, 227, 0.14);
  backdrop-filter: blur(18px);
  transition: transform 420ms var(--ae-ease), opacity 420ms var(--ae-ease), box-shadow 420ms var(--ae-ease);
}

.case-pulse__case small,
.case-pulse__case strong,
.case-pulse__case p,
.case-pulse__case span {
  display: block;
}

.case-pulse__case small {
  color: var(--ae-blue);
  font-size: 0.49rem;
  font-weight: 780;
  letter-spacing: 0.105em;
}

.case-pulse__case strong {
  margin-top: 0.24rem;
  color: var(--ae-ink);
  font-size: 0.91rem;
  font-weight: 740;
  letter-spacing: -0.02em;
}

.case-pulse__case p {
  grid-column: 1;
  margin: 0.05rem 0 0;
  color: var(--ae-ink-muted);
  font-size: 0.72rem;
}

.case-pulse__case span {
  align-self: center;
  grid-column: 2;
  grid-row: 1 / span 2;
  padding: 0.28rem 0.48rem;
  border-radius: 999px;
  color: #187a3d;
  background: rgba(52, 199, 89, 0.12);
  font-size: 0.57rem;
  font-weight: 700;
  white-space: nowrap;
}

@keyframes case-bubble-rise {
  0% {
    opacity: 0;
    transform: translate3d(0, .85rem, 0) scale(.55);
  }
  18% { opacity: var(--bubble-opacity); }
  100% {
    opacity: 0;
    transform: translate3d(var(--bubble-drift), -9.8rem, 0) scale(1.08);
  }
}

@media (prefers-reduced-motion: reduce) {
  .case-pulse__bubble { animation: none; }
}

@media (max-width: 720px) {
  .case-pulse {
    width: 100%;
    margin-top: 1.2rem;
    margin-left: 0;
  }
}
</style>
