<script setup lang="ts">
defineProps<{
  items: { status: string; label: string; desc: string }[]
}>()
</script>

<template>
  <div class="evidence-grid">
    <div v-for="(item, i) in items" :key="i" class="evidence-badge">
      <span class="dot" :class="`dot--${item.status.toLowerCase()}`" />
      <div>
        <code>{{ item.label }}</code>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.evidence-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.evidence-badge {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1rem 1.3rem;
  border-radius: var(--ae-radius-md);
  background: var(--ae-surface);
  border: 1px solid var(--ae-line);
}

.evidence-badge .dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 0.45rem;
}

.dot--verified { background: #34c759; }
.dot--supported { background: #0071e3; }
.dot--claimed { background: #ff8a00; }
.dot--missing { background: #6e6e73; }
.dot--conflicted { background: #ff3b30; }
.dot--invalid { background: #ff3b30; }

.evidence-badge code {
  font-size: 0.92rem;
  font-weight: 650;
  background: transparent;
  color: var(--ae-ink);
}

.evidence-badge p {
  margin: 0.15rem 0 0;
  color: var(--ae-ink-muted);
  font-size: 0.82rem;
  line-height: 1.35;
}
</style>
