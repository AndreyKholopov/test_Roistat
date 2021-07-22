<template>
  <test-modal v-if="showAddUserModal" @close="closeModal" headerText="Добавление пользователя">
    <form class="form" slot="body">
      <test-input class="form__input" labelName="Имя" v-model="user.name" />
      <test-input class="form__input" labelName="Телефон" v-model="user.phone" />
      <test-select class="form__input" labelName="Начальник" :optionsArray="arrayOfUsers" v-model="user.parent.name" />
    </form>

    <test-button slot="footer" textButton='Сохранить' @clickOnButton="saveModal" />
  </test-modal>
</template>

<script>
import Button from './Button.vue'
import Modal from './Modal.vue'
import Input from './Input.vue'
import Select from './Select.vue'

export default {
  name: 'modal-add-user',

  props: {
    showAddUserModal: {
      type: Boolean,
      default: false
    },
    arrayOfUsers: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  data () {
    return {
      user: {
        name: '',
        phone: '',
        parent: {
          name: ''
        }
      }
    }
  },

  components: {
    'test-button': Button,
    'test-modal': Modal,
    'test-input': Input,
    'test-select': Select
  },

  methods: {
    closeModal () {
      this.$emit('close')
      this.clearUser()
    },
    clearUser () {
      this.user = {
        name: '',
        phone: '',
        parent: {
          name: ''
        }
      }
    },
    saveModal () {
      if (this.user.parent.name === '') {
        delete this.user.parent
        this.user.children = null
        this.$emit('add', this.user)
      } else {
        let tempUser = this.arrayOfUsers.find(el => el.name === this.user.parent.name)
        if (tempUser.children === null) tempUser.children = []
        tempUser.children.push({
          name: this.user.name,
          phone: this.user.phone
        })
        this.$emit('save', this.arrayOfUsers)
      }
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
