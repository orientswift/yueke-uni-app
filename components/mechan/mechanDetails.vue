<template>
	<view class="mechanDetails">
		<view class="mechanDetails-lefta">
			<image class="mechanDetails-lefta-imgs" src="../../static/imgs/school/ppp1.png"></image>
			<text class="mechanDetails-lefta-txts">9人已预约</text>
		</view>
		<view class="mechanDetails-righta">
			<view class="mechanDetails-righta-head">暑假雅思6.0-7.0VIP精品实验班</view>
			<view class="mechanDetails-righta-content">
				<view>
					<text class="a1">￥9980</text>
					<text class="a2">￥12800</text>
				</view>
				<view>
					<text class="iconfont icon-xiangyou a3"></text>
				</view>
			</view>
			<view class="mechanDetails-righta-foots">
				<text>雅思</text><text>正式课</text><text>十人以下</text>
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
.mechanDetails{
	width: 722upx;
	height: 192upx;
	line-height: 88upx;
	color: #289DFA;
	font-size: 32upx;
	font-weight: 500;
	border-bottom: 1px solid #EBEBEB;
	display: flex;
	.mechanDetails-lefta{
			width: 220upx;
			height: 192upx;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			.mechanDetails-lefta-imgs{
				width: 200upx;
				height: 160upx;
			}
			.mechanDetails-lefta-txts{
				position: absolute;
				left: 10upx;
				bottom: 16upx;
				width: 200upx;
				height: 34upx;
				color: #ffffff;
				background: rgba(0,0,0,0.5);
				display: inline-block;
				font-size: 20upx;
				text-align: center;
				line-height: 34upx;
			}
		}
	.mechanDetails-righta{
		width: 500upx;
		height: 192upx;
		padding: 12upx 30upx 0 10upx; 
		box-sizing: border-box;
		.mechanDetails-righta-head{
			color: #323232;
			height: 56upx;
			font-size: 28upx;
			line-height: 56upx;
		}
		.mechanDetails-righta-content{
			color: #B3B3B3;
			height: 56upx;
			font-size: 28upx;
			line-height: 56upx;
			display: flex;
			justify-content: space-between;
			.a1{
				font-size: 34upx;
				color: #FE6044;
			}
			.a2{
				font-size: 28upx;
				color: #B3B3B3;
				margin-left: 26upx;;
			}
		}
		.mechanDetails-righta-foots{
			height: 60upx;
			line-height: 60upx;
			font-size: 24upx;
			color: #B3B3B3;
			
			text{
				padding-left: 14upx;
			}
			text::after{
				content: '|';
				margin-left: 14upx;
			}
		}
		.mechanDetails-righta-foots>text:last-child::after{
				content: '';
				margin-left: 14upx;
			}
	}
}

	
</style>
