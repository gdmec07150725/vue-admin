// import Home from '@/views/Home.vue'
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
    icon: 'ios-home',
    meta: {
      title: '首页'
    },
    redirect: {
      name: 'gird'
    },
    children: [
      {
        path: 'gird',
        name: 'gird',
        meta: {
          title: '栅格布局'
        },
        component: () => import('@/views/grid.vue')
      }
    ]
  },
  {
    path: '/display',
    name: 'display',
    component: Layout,
    meta: {
      title: '展示'
    },
    icon: 'ios-easel-outline',
    children: [
      {
        path: 'table',
        name: 'table',
        meta: {
          title: '可编辑表格'
        },
        component: () => import('@/views/table.vue')
      },
      {
        path: 'folder_tree',
        name: 'folder_tree',
        meta: {
          title: '文件目录'
        },
        component: () => import('@/views/folder-tree/folder-tree.vue')
      },
      {
        path: 'form',
        name: 'form',
        meta: {
          title: '动态表单'
        },
        component: () => import('@/views/form.vue')
      },
      {
        path: 'icon',
        name: 'icon',
        meta: {
          title: '字体图标'
        },
        component: () => import('@/views/icon.vue')
      },
      {
        path: 'param/:id',
        name: 'param',
        component: () => import('@/views/argu.vue'),
        props: true,
        meta: {
          title: '参数页'
        }
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
    icon: 'ios-settings',
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/effect',
    name: 'effect',
    component: Layout,
    meta: {
      title: '效果'
    },
    icon: 'logo-windows',
    children: [
      {
        path: 'count-to',
        name: 'count_to',
        component: () => import('@/views/count-to.vue'),
        meta: {
          title: '数字渐变'
        }
      },
      {
        path: 'menu-page',
        name: 'menu_page',
        component: () => import('@/views/menu-page.vue'),
        meta: {
          title: '递归组件'
        }
      },
      {
        path: 'render-page',
        name: 'render_page',
        component: () => import('@/views/render-page.vue'),
        meta: {
          title: '渲染函数'
        }
      },
      {
        path: 'split-pane',
        name: 'split_pane',
        component: () => import('@/views/split-pane.vue'),
        meta: {
          title: 'split-pane'
        }
      }
    ]
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue'),
    meta: {
      title: 'vuex'
    },
    icon: 'ios-nuclear'
  }
]

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登陆'
    }
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue'),
    meta: {
      title: '404'
    }
  }
]
