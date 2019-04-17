import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router/index'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify,{
  iconfont: 'md'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),router
}).$mount('#app')
