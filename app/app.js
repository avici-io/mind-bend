'use strict';

const Vue = require('vue')
const VueRouter = require('vue-router')

Vue.use(VueRouter)

const $ = require('jquery')

window.$ = $;
window.jQuery = $;

require('./vendor/semantic.min.js')

require('./semui/semantic.less');
require('./custom/dashboard.less');
require('./custom/sidebar.less');

const App = require('./components/App.vue');
const Login = require('./components/Login.vue');
const Dashboard = require('./components/Dashboard.vue');

let router = new VueRouter()

router.map({
  '/': {component: Login},
  '/account/login': {component: Login},
  '/account/register': {component: Login}
})

// router.start(Login, '#app')

new Vue({
  el: 'body',
  components: {
    app: Dashboard
  }
})
