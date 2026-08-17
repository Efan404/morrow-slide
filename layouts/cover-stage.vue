<template>
  <main class="slidev-layout cover-stage">
    <div class="cover-stage__bg" />
    <div class="cover-stage__content">
      <slot />
    </div>
  </main>
</template>

<style scoped>
.cover-stage {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 0;
  color: var(--ae-ink);
  background: linear-gradient(160deg, #e8f4ff 0%, #c6e0ff 30%, #94bfff 58%, #6a9bf0 80%, #5080e0 100%);
}

.cover-stage__bg {
  position: absolute;
  z-index: 0;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(255, 255, 255, 0.3), transparent 60%),
    radial-gradient(ellipse at 80% 30%, rgba(255, 255, 255, 0.15), transparent 50%);
  pointer-events: none;
}

.cover-stage::before {
  content: "";
  position: absolute;
  z-index: 1;
  inset: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.08) 46%, rgba(255, 255, 255, 0) 72%);
  pointer-events: none;
}

.cover-stage__content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 0 1.5rem 8.2vw;
  box-sizing: border-box;
}

.cover-stage__content :deep(h1) {
  max-width: none;
  margin: 0;
  color: var(--ae-ink);
  font-size: clamp(4.5rem, 7vw, 6.2rem);
  font-weight: 740;
  letter-spacing: -0.065em;
  line-height: 0.96;
  text-wrap: balance;
}

.cover-stage__content :deep(.cover-tagline) {
  max-width: 36em;
  margin: 2rem 0 0;
  color: var(--ae-ink-muted);
  font-size: clamp(1.3rem, 2vw, 1.75rem);
  font-weight: 520;
  letter-spacing: -0.025em;
  line-height: 1.42;
}

.cover-stage__content :deep(.cover-meta) {
  margin-top: 2.5rem;
  display: flex;
  gap: 2rem;
  color: var(--ae-ink-muted);
  font-size: 0.88rem;
  font-weight: 600;
}
</style>
