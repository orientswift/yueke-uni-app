<template>
	<view class="mechanTearch">
		<!-- 机构主页 老师列表详情 -->
		<view class="mechanTearch-left">
			<image src="../../static/imgs/jigou-tl/ts1.png"></image>
		</view>
		<view class="mechanTearch-right">
			<view class="mechanTearch-right-head">
				<text class="mechanTearch-right-head-name">在水一方</text>
				<text class="mechanTearch-right-head-tab">金牌讲师</text>
			</view>
			<view class="mechanTearch-right-aside">
				<view>
					<text class="mechanTearch-right-aside-tx">233人学过</text>
					<text class="mechanTearch-right-aside-tx">8年教龄</text>
				</view>
				<view>
					<text class="iconfont icon-xiangyou"></text>
				</view>
			</view>
			<view class="mechanTearch-right-foots">
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

<style lang="less" scoped="true">
.mechanTearch{
	width: 750upx;
	height: 184upx;
	padding-left: 40upx;
	box-sizing: border-box;
	display: flex;
	border-bottom: 1px solid #E0DEDE;
	.mechanTearch-left{
		width: 124upx;
		height: 184upx;
		display: flex;
		align-items: center;
		image{
			width: 124upx;
			height: 124upx;
			border-radius: 50%;
		}
	}
	.mechanTearch-right{
		width: 596upx;
		height: 184upx;
		padding-left: 24upx;
		padding-right: 25upx;
		padding-top: 30upx;
		box-sizing: border-box;
		.mechanTearch-right-head{
			height: 48upx;
			line-height: 48upx;
			font-weight: 500;
			.mechanTearch-right-head-name{
				font-size: 29.93upx;
				color: #333333;
			}
			.mechanTearch-right-head-tab{
				font-size: 18upx;
				background: #F6A72E;
				color: #ffffff;
				padding: 6upx 8upx;
				margin-left: 14upx;
				border-radius: 6upx;
			}
		}
		.mechanTearch-right-aside{
			height: 42upx;
			line-height: 42upx;
			font-size: 28upx;
			color: #B3B3B3;
			display: flex;
			justify-content: space-between;
			.mechanTearch-right-aside-tx{
				
			}
			.mechanTearch-right-aside-tx::after{
				content: '|';
				margin: 0 25upx;
			}
			.mechanTearch-right-aside-tx:last-child::after{
				content: ""
			}
		}
		.mechanTearch-right-foots{
			color: #B3B3B3;
			font-size: 28upx;
			line-height: 30upx;
			height: 30upx;
		}
	}
}
</style>
