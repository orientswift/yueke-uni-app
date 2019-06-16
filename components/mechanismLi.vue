<template>
	<view class="mechanism-li-box">
		<!-- 首页 精选机构 图片-->
		<view class="mechanism-li-box-imgs">
			<image class="images" src="../../static/imgs/dianpu/d1.png"></image>
		</view>
		<!-- 精选机构 标题-->
		<view class="mechanism-li-box-title">
			海博英语培训
		</view>
		<!-- 精选机构 副标题1-->
		<view class="mechanism-li-box-remind1">
			<text class="remind1-txt1">
				预约礼
			</text>
			<text class="remind1-txt2">
				免费赠送2次试听课免费...
			</text>
		</view>
		<!-- 精选机构 副标题2-->
		<view class="mechanism-li-box-remind2">
			<view class="remind2-box1">
				<text class="iconfont icon-jiaoyinzujifangke remind2-icon"></text>
				<text class="remind2-txt">233人去过</text>
			</view>
			<view class="remind2-box2">
				<text class="iconfont icon-yulan remind2-icon"></text>
				<text class="remind2-txt">1000人浏览</text>
			</view>
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

<style lang="less">
	/*精选机构 商铺 */ 
.mechanism-li-box{
	width: 340upx;
	height: 343upx;
	margin-bottom: 10upx;
	/*精选机构 图片 */ 
	.mechanism-li-box-imgs{
		width: 340upx;
		height: 200upx;
		border-radius: 8upx;
		overflow: hidden;
		.images{
			width: 100%;
			height: 100%;
		}
	}
	/*精选机构 标题 */ 
	.mechanism-li-box-title{
		width: 340upx;
		height: 56upx;
		font-size: 30upx;
		line-height: 56upx;
		text-align: left;
	}
	/*精选机构 副标题1 */ 
	.mechanism-li-box-remind1{
		height: 30upx;
		width: 340upx;
		font-size: 20upx;
		position: relative;
		.remind1-txt1{
			border: 2upx solid #FF0000;
			border-radius: 3upx;
			line-height: 30upx;
			box-sizing: border-box;
			color: #FF0000;
			padding: 0upx 4upx;
			font-size: 20upx;
			position: absolute;
			left: 2upx;
			top: 0;
			box-sizing: border-box;
		}
		.remind1-txt2{
			line-height: 30upx;
			color: #7F7F7F;
			margin-left: 12upx;
			text-overflow: ellipsis;
			white-space:nowrap;
			overflow:hidden;
			width: 240upx;
			height: 30upx;
			display: inline-block;
			position: absolute;
			left: 84upx;
			top: 0;
		}
	}
	/*精选机构 副标题2 */ 
	.mechanism-li-box-remind2{
		height: 60upx;
		width: 340upx;
		font-size: 20upx;
		line-height: 60upx;
		color: #B2B2B2;
		display: flex;
		.remind2-box1{
			width: 160upx;
			height: 60upx;
		}
		.remind2-icon{
			margin-right: 10upx;
		}
	}
}
</style>
