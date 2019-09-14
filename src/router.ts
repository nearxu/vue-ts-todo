import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Foo from './views/foo.vue';
import Bar from './views/bar.vue';
import BarChild from './views/bar-child.vue';
import FooChild from '@/views/foo-child.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo,
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar,
      children: [
        {
          path: '/bar-child',
          name: 'bar-child',
          component: BarChild,
        },
        {
          path: '/foo-child',
          name: 'foo-child',
          component: FooChild,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
