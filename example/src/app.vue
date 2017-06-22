<style>	
	.wrapper {
		box-sizing: border-box;
		max-width: 980px;
		margin: 0 auto;
	}
	.header {

	}
</style>

<template>
	<div class="wrapper">
		<div class="header">
			<ul>
				<li>
					<router-link to="/example1">/example1</router-link>
				</li>
				<li>
					<router-link to="/example2">/example2</router-link>
				</li>
				<li>
					<router-link to="/example2">/example3</router-link>
				</li>
			</ul>
		</div>
		<div class="content">
			<router-view id="router-view"></router-view>
		</div>
	</div>
</template>
