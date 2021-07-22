<template>
  <label>
    <p>{{ labelName }}</p>
    <input type="text" :value="value" @input="handleInput">
  </label>
</template>

<script>
export default {
  name: 'modal-input',

  props: {
    labelName: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleInput (eventInput) {
      this.$emit('input', eventInput.target.value)
    }
  }
}
</script>

<style scoped>
label {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
label p {
  margin: 0;
}
label input {
  min-width: 100px;
}
</style>
