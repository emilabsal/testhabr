<template lang="pug">
header.header
  .container.header-inner
    base-button.header-logo
      img.header-logo-image(src="@/assets/images/logo.svg", alt="logo")
      span.header-logo-title.typography-h1 LOGO
    .header-right
      base-audio.header-audio
      base-button.header-note(icon="bell")
      base-button.header-avatar
        img.header-avatar-image(src="@/assets/images/avatar.png", alt="avatar")
</template>

<script>
import BaseAudio from "@/components/base/BaseAudio.vue";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  components: {
    BaseAudio,
    BaseButton,
  },
};
</script>

<style lang="sass" scoped>
.header
  background-color: $white
  padding: 10px 0
  border-bottom: 1px solid $inputs
  &-inner
    +flex($jc: space-between)
  &-logo
    +flex
    gap: 20px
    +xs()
      gap: 10px
    &-image
      width: 50px
      height: 50px
      +xs()
        width: 40px
        height: 40px
  &-right
    +flex()
    gap: 20px
  &-note
    position: relative
    &::after
      content: '38'
      position: absolute
      bottom: 1px
      left: -5px
      width: 21px
      height: 21px
      +flex()
      background-color: $red
      border-radius: 50%
      font-size: 10px
      line-height: 15px
      color: $white
  &-avatar
    width: 50px
    height: 50px
    border-radius: 50%
    overflow: hidden
    flex-shrink: 0
    +xs()
      width: 40px
      height: 40px
    &-image
      object-fit: cover
      object-position: center
  &-audio
    +sm()
      display: none
</style>