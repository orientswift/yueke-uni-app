<template>
	<view class="details-times">
		<!-- 老师主页 课程 卡片 -->
		<view class="etails-times-titles">
			<text class="iconfont icon-kechengbiao"></text>
			教授课程
		</view>
		<!-- 课程 -->
		<view class="etails-times-contents">
			<view class="etails-times-contents-box">
				<view class="contents-box-left">
					<view class="contents-box-left-head">钢琴-钢琴初级进阶课程</view>
					<view class="contents-box-left-foot">
						<text class="contents-box-left-foot-t1">预约礼</text>
						<text class="contents-box-left-foot-t2">免费赠送2次试听</text>
					</view>
				</view>
				<view class="contents-box-right">
					<view class="contents-box-right-p1">
						<view class="contents-box-right-p1-new">￥ 100</view>
						<view class="contents-box-right-p1-old">￥ 160</view>
					</view>
					<view class="contents-box-right-p2">
						<view class="contents-box-right-p2-btn">详情</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="etails-times-contents">
			<view class="etails-times-contents-box">
				<view class="contents-box-left">
					<view class="contents-box-left-head">钢琴-钢琴初级进阶课程</view>
					<!-- <view class="contents-box-left-foot">
						<text class="contents-box-left-foot-t1">预约礼</text>
						<text class="contents-box-left-foot-t2">免费赠送2次试听</text>
					</view> -->
				</view>
				<view class="contents-box-right">
					<view class="contents-box-right-p1">
						<view class="contents-box-right-p1-new">￥ 100</view>
						<!-- <view class="contents-box-right-p1-old">￥ 160</view> -->
					</view>
					<view class="contents-box-right-p2">
						<view class="contents-box-right-p2-btn">详情</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="etails-times-contents">
			<view class="etails-times-contents-box">
				<view class="contents-box-left">
					<view class="contents-box-left-head">钢琴-钢琴初级进阶课程</view>
					<view class="contents-box-left-foot">
						<text class="contents-box-left-foot-t1">预约礼</text>
						<text class="contents-box-left-foot-t2">免费赠送2次试听</text>
					</view>
				</view>
				<view class="contents-box-right">
					<view class="contents-box-right-p1">
						<view class="contents-box-right-p1-new">￥ 100</view>
						<view class="contents-box-right-p1-old">￥ 160</view>
					</view>
					<view class="contents-box-right-p2">
						<view class="contents-box-right-p2-btn">详情</view>
					</view>
				</view>
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

.details-times{
	
	// 头部
	.etails-times-titles{
		width: 100%;
		height: 56upx;
		font-size: 28upx;
		color: #B3B3B3;
		padding-top: 20upx;
		padding-left: 20upx;
		box-sizing: border-box;
		.icon-kechengbiao{
			margin-right: 6upx;
		}
	}
	
	// 课程
	.etails-times-contents{
		width: 710upx;
		height: 134upx;
		padding: 20upx 0 0 62upx;
		box-sizing: border-box;
		overflow: hidden;
		.etails-times-contents-box{
			width: 648upx;
			height: 114upx;
			border-bottom: 1px solid #F2F2F2;
			display: flex;
			.contents-box-left{
				width: 424upx;
				height: 114upx;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				.contents-box-left-head{
					width:  424upx;
					height: 46upx;
					color: #333333;
					font-size: 28upx;
					font-weight: 500;
					line-height: 46upx;
				}
				.contents-box-left-foot{
					height: 48upx;
					width:  424upx;
					line-height: 48upx;
					.contents-box-left-foot-t1{
						font-size: 20upx;
						border: 1px solid red;
						border-radius: 3upx;
						padding: 2upx 4upx;
					}
					.contents-box-left-foot-t2{
						font-size: 23.94upx;
						color: #B3B3B3;
						margin-left: 14upx;
					}
				}
			}
			.contents-box-right{
				width: 224upx;
				height: 114upx;
				display: flex;
				.contents-box-right-p1{
					width: 96upx;
					height: 104upx;
					padding-top: 16upx;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					.contents-box-right-p1-new{
						height: 36upx;
						line-height: 36upx;
						text-align: right;
						width: 100%;
						color: #FF9D2A;
						font-size: 32upx;
					}
					.contents-box-right-p1-old{
						height: 24upx;
						line-height: 24upx;
						text-align: right;
						width: 100%;
						color: #BFBFBF;
						font-size: 24upx;
						text-decoration: line-through;
					}
				}
				.contents-box-right-p2{
					width: 126upx;
					height: 100%;
					padding: 0 20upx 0 20upx;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					.contents-box-right-p2-btn{
						background: #2386F4;
						border-radius: 8upx;
						color: #ffffff;
						font-size: 24upx;
						width: 86upx;
						height: 50upx;
						line-height: 50upx;
						text-align: center;
					}
				}
			}
		}
	}
}
</style>
