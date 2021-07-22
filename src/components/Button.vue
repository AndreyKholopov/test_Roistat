<template>
  <button class="button" @click="clickOnButton">{{ textButton }}</button>
</template>

<script>
export default {
  name: 'page-button',

  props: {
    textButton: {
      type: String,
      default: ''
    }
  },

  methods: {
    clickOnButton () {
      this.$emit('clickOnButton')
    }
  }
}
</script>

<style scoped>
.button {
  background: #ccc;
  border: 1px solid black;
  border-radius: 15px;
  padding: 8px 15px;
  cursor: pointer;
}
</style>
