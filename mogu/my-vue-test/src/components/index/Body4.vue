<template>
	<div class="Body4-warp">
		<ul class="body4-ul">
			<li v-for="(value,index) in Abiao" v-bind:class="{'active':isActive===index}" @click="handclick(index)">
				{{ value.wenzi }}
			</li>
		</ul>
	</div>
</template>

<script>
	import "../../../public/js/jquery-1.12.4.js"
	export default{
     data(){
     	return{
     		isActive:0,
     		flag1:false,
     		flag2:true,
     		Abiao:[
     		{
     			wenzi:"发现"
     		},
     		{
     			wenzi:"关注"
     		},
     		{
     			wenzi:"流行"
     		}
     		]
     	}
     },
     methods:{
     	handclick:function(index){
     		this.isActive = index;
     		
     			this.$emit("childToParentMsg",index);
     		
     	}
     },
     mounted(){
     	$(window).scroll(function(){
     	var a = $(this).scrollTop();
     	if(a>1000){
     		$(".Body4-warp").addClass("dingwei")
     	}else{
     		$(".Body4-warp").removeClass("dingwei")
     	}
     	})
     }
     
	}
</script>

<style lang="less" scoped>
*{
	margin: 0;
	padding: 0;
}
.Body4-warp{
	height: .9rem;
	width: 100%;
	border-bottom: .05rem solid #F6F6F6;
	
}
.active{
	color: red;
}
.dingwei{
	position: fixed;
	background-color: white;
	z-index: 500;
	top: 0;
	left: 0;
}
.body4-ul{
	display: flex;
}
.body4-ul li{
	flex: 1;
	height: .9rem;
	line-height: .9rem;
	font-weight: 700;
	font-size: .3rem;
	text-align: center;
}
</style>