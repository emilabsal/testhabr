<template lang="pug">
.option
  span.option-circle(
    :style="{ 'background-color': circleColor }",
    v-if="hasCircle"
  )
  span.option-title.typography-text {{ title }}
</template>

<script>
export default {
  props: {
    title: String,
    circleColor: String,
    hasCircle: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.option
  padding: 10px
  border-radius: 6px
  transition: .2s
  +flex($jc: flex-start)
  gap: 10px
  &:hover
    background-color: $light-blue
    cursor: pointer
  &-circle
    width: 10px
    height: 10px
    border-radius: 50%
    flex-shrink: 0
    background-color: $primary
</style>