<template>
  <div
    class="divider"
    :style="
      cssProps({
        lineWidth: `${lineWidth}%`,
        lineHeight: `${lineHeight}px`,
        notchWidth: `${notchWidth}px`,
        notchHeight: `${notchHeight}px`,
        collapseDelay: numToMs(collapseDelay),
      })
    "
  >
    <div class="line" :data-collapsed="collapsed">
      <div
        class="notch"
        :data-collapsed="collapsed"
        :style="cssProps({ collapseDelay: numToMs(collapseDelay + 160) })"
      />
    </div>
  </div>
</template>

<script>
import { cssProps, numToMs } from '~/utils/style'

export default {
  name: 'KDivider',
  props: {
    lineWidth: {
      type: Number,
      default: 100,
    },
    lineHeight: {
      type: Number,
      default: 2,
    },
    notchWidth: {
      type: Number,
      default: 90,
    },
    notchHeight: {
      type: Number,
      default: 10,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
    collapseDelay: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    cssProps,
    numToMs,
  },
}
</script>

<style scoped lang="scss">
.divider {
  position: relative;
  width: var(--line-width);
  height: var(--line-height);
}

.line {
  width: 100%;
  height: 100%;
  background-color: rgb($color__primary);
  opacity: 1;
  transition-property: opacity;
  transition-duration: $durationL;
  transition-timing-function: $transition__normal;
  transition-delay: var(--collapse-delay);
  transform-origin: left center;
  transform: scaleX(1);

  @media ($mediaUseMotion) {
    transition-property: transform, opacity;
  }

  &[data-collapsed='true'] {
    opacity: 0;
    transform: scaleX(0);
  }
}

.notch {
  background-color: rgb($color__primary);
  position: absolute;
  transition-property: opacity;
  transition-duration: $durationL;
  transition-timing-function: $transition__normal;
  transition-delay: var(--collapse-delay);
  opacity: 1;
  clip-path: polygon(0 -1px, 100% -1px, calc(100% - 10px) 100%, 10px 100%);
  width: var(--notch-width);
  height: var(--notch-height);
  top: var(--line-height);

  @media ($mediaUseMotion) {
    transition-property: clip-path, opacity;
  }

  &[data-collapsed='true'] {
    opacity: 0;
    clip-path: polygon(0 -1px, 0 -1px, 10px 100%, 10px 100%);
  }
}
</style>
