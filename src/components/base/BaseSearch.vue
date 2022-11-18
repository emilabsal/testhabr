<template lang="pug">
.search
  input.search-input.typography-text(type="text", placeholder="Поиск")
  base-button(icon="search")
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
};
</script>

<style lang="sass" scoped>
.search
  +flex()
  padding: 10px 20px
  border: 1px solid $inputs
  border-radius: 8px
  &-input
    background-color: transparent
    border: none
    outline: none
    flex-grow: 1
    &::placeholder
      color: $dark-grey
</style>