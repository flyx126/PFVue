import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ( /* webpackChunkName: "Dashboard" */ '../views/Dashboard.vue')
    },
    {
        path: '/upload',
        name: 'Upload',
        component: () =>
            import ( /* webpackChunkName: "Dashboard" */ '../views/Upload.vue')
    },
    {
        path: '/kpi',
        name: 'Kpi',
        component: () =>
            import ( /* webpackChunkName: "Dashboard" */ '../views/Kpi.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router