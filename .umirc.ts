import { defineConfig } from 'umi';

export default defineConfig({
  cssLoader: {},
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  layout: { name: '学习 css ' },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/demo1',
      menu: { name: '轮播' },
      routes: [{ path: '.', component: '@/pages/demo1' }],
    },
    {
      path: '/demo2',
      menu: { name: '轮播2' },
      routes: [{ path: '.', component: '@/pages/demo2' }],
    },
    { path: '/demo3', menu: { name: '官网' }, component: '@/pages/demo3' },
  ],
});
