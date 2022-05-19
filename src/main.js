import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//main.js
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api/'
// Vue.prototype.$axios = axios


createApp(App).use(store).use(router).mount('#app')
