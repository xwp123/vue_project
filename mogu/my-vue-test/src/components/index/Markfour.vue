<template>
	<div class="Markfour-warp">
		<Swiper 
			v-if="slidesReal.length>0" 
			:autoPlay="false" 
			:loop="false" 
		>
			<Slide v-for="(value,index) in slidesReal" 
			 :key="index">
			 <div class="yidong" >
			  	<li>
			  	<img v-bind:src="value.url" alt="" srcset="">
			  	<p> {{ value.p1 }} </p>
			  	<h5> {{ value.h1 }} </h5>
			    </li>
			    <li>
			  	<img v-bind:src="value.url2" alt="" srcset="">
			  	<p> {{ value.p2 }} </p>
			  	<h5> {{ value.h2 }} </h5>
			    </li>
			    <li>
			  	<img v-bind:src="value.url3" alt="" srcset="">
			  	<p> {{ value.p3 }} </p>
			  	<h5> {{ value.h3 }} </h5>
			    </li>
			  </div>
			  
			  
			</Slide>	
		</Swiper>
	</div>
</template>

<script>
	import {Swiper,Slide} from "vue-swiper-component";
    
export default{
	components:{
		Swiper,
		Slide
	},
	data(){
		return{
			slidesReal:[
			{
				url:require("@/assets/181212_45l5jlajc03587j5lc80251a5j9jl_226x302.jpg"),
				p1:"雪地靴穿搭经",
				h1:"让你轻松告别石膏脚",
				url2:require("@/assets/181212_80kdl01jgjf0282i420f96081d9b2_226x302.jpg"),
				p2:"暖冬瘦腿裤",
				h2:"穿上立减10KG",
				url3:require("@/assets/181212_45l5jlajc03587j5lc80251a5j9jl_226x302.jpg"),
				p3:"又暖又软@羊羔毛",
				h3:"冬日扛把子时髦UP"
			},
			{
				url:require("@/assets/181112_7clgg62ge19g1f7fh73a7j4066hel_226x302.jpg"),
				p1:"超火内搭来袭",
				h1:"万能搭配0出错",
				url2:require("@/assets/181126_040lddci9k7k4d6ga810cldcf4645_226x302.jpg"),
				p2:"chic毛衣首选",
				h2:"外穿内搭人手一件",
				url3:require("@/assets/180920_6de9348e93bclh879279132g5b536_226x302.png")
			},
			
			
			
			]
		}
	}
}
</script>

<style lang="less" scoped>
	.Markfour-warp{
		width: 100%;
		height: 4.4rem;
		border-bottom: .09rem solid #EFEFEF;
		margin-top: .2rem;
	}
	.yidong{
		display: flex;
		width: 100%;
		height: 4.5rem;
	}
	.yidong li{
		width: 33%;
		text-align: center;
	}
	.yidong li img{
		width: 90%;
		height: 3rem;
		margin-left: 5%;
	}
	.Markfour-warp p{
		font-size: .3rem;
		font-weight: 300;
		
	}
	.Markfour-warp h5{
		font-size: .2rem;
		font-weight: 100;
		margin-top: .1rem;
	}
	.wh_indicator {
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
    background: 0 0;
}
</style>