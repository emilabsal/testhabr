<template lang="pug">
.tag(:style="{ 'background-color': backgroundColor }")
  span.tag-border(:style="{ 'background-color': borderColor }")
  span.tag-title.typography-text {{ title }}
  .tag-sign(v-if="icon", :style="{ 'background-color': backgroundIcon }")
    base-icon(:name="icon", :width="width", :height="height", :fill="fill")
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },
  props: {
    title: String,
    backgroundColor: String,
    borderColor: String,
    backgroundIcon: String,
    icon: String,
    width: [Number, String],
    height: [Number, String],
    fill: String,
  },
};
</script>

<style lang="sass" scoped>
.tag
  +flex()
  gap: 10px
  width: fit-content
  height: 36px
  border-radius: 6px
  padding: 0 10px
  background-color: $inputs
  position: relative
  overflow: hidden
  &-title
    white-space: nowrap
  &-border
    position: absolute
    top: 0
    left: 0
    width: 3px
    height: 100%
    background-color: $orange
  &-sign
    width: 22px
    height: 22px
    border-radius: 50%
    flex-shrink: 0
    background-color: $red
    +flex()
</style>