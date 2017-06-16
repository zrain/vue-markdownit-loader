<template lang="md">
	<div>
		<!-- 
		<div class="markdown-body">
			<markdown></markdown>
			<div v-html="md"></div>
		</div>
		-->
		<!-- <Markdown>
			# Menu <span>导航菜单</span> 

			为页面和功能提供导航的菜单列表。

			## 何时使用

			导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

			更多布局和导航的范例可以参考：常用布局。
		</Markdown> -->

		<Markdown>
			# Menu <span>导航菜单</span>

			为页面和功能提供导航的菜单列表。

			## 何时使用

			导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

			更多布局和导航的范例可以参考：常用布局。

			```html
				<Menu>
					<MenuItem>菜单项</MenuItem>
					<SubMenu title="子菜单">
						<MenuItem>子菜单项</MenuItem>
					</SubMenu>
				</Menu>
			```

			## 代码演示
		</Markdown>
		<!-- <Markdown>
			> This is test1.

			# Hello

			## h2

			### h3

			#### h4
			
			##### h5

			`<span>{{sss}}</span>`

			> This is test.

			- How are you?
			- Fine, Thank you, and you?
			- I'm fine， too. Thank you.
			- 🌚

			```javascript
			import Vue from 'vue'

			Vue.config.debug = true
			```
			```html
			<script>
				module.exports = {}
			</script>
			<script>
				module.exports = {}
			</script>
			<script>
				module.exports = {}
			</script>

			<template>
				<div></div>
			</template>
			```
			sadfsfs

			大家哦哦好啊谁都发生地方上的冯绍峰s

			> sahhhh
			```html
			<compo>{{model }}{{model }}{{model }}{{model }}{{ model }}</compo>
			```
		</Markdown> -->
		<!-- <p @click="mode = !mode">
			{{mode}}
			<Markdown>
				> This is inner.
			</Markdown>
		</p> -->
	</div>
</template>

<script>
// import markdown from './markdown.vue'
// import markdown_file from './markdown-file.md'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'

export default {
	// components: {
	//   markdown
	// },
	data: function() {
		return {
			// md: markdown_file,
			mode: false
		}
	}
}
</script>
<style>
	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}
</style>
