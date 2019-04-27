<template>
	<div class="menu-warp">
		<div v-for="(value,index) in Mlist" class="menu">
		<div class="menu-top">
			<div class="menu-top-left">
				<img v-bind:src="value.img">
			</div>
			<div class="menu-top-mid">
				<p>{{ value.pOne }}</p>
				<a><mark>{{ value.markOne }}</mark>{{ value.markTwo }}&nbsp;<mark>{{ value.markThree }}</mark>{{ value.markFour }}</a>
			</div>
		</div>
		
		<div class="menu-mid"  v-for="(item,index) in value.ListImg">
			<div class="tushi">
			  <li>
			  	<img v-bind:src="item.liimg1">
			  	<img class="t1" v-bind:src="item.liimg2">
			  	<img class="t2" v-bind:src="item.liimg3">
			  	<span class="t3">{{ item.span1 }} </span>
			  	<img class="t4" v-bind:src="item.liimg4">
			  </li>
			  <li>
			  	<img v-bind:src="item.liimg11">
			  	<img class="t1"  v-bind:src="item.liimg2"/>
			  	<img class="t2" v-bind:src="item.liimg3">
			  	<span class="t3">{{ item.span2 }}</span>
			  	<img class="t4" v-bind:src="item.liimg4">
			  </li>
			  <li>
			  	<img v-bind:src="item.liimg22">
			  	<img class="t1" v-bind:src="item.liimg2">
			  	<img class="t2" v-bind:src="item.liimg3">
			  	<span class="t3">{{ item.span3 }}</span>
			  	<img class="t4" v-bind:src="item.liimg4">
			  </li>
			</div>
			
			
		</div>
		
		<div class="menu-down" v-for="(items,index) in value.ListImg2">
			<ul>
				<li>
					<img v-bind:src="items.imgone">
                     <a>{{ value.a1 }}</a>				
				</li>
				<li>
					<img v-bind:src="items.imgtwo">
                     <a>{{ value.a2 }}</a>				
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		props:{
			Mlist:{
				type:Array,
				default:[]
			}
		}
		
		
	}
</script>

<style lang="less" scoped>
.menu-warp{
	width: 100%;
	height: 5.9rem;
	border-bottom: .05rem solid #F6F6F6;
}
.menu-top-left[data-v-0269f31a], .menu-top-mid[data-v-0269f31a] {
    float: left;
    margin-top: 0.12rem;
}

.menu-top{
	width: 100%;
	height: 1.2rem;
	display: flex;
}
.menu-down[data-v-0269f31a] {
    width: 100%;
    height: 0.6rem;
    margin-top: .12rem;
}
.menu-top-left,.menu-top-mid{
	float: left;
	margin-top: .1rem;
}
.menu-top-left{
	text-align: center;
	width: 20%;
	height: 1.2rem;
}
.menu-top-left img{
	border-radius: 50%;
	width: .85rem;
	height: .85rem;
}
.menu-top-left:last-of-type img{
	border-radius: 50%;
	
} 
.menu-top-mid{
	width: 80%;
	height: 1.2rem;
}
.menu-top-mid a{
	font-size: .24rem;
	float: left;
	font-weight: 200;
	margin-top: .05rem;
}
.menu-top-mid p{
	font-size: .3rem;
	font-weight: 600;
	margin-top: .23rem;
}
.menu-mid{
	height: 3.82rem;
	width: 100%;
}
.tushi{
	display: flex;
	width: 100%;
}
.tushi li{
	position: relative;
	width: 32.89%;
	float: left;
	height: 3.8rem;
}
.tushi li:nth-of-type(2),.tushi li:nth-of-type(3){
	margin-left: .05rem;
}
.tushi li img:nth-child(1){
	width: 100%;
	height: 3.8rem;
}
.t1{
	position: absolute;
	width: .8rem;
	height: .8rem;
	z-index: 100;
	top: 1.5rem;
	left: .85rem;
	
}
.t2{
	position: absolute;
	width: .35rem;
	height: .35rem;
	z-index: 100;
	top: 3.22rem;
	left: .14rem;
}
.t3{
	font-size: .2rem;
	color:#F0F0F2;
	z-index: 100;
	position: absolute;
	top: 3.27rem;
	left: .599rem;
}
.t4{
	position: absolute;
	width: .35rem;
	height: .35rem;
	z-index: 100;
	top: 3.2rem;
	left: 1.97rem;
}
.menu-down{
	width: 100%;
	height: .6rem;
}
.menu-down a{
	font-size: .2rem;
}
.menu-down img{
	width: .45rem;
	height: .45rem;
}

.menu-down ul li{
	float: left;
	width: 1.7rem;
	height: .52rem;
	background-color: #F2F3F7;
	margin-left: .1rem;
	margin-top: .05rem;
}
.menu-down ul li a{
	margin-top: .1rem;
}
.menu-down ul li a,.menu-down ul li img{
	float: left;
}

.menu-top-mid a[data-v-0269f31a] {
    font-size: 0.24rem;
    float: left;
    font-weight: 200;
    margin-top: 0.05rem;
    margin-left: -.03rem;
}
.menu-top-left[data-v-0269f31a][data-v-0269f31a], .menu-top-mid[data-v-0269f31a][data-v-0269f31a] {
    float: left;
    margin-top: -0.03rem;
}
mark{
	background-color: white;
	color: black;
	font-weight: 500;
}
</style>