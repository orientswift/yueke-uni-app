<template>
	<view class="curr">
		<!-- 课程详情页 -->
		<!-- 图片 -->
		<view class="curr-imgs">
			<image src="../../static/imgs/school/ppp1.png"></image>
		</view>
		<!-- 头部 -->
		<view class="curr-head">
			<view class="curr-head-names">暑假雅思6.0-7.0分VIP精品十人班</view>
			<view class="curr-head-pric">
				<text class="curr-head-pric-news">￥ 988</text>
				<text class="curr-head-pric-olds">￥ 1288</text>
			</view>
		</view>
		<!-- 预约礼 -->
		<view class="curr-tits">
			<view class="curr-tits-left">
				<text>预约礼</text>
				<text>免费试听2次</text>
			</view>
			<view class="curr-tits-right">
				<text>领取</text>
				<text class="iconfont icon-xiangyou"></text>
			</view>
		</view>
		<!-- 横线 -->
		<view class="hrs"></view>
		<!-- 客课程特色 -->
		<view class="curr-char">
			<!-- 标题 -->
			<view class="curr-char-head">
				<text class="curr-char-head-txt">课程特色</text>
			</view>
			<!-- 内容 -->
			<view class="curr-char-content">
				<text class="iconfont icon-yuandianxiao"></text>
				<text>全面解析雅思考试考点提分点</text>
			</view>
			<!-- 内容 -->
			<view class="curr-char-content">
				<text class="iconfont icon-yuandianxiao"></text>
				<text>全面解析雅思考试考点提分点</text>
			</view>
			<!-- 内容 -->
			<view class="curr-char-content">
				<text class="iconfont icon-yuandianxiao"></text>
				<text>全面解析雅思考试考点提分点</text>
			</view>
		</view>
		<!-- 横线 -->
		<view class="hrs"></view>
		<!-- 课程介绍 -->
		<view class="curr-serry">
			<!-- 标题 -->
			<view class="curr-serry-head">课程介绍</view>
			<!-- 介绍 -->
			<view class="curr-serry-tent">
				<!-- 副标题 -->
				<view class="curr-serry-tent-head">
					<text class="iconfont icon-yuandianxiao"></text>
					<text class="curr-serry-tent-head-txt">适应对象</text>
				</view>
				<!-- 内容 -->
				<view class="curr-serry-tent-cont">
					<view class="curr-serry-tent-cont-box">
						<text>高考英语125分以上</text>
					</view>
					<view class="curr-serry-tent-cont-box">
						<text>四级成绩较好</text>
					</view>
					<view  class="curr-serry-tent-cont-box">
						<text>高考英语125分以上</text>
					</view>
				</view>
				
				<!-- 副标题 -->
				<view class="curr-serry-tent-head">
					<text class="iconfont icon-yuandianxiao"></text>
					<text class="curr-serry-tent-head-txt">学习目标</text>
				</view>
				<!-- 内容 -->
				<view class="curr-serry-tent-cont">
					<view class="curr-serry-tent-cont-box">
						<text>听说读写全突破，直冲雅思7分</text>
					</view>
					
				</view>
				
				<!-- 副标题 -->
				<view class="curr-serry-tent-head">
					<text class="iconfont icon-yuandianxiao"></text>
					<text class="curr-serry-tent-head-txt">课程内容</text>
				</view>
				<!-- 内容 -->
				<view class="curr-serry-tent-cont">
					<view class="curr-serry-tent-cont-box">
						<text>课程基于对雅思考试的分析，对学员备考的整个过程进行规划，分模块完成知识点的讲解，使学员完成从6分到获得7分目标分数的全过程学习。</text>
					</view>
					
				</view>
			</view>
		</view>
		
		<!-- 横线 -->
		<view class="hrs-b"></view>
		<!-- 预约 -->
		<!-- <view class="curr-foots">
			<view class="curr-foots-btn">预约试听</view>
			<mechan-mail></mechan-mail>
		</view> -->
		
		<!-- 立即购买 -->
		<view class="curr-foots">
			<view class="curr-foots-btn2 ">立即购买</view>
			<mechan-mail></mechan-mail>
		</view>
	</view>
</template>

<script>
	import mechanMail from '@/components/mechan/mechanMail.vue' //获取联系方式
	export default {
		data() {
			return {
				
			};
		},
		components:{
			mechanMail
		}
	}
</script>

