<template>
  <table class="table">
    <tr>
      <th class="table__header">Имя</th>
      <th class="table__header">Телефон</th>
    </tr>

    <template v-for="(unit, unitIndex) in unitsArray">
      <tr :key="unitIndex">
        <td class="table__item">{{ unit.name }}</td>
        <td class="table__item">{{ unit.phone }}</td>
      </tr>

      <tr v-if="unit.children" v-for="children in unit.children" class="table__children"  :key="children.name + unit.name">
        <div>
          <td class="table__item">+ {{ children.name }}</td>
        </div>
        <td class="table__item">{{ children.phone }}</td>
      </tr>
    </template>
  </table>
</template>

<script>
export default {
  name: 'users-table',

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
.table__children div {
  margin-left: 20px;
}
.table__children div .table__item {
  display: block;
  width: calc(100% - 31px);
}
</style>
