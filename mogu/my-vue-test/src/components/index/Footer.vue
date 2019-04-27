<template>
	<div class="Footer-warp">
		<div class="foot">
				<li v-for="(value,index) in DownList" :key="index">
					<router-link :to="value.routerMap">{{ value.text }}</router-link>
				</li>
				
		</div>
	</div>
</template>

<script>
import "../../../public/js/jquery-1.12.4.js"
 export default{
 	data(){
 		return{
 			DownList:[
 			{
 				text:"首页",
 				routerMap:"/index"
 			},
 			{
 				text:"商城",
 				routerMap:"/market"
 			},
 			{
 				text:"直播",
 				routerMap:"/video"
 			},
 			{
 				text:"我",
 				routerMap:"/my"
 			}
 			]
 		}
 	},
 	
 }
</script>

<style lang="less" scoped>
     
	.foot{
		height: .9rem;
		width: 100%;
		position: fixed;
		z-index: 9999;
		bottom: 0;
		background-color: white;
		opacity: 1;
		display: flex;
	}
	
	.foot li{
	    flex: 1;
	    font-size: .3rem;
	    text-align: center;
	    height: .9rem;
	    line-height: .9rem;
	}
	
	a{
		text-decoration: none;
		color: black;
	}
	.router-link-exact-active{
		color: red;
	}
</style>