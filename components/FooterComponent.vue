<template>
  <footer class="footer">
    <text-item size="s" align="center">
      <span class="date">
        {{ `© ${new Date().getFullYear()} Killer Bi.` }}
      </span>
      <link-item
        class="link"
        secondary
        href="https://vk.com/antongxpod"
        target="_blank"
      >
        Crafted by Anton Skripchenko
      </link-item>
    </text-item>
  </footer>
</template>

<script>
import LinkItem from '~/components/LinkItem'
import TextItem from '~/components/TextItem'

export default {
  name: 'FooterComponent',
  components: { LinkItem, TextItem },
}
</script>

<style lang="scss" scoped>
.footer {
  --lineHeightBody: 1.1;

  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  width: 100vw;
  padding: $space3XL $spaceL;
  z-index: $zIndex2;
  position: relative;
  color: $color__text--light;
}

.link {
  display: inline-flex;
}

.date {
  padding-right: $spaceXS;
  display: inline-flex;
}
</style>
