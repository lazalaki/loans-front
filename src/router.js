import Vue from 'vue'
import Router from 'vue-router'
import Register from './view/auth/Register'
import Login from './view/auth/Login.vue'
import Homepage from './components/Homepage.vue'
import Authorize from './layout/authorize/Authorize.vue'
import Unauthorize from './layout/unauthorize/Unauthorize.vue'
import Verification from './view/auth/Verification.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/auth',
            name: 'Auth',
            component: Unauthorize,
            children: [
                {
                    path: 'register',
                    name: 'Register',
                    component: Register,
                },
                {
                    path: 'login',
                    name: 'Login',
                    component: Login
                },
                {
                    path: 'verification',
                    name: 'Verification',
                    component: Verification

                },
            ]
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Authorize
        },
        {
            path: '/homepage',
            name: 'Homepage',
            component: Homepage
        }
    ]
})

export default router