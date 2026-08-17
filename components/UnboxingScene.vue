<template>
  <section class="unboxing-slide">
    <header class="unboxing-copy">
      <p class="eyebrow">WARM-UP · OPEN THE BOX</p>
      <h1>拆开包装盒，<br><span>你会看到什么？</span></h1>
      <p>一只手机、一根充电线 ……</p>
    </header>

    <div class="unboxing-scene" aria-label="电子产品包装盒开箱动画">
      <div v-click class="unboxing-open-trigger" aria-hidden="true" />

      <div class="product-box" aria-hidden="true">
        <div class="box-lid">
          <span>MORROW</span>
        </div>
        <div class="box-products">
          <div class="phone" role="img" aria-label="无品牌标识的三摄 Pro 智能手机模型">
            <span class="phone-camera-plateau">
              <span class="phone-camera phone-camera--one" />
              <span class="phone-camera phone-camera--two" />
              <span class="phone-camera phone-camera--three" />
              <span class="phone-flash" />
              <span class="phone-sensor" />
            </span>
            <span class="phone-glass-panel" />
            <span class="phone-side-button phone-side-button--action" />
            <span class="phone-side-button phone-side-button--camera" />
          </div>
          <svg class="charging-cable" viewBox="0 0 180 150" role="img" aria-label="双 USB-C 接头数据线">
            <path class="cable-shadow" d="M 36 25 C 76 4, 143 20, 141 64 C 139 104, 96 121, 59 101 C 23 82, 30 49, 62 47 C 95 45, 117 67, 106 95 C 101 110, 91 122, 82 133" />
            <path class="cable-line" d="M 36 25 C 76 4, 143 20, 141 64 C 139 104, 96 121, 59 101 C 23 82, 30 49, 62 47 C 95 45, 117 67, 106 95 C 101 110, 91 122, 82 133" />
            <g class="cable-plug cable-plug--top" transform="translate(8 15) rotate(-18 20 10)">
              <rect class="cable-plug-body" x="0" y="1" width="31" height="18" rx="7" />
              <rect class="cable-plug-tip" x="25" y="5" width="17" height="10" rx="4" />
              <rect class="cable-plug-slot" x="29" y="8" width="9" height="4" rx="2" />
            </g>
            <g class="cable-plug cable-plug--bottom" transform="translate(63 126) rotate(78 20 10)">
              <rect class="cable-plug-body" x="0" y="1" width="31" height="18" rx="7" />
              <rect class="cable-plug-tip" x="25" y="5" width="17" height="10" rx="4" />
              <rect class="cable-plug-slot" x="29" y="8" width="9" height="4" rx="2" />
            </g>
          </svg>
        </div>
        <div class="box-base">
          <span class="box-inlay" />
        </div>
        <span class="box-shadow" />
      </div>

      <div v-click class="unboxing-question">
        <span class="question-mark">?</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.unboxing-slide {
  display: grid;
  grid-template-columns: minmax(0, 0.76fr) minmax(0, 1.24fr);
  align-items: center;
  gap: 2.8rem;
  min-height: 100%;
}

.unboxing-copy {
  position: relative;
  z-index: 3;
}

.unboxing-copy h1 {
  margin: 0;
  color: var(--ae-ink);
  font-size: clamp(2.15rem, 3.1vw, 2.65rem);
  font-weight: 750;
  letter-spacing: -0.055em;
  line-height: 1.06;
}

.unboxing-copy h1 span {
  color: var(--ae-blue);
}

.unboxing-copy > p:not(.eyebrow) {
  max-width: 25rem;
  margin: 1.4rem 0 0;
  color: var(--ae-ink-muted);
  font-size: 1.02rem;
  line-height: 1.55;
}

.unboxing-scene {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 28rem;
  perspective: 1000px;
}

.unboxing-open-trigger {
  position: absolute;
  width: 1px;
  height: 1px;
  pointer-events: none;
}

.product-box {
  position: relative;
  width: 21rem;
  height: 16rem;
  transform-style: preserve-3d;
}

