<template>
	<view class="mechanrecom">
		<!-- 优质机构 推荐 -->
		<scroll-view class="mechanrecom-boxs" scroll-x='true'>
			<!-- 每一个 优质机构 -->
			<view class="mechanrecom-li">
				<!-- 图片区域 -->
				<view class="mechanrecom-li-imgs">
					<view class="mechanrecom-li-imgs-txt">
						<text>预约礼</text>
					</view>
				</view>
				<!-- 文字区域 -->
				<view class="mechanrecom-li-texts">海博英语培训</view>
			</view>
			<view class="mechanrecom-li">
				<!-- 图片区域 -->
				<view class="mechanrecom-li-imgs">
					<view class="mechanrecom-li-imgs-txt">
						<text>预约礼</text>
					</view>
				</view>
				<!-- 文字区域 -->
				<view class="mechanrecom-li-texts">海博英语培训</view>
			</view>
			<view class="mechanrecom-li">
				<!-- 图片区域 -->
				<view class="mechanrecom-li-imgs">
					<view class="mechanrecom-li-imgs-txt">
						<text>预约礼</text>
					</view>
				</view>
				<!-- 文字区域 -->
				<view class="mechanrecom-li-texts">海博英语培训</view>
			</view>
			<view class="mechanrecom-li">
				<!-- 图片区域 -->
				<view class="mechanrecom-li-imgs">
					<view class="mechanrecom-li-imgs-txt">
						<text>预约礼</text>
					</view>
				</view>
				<!-- 文字区域 -->
				<view class="mechanrecom-li-texts">海博英语培训</view>
			</view>
		</scroll-view>
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
.mechanrecom{
	width: 750upx;
	height: 236upx;
	border-bottom: 1px solid #E1E1E1;
	overflow: hidden;
	.mechanrecom-boxs{
		width: auto;
		white-space: nowrap;
		.mechanrecom-li{
			display: inline-block;
			width: 250upx;
			height: 236upx;
			padding-top: 30upx;
			box-sizing: border-box;
			.mechanrecom-li-imgs{
				margin: 0  auto;
				width: 120upx;
				height: 120upx;
				border-radius: 10upx;
				box-shadow: 2upx 2px 5upx #DADADA, -2upx 0px 5upx #DADADA;
				text-align: center;
				position: relative;
				.mechanrecom-li-imgs-txt{
					color: #ffffff;
					font-size: 20upx;
					width: 100%;
					height: 22upx;
					text-align: center;
					position: absolute;
					left: 0;
					bottom: -10upx;
					text{
						background: #ff0000;
						padding: 2upx 4upx;
					}
				}
			}
			.mechanrecom-li-texts{
				width: 100%;
				height: 82upx;
				padding-top: 4upx;
				box-sizing: border-box;
				line-height: 78upx;
				text-align: center;
				color: #333333;
				font-size: 24upx;
				font-weight: 600;
			}
		}
	}
}
</style>
