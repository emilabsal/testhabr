<template lang="pug">
.card
  .card-line(:style="{ 'background-color': lineColor }")
  .card-top 
    .card-header
      span.card-title.typography-caption-small Текст
      .card-data
        span.card-number #23
        base-button(icon="chevron", title="Текст", :reversed="true")
    .card-right
      .card-main
        .card-block
          span.card-title.typography-caption-small Текст
          span.card-text-bold.typography-text-bold Текст
        .card-block
          span.card-title.typography-caption-small Текст
          span.card-text-bold.typography-text-bold 00:12:34
        .card-block
          span.card-title.typography-caption-small Итого, $
          span.card-text-bold.typography-text-bold 2 340,0
      .card-buttons
        base-button(icon="stop")
        base-button(icon="dots")
  .card-middle
    .card-header
      span.card-text.typography-text Текст
    .card-right
      .card-marks
        base-mark(title="Метка 1")
        base-mark(title="Метка 2", circleColor="var(--color-green)")
        base-mark(title="Метка 3", circleColor="var(--color-purple)")
        base-mark(title="Метка 4", circleColor="var(--color-primary)")
  .card-bottom
    base-button.card-select(
      v-for="(button, index) in 6",
      :key="index",
      title="Имя",
      icon="chevron-small",
      :reversed="true"
    )
</template>

<script>
import BaseMark from "@/components/base/BaseMark.vue";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  components: {
    BaseButton,
    BaseMark,
  },
  props: {
    lineColor: String,
  },
};
</script>

<style lang="sass">
.card
  padding: 5px 10px 5px 20px
  position: relative
  background-color: $white
  min-width: 700px
  &-line
    position: absolute
    left: 0
    top: 5px
    width: 3px
    height: calc(100% - 10px)
    border-top-right-radius: 3px
    border-bottom-right-radius: 3px
    background-color: $primary
  &-top
    padding: 5px 0
    display: flex
    align-items: center
    width: 100%
    justify-content: space-between
  &-header
    flex-basis: 50%
    +md()
      flex-basis: 30%
  &-right
    +flex($jc: space-between)
    gap: 100px
    flex-basis: 50%
    +md()
      flex-basis: 70%
      gap: 10%
  &-data
    display: flex
    align-items: center
    gap: 10px
    .button-title
      font-weight: 700
  &-number
    color: $primary
  &-main
    display: flex
    align-items: center
    max-width: 366px
    width: 100%
  &-block
    display: flex
    flex-direction: column
    &:first-child
      flex-grow: 6
    &:nth-child(2)
      flex-grow: 1
      margin-right: 51px
    &:last-child
      flex-grow: 1
    .card-title
      display: inline-block
      margin-bottom: 5px
  &-buttons
    display: flex
    align-items: center
    gap: 20px
  &-middle
    display: flex
    align-items: center
    padding: 5px 0
  &-marks
    display: flex
    align-items: center
    gap: 2px
  &-select
    flex-grow: 1
    padding: 5px 10px
    justify-content: space-between
    .button-title
      color: $dark-grey
  &-bottom
    display: flex
    align-items: center
    padding: 5px 0
    width: calc(100% + 10px)
    position: relative
    left: -5px
</style>