.box-lid,
.box-base {
  position: absolute;
  left: 50%;
  width: 19rem;
  height: 11.5rem;
  border-radius: 1.5rem;
  transform: translateX(-50%);
}

.box-lid {
  z-index: 5;
  top: 1.2rem;
  display: grid;
  place-items: center;
  color: rgba(29, 29, 31, 0.54);
  background: linear-gradient(145deg, #fafafa, #e9e9ec);
  border: 1px solid rgba(29, 29, 31, 0.1);
  box-shadow: 0 1.4rem 3.2rem rgba(29, 29, 31, 0.18);
  transform-origin: 50% 100%;
  transition: transform 780ms var(--ae-ease), box-shadow 780ms var(--ae-ease);
}

.box-lid::after {
  position: absolute;
  inset: 0.65rem;
  border: 1px solid rgba(29, 29, 31, 0.06);
  border-radius: 1.05rem;
  content: "";
}

.box-lid span {
  font-size: 0.78rem;
  font-weight: 720;
  letter-spacing: 0.16em;
}

.box-base {
  z-index: 2;
  top: 3.1rem;
  overflow: hidden;
  background: linear-gradient(160deg, #f7f7f8, #dedee2);
  border: 1px solid rgba(29, 29, 31, 0.12);
  box-shadow: inset 0 0.75rem 1.4rem rgba(29, 29, 31, 0.08);
}

.box-inlay {
  position: absolute;
  inset: 1.05rem;
  border-radius: 1rem;
  background: #d5d5da;
  box-shadow: inset 0 0.5rem 1.2rem rgba(29, 29, 31, 0.12);
}

.box-products {
  position: absolute;
  z-index: 4;
  inset: 0;
  pointer-events: none;
}

.phone {
  position: absolute;
  left: 3.35rem;
  top: 2.85rem;
  width: 7.25rem;
  height: 10.45rem;
  overflow: visible;
  border: 0.24rem solid #152638;
  border-radius: 1.42rem;
  opacity: 0;
  background: linear-gradient(160deg, #315071 0%, #1c3654 48%, #11283f 100%);
  box-shadow: 0 1.6rem 2.8rem rgba(8, 22, 38, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.12);
  transform: translateY(4.8rem) rotate(-3deg) scale(0.86);
  transition: opacity 360ms ease 120ms, transform 820ms var(--ae-ease) 80ms;
}

.phone-camera-plateau {
  position: absolute;
  z-index: 3;
  top: -0.04rem;
  right: -0.04rem;
  left: -0.04rem;
  height: 3.7rem;
  border-radius: 1.28rem 1.28rem 0.72rem 0.72rem;
  background: linear-gradient(160deg, #446786, #284763 70%, #1b3650);
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 0.7rem 1.2rem rgba(4, 15, 28, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.phone-camera {
  position: absolute;
  width: 1.08rem;
  height: 1.08rem;
  border: 0.17rem solid #142334;
  border-radius: 50%;
  background: radial-gradient(circle at 38% 34%, #315c86 0 11%, #0c1927 16% 52%, #03080d 58% 100%);
  box-shadow: 0 0.18rem 0.35rem rgba(0, 0, 0, 0.34), inset 0 0 0 0.12rem #1d344b;
}

.phone-camera--one { top: 0.48rem; left: 0.58rem; }
.phone-camera--two { top: 1.91rem; left: 0.58rem; }
.phone-camera--three { top: 1.18rem; left: 1.98rem; }

.phone-flash {
  position: absolute;
  top: 0.72rem;
  right: 0.82rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: radial-gradient(circle, #fff8d9 0 45%, #e3cc91 48% 100%);
  box-shadow: 0 0 0 0.12rem rgba(255, 255, 255, 0.22);
}

.phone-sensor {
  position: absolute;
  right: 0.88rem;
  bottom: 0.6rem;
  width: 0.46rem;
  height: 0.46rem;
  border: 0.1rem solid #1a2a3b;
  border-radius: 50%;
  background: #0b1723;
}

.phone-glass-panel {
  position: absolute;
  z-index: 1;
  right: 0.55rem;
  bottom: 0.55rem;
  left: 0.55rem;
  height: 5.75rem;
  border-radius: 0.85rem;
  background: linear-gradient(150deg, rgba(92, 130, 164, 0.33), rgba(8, 29, 49, 0.16));
  border: 1px solid rgba(255, 255, 255, 0.09);
}

.phone-side-button {
  position: absolute;
  z-index: 4;
  right: -0.34rem;
  width: 0.16rem;
  border-radius: 999px;
  background: #29455e;
  box-shadow: 0 0.08rem 0.14rem rgba(0, 0, 0, 0.32);
}

.phone-side-button--action {
  top: 4.2rem;
  height: 1.2rem;
}

.phone-side-button--camera {
  bottom: 1.55rem;
  height: 1.55rem;
}

.charging-cable {
  position: absolute;
  right: 1.65rem;
  top: 3.55rem;
  width: 8.2rem;
  height: 8.8rem;
  overflow: visible;
  opacity: 0;
  filter: drop-shadow(0 0.7rem 0.75rem rgba(29, 29, 31, 0.18));
  transform: translateY(4.2rem) rotate(22deg) scale(0.78);
  transition: opacity 360ms ease 180ms, transform 840ms var(--ae-ease) 130ms;
}

.cable-shadow,
.cable-line {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cable-shadow {
  stroke: rgba(85, 88, 94, 0.25);
  stroke-width: 10;
}

.cable-line {
  stroke: #f8f8f9;
  stroke-width: 7;
}

.cable-plug-body {
  fill: #f7f7f8;
  stroke: #c7c8cc;
  stroke-width: 1.4;
}

.cable-plug-tip {
  fill: #d5d6d9;
  stroke: #a9abb0;
  stroke-width: 1.2;
}

.cable-plug-slot {
  fill: #7b7e85;
}

.box-shadow {
  position: absolute;
  z-index: 0;
  left: 50%;
  bottom: 0.05rem;
  width: 18rem;
  height: 3rem;
  border-radius: 50%;
  opacity: 0.3;
  background: rgba(27, 48, 88, 0.36);
  filter: blur(1.25rem);
  transform: translateX(-50%);
}

.unboxing-question {
  position: absolute;
  z-index: 8;
  right: -0.2rem;
  top: 2rem;
  display: grid;
  justify-items: center;
  width: 6rem;
  transition: opacity 360ms ease, transform 620ms var(--ae-ease), filter 620ms var(--ae-ease);
}

.unboxing-question.slidev-vclick-hidden {
  opacity: 0;
  filter: blur(0.45rem);
  transform: translateY(1.4rem) scale(0.72);
}

.question-mark {
  color: var(--ae-blue);
  font-size: 7.2rem;
  font-weight: 680;
  letter-spacing: -0.08em;
  line-height: 0.9;
  text-shadow: 0 1.2rem 2.8rem rgba(0, 113, 227, 0.18);
}

.unboxing-scene:has(.unboxing-open-trigger:not(.slidev-vclick-hidden)) .box-lid {
  z-index: 1;
  box-shadow: 0 0.8rem 2rem rgba(29, 29, 31, 0.1);
  transform: translateX(-50%) translateY(-7.4rem) rotateX(62deg) scale(0.96);
}

.unboxing-scene:has(.unboxing-open-trigger:not(.slidev-vclick-hidden)) .phone {
  opacity: 1;
  transform: translateY(-2.2rem) rotate(-8deg) scale(1);
}

.unboxing-scene:has(.unboxing-open-trigger:not(.slidev-vclick-hidden)) .charging-cable {
  opacity: 1;
  transform: translateY(-1.2rem) rotate(10deg) scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .box-lid,
  .phone,
  .charging-cable,
  .unboxing-question {
    transition-duration: 0.001ms !important;
  }
}
</style>
