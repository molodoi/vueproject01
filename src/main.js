// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Import de jquery
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
// require de bootstrap
require('bootstrap')

import './assets/scss/main.scss';

// Configuration globale de vue : Assigné à false pour ne plus avoir la notification de production au démarrage de Vue.
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router, /* equivaut à router:router */
  components: { App },
  template: '<App/>'
})
