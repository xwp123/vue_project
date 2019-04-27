<template>
	<div class="index-warp">
	 <Head :message1="message2"></Head>
	  <Body :placeHod="message"></Body>
	  <Body2></Body2>
	  <Body3 :List="parentListone"></Body3>
	  <Body4 v-on:childToParentMsg="showChildToParentMsg"></Body4>
	  <div class="menus" v-if="isShow === 0">
	  <Menu :Mlist="parentList"></Menu>
	  <Menu2 :Mlist="parentList2"></Menu2>
	  <Menu :Mlist="parentList"></Menu>
	  <Menu2 :Mlist="parentList2"></Menu2>
	  <Menu :Mlist="parentList"></Menu>
	  <Menu2 :Mlist="parentList2"></Menu2>
	  <Menu :Mlist="parentList"></Menu>
	  <Menu2 :Mlist="parentList2"></Menu2>
	  <Menu :Mlist="parentList"></Menu>
	  <Menu2 :Mlist="parentList2"></Menu2>
	  </div>
	  <div class="menus" v-if="isShow === 1">
	  <p>sadfasdf</p>
	  </div>
	  <Foo></Foo>
	</div>
</template>

<script>
	import Head from "../index/Header.vue";
	import Body from "../index/Body1.vue";
	import Body2 from "../index/Body2.vue";
	import Body3 from "../index/Body3.vue";
	import Body4 from "../index/Body4.vue";
	import Menu from "../index/Caidan.vue";
	import Menu2 from "../index/Caidan2.vue";
	import Foo from "../index/Footer.vue"

 	export default{
	components: {
        Head,
        Body,
        Body2,
        Body3,
        Body4,
        Menu,
        Menu2,
        Foo
       
    },
    data(){
    	return{
    		isShow:0,
    		message:"拖鞋",
    		message2:"上万达人为你试穿全网品牌",
    		parentListone:[
    		{
					img1:require("@/assets/2019-04-15_170527.png"),
					pbiaoqian1:"女装"
				},
				{
					img1:require("@/assets/2019-04-12_102843.png"),
					pbiaoqian1:"上衣"
				},
				{
					img1:require("@/assets/2019-04-15_170604.png"),
					pbiaoqian1:"裤子"
				},
				{
					img1:require("@/assets/2019-04-15_170638.png"),
					pbiaoqian1:"裙子"
				},
				{
					img1:require("@/assets/2019-04-15_170709.png"),
					pbiaoqian1:"套装"
				},
				{
					img1:require("@/assets/2019-04-15_170741.png"),
					pbiaoqian1:"女鞋"
				},
				{
					img1:require("@/assets/2019-04-15_170822.png"),
					pbiaoqian1:"美妆/个护"
				},
				{
					img1:require("@/assets/2019-04-15_170850.png"),
					pbiaoqian1:"包包"
				},
				{
					img1:require("@/assets/2019-04-15_170918.png"),
					pbiaoqian1:"配饰"
				},
				{
					img1:require("@/assets/2019-04-15_170947.png"),
					pbiaoqian1:"内衣"
				},
				{
					img1:require("@/assets/2019-04-15_171016.png"),
					pbiaoqian1:"男友"
				},
				{
					img1:require("@/assets/2019-04-15_171107.png"),
					pbiaoqian1:"家居"
				},
				{
					img1:require("@/assets/2019-04-15_171136.png"),
					pbiaoqian1:"母婴"
				},
				{
					img1:require("@/assets/2019-04-15_171159.png"),
					pbiaoqian1:"食品"
				},
				{
					img1:require("@/assets/2019-04-15_171525.png"),
					pbiaoqian1:"签到"
				}
    		],
    		parentList:[
    		{
					img:require("@/assets/2019-04-12_111937.png"),
					pOne:"Crystal美玲",
					markOne:"180",
					markTwo:"cm",
					markThree:"45",
					markFour:"kg | Hangzhou&nbsp;| 模特",
					a1:"金大班",
					a2:"丁走走的店",
					ListImg:[
					{
					liimg1:require("@/assets/2019-04-12_112035.png"),
					liimg11:require("@/assets/2019-04-12_112116.png"),
					liimg22:require("@/assets/2019-04-12_112245.png"),
					liimg2:require("@/assets/下载2.png"),
					liimg3:require("@/assets/180810_0a02124e70hcl6hd13d597idalb7e_28x28.png"),
					liimg4:require("@/assets/180820_4elccj9cb0lfh129illfccg01g0c9_28x28.png"),
					span1:"3.6万",
					span2:"54.8万",
					span3:"42.6万",
					}
					],
					ListImg2:[
					{
					imgone:require("@/assets/181109_50kelic5eilg08f41cfgij3i0kjbb_398x398.png_200x200.jpg"),
					imgtwo:require("@/assets/181109_50kelic5eilg08f41cfgij3i0kjbb_398x398.png_200x200.jpg"),
					}
					]
				}
    		],
    		parentList2:[
    		{
					img:require("@/assets/2019-04-15_105510.png"),
					pOne:"小个子春夏第一次露腿",
					markFive1:"750",
					markFive2:"人参与 | 更新了",
					markFive3:"22",
					markFive4:"个LOOK",
					
					a1:"金大班",
					a2:"丁走走的店",
					p1:"眼看着商场里的春装也要50%sale了,终于有大长腿可以",
					p2:"露了。胆小格子mm露腿就是一门学问，2019你们的....",
					ListImg:[
					{
					liimg1:require("@/assets/2019-04-15_105547.png"),
					liimg11:require("@/assets/2019-04-15_105639.png"),
					liimg22:require("@/assets/2019-04-15_105711.png"),
					liimg2:require("@/assets/下载2.png"),
					liimg3:require("@/assets/180810_0a02124e70hcl6hd13d597idalb7e_28x28.png"),
					liimg4:require("@/assets/180820_4elccj9cb0lfh129illfccg01g0c9_28x28.png"),
					span1:"45.6万",
					span2:"32.8万",
					span3:"12.6万",
					}
					],
					ListImg2:[
					{
					imgone:require("@/assets/181109_50kelic5eilg08f41cfgij3i0kjbb_398x398.png_200x200.jpg"),
					imgtwo:require("@/assets/181109_50kelic5eilg08f41cfgij3i0kjbb_398x398.png_200x200.jpg"),
					}
					]
				}
    		],
    		
    	}
    },
    methods:{
    	showChildToParentMsg:function(data){
        this.isShow=data
        console.log(data)
      }

    }
    
	}
	
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
</style>