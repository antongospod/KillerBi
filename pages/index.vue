<template>
  <div>
    <text-item size="xl" weight="bold">TextItemComponent (Bold XL)</text-item>
    <br />
    <text-item size="l" weight="medium">TextItemComponent (Medium L)</text-item>
    <br />
    <text-item secondary>TextItemComponent (Regular M Secondary)</text-item>
    <br />
    <text-item size="s" weight="regular"
      >TextItemComponent (Regular S)</text-item
    >
    <br />
    <link-item href="#" target="_self"> LinkItemComponent </link-item>
    <br />
    <link-item secondary href="/humans.txt" target="_self">
      LinkItemComponent (secondary)
    </link-item>
    <footer-component />
  </div>
</template>

<script>
import LinkItem from '~/components/LinkItem'
import TextItem from '~/components/TextItem'
import FooterComponent from '~/components/FooterComponent'

export default {
  name: 'IndexPage',
  components: { LinkItem, TextItem, FooterComponent },
}
</script>
