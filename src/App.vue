<template>
  <div class="test__wrapper">
    <test-modal-add-user :showAddUserModal="showAddUserModal" :arrayOfUsers="sortingPersons" @add="addNewPerson" @save="saveInLocalStorage" @close="showAddUserModal = false"/>

    <test-button class="test__button" textButton='Добавить' @clickOnButton='openModal' />

    <test-table class="test__table" :unitsArray='sortingPersons' @sorting="changeSorting"/>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import Table from './components/Table.vue'
import ModalAddUser from './components/ModalAddUser.vue'

export default {
  name: 'test-roistat',

  components: {
    'test-button': Button,
    'test-table': Table,
    'test-modal-add-user': ModalAddUser
  },

  created () {
    const localStorageTableData = localStorage.getItem('tableTestRoistat')
    this.persons = localStorageTableData ? JSON.parse(localStorageTableData) : []
  },

  data () {
    return {
      sortingValue: null,
      showAddUserModal: false,
      persons: []
    }
  },

  computed: {
    sortingPersons () {
      if (this.sortingValue === null) return this.persons
      const tempArrayOfPersons = this.persons
      return tempArrayOfPersons.sort((a, b) => {
        if (a[this.sortingValue] > b[this.sortingValue]) {
          return 1
        }
        if (a[this.sortingValue] < b[this.sortingValue]) {
          return -1
        }
        return 0
      })
    }
  },

  methods: {
    openModal () {
      this.showAddUserModal = true
    },
    addNewPerson (newPerson) {
      this.persons.push(newPerson)
      this.saveInLocalStorage(this.persons)
    },
    saveInLocalStorage (value) {
      localStorage.setItem('tableTestRoistat', JSON.stringify(value))
      this.$forceUpdate()
    },
    changeSorting (sortingValue) {
      this.sortingValue = sortingValue
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
