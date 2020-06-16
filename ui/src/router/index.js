import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

  const title_header = 'JTF-70'

  function title(header, title) {

    return `${header} - ${title}`
  }

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: title(title_header, 'Home')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: title(title_header, 'About Us')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
