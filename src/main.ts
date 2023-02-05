import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')


// import axios from 'axios'
// axios({
//     url: 'http://127.0.0.1:8000/api/lyb/'
// }).then(res => {
//     console.log(res);
    
// }) 