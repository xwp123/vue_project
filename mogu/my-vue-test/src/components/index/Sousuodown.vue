<template>
	<div class="sousuo-warp-down">
		<div class="sousuo-down-zong">
			<div class="sousuo-down-top">
				<img :src="img1" >
				<a>{{ Hotsou }}</a>
			</div>
			<div class="sousuo-down-down">
				<ul>
					<li>{{ libiao1 }}</li>
					<li>{{ libiao2 }}</li>
					<li>{{ libiao3 }}</li>
					<li>{{ libiao4 }}</li>
					<li>{{ libiao5 }}</li>
					<li>{{ libiao6 }}</li>
					<li>{{ libiao7 }}</li>
					<li>{{ libiao8 }}</li>
					<li>{{ libiao9 }}</li>
					<li>{{ libiao10 }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			img1:require("@/assets/下载7.png"),
			Hotsou:"热门搜索",
			libiao1:"连衣裙",
			libiao2:"高跟鞋",
			libiao3:"裙子",
			libiao4:"短袖",
			libiao5:"外套",
			libiao6:"睡衣",
			libiao7:"带背裤",
			libiao8:"凉鞋",
			libiao9:"衬衫",
			libiao10:"汉服",
			}
			
		}
	}
</script>

<style lang="less" scoped>
	 *{
	 	margin: 0;
	 	padding: 0;
	 }
	 .sousuo-warp-down,.sousuo-down-zong{
	 	width: 100%;
	 	height: 3rem;
	 }
	 .sousuo-down-top{
	 	float: left;
	 	width: 100%;
	 	height: .8rem;
	 	margin-top: .2rem;
	 }
	  .sousuo-down-top img ,.sousuo-down-top a{
	  	float: left;
	  }
	  .sousuo-down-top img{
	  	width: .35rem;
	  	height: .35rem;
	  	margin-left: .37rem;
	  	margin-top: .22rem;
	  }
	  .sousuo-down-top a{
	  	font-size: .25rem;
	  	margin-left: .1rem;
	  	margin-top: .22rem;
	  	color: #99A6C4;
	  }
	 .sousuo-down-down{
	 	width: 94%;
	 	text-align: center;
	 	font-size: .23rem;
	 }
	 .sousuo-down-down ul{
	 	margin-left: .5rem;
	 }
	 .sousuo-down-down ul li{
	 	float: left;
	 	width: 18%;
	 	line-height: .5rem;
	 	height: .5rem;
	 	margin-left: .1rem;
	 	margin-top: .1rem;
	 	border: .01rem solid #F5F5F5;
	 }
	  .sousuo-down-down ul li:nth-of-type(1),.sousuo-down-down ul li:nth-of-type(5),.sousuo-down-down ul li:nth-of-type(10){
	  	color: red;
	  }
</style>