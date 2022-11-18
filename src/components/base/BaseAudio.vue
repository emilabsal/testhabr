<template lang="pug">
.input
  span.input-circle
  input.input-field.typography-text(type="text", placeholder="Текст")
  p.input-timer.typography-caption 00:
    span.input-timer-color 05:43
  base-button.input-button(icon="stop") 
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
.input
  border-radius: 25px
  padding: 9px 10px
  background-color: $light-blue
  +flex()
  gap: 10px
  max-width: 400px
  width: 100%
  &-circle
    display: inline-block
    width: 8px
    height: 8px
    margin-left: 10px
    background-color: $yellow
    border-radius: 50%
  &-field
    background-color: transparent
    border: none
    outline: none
    flex-grow: 1
    &::placeholder
      color: $text
  &-timer
    &-color
      font-weight: 700
      color: $primary
</style>