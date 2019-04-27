<template>
	<div class="Body2-warp">
		<Swiper v-if="slidesReal.length>0" :autoPlay="true" :showIndicator="true" interval="2500" duration="500">
			<Slide v-for="(value,index) in slidesReal" :key="index">
			  <img v-bind:src="value.url" alt="" srcset="">
			</Slide>	
		</Swiper>
	</div>
</template>

<script>
import {Swiper,Slide} from "vue-swiper-component";
import imgOne from "@/assets/2019-04-11_175938.png";
import imgTwo from "@/assets/2019-04-11_180019.png";
import imgThree from "@/assets/2019-04-11_180048.png";
export default{
	components:{
		Swiper,
		Slide
	},
	data(){
		return{
			slidesReal:[
			{
				url:imgOne
			},
			{
				url:imgTwo
			},
			{
				url:imgThree
			}
			]
		}
	}
}
	
</script>

<style lang="less" scoped>
    img{
    	height: 3.7rem;
    	width: 100%;
    }
</style>