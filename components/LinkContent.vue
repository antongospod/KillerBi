<template>
  <a
    :ref="refValue"
    :href="href"
    :rel="getRel()"
    :target="getTarget()"
    class="link"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'LinkContent',
  props: {
    isExternal: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '#',
    },
    refValue: {
      type: String,
      default: '',
    },
    relValue: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
  },
  methods: {
    getRel() {
      return (
        this.relValue || (this.isExternal ? 'noreferrer noopener' : undefined)
      )
    },
    getTarget() {
      return this.target || (this.isExternal ? '_blank' : undefined)
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  $lineStrokeWidth: 2px;
  --link-color: #{$color__primary};
  $lineOpacity: 0.3;
  $filledLineGradient: linear-gradient(
    rgb(var(--link-color)),
    rgb(var(--link-color))
  );
  $unfilledLineGradient: linear-gradient(
    rgba(var(--link-color), $lineOpacity),
    rgba(var(--link-color), $lineOpacity)
  );

  cursor: pointer;
  display: inline;
  color: rgb(var(--link-color));
  background: $filledLineGradient no-repeat 100% 100% / 0 $lineStrokeWidth,
    $unfilledLineGradient no-repeat 0 100% / 100% $lineStrokeWidth;
  padding-bottom: $lineStrokeWidth;

  &:hover,
  &:focus {
    background: $filledLineGradient no-repeat 0 100% / 100% $lineStrokeWidth,
      $unfilledLineGradient no-repeat 0 100% / 100% $lineStrokeWidth;
  }

  @media ($mediaUseMotion) {
    transition-duration: $durationM;
    transition-timing-function: $transition__normal;
    transition-property: background-size;
  }

  &[data-secondary='true'] {
    --link-color: #{$color__text};
  }
}
</style>
