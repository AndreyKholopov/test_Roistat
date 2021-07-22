<template>
  <button class="button">{{ textButton }}</button>
</template>

<script>
export default {
  name: 'button',

  props: {
    textButton: {
      type: String,
      default: ''
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
}
</style>
