<template>
  <div>
    <k-text size="xl" weight="bold">TextItemComponent (Bold XL)</k-text>
    <br />
    <k-text size="l" weight="medium">TextItemComponent (Medium L)</k-text>
    <br />
    <k-text secondary>TextItemComponent (Regular M Secondary)</k-text>
    <br />
    <k-text size="s" weight="regular">TextItemComponent (Regular S)</k-text>
    <br />
    <k-link href="#" target="_self"> LinkItemComponent </k-link>
    <br />
    <k-link secondary href="/humans.txt" target="_self">
      LinkItemComponent (secondary)
    </k-link>
    <k-divider :notch-width="64" :notch-height="8" :collapse-delay="1000" />
    <k-footer />
  </div>
</template>

<script>
import KLink from '~/components/KLink'
import KText from '~/components/KText'
import KFooter from '~/components/KFooter'
import KDivider from '~/components/KDivider'

export default {
  name: 'IndexPage',
  components: { KLink, KText, KFooter, KDivider },
}
</script>
