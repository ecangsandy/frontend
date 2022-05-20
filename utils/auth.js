//utils/auth.js
import axios from 'axios'

export function setHeaderToken(token) {
    // console.log(token);
    alert('utils')
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

export function removeHeaderToken() {
    delete axios.defaults.headers.common['Authorization']
}
