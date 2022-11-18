<template lang="pug">
.mark
  span.mark-circle(:style="{ 'background-color': circleColor }")
  span.mark-title.typography-mark {{ title }}
  base-button(icon="close")
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  props: {
    title: String,
    circleColor: String,
  },
};
</script>

<style lang="sass" scoped>
.mark
  +flex()
  gap: 5px
  padding: 3px 5px
  border-radius: 5px
  background-color: $light-blue
  &-title
    white-space: nowrap
  &-circle
    width: 8px
    height: 8px
    border-radius: 50%
    background-color: $yellow
    flex-shrink: 0
</style>