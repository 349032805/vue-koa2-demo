import Vue from 'vue'
import store from '../store/index.js'
import Router from 'vue-router'

Vue.use(Router);

//路由懒加载
const login = resolve => {
  require.ensure(['../views/login.vue'], () => {
    resolve(require('../views/login.vue'));
  });
};

const register = resolve => {
  require.ensure(['../views/register.vue'], () => {
    resolve(require('../views/register.vue'));
  });
};

const hello = resolve => {
  require.ensure(['../views/hello.vue'], () => {
    resolve(require('../views/hello.vue'));
  });
};

const error404 = resolve => {
  require.ensure(['../views/404.vue'], () => {
      resolve(require('../views/404.vue'));
  }); 
};

const test = resolve => {
  require.ensure(['../views/test.vue'], () => {
      resolve(require('../views/test.vue'));
  }); 
};

const list = resolve => {
  require.ensure(['../views/list.vue'], () => {
      resolve(require('../views/list.vue'));
  }); 
};

const detail = resolve => {
  require.ensure(['../views/detail.vue'], () => {
      resolve(require('../views/detail.vue'));
  }); 
};

const router = new Router({
  mode: 'history', // 开启HTML5的history模式，可以让地址栏的url长得跟正常页面跳转的url一样
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: hello,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'list',
      component: list,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/detail/:songId',
      name: 'detail',
      component: detail
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register 
    },
      {
      path: '/test',
      name: 'test',
      component: test 
    },
    {
      path: '*',
      name: 'error',
      component: error404
    }
  ]
});

//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //获取store里面的token
  let token = store.state.token;
  //判断要去的路由有没有requiresAuth
  if(to.meta.requiresAuth){

    if(token){
      next();
    }else{
      next({
        path: '/login',
        query: { redirect: to.fullPath }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
      });
    }

  }else{
    next();//如果无需token,那么随它去吧
  }
});

export default router;
