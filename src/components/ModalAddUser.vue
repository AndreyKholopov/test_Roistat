<template>
  <test-modal v-if="showAddUserModal" @close="closeModal" headerText="Добавление пользователя">
    <form class="form" slot="body">
      <test-input class="form__input" labelName="Имя" v-model="user.name" />
      <test-input class="form__input" labelName="Телефон" v-model="user.phone" />
    </form>

    <test-button slot="footer" textButton='Сохранить' @clickOnButton="saveModal" />
  </test-modal>
</template>

<script>
import Button from './Button.vue'
import Modal from './Modal.vue'
import Input from './Input.vue'

export default {
  name: 'modal-add-user',

  props: {
    showAddUserModal: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      user: {
        name: '',
        phone: ''
      }
    }
  },

  components: {
    'test-button': Button,
    'test-modal': Modal,
    'test-input': Input
  },

  methods: {
    closeModal () {
      this.$emit('close')
      this.clearUser()
    },
    clearUser () {
      this.user = {
        name: '',
        phone: ''
      }
    },
    saveModal () {
      this.$emit('save', this.user)
      this.closeModal()
    }
  }
}
</script>

<style scoped>
.form__input {
  margin-top: 20px;
}
.form__input:first-child {
  margin-top: 0;
}
</style>
