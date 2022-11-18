<template lang="pug">
the-header
.container
  .tags
    base-tag(title="Текст")
    base-tag(title="Текст", icon="alert")
    base-tag(title="Текст", backgroundColor="var(--color-primary)")
    base-tag(title="Текст", borderColor="var(--color-green)")
  .cards
    base-card-main
    base-card-main(lineColor="var(--color-red)")
    base-card-main(lineColor="var(--color-green)")
    base-card-main(lineColor="var(--color-purple)")
  base-modal-search
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import BaseTag from "@/components/base/BaseTag.vue";
import BaseCardMain from "@/components/base/BaseCardMain.vue";
import BaseModalSearch from "@/components/base/BaseModalSearch.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    BaseTag,
    BaseCardMain,
    BaseModalSearch,
  },
};
</script>

<style lang="sass" scoped>
.tags
  margin-top: 20px
  +flex($jc: flex-start)
  gap: 8px
  flex-wrap: wrap
.cards
  margin-top: 20px
  border-radius: 6px
  margin-bottom: 20px
  overflow-x: auto
  .card:not(:last-child)
    border-bottom: 1px solid $inputs
</style>
