<template>
  <link-content
    v-if="isAnchor"
    :href="href"
    :ref-value="refValue"
    :rel-value="relValue"
    :target="target"
    :data-secondary="secondary"
  >
    <slot />
  </link-content>
  <nuxt-link v-else :to="href">
    <link-content :ref-value="refValue" :secondary="secondary">
      <slot />
    </link-content>
  </nuxt-link>
</template>

<script>
const VALID_EXT = ['txt', 'png', 'jpg']

export default {
  name: 'KLink',
  props: {
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
    secondary: {
      type: Boolean,
    },
  },
  methods: {
    isAnchor() {
      const isValidExtension = VALID_EXT.includes(this.href?.split('.').pop())
      return (
        this.href?.includes('://') || this.href?.[0] === '#' || isValidExtension
      )
    },
  },
}
</script>
