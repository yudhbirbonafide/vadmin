import { createApp } from 'vue'
import 'bootstrap'
import jQuery from 'jquery'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

createApp(App).use(VueLoading,{loader:'bars'}).use(store).use(router).mount('#app')
