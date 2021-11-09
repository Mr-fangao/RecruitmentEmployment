<template>
<div id="main">
			<!-- 激活的菜单样式为active类-->
			<!-- 为了阻止链接在点击时跳转，我们使用了"prevent"修饰（preventDefaunlt） -->
			<nav v-bind:class="active" v-on:click.prevent>
				<!-- 当菜单上的链接被点击时，我们调用了makeActive方法 该方法在vue实例中创建-->
				<a href="#" class="home" v-on:click="makeActive('首页')">首页</a>
				<a href="#" class="projects" v-on:click="makeActive('项目')">项目</a>
				<a href="#" class="services" v-on:click="makeActive('业务')">业务</a>
				<a href="#" class="contact" v-on:click="makeActive('联系')">联系</a>
			</nav>
			<!-- 一下"active"变量会根据当前选中的值来自动变换 -->
			<p>您选择了<b>{{active}}</b>菜单栏</p>
		</div>
</template>

<script>
var demo = new Vue({
				//DOM元素，挂载视图模型
				el: '#main',
				//定义属性，并设置初始值
				data: {
					active: '首页'
				},
				//点击菜单使用的函数
				methods: {
					makeActive: function(item) {
						//模型改变，视图会自动更新
						this.active = item;
					}
				}
			})

</script>


<style lang="less" scoped>
	body {
				font: 15px/1.3 'Open Sans', sans-serif;
				color: #5e5b64;
				text-align: center;
			}
 
			a,a:visited {
				outline: none;
				color: #389dc1;
			}
 
			a:hover {
				/* 去除下划线 */
				text-decoration: none;
			}
 
			section,
			footer,
			header,
			aside,
			nav {
				display: block;
			}
 
			nav {
				display: inline-block;
				margin: 60px auto 45px;
				background-color: #5597b4;
				box-shadow: 0 1px 1px #CCCCCC;
				border-radius: 2px;
			}
 
			nav a {
				display: inline-block;
				padding: 18px 30px;
				color: #FFFFFF !important;
				font-weight: bold;
				font-size: 16px;
				text-decoration: none !important;
				line-height: 1;
				text-transform: uppercase;
				background-color: transparent;
 
				-webkit-transition: background-color 0.25s;
				-moz-transition: background-color 0.25s;
				transition: background-color 0.25s;
			}
 
			nav a:first-child {
				border-radius: 2px 0 0 2px;
			}
 
			nav a:last-child {
				border-radius: 0 2px 2px 0;
			}
 
			nav.首页 .home,
			nav.项目 .projects,
			nav.业务 .services,
			nav.联系 .contact {
				background-color: #e35885;
			}
			p{
					font-size:22px;
					font-weight:bold;
					color:#7d9098;
				}
			
				p b{
					color:#ffffff;
					display:inline-block;
					padding:5px 10px;
					background-color:#e35885;
					border-radius:2px;
					text-transform:uppercase;
					font-size:18px;
				}
</style>
