import Vue from 'vue'
import Router from 'vue-router'
import Register from './components/Register.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]
})

export default router