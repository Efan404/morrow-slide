<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type CaseEvent = {
  orderId?: string
  status?: string
}

type PulseCounts = {
  submitted: number
  resolved: number
}

type WorkOrderNotice = {
  orderId: string
  status: string
}

const PULSE_URL = import.meta.env.VITE_MORROW_PRESENTATION_PULSE_URL
  || 'https://xzwjqspdajwpwijumtcc.supabase.co/functions/v1/presentation-pulse-count'
const POLL_INTERVAL_MS = 1400
const TOAST_DURATION_MS = 3600

const toast = ref<WorkOrderNotice>()
let orderSequence = 0
let submittedBaseline: number | undefined
let pollTimer: ReturnType<typeof window.setInterval> | undefined
let previewTimer: ReturnType<typeof window.setTimeout> | undefined
let dismissTimer: ReturnType<typeof window.setTimeout> | undefined
let removeListener: (() => void) | undefined
let polling = false

function nextOrderId() {
  orderSequence += 1
  return `MO-${String(orderSequence).padStart(3, '0')}`
}

function showWorkOrder(payload: CaseEvent = {}) {
  if (dismissTimer) window.clearTimeout(dismissTimer)

  toast.value = {
    orderId: payload.orderId || nextOrderId(),
    status: payload.status || '已进入系统后台',
  }

  dismissTimer = window.setTimeout(() => {
    toast.value = undefined
  }, TOAST_DURATION_MS)
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

    for (let index = 0; index < arrived; index += 1) showWorkOrder()
  } catch {
    // Keep the slide usable if the presentation network is unavailable.
  } finally {
    polling = false
  }
}

onMounted(() => {
  const handleEvent = (event: Event) => showWorkOrder((event as CustomEvent<CaseEvent>).detail)
  window.addEventListener('morrow:case-submitted', handleEvent)
  removeListener = () => window.removeEventListener('morrow:case-submitted', handleEvent)

  ;(window as Window & { morrowWorkOrderToast?: { submit: (payload?: CaseEvent) => void } }).morrowWorkOrderToast = {
    submit: showWorkOrder,
  }

  void readPulseCount()
  pollTimer = window.setInterval(() => void readPulseCount(), POLL_INTERVAL_MS)

  if (new URLSearchParams(window.location.search).get('casePulsePreview') === '1') {
    previewTimer = window.setTimeout(() => showWorkOrder(), 900)
  }
})

onBeforeUnmount(() => {
  removeListener?.()
  if (pollTimer) window.clearInterval(pollTimer)
  if (previewTimer) window.clearTimeout(previewTimer)
  if (dismissTimer) window.clearTimeout(dismissTimer)
})
</script>

<template>
  <Transition name="work-order-toast">
    <aside
      v-if="toast"
      class="work-order-toast"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div class="work-order-toast__meta">
        <span aria-hidden="true" />
        <small>WORK ORDER CREATED</small>
      </div>
      <strong>工单 #{{ toast.orderId }} 提交成功</strong>
      <p>{{ toast.status }}</p>
    </aside>
  </Transition>
</template>

<style scoped>
.work-order-toast {
  position: absolute;
  z-index: 20;
  top: 0;
  right: 0;
  width: min(20rem, 100%);
  box-sizing: border-box;
  padding: 1.05rem 1.15rem 1rem;
  border: 1px solid rgba(52, 199, 89, 0.28);
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 1rem 2.8rem rgba(29, 29, 31, 0.14);
  backdrop-filter: blur(20px);
  pointer-events: none;
}

.work-order-toast__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.work-order-toast__meta span {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: #34c759;
  box-shadow: 0 0 0 0.22rem rgba(52, 199, 89, 0.12);
}

.work-order-toast__meta small {
  color: #187a3d;
  font-size: 0.52rem;
  font-weight: 780;
  letter-spacing: 0.12em;
}

.work-order-toast > strong {
  display: block;
  margin-top: 0.65rem;
  color: var(--ae-ink);
  font-size: 1rem;
  font-weight: 740;
  letter-spacing: -0.025em;
}

.work-order-toast > p {
  margin: 0.25rem 0 0;
  color: var(--ae-ink-muted);
  font-size: 0.7rem;
  font-weight: 560;
}

.work-order-toast-enter-active,
.work-order-toast-leave-active {
  transition: opacity 260ms ease, transform 420ms var(--ae-ease), filter 420ms var(--ae-ease);
}

.work-order-toast-enter-from,
.work-order-toast-leave-to {
  opacity: 0;
  filter: blur(0.4rem);
  transform: translate3d(0.85rem, -0.8rem, 0) scale(0.96);
}

@media (prefers-reduced-motion: reduce) {
  .work-order-toast-enter-active,
  .work-order-toast-leave-active {
    transition-duration: 0.001ms !important;
  }
}
</style>
