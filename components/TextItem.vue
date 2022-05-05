<template>
  <component
    :is="tag"
    :data-align="align"
    :data-size="size"
    :data-weight="weight"
    :data-secondary="secondary"
    class="text"
  >
    <slot />
  </component>
</template>

<script>

export default {
  name: 'TextItem',
  props: {
    size: {
      type: String,
      default: 'm',
    },
    tag: {
      type: String,
      default: 'span',
    },
    align: {
      type: String,
      default: 'auto',
    },
    weight: {
      type: String,
      default: 'auto',
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.text {
  line-height: $lineHeightBody;
  color: $color__text--body;

  &[data-size='s'] {
    font-size: $fontSizeBodyS;
  }

  &[data-size='m'] {
    font-size: $fontSizeBodyM;
  }

  &[data-size='l'] {
    font-size: $fontSizeBodyL;
  }

  &[data-size='xl'] {
    font-size: $fontSizeBodyXL;
  }

  &[data-align='auto'] {
    text-align: inherit;
  }

  &[data-align='start'] {
    text-align: start;
  }

  &[data-align='center'] {
    text-align: center;
  }

  &[data-weight='auto'] {
    font-weight: inherit;
  }

  &[data-weight='regular'] {
    font-weight: $fontWeightRegular;
  }

  &[data-weight='medium'] {
    font-weight: $fontWeightMedium;
  }

  &[data-weight='bold'] {
    font-weight: $fontWeightBold;
  }

  &[data-secondary='true'] {
    color: $color__text--light;
  }
}
</style>
