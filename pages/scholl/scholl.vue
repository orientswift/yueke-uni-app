<template>
	<view class="mechanschool">
		<!-- 机构主页 -->
		<!-- 顶部图片 -->
		<view class="mechanschool-titles">
			<!-- 这里是图片 -->
			<image src="../../static/imgs/school/pngs1.png"></image>
		</view>
		<!-- 头部 部分 -->
		<view class="mechanschool-head">
			<!-- 学校、评分 -->
			<view class="mechanschool-head-school">
				<view class="mechanschool-head-school-left">
					<image src="../../static/imgs/school/hd-1.png"></image>
				</view>
				<view class="mechanschool-head-school-right">
					<view class="head-school-right-t1">海博英语学习</view>
					<view class="head-school-right-t2">
						<view class="head-school-right-t2-x1">
							<text class="iconfont icon-xingxing1 act-start"></text>
							<text class="iconfont icon-xingxing1 act-start"></text>
							<text class="iconfont icon-xingxing1 t-start"></text>
							<text class="iconfont icon-xingxing1 t-start"></text>
							<text class="iconfont icon-xingxing1 t-start"></text>
							<text class="school-fen">4.9分</text>
						</view>
						<view class="head-school-right-t2-x2">
							45人已预约
						</view>
					</view>
				</view>
			</view>
			<!-- 地址 -->
			<view class="mechanschool-head-ads">
				<view>
					<text class="iconfont icon-dingwei1 mechanschool-head-ads-icon1"></text>
					<text class="mechanschool-head-ads-txt">阿什河街8号恒运大厦D座二层</text>
				</view>
				<view>
					<text class="iconfont icon-xiangyou mechanschool-head-ads-icon2"></text>
				</view>
			</view>
			<!-- 电话 -->
			<view class="mechanschool-head-ads">
				<view>
					<text class="iconfont icon-phone-channel mechanschool-head-ads-icon1"></text>
					<text class="mechanschool-head-ads-txt">4000-700-1234</text>
				</view>
				<view>
					<text class="mechanschool-head-ads-txt2">免费拨打</text>
					<text class="iconfont icon-xiangyou mechanschool-head-ads-icon2"></text>
				</view>
			</view>
			
		</view>
		<!-- 横条 -->
		<view class="hrs"></view>
		<!-- 机构课程 -->
		<view class="school-school">
			<!-- 顶部 -->
			<view class="school-school-head">
				<text class="iconfont icon-shuben school-school-head-icon"></text>
				<text>机构课程</text>
			</view>
			<!-- 机构详情 -->
			<navigator url="../schoolCurr/schoolCurr">
				<mechan-details></mechan-details>
			</navigator>
			<navigator url="../schoolCurr/schoolCurr">
				<mechan-details></mechan-details>
			</navigator>
			<navigator url="../schoolCurr/schoolCurr">
				<mechan-details></mechan-details>
			</navigator>
			<!-- 全部课程 -->
			<view class="school-school-foots">
				<text>全部课程(5个)</text>
				<text class="iconfont icon-xiangyou school-school-foots-icon"></text>
			</view>
		</view>
		<!-- 横条 -->
		<view class="hrs"></view>
		<!-- 教师 -->
		<view class="school-tearch">
			<!-- 顶部 -->
			<view class="school-tearch-head">
				<text class="iconfont icon-ren school-tearch-head-icon"></text>
				<text>资深讲师</text>
			</view>
			
			<!-- 教师列表 -->
			<navigator url="../../pages/taerchDetails/taerchDetails">
			<mechan-tearch></mechan-tearch>
			</navigator>
			<navigator url="../../pages/taerchDetails/taerchDetails">
			<mechan-tearch></mechan-tearch>
			</navigator>
			<!-- 全部教师 -->
			<view class="school-tearch-foots">
				<text>全部教师(15位)</text>
				<text class="iconfont icon-xiangyou school-tearch-foots-icon"></text>
			</view>
		</view>
		<!-- 横条 -->
		<view class="hrs"></view>
		<!-- 学生评论 -->
		<view class="scholl-news">
			<!-- 顶部 -->
			<view class="scholl-news-head">
				<text class="iconfont icon-liaotian scholl-news-head-icon"></text>
				<text>学生评论</text>
			</view>
			<view class="scholl-news-headstr">
				<view>
					<text>综合评分</text>
					<text class="scholl-news-headstr-fen">4.8分</text>
				</view>
				<view class="scholl-news-headstr-abc">
					<text>全部496条</text>
					<text class="iconfont icon-xiangyou scholl-news-headstr-icon"></text>
				</view>
			</view>
			<!-- 学生评论 -->
			<mechan-msg></mechan-msg>
			<mechan-msg></mechan-msg>
			<mechan-msg></mechan-msg>
		</view>
		<!-- 横条 -->
		<view class="hrs2"></view>
	</view>
</template>

<script>
	import mechanDetails from '@/components/mechan/mechanDetails.vue' //机构详情
	import mechanTearch from '@/components/mechan/mechanTearch.vue'  //老师详情
	import mechanMsg from '@/components/mechan/mechanMsg.vue'  //学生评论
	export default {
		data() {
			return {
				
			};
		},
		components:{
			mechanDetails,
			mechanTearch,
			mechanMsg
		}
	}
