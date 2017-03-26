// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/bootstrap/css/bootstrap.css'
import './assets/css/agency.css'
import '../vendor/font-awesome/css/font-awesome.min.css'
var $ = require('jquery')
window.jQuery = $
require('bootstrap')
// import './assets/js/agency.js'
// import './assets/js/jqBootstrapValidation.js'
// import './assets/js/contact_me.js'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
