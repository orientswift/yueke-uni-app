<template>
	<view class="mechanMsg">
		<!-- 学生评论 -->
		<view class="mechanMsg-contents">
			<!-- 左侧  图片-->
			<view class="mechanMsg-contents-imags">
				<image src="../../static/imgs/school/ttts1.png"></image>
			</view>
			<!-- 右侧 -->
			<view class="mechanMsg-contents-right">
				<!-- 姓名 -->
				<view class="mechanMsg-contents-right-ha">
					<text class="mechanMsg-contents-right-ha-la">陈思成</text>
					<text class="iconfont icon-xingxing1 mechanMsg-contents-right-ha-lc"></text>
					<text class="iconfont icon-xingxing1 mechanMsg-contents-right-ha-lc"></text>
					<text class="iconfont icon-xingxing1 mechanMsg-contents-right-ha-lc"></text>
					<text class="iconfont icon-xingxing1 mechanMsg-contents-right-ha-lb"></text>
					<text class="iconfont icon-xingxing1 mechanMsg-contents-right-ha-lb"></text>
				</view>
				<!-- 课程 -->
				<view class="mechanMsg-contents-right-hb">
					钢琴-钢琴中级进阶课
				</view>
				<!-- 评论 -->
				<view class="mechanMsg-contents-right-hc">
					老师很亲切，教课方式通俗易懂，非常的专业，老师加油
				</view>
				<!-- 照片 -->
				<view class="mechanMsg-contents-right-hd">
					<view class="mechanMsg-contents-right-hd-mings">
						<!-- 这里是图片 -->
					</view>
					<view class="mechanMsg-contents-right-hd-mings">
						<!-- 这里是图片 -->
					</view>
					<view class="mechanMsg-contents-right-hd-mings">
						<!-- 这里是图片 -->
					</view>
					<view class="mechanMsg-contents-right-hd-mings">
						<!-- 这里是图片 -->
					</view>
					<view class="mechanMsg-contents-right-hd-mings">
						<!-- 这里是图片 -->
					</view>
					<view class="mechanMsg-contents-right-hd-mings">
						<!-- 这里是图片 -->
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
.mechanMsg{
	width: 750upx;
	.mechanMsg-contents{
		width: 670upx;
		margin-left: 80upx;
		border-top: 1px solid #E4E4E4;
		display: flex;
		.mechanMsg-contents-imags{
			width: 81upx;
			height: auto;
			padding-top: 24upx;
			image{
				width: 81upx;
				height: 81upx;
				border-radius: 50%;
			
			}
		}
		.mechanMsg-contents-right{
			width: 542upx;
			padding-top: 20upx;
			box-sizing: border-box;
			
			.mechanMsg-contents-right-ha{
				height: 42upx;
				font-size: 30upx;
				line-height: 42upx;
				color: #696969;
				.mechanMsg-contents-right-ha-la{
					margin: 0 20upx;
				}
				.mechanMsg-contents-right-ha-lc{
					color: #FF9D2A;
				}
				.mechanMsg-contents-right-ha-lb{
					color: #CCCCCC;
				}
			}
			.mechanMsg-contents-right-hb{
				height: 40upx;
				line-height: 40upx;
				color: #B7B7B7;
				font-size: 28upx;
				padding-left: 20upx;
				box-sizing: border-box;
			}
			.mechanMsg-contents-right-hc{
				line-height: 40upx;
				font-size: 28upx;
				color: #3E3E3E;
				padding-left: 20upx;
				box-sizing: border-box;
			}
			.mechanMsg-contents-right-hd{
				padding-left: 20upx;
				box-sizing: border-box;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				
				.mechanMsg-contents-right-hd-mings{
					width: 164upx;
					height: 164upx;
					background: tan;
					margin-bottom: 18upx;
				}
			}
		}
	}
}
</style>
