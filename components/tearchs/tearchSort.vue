<template>
	<view class="distance-boxs">
		<!--老师 排序选项卡 -->
		<view class="distance-boxs-li">
			<view class="iconfont icon-icon_duihao-xian distance-boxs-li--icon distance-boxs-li--icon-active"></view>
			<view class="distance-boxs-li--text distance-boxs-li--text-active">
				<text class="distance-boxs-li--text-left">智能排序</text>
			</view>
		</view>
		<view class="distance-boxs-li">
			<view class="iconfont icon-icon_duihao-xian distance-boxs-li--icon"></view>
			<view class="distance-boxs-li--text">
				<text class="distance-boxs-li--text-left">离我最近</text>
			</view>
		</view>
		<view class="distance-boxs-li">
			<view class="iconfont icon-icon_duihao-xian distance-boxs-li--icon"></view>
			<view class="distance-boxs-li--text">
				<text class="distance-boxs-li--text-left">好评优先</text>
			</view>
		</view>
		<view class="distance-boxs-li">
			<view class="iconfont icon-icon_duihao-xian distance-boxs-li--icon"></view>
			<view class="distance-boxs-li--text">
				<text class="distance-boxs-li--text-left">销量优先</text>
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

<style scoped="true" lang="less">
.distance-boxs{
	width: 750upx;
	position: absolute;
	left: 0;
	top: 0upx;
	z-index: 50;
	background: #ffffff;
	.distance-boxs-li{
		border-top: 1px solid #EBEBEB;
		width: 750upx;
		height: 80upx;
		padding-left: 14upx;
		box-sizing: border-box;
		display: flex;
		.distance-boxs-li--icon{
			height: 80upx;
			width: 40upx;
			text-align: center;
			line-height: 80upx;
			color: transparent;
			font-size: 28upx;
		}
		.distance-boxs-li--icon-active{
			color: #3994FF;
		}
		.distance-boxs-li--text{
			line-height: 80upx;
			font-weight: 500;
			.distance-boxs-li--text-left{
					padding: 0 6upx;
					font-size: 28upx;
				}
			.distance-boxs-li--text-right{
					padding: 0 16upx;
					font-size: 28upx;
				}
		}
		.distance-boxs-li--text-active{
			color: #3994FF;
		}
	}
}
</style>
