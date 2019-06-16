<template>
	<view class="introduce">
		<view class="introduce-header">
			<text class="iconfont icon-xueshimao introduce-header-icon"></text>
			<text>学校经历</text>
		</view>
		<view class="introduce-contents">
			<view class="introduce-contents-left">哈尔滨工业大学</view>
			<view class="introduce-contents-right">2008-09 ~ 2012-06</view>
		</view>
		<view class="introduce-foots">
			更多经历 (1条)
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
		padding: 0 52upx 0 44upx;
		box-sizing: border-box;
		line-height: 42upx;
		color: #5B5B5B;
		font-size: 26upx;
		justify-content: space-between;
		font-weight: 500;
		display: flex;
		.introduce-contents-left{
			color: #545454;
			
		}
		.introduce-contents-right{
			color: #BEBEBE;
			
		}
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

