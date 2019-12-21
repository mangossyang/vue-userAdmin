
import Vue from 'vue';
import VueRouter from "vue-router";

import Customers from '../components/Customers'
import About from '../components/About'
import Add from '../components/Add'
import CustomerDetails from '../components/CustomerDetails'
import Edit from '../components/Edit'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect:'/customers'
        },
        {
            path: '/customers',
            component: Customers
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/add',
            component: Add
        },
        {
            path: '/customer/:id',
            component: CustomerDetails
        },
        {
            path: '/edit/:id',
            component: Edit
        }
    ]
})