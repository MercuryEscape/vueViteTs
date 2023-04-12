import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import axios from './utils/axios'
createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  // .use(axios)
  .mount('#app')
