<script setup lang="ts">
defineProps<{
  steps: { num: string; title: string; desc: string }[]
}>()
</script>

<template>
  <div class="flow-pipeline">
    <div v-for="(step, i) in steps" :key="i" class="flow-step">
      <span class="step-num">{{ step.num }}</span>
      <h3>{{ step.title }}</h3>
      <p>{{ step.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.flow-pipeline {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  border-top: 1px solid var(--ae-line);
  border-bottom: 1px solid var(--ae-line);
}

.flow-step {
  padding: 1.4rem 1.1rem 1.4rem 0;
  text-align: center;
}

.flow-step + .flow-step {
  padding-left: 1.1rem;
  border-left: 1px solid var(--ae-line);
}

.flow-step .step-num {
  display: block;
  margin-bottom: 0.65rem;
  color: var(--ae-blue);
  font-size: 0.68rem;
  font-weight: 780;
  letter-spacing: 0.1em;
}

.flow-step h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 720;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--ae-ink);
}

.flow-step p {
  margin: 0.45rem 0 0;
  color: var(--ae-ink-muted);
  font-size: 0.76rem;
  line-height: 1.35;
}
</style>
