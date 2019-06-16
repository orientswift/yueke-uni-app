<template>
	<view class="mechandistance">
		<view class="mechandistance-box">
			<view class="mechandistance-box-li">
				<text class="iconfont icon-icon_duihao-xian mechandistance-box-li-txt-icon  actives"></text>
				<text class="mechandistance-box-li-txt  actives">智能排序</text>
			</view>
			<view class="mechandistance-box-li">
				<text class="iconfont icon-icon_duihao-xian mechandistance-box-li-txt-icon"></text>
				<text class="mechandistance-box-li-txt">离我最近</text>
			</view>
			<view class="mechandistance-box-li">
				<text class="iconfont icon-icon_duihao-xian mechandistance-box-li-txt-icon"></text>
				<text class="mechandistance-box-li-txt">好评优先</text>
			</view>
			<view class="mechandistance-box-li">
				<text class="iconfont icon-icon_duihao-xian mechandistance-box-li-txt-icon"></text>
				<text class="mechandistance-box-li-txt">销量优先</text>
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

<style lang="less" scoped="true">
.mechandistance{
	width: 100%;
	height: calc(100vh - 158upx);
	position: absolute;
	left: 0;
	top:78upx;
	z-index: 5;
	background: rgba(0, 0, 0, 0.3);
	.mechandistance-box{
		background: rgba(255, 255, 255, 1);
		.mechandistance-box-li{
			width: 100%;
			height: 78upx;
			line-height: 78upx;
			padding-left: 20upx;
			font-size: 24upx;
			color: #4D4D4D;
			border-top: 1px solid #EBEBEB;
			box-sizing: border-box;
			.mechandistance-box-li-txt-icon{
				margin-right: 12upx;
				color: transparent;
				
			}
			.mechandistance-box-li-tx{
				
			}
			.actives{
				color: #258CFF;
			}
		}
		
	}
}
</style>
