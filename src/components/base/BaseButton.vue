<template lang="pug">
button.button(:class="{ 'button-reversed': reversed }")
  base-icon(
    v-if="icon",
    :name="icon",
    :width="width",
    :height="height",
    :fill="fill"
  )
  span.button-title.typography-text(v-if="title") {{ title }}
  slot
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },
  props: {
    icon: String,
    width: [Number, String],
    height: [Number, String],
    fill: String,
    title: String,
    reversed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="sass" scoped>
.button
  display: flex
  align-items: center
  gap: 10px
  background-color: transparent
  border: none
  outline: none
  cursor: pointer
  &-reversed
    flex-direction: row-reverse
</style>