</script>

<style lang="less" scoped="true">
.mechanschool{
	
	.mechanschool-titles{
		width: 100%;
		height: 270upx;
		background: cyan;
		image{
			width: 100%;
			height: 100%;
		}
	}
	
	// 头部
	.mechanschool-head{
		
		//学校
		.mechanschool-head-school{
			width: 750upx;
			height: 110upx;
			padding-left: 24upx;
			box-sizing: border-box;
			display: flex;
			.mechanschool-head-school-left{
				width: 142upx;
				height: 110upx;
				position: relative;
				image{
					position: absolute;
					left: 0;
					bottom: 0;
					width: 142upx;
					height: 142upx;
				}
			}
			.mechanschool-head-school-right{
				width: 584upx;
				height: 110upx;
				padding-top: 10upx;
				box-sizing: border-box;
				font-family: '阿里普惠体';
				.head-school-right-t1{
					width: 100%;
					height: 42upx;
					color: #333333;
					padding-left: 20upx;
					box-sizing: border-box;
					font-size: 30upx;
					line-height: 42upx;
				}
				.head-school-right-t2{
					width: 100%;
					height: 40upx;
					line-height: 40upx;
					padding-left: 20upx;
					padding-right: 24upx;
					box-sizing: border-box;
					font-size: 26upx;
					color: #CCCCCC;
					display: flex;
					justify-content: space-between;
					.head-school-right-t2-x1{
						.school-fen{
							margin-left: 8upx;
						}
						// 选中的星星
						.act-start{
							color: #FF9D2A;
						}
					}
				}
			}
		}
		
		//地址
		.mechanschool-head-ads{
			width: 100%;
			height: 90upx;
			padding-left: 30upx;
			padding-right: 30upx;
			line-height: 90upx;
			box-sizing: border-box;
			border-bottom: 1px solid #EBEBEB;
			color: #3B3B3B;
			font-size: 28upx;
			display: flex;
			justify-content: space-between;
			.mechanschool-head-ads-icon1{
				margin-right: 30upx;
				color: #B3B3B3;
			}
			.mechanschool-head-ads-icon2{
				color: #B3B3B3;
				
			}
			.mechanschool-head-ads-txt2{
				color: #A1A1A1;
				margin-right: 20upx;
			}
		}
	}
	//横条
	.hrs{
		width: 100%;
		height: 20upx;
		background:#F5F5F5;
		
		border-bottom: 1px solid #E4E4E4;
	}
	.hrs2{
		width: 100%;
		height: 40upx;
		background:#F5F5F5;
		
		border-bottom: 1px solid #E4E4E4;
	}
	// 机构
	.school-school{
		width: 100%;
		padding-left: 28upx;
		box-sizing: border-box;
		border-bottom: 1px solid #E4E4E4;
		// 标题
		.school-school-head{
			width: 722upx;
			height: 88upx;
			line-height: 88upx;
			color: #289DFA;
			font-size: 32upx;
			font-weight: 500;
			border-bottom: 1px solid #EBEBEB;
			.school-school-head-icon{
				margin-right: 10upx;
			}
		}
		//全部课程
		.school-school-foots{
			width: 722upx;
			height: 88upx;
			text-align: left;
			font-size: 30upx;
			color: #4D4D4D;
			line-height: 88upx;
			display: flex;
			justify-content: space-between;
			padding-right: 30upx;
			box-sizing: border-box;
			.school-school-foots-icon{
				color: #B3B3B3;
			}
		}
	}
	// 教师
	.school-tearch{
		width: 100%;
		border-bottom: 1px solid #E4E4E4;
		.school-tearch-head{
			width: 722upx;
			height: 88upx;
			line-height: 88upx;
			color: #289DFA;
			font-size: 32upx;
			font-weight: 500;
			padding-left: 28upx;
			box-sizing: border-box;
			.school-tearch-head-icon{
				margin-right: 10upx;
			}
		}
		
		.school-tearch-foots{
			width: 750upx;
			height: 88upx;
			text-align: left;
			font-size: 30upx;
			color: #4D4D4D;
			line-height: 88upx;
			display: flex;
			justify-content: space-between;
			padding-right: 30upx;
			box-sizing: border-box;
			padding-left: 28upx;
			box-sizing: border-box;
			.school-tearch-foots-icon{
				color: #B3B3B3;
			}
		}
	}
	
	// 学生评论
	.scholl-news{
		width: 100%;
		border-bottom: 1px solid #E4E4E4;
		.scholl-news-head{
			width: 722upx;
			height: 88upx;
			line-height: 88upx;
			color: #289DFA;
			font-size: 32upx;
			font-weight: 500;
			padding-left: 28upx;
			box-sizing: border-box;
			.scholl-news-head-icon{
				margin-right: 10upx;
			}
		}
		.scholl-news-headstr{
			height: 64upx;
			width: 722upx;
			line-height: 64upx;
			color: #4D4D4D;
			font-size: 28upx;
			padding-left: 28upx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			.scholl-news-headstr-abc{
				color: #B3B3B3;
			}
			.scholl-news-headstr-fen{
				color: #FF9D2A;
				margin-left: 20upx;
			}
			.scholl-news-headstr-icon{
				margin-left: 14upx;
			}
		}
	}
	
}
</style>