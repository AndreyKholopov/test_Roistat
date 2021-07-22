<template>
  <div class="test__wrapper">
    <test-button textButton='Добавить' />
  </div>
</template>

<script>
import Button from './components/Button.vue'

export default {
  name: 'test-roistat',

  components: {
    'test-button': Button
  }
}
</script>

<style>
.test__wrapper {
  width: 100%;
  margin: 25px;
}
</style>
