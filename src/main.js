// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//http://www.flavienbeninca.fr/2016/06/15/vuejs-demarrer-avec-bootstrap.html
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
require('bootstrap')

import './assets/scss/mystyle.scss';

// Configuration globale de vue : Assigné à false pour ne plus avoir la notification de production au démarrage de Vue.
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router, /* equivaut à router:router */
  components: { App },
  template: '<App/>'
})
