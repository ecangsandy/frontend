import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//main.js
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { setHeaderToken } from '../utils/auth'

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api/'

// Vue.config.productionTip = false

const token = localStorage.getItem('token');

if (token) {
    setHeaderToken(token)
}

store.dispatch('get_user', token)
    .then(() => {
        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }).catch((error) => {
        console.error(error);
    })

createApp(App).use(store).use(router).mount('#app')
