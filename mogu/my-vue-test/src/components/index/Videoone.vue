<template>
	<div class="video-body2-warp">
		
			<li v-for="(value,index) in Vlist" v-bind:class="{'active':isActive===index}" @click="dianji(index)">
			{{ value.text }}
		    </li>
		   
	</div>
</template>

<script>
	export default{
		data(){
			return{
			isActive:0,
			Vlist:[
			{
			  text:"热门"
			},
			{
			  text:"关注"
			},
			{
			  text:"穿搭"
			},
			{
			  text:"美妆"
			},
			]
			}
			
		},
		methods:{
			dianji:function(index){
				this.isActive=index
			}
		}
	}
</script>

<style lang="less" scoped>
	.video-body2-warp{
		width: 100%;
		height: 1rem;
		border-bottom: .02rem solid #ECECEC;
		position: fixed;
		top: .9rem;
		left: 0;
		display: flex;
		z-index: 100;
		background-color: white;
	}
	.active{
		color: red;
	}
	.video-body2-warp li{
		flex: 1;
		height: 1rem;
		text-align: center;
		line-height: 1rem;
		font-size: .3rem;
		
	}
	/*.video-body2-warp li:first-of-type{
		color: red;
	}*/
</style>