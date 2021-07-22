<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container" v-click-outside="closeModal">
          <div class="modal__header">
            <button class="modal__close-button" @click="closeModal">&#10006;</button>

            <slot name="header">
              {{ headerText }}
            </slot>
          </div>

          <div class="modal__body">
            <slot name="body">
              {{ bodyText }}
            </slot>
          </div>

          <div class="modal__footer">
            <slot name="footer">
              {{ footerText }}
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'users-modal',

  props: {
    headerText: {
      type: String,
      default: ''
    },
    bodyText: {
      type: String,
      default: ''
    },
    footerText: {
      type: String,
      default: ''
    }
  },

  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal__mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal__wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal__container {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0px auto;
  padding: 20px 0;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal__close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}
.modal__header,
.modal__body,
.modal__footer {
  margin: 0 30px;
}
.modal__body {
  margin-top: 20px;
  margin-bottom: 20px;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
</style>
