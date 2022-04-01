<template>
  <!--nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav-->
  <div v-if="$route.meta.admin_app_layout">
    <AdminLayout>
      <router-view/>
    </AdminLayout>
  </div>
  <div v-if="!$route.meta.admin_app_layout">
      <router-view/>
  </div>
</template>

<style>

@import '~bootstrap/dist/css/bootstrap.min.css';
@import 'assets/css/style.css';
@import 'assets/css/bootstrap-icons/bootstrap-icons.css';
@import 'assets/css/boxicons/css/boxicons.min.css';
</style>

<script>
import AdminLayout from './views/layout/AdminLayout'
export default {
  components: { AdminLayout }
}
</script>
