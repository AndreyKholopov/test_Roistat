// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    setTimeout(() => {
      el.clickOutsideEvent = function (event) {
        if (!(el === event.target || el.contains(event.target))) {
          vnode.context[binding.expression](event)
        }
      }
      document.body.addEventListener('click', el.clickOutsideEvent)
    }, 100)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
