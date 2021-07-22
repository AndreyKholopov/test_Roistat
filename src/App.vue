<template>
  <div class="test__wrapper">
    <test-button class="test__button" textButton='Добавить' />

    <test-table class="test__table" :unitsArray='mockPersons'/>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import Table from './components/Table.vue'

export default {
  name: 'test-roistat',

  components: {
    'test-button': Button,
    'test-table': Table
  },

  data () {
    return {
      mockPersons: [
        {
          name: 'Марина',
          phone: '+7 915 222 22 22'
        }
      ]
    }
  }
}
</script>

<style scoped>
.test__wrapper {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 25px;
}
.test__button {
  margin-left: auto;
}
.test__table {
  margin-top: 15px;
}
</style>
