import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api';
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VBToggle, AlertPlugin, IconsPlugin } from 'bootstrap-vue'
import i18n from './i18n'
import Vuelidate from 'vuelidate'
// Note: Vue automatically prefixes the directive name with 'v-'
Vue.directive('b-toggle', VBToggle)
Vue.directive('b-alert', AlertPlugin)

Vue.use(VueCompositionApi);
Vue.use(IconsPlugin);
Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
