<template>
   <!-- Symbol的用法 -->
    <svg class="icon" aria-hidden="true" :style="style">
      <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
  name: 'iconSvg',
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 20
    }
  },
  computed: {
    iconName () {
      console.log(`#icon-${this.icon}`)
      return `#icon-${this.icon}`
    },
    style () {
      return {
        fontSize: `${this.size}px`
      }
    }
  }
}
</script>

<style>

</style>
