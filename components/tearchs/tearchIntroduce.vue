<template>
	<view class="introduce">
		<view class="introduce-header">
			<text class="iconfont icon-ren introduce-header-icon"></text>
			<text>老师简介</text>
		</view>
		<view class="introduce-contents">
			自幼学习钢琴，以全国第三的优异成绩考入武汉音乐学院音乐教育系，师从音乐教育学院钢琴专业王伟副教授。曾赴奥地利与德国进行交流演出，并担任钢琴独奏....
		</view>
		<view class="introduce-foots">
			<text class="iconfont icon-iconfront- introduce-foots-icon"></text>显示全部
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped="true" lang="less">
.introduce{
	width: 710upx;
	border-top: 1px solid #EBEBEB;
	.introduce-header{
		width: 100%;
		height: 80upx;
		padding-left: 22upx;
		box-sizing: border-box;
		font-size: 28upx;
		color: #B3B3B3;
		line-height: 80upx;
		.introduce-header-icon{
			margin-right: 20upx;
		}
	}
	.introduce-contents{
		width: 710upx;
		display: block;
		padding: 0 52upx 0 44upx;
		box-sizing: border-box;
		line-height: 42upx;
		color: #5B5B5B;
		font-size: 28upx;
		font-weight: 500;
	}
	.introduce-foots{
		width: 710upx;
		height: 64upx;
		line-height: 64upx;
		text-align: center;
		color: #BFBFBF;
		font-size: 26.38upx;
		.introduce-foots-icon{
			margin-right: 12upx;
		}
	}
}
</style>
