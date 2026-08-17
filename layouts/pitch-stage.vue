<template>
  <main class="slidev-layout pitch-stage">
    <slot />
  </main>
</template>

<style scoped>
.pitch-stage {
  position: relative;
  isolation: isolate;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: var(--ae-space-8) var(--ae-space-9);
  color: var(--ae-ink);
  background:
    radial-gradient(circle at 88% 12%, rgba(0, 113, 227, 0.06), transparent 28%),
    var(--ae-surface);
}
</style>
