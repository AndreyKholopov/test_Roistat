<template>
  <label>
    <p>{{ labelName }}</p>
    <select :value="value" @input="handleInput">
      <option value=""></option>
      <option v-for="(option, optionIndex) in optionsArray" :key="optionIndex">{{ option.name }}</option>
    </select>
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
    },
    optionsArray: {
      type: Array,
      default: function () {
        return []
      }
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
label select {
  width: 200px;
}
</style>
