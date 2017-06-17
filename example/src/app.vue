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

		<div class="demo-container"> 
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
				<section>
					<section class="code-box">
						<section class="code-box-demo">
							<Menu mode="horizontal" :selectedKeys="['mail']">
								<MenuItem name="mail">
									<Icon type="mail" />Navigation One
								</MenuItem>
								<MenuItem disabled>
									<Icon type="appstore" />Navigation Two
								</MenuItem>
								<SubMenu>
									<template slot="title">
										<Icon type="setting"/> Navigation Three - Submenu
									</template>
									<MenuItemGroup title="Item 1">
							            <MenuItem name="1">Option 1</MenuItem>
							            <MenuItem name="2">Option 2</MenuItem>
							        </MenuItemGroup>
							        <MenuItemGroup title="Item 2">
							            <MenuItem name="3">Option 3</MenuItem>
							            <MenuItem name="4">Option 4</MenuItem>
							        </MenuItemGroup>
								</SubMenu>
								<MenuItem key="alipay">
									<a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
								</MenuItem>
							</Menu>
						</section>
						<section class="code-box-meta markdown">
							<div class="code-box-title">
								<a href="#">顶部导航</a>
							</div>
							<div>
								<p>水平的顶部导航菜单。</p>
							</div>
						</section>
						<section>
							<Markdown>
							```html
								<Menu mode="horizontal" :selectedKeys="['mail']">
									<MenuItem name="mail">
										<Icon type="mail" />Navigation One
									</MenuItem>
									<MenuItem disabled>
										<Icon type="appstore" />Navigation Two
									</MenuItem>
									<SubMenu>
										<template slot="title">
											<Icon type="setting"/> Navigation Three - Submenu
										</template>
										<MenuItemGroup title="Item 1">
								            <MenuItem name="1">Option 1</MenuItem>
								            <MenuItem name="2">Option 2</MenuItem>
								        </MenuItemGroup>
								        <MenuItemGroup title="Item 2">
								            <MenuItem name="3">Option 3</MenuItem>
								            <MenuItem name="4">Option 4</MenuItem>
								        </MenuItemGroup>
									</SubMenu>
									<MenuItem key="alipay">
										<a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
									</MenuItem>
								</Menu>
								
							```
							</Markdown>
						</section>
					</section>
					<section class="code-box">
						<section class="code-box-demo">
							<Menu style="width:240px;"
							        :defaultSelectedKeys="['1']"
							        :defaultOpenKeys="['sub1']"
							        mode="inline"
							      >
						        <SubMenu value="sub1">
						        	<template slot="title">
						        		<Icon type="mail" />
						        		<span>Navigation One</span>
						        	</template>
						          	<MenuItemGroup value="g1" title="Item 1">
							            <MenuItem value="1">Option 1</MenuItem>
							            <MenuItem value="2">Option 2</MenuItem>
						          	</MenuItemGroup>
						          	<MenuItemGroup value="g2" title="Item 2">
							            <MenuItem value="3">Option 3</MenuItem>
							            <MenuItem value="4">Option 4</MenuItem>
						          	</MenuItemGroup>
						        </SubMenu>
						        <SubMenu value="sub2">
						        	<template slot="title">
						        		<Icon type="appstore" />
						        		<span>Navigation Two</span>
						        	</template>
							        <MenuItem value="5">Option 5</MenuItem>
							        <MenuItem value="6">Option 6</MenuItem>
							        <SubMenu value="sub3" title="Submenu">
								        <MenuItem value="7">Option 7</MenuItem>
								        <MenuItem value="8">Option 8</MenuItem>
							        </SubMenu>
						        </SubMenu>
						        <SubMenu value="sub4">
						        	<template slot="title">
						        		<Icon type="setting" />
						        		<span>Navigation Three</span>
						        	</template>
							        <MenuItem value="9">Option 9</MenuItem>
							        <MenuItem value="10">Option 10</MenuItem>
							        <MenuItem value="11">Option 11</MenuItem>
							        <MenuItem value="12">Option 12</MenuItem>
						        </SubMenu>
							</Menu>
						</section>
						<section class="code-box-meta markdown">
							<div class="code-box-title">
								<a href="#">内嵌菜单</a>
							</div>
							<div>
								<p>垂直菜单，子菜单内嵌在菜单区域。</p>
							</div>
						</section>
					</section>
					<section class="code-box">
						<section class="code-box-demo">
							<Menu style="width:240px;"
							        mode="vertical"
							      >
						        <SubMenu value="sub1">
						        	<template slot="title">
						        		<Icon type="mail" />
						        		<span>Navigation One</span>
						        	</template>
						          	<MenuItemGroup value="g1" title="Item 1">
							            <MenuItem value="1">Option 1</MenuItem>
							            <MenuItem value="2">Option 2</MenuItem>
						          	</MenuItemGroup>
						          	<MenuItemGroup value="g2" title="Item 2">
							            <MenuItem value="3">Option 3</MenuItem>
							            <MenuItem value="4">Option 4</MenuItem>
						          	</MenuItemGroup>
						        </SubMenu>
						        <SubMenu value="sub2">
						        	<template slot="title">
						        		<Icon type="appstore" />
						        		<span>Navigation Two</span>
						        	</template>
							        <MenuItem value="5">Option 5</MenuItem>
							        <MenuItem value="6">Option 6</MenuItem>
							        <SubMenu value="sub3" title="Submenu">
								        <MenuItem value="7">Option 7</MenuItem>
								        <MenuItem value="8">Option 8</MenuItem>
							        </SubMenu>
						        </SubMenu>
						        <SubMenu value="sub4">
						        	<template slot="title">
						        		<Icon type="setting" />
						        		<span>Navigation Three</span>
						        	</template>
							        <MenuItem value="9">Option 9</MenuItem>
							        <MenuItem value="10">Option 10</MenuItem>
							        <MenuItem value="11">Option 11</MenuItem>
							        <MenuItem value="12">Option 12</MenuItem>
						        </SubMenu>
							</Menu>
						</section>
						<section class="code-box-meta markdown">
							<div class="code-box-title">
								<a href="#">垂直菜单</a>
							</div>
							<div>
								<p>子菜单是弹出的形式。</p>
							</div>
						</section>
					</section>
					<section class="code-box">
						<section class="code-box-demo">
							<Menu style="width:240px;"
							        :defaultSelectedKeys="['1']"
							        :defaultOpenKeys="['sub1']"
							        mode="inline"
							        accordion
							      >
						        <SubMenu value="sub1">
						        	<template slot="title">
						        		<Icon type="mail" />
						        		<span>Navigation One</span>
						        	</template>
						          	<MenuItemGroup value="g1" title="Item 1">
							            <MenuItem value="1">Option 1</MenuItem>
							            <MenuItem value="2">Option 2</MenuItem>
						          	</MenuItemGroup>
						          	<MenuItemGroup value="g2" title="Item 2">
							            <MenuItem value="3">Option 3</MenuItem>
							            <MenuItem value="4">Option 4</MenuItem>
						          	</MenuItemGroup>
						        </SubMenu>
						        <SubMenu value="sub2">
						        	<template slot="title">
						        		<Icon type="appstore" />
						        		<span>Navigation Two</span>
						        	</template>
							        <MenuItem value="5">Option 5</MenuItem>
							        <MenuItem value="6">Option 6</MenuItem>
						        </SubMenu>
						        <SubMenu value="sub4">
						        	<template slot="title">
						        		<Icon type="setting" />
						        		<span>Navigation Three</span>
						        	</template>
							        <MenuItem value="9">Option 9</MenuItem>
							        <MenuItem value="10">Option 10</MenuItem>
							        <MenuItem value="11">Option 11</MenuItem>
							        <MenuItem value="12">Option 12</MenuItem>
						        </SubMenu>
							</Menu>
						</section>
						<section class="code-box-meta markdown">
							<div class="code-box-title">
								<a href="#">只展开当前父级菜单</a>
							</div>
							<div>
								<p>点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。</p>
							</div>
						</section>
					</section>
				</section>
				<section class="code-box">
					<section class="code-box-demo">
						<Menu style="width:240px;"
						        :defaultSelectedKeys="['1']"
						        :defaultOpenKeys="['sub1']"
						        mode="inline"
						        theme="dark"
						      >
					        <SubMenu value="sub1">
					        	<template slot="title">
					        		<Icon type="mail" />
					        		<span>Navigation One</span>
					        	</template>
					          	<MenuItemGroup value="g1" title="Item 1">
						            <MenuItem value="1">Option 1</MenuItem>
						            <MenuItem value="2">Option 2</MenuItem>
					          	</MenuItemGroup>
					          	<MenuItemGroup value="g2" title="Item 2">
						            <MenuItem value="3">Option 3</MenuItem>
						            <MenuItem value="4">Option 4</MenuItem>
					          	</MenuItemGroup>
					        </SubMenu>
					        <SubMenu value="sub2">
					        	<template slot="title">
					        		<Icon type="appstore" />
					        		<span>Navigation Two</span>
					        	</template>
						        <MenuItem value="5">Option 5</MenuItem>
						        <MenuItem value="6">Option 6</MenuItem>
						        <SubMenu value="sub3" title="Submenu">
							        <MenuItem value="7">Option 7</MenuItem>
							        <MenuItem value="8">Option 8</MenuItem>
						        </SubMenu>
					        </SubMenu>
					        <SubMenu value="sub4">
					        	<template slot="title">
					        		<Icon type="setting" />
					        		<span>Navigation Three</span>
					        	</template>
						        <MenuItem value="9">Option 9</MenuItem>
						        <MenuItem value="10">Option 10</MenuItem>
						        <MenuItem value="11">Option 11</MenuItem>
						        <MenuItem value="12">Option 12</MenuItem>
					        </SubMenu>
						</Menu>
					</section>
					<section class="code-box-meta markdown">
						<div class="code-box-title">
							<a href="#">主题</a>
						</div>
						<div>
							<p>内建了两套主题 light|dark，默认 light。</p>
						</div>
					</section>
				</section>
			</div>
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
