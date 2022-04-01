/* eslint-disable */ 
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import AdminUserManagement from '../views/admin/AdminUserManagement.vue'
import AdminUserCreation from '../views/admin/AdminUserCreation.vue'
import AdminProfile from '../views/admin/AdminProfile.vue'
import AdminContact from '../views/admin/AdminContact.vue'
import AdminFAQ from '../views/admin/AdminFAQ.vue'
import AdminLogin from '../views/admin/AdminLogin.vue'
import AdminRegister from '../views/admin/AdminRegister.vue'
import AdminIcons from '../views/admin/AdminIcons.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AdminDashboard,
    meta: { admin_app_layout: true,breadCrumb:{title:'Dashboard'} }
  },
  {
    path: '/dashboard',
    name: 'admin_dashboard',
    component: AdminDashboard,
    meta: { admin_app_layout: true,breadCrumb:{title:'Dashboard'} }
  },
  {
    path: '/users',
    name: 'admin_user_management',
    component: AdminUserManagement,
    meta: { admin_app_layout: true,breadCrumb:{title:'Employee Management'} }
  },
  {
    path: '/users/add',
    name: 'admin_user_creation',
    component: AdminUserCreation,
    meta: { admin_app_layout: true,breadCrumb:{title:'Employee Management'} }
  },
  {
    path: '/profile',
    name: 'admin_profile',
    component: AdminProfile,
    meta: { admin_app_layout: true,breadCrumb:{title:'Profile'} }
  },
  {
    path: '/contact',
    name: 'admin_contact',
    component: AdminContact,
    meta: { admin_app_layout: true,breadCrumb:{title:'Contact'} }
  },
  {
    path: '/faq',
    name: 'admin_faq',
    component: AdminFAQ,
    meta: { admin_app_layout: true,breadCrumb:{title:'Frequently Asked Questions'} }
  },
  {
    path: '/register',
    name: 'admin_register',
    component: AdminRegister,
    meta: { admin_app_layout: false,breadCrumb:{title:'Create an Account'} }
  },
  {
    path: '/login',
    name: 'admin_login',
    component: AdminLogin,
    meta: { admin_app_layout: false,breadCrumb:{title:'Login to Your Account'} }
  },
  {
    path: '/icons',
    name: 'admin_icons',
    component: AdminIcons,
    meta: { admin_app_layout: true,breadCrumb:{title:'Icons'} }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
