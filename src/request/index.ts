import axios from 'axios'
import { response } from 'express'
import { error } from 'console'


// axios.get('https://www.google.com/search?q=django&oq=&aqs=chrome.2.35i39i362l8.723525258j0j15&sourceid=chrome&ie=UTF-8') 
//         .then(function () {
//             console.log(response);
//         }).catch(function(){
//             console.log(error);
            
//         })

const service = axios.create({
    baseURL: 'http://127.0.0.1:8000/polls/',
    timeout: 1000,
    
})

// service.interceptors.request.use(

// )



export default service