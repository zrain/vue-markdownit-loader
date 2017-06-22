import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './src/app.vue';

import Example1 from './src/example.vue';
import Example2 from './src/example2.vue';

import 'highlight.js/styles/github.css'
import 'github-markdown-css'

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: '/example1',
			component: Example1
		},
		{
			path: '/example2',
			component: Example2
		},
	]
});

// 创建和挂载根实例。
const app = new Vue({
  el: '#app',
  router,
  template: "<App/>",
  components: { App }
});