<style lang="less" scoped="true">
.curr{
	width: 750upx;
	position: relative;
	padding-bottom: 100upx;
	.curr-imgs{
		width: 750upx;
		height: 360upx;
		background: yellow;
		image{
			width: 750upx;
			height: 360upx;
		}
	}
	.curr-head{
		width: 750upx;
		height: 116upx;
		padding: 18upx 0  0 30upx;
		box-sizing: border-box;
		overflow: hidden;
		.curr-head-names{
			width: 720upx;
			height: 50upx;
			line-height: 50upx;
			color: #4D4D4D;
			font-size: 30upx;
		}
		.curr-head-pric{
			width: 730upx;
			height: 46upx;
			line-height: 46upx;
			font-size: 28upx;
			.curr-head-pric-news{
				color: #FE6044;
			}
			.curr-head-pric-olds{
				color: #B3B3B3;
				text-decoration: line-through;
				font-size: 26upx;
				margin-left: 12upx;
			}
		}
	}
	.curr-tits{
		width: 720upx;
		height: 106upx;
		margin-left: 30upx;
		padding-right: 30upx;
		line-height: 106upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		border-top: 1px solid #E1E1E1;
		.curr-tits-left text:nth-child(1){
			border: 1px solid #FFA800;
			color: #FFA800;
			padding: 7upx 6upx;
			font-size: 24upx;
			box-sizing: border-box;
		}
		.curr-tits-left text:nth-child(2){
			color: #4D4D4D;
			font-size: 26upx;
			margin-left: 20upx;
		}
		.curr-tits-right text:nth-child(1){
			color: #2287D7;
			font-size: 26upx;
		}
		.curr-tits-right text:nth-child(2){
			color: #B3B3B3;
			font-size: 26upx;
			margin-left: 12upx;
		}
	}
	// 横线
	.hrs{
		width: 750upx;
		height: 20upx;
		background: #F5F5F5;
		border-top: 1px solid #E1E1E1;
		border-bottom: 1px solid #E1E1E1;
	}
	.hrs-b{
		width: 750upx;
		height: 40upx;
		background: #F5F5F5;
		border-top: 1px solid #E1E1E1;
		border-bottom: 1px solid #E1E1E1;
	}
	.curr-char{
		width: 750upx;
		padding-left: 30upx;
		padding-bottom: 14upx;
		box-sizing: border-box;
		.curr-char-head{
			width: 720upx;
			height: 92upx;
			.curr-char-head-txt{
				padding: 10upx;
				border: 1px solid #2E9FFA;
				color: #2E9FFA;
				border-radius: 10upx;
				line-height: 92upx;
				font-size: 24upx;
				box-sizing: border-box;
			}
		}
		.curr-char-content{
			width: 720upx;
			height: 40upx;
			
			color: #5D5D5D;
			line-height: 40upx;
			font-size: 26upx;
			margin-bottom: 20upx;
			text:nth-child(2){
				border-bottom: 2px solid #93CEFC;
			}
		}
	}
	.curr-serry{
		padding-left: 30upx;
		box-sizing: border-box;
		width: 750upx;
		.curr-serry-head{
			width: 720upx;
			height: 88upx;
			line-height: 88upx;
			color: #68B7FB;
			font-size: 30upx;
		}
		.curr-serry-tent{
			border-top: 1px solid #EBEBEB;
			width: 720upx;
			padding-top: 14upx;
			box-sizing: border-box;
			.curr-serry-tent-head{
				width: 100%;
				height: 56upx;
				line-height: 56upx;
				font-size: 26upx;
				text:nth-child(1){
					color: #289DFA;
					margin-right: 12upx;
				}
				.curr-serry-tent-head-txt{
					color: #333333;
					
				}
			}
			.curr-serry-tent-cont{
				width: 720upx;
				padding-left: 40upx;
				padding-bottom: 10upx;
				box-sizing: border-box;
				.curr-serry-tent-cont-box{
					width: 680upx;
					overflow: hidden;
					padding-right: 30upx;
					box-sizing: border-box;
					margin-bottom: 20upx;
					text{
						overflow: hidden;
						line-height: 40upx;
						color: #797979;
						font-size: 26upx;
						border-bottom: 1px solid #93CEFC;
					}
				}
				
			}
		}
	}
	
	// 预约按钮
	.curr-foots{
		width: 750upx;
		height: 100upx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 5;
		.curr-foots-btn{
			width: 710upx;
			height: 80upx;
			background: #3393FF;
			color: #ffffff;
			font-size: 32upx;
			line-height: 80upx;
			text-align: center;
			font-weight: 400;
			border-radius: 10upx;
		}
		.curr-foots-btn2{
			width: 710upx;
			height: 80upx;
			background: #FF0036;
			color: #ffffff;
			font-size: 32upx;
			line-height: 80upx;
			text-align: center;
			font-weight: 400;
			border-radius: 10upx;
		}
	}
}
</style>
