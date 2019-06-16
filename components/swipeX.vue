<template>
	<view class="swpie-box">
		<!-- 主页 横向滑块 -->
		<view class="swpie-box-box2">
			<!-- <view class="swpie-box-ul">
				<text class="swpie-box-li">文化课</text>
				<text class="swpie-box-li swpie-li-actives">舞蹈</text>
				<text class="swpie-box-li">美术</text>
				<text class="swpie-box-li">乐器</text>
				<text class="swpie-box-li">兴趣</text>
				<text class="swpie-box-li">体育</text>
				<text class="swpie-box-li">外语</text>
			</view> -->
			<scroll-view class="swpie-box-ul" scroll-x="true" scroll-y="false">
                   <!-- <text id="1" class="swpie-box-li" @click="swipelis">文化课</text>
                    <text id="2" class="swpie-box-li swpie-li-actives">舞蹈</text>
                    <text id="3" class="swpie-box-li">美术</text>
					<text id="4" class="swpie-box-li">乐器</text>
					<text id="5" class="swpie-box-li">兴趣</text>
					<text id="6" class="swpie-box-li">体育</text>
					<text id="7" class="swpie-box-li">外语</text>
					<text id="8" class="swpie-box-li">数学</text> -->
					<text v-for="(item,index) in list" :key="index" :id="item.id_li"  @click="swipelis" :class="lis_id == item.id_li?'swpie-box-li swpie-li-actives':'swpie-box-li' ">{{item.title}}</text>
					
            </scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lis_id:1
			};
		},
		methods: {
			swipelis(ev) {
				console.log(ev.currentTarget.id)
				this.lis_id=ev.currentTarget.id
			}
		},
		computed:{
			list:function(){
				return this.$store.state.list
			}
		}
	}
</script>

<style lang="less" scoped="true">
.swpie-box{
	width: 750upx;
	height: 68upx;
	.swpie-box-box2{
		width: 674upx;
		height: 68upx;
		margin-left: 38upx;
		overflow: hidden;
		.swpie-box-ul{
			width: auto;
			height: 88upx;
			white-space: nowrap;
			padding-bottom: 22upx;
			box-sizing: border-box;
			.swpie-box-li{
				font-size: 26.25upx;
				margin-right: 50upx;
				color: #B3B3B3;
				display: inline-block;
				height: 46upx;
				width: auto;
			}
			.swpie-li-actives{
				border-bottom: 1px solid #258CFF;
				color: #333333;
			}
		}
		.swpie-box-ul::-webkit-scrollbar{
		width: 0;
		height: 0;
		color: transparent;
		}
	}
	
}
.swpie-box-u2{
	white-space: nowrap;
}
.swpie-box-li2{
	width: 100upx;
	height: 48upx;
	display: inline-block;
	text-align: center;
	margin-right: 50upx;
}
</style>
