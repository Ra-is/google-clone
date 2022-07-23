import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import './assets/tailwind.css'
import HomePage from './components/HomePage'
import SearchPage  from './components/SearchPage'

import searchStore from './store.js'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', component:HomePage },
        {path: '/search', component:SearchPage }
    ]
})

const app = createApp(App)
app.use(router)
app.use(searchStore)
app.mount('#app')
