<template>
	<view class="tearch-boxs-swipes-li">
		<!-- 名师推荐 老师 -->
		<navigator url="../../pages/taerchDetails/taerchDetails">
			<view class="tearch-boxs-swipes-li-imgs">
				<image src="../../static/imgs/jigou-tl/ts1.png"></image>
				<view class="tearch-boxs-swipes-li-imgs-txt">
					<text>预约礼</text>
				</view>
			</view>
			<view class="tearch-boxs-swipes-li-name">浮一沉</view>
			<view class="tearch-boxs-swipes-li-table">
				<text>初中辅导</text>
			</view>
		</navigator>
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
	.tearch-boxs-swipes-li{
				display: inline-block;
				width: 160upx;
				height: 226upx;
				.tearch-boxs-swipes-li-imgs{
					width: 120upx;
					height: 120upx;
					margin: 0 auto;
					position: relative;
					margin-bottom: 18upx;
					image{
						width: 120upx;
						height: 120upx;
						background: yellowgreen;
						border-radius: 50%;
					}
					.tearch-boxs-swipes-li-imgs-txt{
						width:120upx;
						height: 28upx;
						text-align: center;
						position: absolute;
						left: 0;
						bottom: 0upx;
						font-size: 18upx;
						text{
							padding: 5upx 7upx;
							color: #ffffff;
							background: #FF0000;
							border-radius: 2px;
						}
					}	
				}
				.tearch-boxs-swipes-li-name{
					width: 160upx;
					height: 35upx;
					text-align: center;
					font-size: 26upx;
					line-height: 35upx;
					color: #333333;
					font-weight: 600;
				}
				.tearch-boxs-swipes-li-table{
					width: 160upx;
					height: 28upx;
					text-align: center;
					line-height: 28upx;
					margin-top: 12upx;
					font-size: 18upx;
					text{
						padding: 5upx 7upx;
						border: 1px solid #258CFF;
						color: #258CFF;
						border-radius: 2px;
					}
				}
			}
</style>
