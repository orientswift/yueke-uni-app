<template>
	<view class="tearch-li-box">
		
		<view class="tearch-li-left">
			<image src="../../static/imgs/t1/tt1.png"></image>
		</view>
		<view class="tearch-li-right">
			<view class="tearch-li-right-head">
				<view class="tearch-li-right-head-left">
					<text>浮一沉</text>
					<text>名师</text>
				</view>
				<view class="tearch-li-right-head-right"><text>￥80</text>起</view>
			</view>
			<view class="tearch-li-right-introduce1">
				<view class="introduce1-left">
					<text>预约礼</text>
				</view>
				<view class="introduce1-right">
					<text>免费赠送2次试听课,免费赠送2次试听课,免费赠送2次试听课,免费赠送2次试听课</text>
				</view>	
			</view>
			<view class="tearch-li-right-introduce2">
					<view class="introduce2-left">
						233人学习过
						<text>|</text>
						3年教龄
					</view>
					<view class="introduce2-rigth">
						<text class="iconfont icon-dingwei introduce2-icons"></text>
						<text>5.1Km</text>
					</view>
			</view>
			<view class="tearch-li-right-introduce3">
				语言培训机构专职教师
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
.tearch-li-box{
	width: 750upx;
	border-top: 1px solid #EDEDED;
	padding: 0 30upx 0 28upx;
	box-sizing: border-box;
	display: flex;
	.tearch-li-left{
		width: 124upx;
		height: 206upx;
		position: relative;
		image{
			width: 126upx;
			height: 126upx;
			border-radius: 50%;
			position: absolute;
			left: 0;
			top: 24upx;
		}
	}
	.tearch-li-right{
		width: 568upx;
		height: 126upx;
		padding-left: 24upx;
		padding-top: 22upx;
		box-sizing: border-box;
		.tearch-li-right-head{
			width: 100%;
			height: 36upx;
			line-height: 36upx;
			display: flex;
			justify-content: space-between;
			.tearch-li-right-head-left{
				
				text:nth-child(1){
					color: #333333;
					font-size: 29.93upx;
					margin-right: 20upx;
				}
				text:nth-child(2){
					color: #ffffff;
					font-size: 24upx;
					background: #FF6700;
					line-height: 36upx;
					padding: 0 12upx;
					border-radius: 4upx;
				}
			}
			.tearch-li-right-head-right{
				line-height: 36upx;
				font-size: 23.94upx;
				color: #B3B3B3;
				text:nth-child(1){
					color: #FF9D2A;
					font-size: 35.91upx;
				}
			}
		}
		.tearch-li-right-introduce1{
			width: 100%;
			height: 62upx;
			line-height: 62upx;
			padding-right: 26upx;
			box-sizing: border-box;
			display: flex;
			.introduce1-left{
				
				line-height: 62upx;
				text{
					border:  1px solid #FF0000;
					font-size: 20upx;
					border-radius: 2px;
					padding: 2px;
				}
			}
			.introduce1-right{
				text{
					color: #B9B9B9;
					font-size: 20upx;
					margin-left: 14upx;
					width: 430upx;
					height: 62upx;
					display: inline-block;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space:nowrap;
					line-height: 72upx;
				}
			}
			
		}
		.tearch-li-right-introduce2{
			width: 100%;
			height: 30upx;
			line-height: 30upx;
			font-size: 20upx;
			color: #B3B3B3;
			display: flex;
			justify-content: space-between;
			.introduce2-rigth{
				text-align: right;
				.introduce2-icons{
					margin-right: 10upx;
				}
			}
			.introduce2-left{
				text{
					margin: 0 28upx;
					color: #E9E9E9;
				}
			}
			
		}
		.tearch-li-right-introduce3{
			width: 100%;
			height: 60upx;
			line-height: 60upx;
			font-size: 20upx;
			color: #B3B3B3;
		}
		
	}
}
</style>
