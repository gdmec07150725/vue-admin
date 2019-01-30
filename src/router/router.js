import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    name: 'home',
    components: {
      default:Home,
      a:()=>import ('@/views/email.vue'),
      b:()=>import ('@/views/tel.vue')
    },
    props: route => ({
      food: route.query.food
    }),
    beforeEnter:(to,from,next)=>{
      if(from.name === 'login') console.log('这是从登陆页进来的')
      else console.log('这不是从登录页进来的');
      next();
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
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
    meta:{
      title:'关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
