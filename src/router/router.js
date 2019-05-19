import Home from '@/views/Home.vue'
import Layout from '@/views/layout.vue'
export const routerMap = [
  {
    path: '/',
    name: 'home',
    // components: {
    //   default: Home,
    //   a: () => import('@/views/email.vue'),
    //   b: () => import('@/views/tel.vue')
    // },
    // props: route => ({
    //   food: route.query.food
    // }),
    // beforeEnter: (to, from, next) => {
    //   if (from.name === 'login') console.log('这是从登陆页进来的')
    //   else console.log('这不是从登录页进来的')
    //   next()
    // }
    component: Layout,
    children: [
      {
        path: 'gird',
        name: 'gird',
        component: () => import('@/views/grid.vue')
      },
      {
        path: 'table',
        name: 'table',
        component: () => import('@/views/table.vue')
      },
      {
        path: 'folder_tree',
        name: 'folder_tree',
        component: () => import('@/views/folder-tree/folder-tree.vue')
      },
      {
        path: 'form',
        name: 'form',
        component: () => import('@/views/form.vue')
      },
      {
        path: 'icon',
        name: 'icon',
        component: () => import('@/views/icon.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/count-to',
    name: 'count_to',
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '/menu-page',
    name: 'menu_page',
    component: () => import('@/views/menu-page.vue')
  },
  {
    path: '/render-page',
    name: 'render_page',
    component: () => import('@/views/render-page.vue')
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    component: () => import('@/views/split-pane.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue')
  }
]

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
