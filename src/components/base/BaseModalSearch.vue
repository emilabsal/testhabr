<template lang="pug">
.modal-search
  .modal-search-inner
    base-search
    .modal-search-options
      base-option(title="Текст")
      base-option(title="Текст1", circleColor="var(--color-red)")
      base-option(title="Текст2", circleColor="var(--color-yellow)")
      base-option(title="Текст3", circleColor="var(--color-green)")
      base-option(title="Текст4", circleColor="var(--color-orange)")
      base-option(title="Текст5", circleColor="var(--color-purple)")
</template>

<script>
import BaseSearch from "@/components/base/BaseSearch.vue";
import BaseOption from "@/components/base/BaseOption.vue";

export default {
  components: {
    BaseSearch,
    BaseOption,
  },
};
</script>

<style lang="sass" scoped>
.modal-search
  background-color: $white
  padding: 10px
  border-radius: 6px
  box-shadow: 0px 4px 20px rgba(23, 26, 52, 0.2)
  max-width: 300px
  width: 100%
  margin-bottom: 50px
  &-inner
    width: 100%
    max-height: 330px
    overflow-y: auto
    padding-right: 10px
    scrollbar-width: thin
    scrollbar-color: $primary $inputs
    &::-webkit-scrollbar
      width: 2px
    &::-webkit-scrollbar-track
      background-color: $inputs
      border-radius: 2px
    &::-webkit-scrollbar-thumb
      background-color: $primary
      border-radius: 2px
  &-options
    margin-top: 10px
    display: flex
    flex-direction: column
    gap: 10px
</style>