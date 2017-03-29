// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

window.$ = window.jQuery = require('jquery')
window.tether = window.Tether = require('tether')
require('bootstrap')
require('font-awesome/css/font-awesome.css')

require('./assets/js/jquery.easing')
require('./assets/js/agency')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
