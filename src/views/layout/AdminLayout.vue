<template>
    <AdminHeader/>
    <AdminSidebar/>
    <main id="main" class="main">
      <AdminBreadcrumb/>
      <slot />
    </main>
    <AdminFooter/>
</template>

<script>
import AdminHeader from '../common/AdminHeader'
import AdminBreadcrumb from '../common/AdminBreadcrumb'
import AdminSidebar from '../common/AdminSidebar'
import AdminFooter from '../common/AdminFooter'
export default {
  name: 'AdminLayout',
  components: {
    AdminHeader,
    AdminBreadcrumb,
    AdminSidebar,
    AdminFooter
  }
}
</script>
