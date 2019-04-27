<template>
	<div class="Myone-warp">
		<div class="Myone-warp-top">
			<img :src="img1">
		</div>
		<div class="Myone-warp-mid">
			<div class="myone-tupian">
				<img class="tu1" :src="img2">
			    <p>{{ p1 }}</p>
			    <li>
			    <img :src="img3">
			    <a> {{ a1 }}</a>
			    </li>
			    
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				img1:require("@/assets/180927_1ai9125115h4hh7k5dc3cej6j782a_750x342.png"),
				img2:require("@/assets/171119_6068l43hd26h4235de5fdafja340h_100x100.jpg_160x160.jpg"),
				img3:require("@/assets/180928_4d93gggd1hiidlf2l8bd2fgl7fhbd_21x26.png"),
				a1:"个人主页",
				p1:"NoYoEnid"
			}
		}
	}
</script>

<style lang="less" scoped>
	.Myone-warp{
		width: 100%;
		height: 4.19rem;
		position: relative;
	}
	.Myone-warp-top{
		width: 100%;
		height: 4.19rem;
	}
	.Myone-warp-top img{
		width: 100%;
		height: 2.8rem;
	}
	.Myone-warp-mid{
		width: 90%;
		height: 2.35rem;
		text-align: center;
		margin: 0 auto;
		background-color: white;
		box-shadow: .01rem .01rem .3rem #F0F0F0;
		opacity: 1;
		font-size: .27rem;
		border-radius: .12rem;
	}
	.tu1{
		border-radius: 50%;
		width: 1.25rem;
		height: 1.2rem;
		margin-top: -.42rem;
		border: .05rem solid white;
	}
	.Myone-warp-mid{
		position: absolute;
		top: 1.3rem;
		left: .359rem;
	}
	.Myone-warp-mid p{
		font-size: .3rem;
		font-weight: 550;
	}
	.Myone-warp-mid li{
		width: 2rem;
		height: .4rem;
		line-height: .4rem;
		margin: 0 auto;
		border: .01rem solid #D2D2D2;
		margin-top: .2rem;
		border-radius: .1rem;
	}
	.Myone-warp-mid li img{
		width: .2rem;
		height: .2rem;
		
	}
	.Myone-warp-mid li a{
		font-size: .2rem;
		margin-left: .2rem;
	}
</style>