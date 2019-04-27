<template>
	<div class="Video-warp">
	    <Head :message1="message"></Head>
		<Body1></Body1>
		<Body2s :VidelList="parentvalues"></Body2s>
		<Body2s :VidelList="parentvalues2"></Body2s>
		<Body2s :VidelList="parentvalues"></Body2s>
		<Body2s :VidelList="parentvalues2"></Body2s>
		<Body2s :VidelList="parentvalues"></Body2s>
		<Body2s :VidelList="parentvalues2"></Body2s>
		<Body2s :VidelList="parentvalues"></Body2s>
		<Body2s :VidelList="parentvalues2"></Body2s>
		<Body2s :VidelList="parentvalues"></Body2s>
		<Body2s :VidelList="parentvalues2"></Body2s>
		
		<Foo></Foo>
	</div>
</template>

<script>
	import Foo from "../index/Footer.vue"
    import Head from "../index/Headertwo.vue";
     import Body1 from "../index/Videoone.vue";
      import Body2s from "../index/VideoTwo.vue";
 	export default{
	components: {
        Foo,
        Head,
        Body1,
        Body2s
    },
    data(){
    	return{
    		message:"APP新人购物立享88折!",
    		parentvalues:[
    		{
					img1:require("@/assets/181225_2ckg0aj4296gf1ek19c73i0abe90g_750x500.jpg_750x500.jpg"),
					img2:require("@/assets/tu0t0_ifrtgmjygvswgzrtmezdambqhayde_400x400.jpg_100x100.jpg"),
					img3:require("@/assets/xiazai.png"),
					img4:require("@/assets/190321_7iglh4i2g9k4ffij8822d28bjlhg1_750x1000.jpg_100x100.jpg"),
					img5:require("@/assets/190410_10i09hf3j5hd6873dl0hch8bgege7_900x1350.jpg_100x100.jpg"),
					img6:require("@/assets/190414_6cli01ag4h46fi63356k11569496f_800x800.jpg_100x100.jpg"),
					a1:"小甜心_呢",
					a2:"直播中",
					a3:"12.5w",
					a4:"一百块能买六件进来呀",
					p1:"¥39.9",
					p2:"¥188",
					p3:"¥25.9"
				},
    		],
    		parentvalues2:[
    		{
					img1:require("@/assets/181028_860437b9g51j65da48akh4162giee_1242x1009.jpg_750x500.jpg"),
					img2:require("@/assets/180128_36i628ih6cccg9efhgce8654128a7_400x400.jpg_100x100.jpg"),
					img3:require("@/assets/xiazai.png"),
					img4:require("@/assets/190413_06dkh7akch249206652621alge61i_640x960.jpg_100x100.jpg"),
					img5:require("@/assets/190411_776128j56i6ie8d3iag083ae00c99_661x652.jpg_100x100.jpg"),
					img6:require("@/assets/190308_40f3k2jfgh0dhekla2jb9jg7018e2_661x808.jpg_100x100.jpg"),
					a1:"叶子yzzz",
					a2:"直播中",
					a3:"35.8w",
					a4:"今天一定要点进来",
					p1:"¥17.9",
					p2:"¥39.9",
					p3:"¥25.9"
				},
    		]
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