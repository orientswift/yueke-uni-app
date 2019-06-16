<template>
	<view class="introduce">
		<!-- 头部 -->
		<view class="introduce-header">
			<text class="iconfont  icon-like introduce-header-icon"></text>
			<text>学生评论</text>
		</view>
		<!-- 评分 -->
		<view class="school-fen">
			综合评分<text class="school-fen-number">4.8分</text>
		</view>
		<!-- 评论 -->
		<view class="school-contents">
			<view class="school-contents-left">
				<image src="../../static/imgs/t1/xp/xp1.png"></image>
			</view>
			<view class="school-contents-right">
				<view class="school-contents-right-t1">
					<view >陈思思</view>
					<view >钢琴——钢琴中级进阶课程</view>
				</view>
				<view class="school-contents-right-t2">
					课堂生动有趣，激发学习兴趣
				</view>
			</view>
		</view>
		<!-- 评论 -->
		<view class="school-contents">
			<view class="school-contents-left">
				<image src="../../static/imgs/t1/xp/xp1.png"></image>
			</view>
			<view class="school-contents-right">
				<!-- 评论人信息区域 -->
				<view class="school-contents-right-t1">
					<view >陈思思</view>
					<view >钢琴——钢琴中级进阶课程</view>
				</view>
				<!-- 评论文字区域 -->
				<view class="school-contents-right-t2">
					课堂生动有趣，激发学习兴趣
				</view>
				<!-- 评论图片区域 -->
				<view class="school-contents-right-t3">
					<view class="school-contents-right-t3-imgs">
						<!-- 评论图片 -->
					</view>
					<view class="school-contents-right-t3-imgs"></view>
					<view class="school-contents-right-t3-imgs"></view>
				</view>
			</view>
		</view>
		<!-- 评论 -->
		<view class="school-contents">
			<view class="school-contents-left">
				<image src="../../static/imgs/t1/xp/xp1.png"></image>
			</view>
			<view class="school-contents-right">
				<view class="school-contents-right-t1">
					<view >陈思思</view>
					<view >钢琴——钢琴中级进阶课程</view>
				</view>
				<view class="school-contents-right-t2">
					课堂生动有趣，激发学习兴趣,课堂生动有趣，激发学习兴趣,课堂生动有趣，激发学习兴趣,课堂生动有趣，激发学习兴趣课堂生动有趣，激发学习兴趣,课堂生动有趣，激发学习兴趣
				</view>
			</view>
		</view>
		<!-- 更多 -->
		<view class="introduce-foots">
			更多评论 (46条)
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
	.school-fen{
		margin-left: 60upx;
		padding-bottom: 14upx;
		height: 52upx;
		width: 650upx;
		line-height: 38upx;
		font-size: 28upx;
		box-sizing: border-box;
		.school-fen-number{
			color: #FF9D2A;
			margin-left: 30upx;
		}
	}
	.school-contents{
		width: 650upx;
		margin-left: 60upx;
		box-sizing: border-box;
		font-size: 26upx;
		font-weight: 500;
		border-top: 1px solid #F2F2F2;
		display: flex;
		.school-contents-left{
			width: 76upx;
			height: 134upx;
			display: flex;
			align-items: center;
			image{
				width: 72upx;
				height: 72upx;
				border-radius: 50%;
			}	
		}
		.school-contents-right{
			width: 572upx;
			padding-top: 22upx;
			padding-bottom: 22upx;
			box-sizing: border-box;
			.school-contents-right-t1{
				width: 100%;
				height: 44upx;
				line-height: 44upx;
				padding-left: 18upx;
				padding-right: 18upx;
				box-sizing: border-box;
				font-size: 26upx;
				color: #B3B3B3;
				display: flex;
				justify-content: space-between;
			}
			.school-contents-right-t2{
				width: 100%;
				line-height: 44upx;
				padding-left: 18upx;
				box-sizing: border-box;
				font-size: 26upx;
				color: #4D4D4D;
			}
			.school-contents-right-t3{
				width: 100%;
				height: 166upx;
				padding-left: 18upx;
				box-sizing: border-box;
				display: flex;
				overflow: hidden;
				.school-contents-right-t3-imgs{
					width: 166upx;
					height: 166upx;
					margin-right: 12upx;
					background: #B3B3B3;
					image{
						width: 166upx;
						height: 166upx;
					}
				}
			}
			
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

