<template>
  <table class="table">
    <tr>
      <th class="table__header">Имя</th>
      <th class="table__header">Телефон</th>
    </tr>

    <tr v-for="(unit, unitIndex) in unitsArray" :key="unitIndex">
      <td class="table__item">{{ unit.name }}</td>
      <td class="table__item">{{ unit.phone }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'table',

  props: {
    unitsArray: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.table {
  border-collapse: collapse;
}
.table__header,
.table__item {
  border: 1px solid black;
  padding: 4px 15px;
}
</style>
