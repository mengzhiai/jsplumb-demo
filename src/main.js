/*
 * @Author: your name
 * @Date: 2019-12-02 10:07:12
 * @LastEditTime : 2019-12-18 09:36:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-jsplumb\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
import {codemirror} from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import axios from 'axios'
Vue.prototype.axios = axios
Vue.use(codemirror)
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
