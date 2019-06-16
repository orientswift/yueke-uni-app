<template>
	<view>
		<!-- 定位、搜索、推荐标签 -->
		<view class="index-titles">
			<!-- 定位 -->
			<view class="index-gps">
				<text class="iconfont icon-dingwei1 gpsicon"></text>
				<text class="index-gps-txt">道理区远大购物中心</text>
				<text class="iconfont icon-iconfront- downicon"></text>
				<text class="iconfont icon-xiaoxi newsicon"></text>
			</view>
			<!-- 搜索 -->
			<view class="index-search">
				<input class="index-search-input" type="text" />
				<view class="index-search-placeholder"><text class="iconfont icon-search txticons"></text>文化课、一对一</view>
			</view>
			<!-- 推荐标签 -->
			<view class="index-lable">
				<text>文化课</text>
				<text>舞蹈</text>
				<text>乐器老师</text>
				<text>1对1教学</text>
				<text>体育</text>
				<text>兴趣培养</text>
				<text>家教老师</text>
			</view>
		</view>
		<!-- 幻灯片 -->
		<view class="index-ppt">
			<swiper class="swiper" 
			:indicator-dots="indicatorDots" 
			:autoplay="autoplay" 
			:interval="interval" 
			:duration="duration"
			:indicator-color="indicatorColor"
			:indicator-active-color="indicatorActiveColor">
                    <swiper-item>
                        <view class="swiper-item">
							<image src="../../static/imgs/ppt/p1.png"></image>
						</view>
                    </swiper-item>
                    <swiper-item>
                        <view class="swiper-item">
							<image src="../../static/imgs/ppt/p1.png"></image>
						</view>
                    </swiper-item>
                    <swiper-item>
                        <view class="swiper-item">
							<image src="../../static/imgs/ppt/p1.png"></image>
						</view>
                    </swiper-item>
            </swiper>
		</view>
		<!-- 图标导航 -->
		<view class="index-nav">
			<view class="index-nav-box">
				<!-- 第一排 -->
				<view class="index-nav-ul now1">
					<view class="index-nav-li">
						<view class="index-nav-li-imgsbg li1">
							<image src="../../static/imgs/nav/1.png"></image>
						</view>
						<view class="index-nav-li-txt">
							文化课
						</view>
					</view>
					<view class="index-nav-li">
						<view class="index-nav-li-imgsbg li2">
							<image src="../../static/imgs/nav/2.png"></image>
						</view>
						<view class="index-nav-li-txt">
							舞蹈
						</view>
					</view>
					<view class="index-nav-li">
						<view class="index-nav-li-imgsbg li3">
							<image src="../../static/imgs/nav/3.png"></image>
						</view>
						<view class="index-nav-li-txt">
							美术
						</view>
					</view>
					<view class="index-nav-li">
						<view class="index-nav-li-imgsbg li4">
							<image src="../../static/imgs/nav/4.png"></image>
						</view>
						<view class="index-nav-li-txt">
							乐器
						</view>
					</view>
				</view>
				<!-- 第二排 -->
				<view class="index-nav-ul">
					<view class="index-nav-li">
						<view class="index-nav-li-imgsbg li5">
							<image src="../../static/imgs/nav/5.png"></image>
						</view>
						<view class="index-nav-li-txt">
							兴趣
						</view>
					</view>
					<view class="index-nav-li">
						<view class="index-nav-li-imgsbg li6">
							<image src="../../static/imgs/nav/6.png"></image>
						</view>
						<view class="index-nav-li-txt">
							体育
						</view>
					</view>
					<view class="index-nav-li">
						<view class="index-nav-li-imgsbg li7">
							<image src="../../static/imgs/nav/7.png"></image>
						</view>
						<view class="index-nav-li-txt">
							外语
						</view>
					</view>
					<view class="index-nav-li">
						<view class="index-nav-li-imgsbg li8">
							<image src="../../static/imgs/nav/8.png"></image>
						</view>
						<view class="index-nav-li-txt">
							更多
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 精选机构 标题-->
		<view class="index-mechanism-title">
			<text class="iconfont icon-yuandianxiao"></text>
			<text class="iconfont icon-yuandianzhong"></text>
			<text class="title-icon-text">精选机构</text>
			<text class="iconfont icon-yuandianzhong"></text>
			<text class="iconfont icon-yuandianxiao"></text>
			<text class="iconfont icon-xiangyou title-icon-right"></text>
		</view>
		<!-- 精选机构 导航-->
		<!-- <view class="index-mechanism-nav">
			<scroll-view 
			class="index-mechanism-nav-ul"
			:scroll-x='scrollX'
			>
				<text class="index-mechanism-nav-li">文化课</text>
				<text class="index-mechanism-nav-li">舞蹈</text>
				<text class="index-mechanism-nav-li">美术</text>
				<text class="index-mechanism-nav-li">乐器</text>
				<text class="index-mechanism-nav-li">兴趣</text>
				<text class="index-mechanism-nav-li">体育</text>
				<text class="index-mechanism-nav-li">外语</text>
				<text class="index-mechanism-nav-li">数学</text>
				<text class="index-mechanism-nav-li">钢琴</text>
				<text class="index-mechanism-nav-li">跆拳道</text>
			</scroll-view>
		</view> -->
		<swipe-x></swipe-x>
		<!-- 精选机构 内容-->
		<mechanism-box></mechanism-box>
		<!-- 分割线 -->
		<view class="index-hr"></view>
		
		<!-- 名师推荐 -->
		<!-- 名师推荐 顶部 -->
		<view class="tearch-head">
			名师推荐
		</view>
		<!-- 名师推荐 选项卡 -->
		<swipe-x></swipe-x>
		<!-- 名师推荐 老师 -->
		<tearch-box></tearch-box>
		<!-- 分割线 -->
		<view class="index-hr"></view>
	</view>
</template>

<script>
	import mechanismBox from '@/components/mechanismBox.vue'
	import swipeX from '@/components/swipeX.vue'
	import tearchBox from '@/components/tearchBox.vue'
	export default {
		data() {
			return {
				indicatorDots: true, //幻灯片 是否显示面板指示点
				autoplay: true,  //幻灯片 是否自动播放
				interval: 2000, //幻灯片 自动切换时间间隔
				duration: 500, //幻灯片 滑动动画时长
				indicatorColor:'rgba(255,255,255,0.6)',  //幻灯片指示灯 未选中状态颜色
				indicatorActiveColor:'#ffffff',  //幻灯片指示灯 选中状态颜色
				scrollX: true,  //精选机构导航 横向滑动
			}
		},
		onLoad() {
			uni.request({
				url: 'https://www.easy-mock.com/mock/5cd162e602a8f12132acceaf/yuekeapp/class', //接口地址。
				success: (res) => {
					console.log(res.data.data.list)
					this.$store.commit('addList',res.data.data.list)
				}
			});
		},
		methods: {

		},
		components: {
			mechanismBox,  //精选机构，店铺
			swipeX ,//横向滑块
			tearchBox  //教师 盒子
		},
	}
</script>

<style lang="less" scoped="true">
	/* 定位、搜索、推荐标签 */
	.index-titles{
		background: #258CFF;
		width: 750upx;
		height: 195upx;
	}
	/* 定位 */
	.index-gps{
		width: 750upx;
		height: 65upx;
		color: #ffffff;
		line-height: 65upx;
		padding: 0 19upx 0 21upx;
		font-weight: 500;
		position: relative;
		box-sizing: border-box;
		.gpsicon{
			width: 35upx;
			font-size: 35upx;
			margin-right: 13upx;
			display: inline-block;
		}
		.index-gps-txt{
			font-size: 32upx;
			font-family: '宋体';
			margin-right: 9upx;
			display: inline-block;
		}
		.downicon{
			width: 42upx;
			height: 65upx;
			font-size: 35upx;
			display: inline-block;
		}
		.newsicon{
			width: 42upx;
			height: 65upx;
			font-size: 35upx;
			position: absolute;
			right: 26upx;
			top:0upx;
			display: inline-block;
		}
	}
	/* 搜索 */
	.index-search{
		width: 750upx;
		height: 68upx;
		padding: 0 30upx;
		box-sizing: border-box;
		position: relative;
		.index-search-input{
			background: #ffffff;
			width: 100%;
			height: 100%;
			font-size: 26upx;
			border-radius: 34upx;
			padding: 0 20upx;
			box-sizing: border-box;
		}
		.index-search-placeholder{
			font-size: 24upx;
			font-family: '宋体';
			width:100%;
			height: 68upx;
			color: #8A8A8A;
			line-height: 68upx;
			text-align: center;
			position: absolute;
			left: 0;
			top: 0;
			.txticons{
				margin-right: 15upx;
			}
		}
	}
	/* 推荐标签 */
	.index-lable{
		width: 750upx;
		height: 62upx;
		font-size: 20upx;
		font-family: '宋体';
		line-height: 62upx;
		text-align: center;
		text{
			margin: 0 12upx;
			color: #ffffff;
			font-weight: 400;
		}
	}
	
	/*幻灯片*/
	 .index-ppt{
		 width: 750upx;
		 height: 285upx;
		 .swiper{
			 height: 285upx;
			.swiper-item{
			 	width: 750upx;
			 	height: 285upx;
			 		image{
			 			width: 100%;
			 			height: 100%;
			 	}
			 }
		 }
		 
	 }
	
	/*图标导航*/ 
	.index-nav{
		width: 750upx;
		height: 386upx;
		padding: 0 20upx;
		box-sizing: border-box;
		position: relative;
		.index-nav-box{
			width: 710upx;
			height: 396upx;
			border-radius: 20upx;
			box-shadow: 0px 0px 2px #F9F9F9;//#F9F9F9
			padding: 38upx 36upx;
			box-sizing: border-box;
			background: #ffffff;
			position: absolute;
			left: 20upx;
			top: -10upx;
			.index-nav-ul{
				width: 100%;
				height: 146upx;
				display: flex;
				justify-content: space-between;
				.index-nav-li{
					width: 100upx;
					height: 146upx;
					.index-nav-li-imgsbg{
						width: 100upx;
						height: 100upx;
						border-radius: 50%;
						image{
							width: 100upx;
							height: 100upx;
						}
					}
					.index-nav-li-txt{
						width: 100upx;
						height: 46upx;
						font-size: 28upx;
						display:table-cell;
						vertical-align:bottom;
						text-align: center;
					}
				}
			}
			/*特殊样式*/
			.now1{
				margin-bottom: 30upx;
			}
			.li1{
				background: #fa3e3e;
			}
			.li2{
				background: #923efa;
			}
			.li3{
				background: #fa803e;
			}
			.li4{
				background: #31EE8A;
			}
			.li5{
				background: #FA3E9F;
			}
			.li6{
				background: #FAD43E;
			}
			.li7{
				background: #1394E6;
			}
			.li8{
				background: #91D212;
			}
		}
	}
	/*精选机构 标题*/ 
	.index-mechanism-title{
		height: 86upx;
		width: 750upx;
		line-height: 86upx;
		color: #258CFF;
		text-align: center;
		position: relative;
		font-size: 30upx;
		.title-icon-right{
			text-align: right;
			color: #B3B3B3;
			height: 86upx;
			line-height: 86upx;
			font-size: 32upx;
			position: absolute;
			right: 20upx;
			top: 0upx;
		}
		.title-icon-text{
			text-align: center;
			margin:0 10upx;
		}
	}
	/*精选机构 导航*/ 
	.index-mechanism-nav{
		width: 750upx;
		height: 42upx;
		padding: 0 38upx;
		box-sizing: border-box;
		overflow: hidden;
		margin-bottom: 26upx;
		.index-mechanism-nav-ul{
			width: 1000upx;
			height: 40upx;
			display: flex;
			font-size: 26upx;
			.index-mechanism-nav-li{
				font-size: 26upx;
				font-family: '宋体';
				color: #B3B3B3;
				height: 40upx;
				line-height: 34upx;
				margin-right: 50upx;
				position: relative;
			}
			.index-mechanism-nav-li:after{
				content: '';
				width:100%;
				height: 2;
				border-bottom: 2Upx solid #258CFF;
				position: absolute;
				left: 0;
				top: 38upx;
				
			}
		}
	}
	/*分割线*/
	.index-hr{
		width: 750upx;
		height: 20upx;
		border-top: 1px solid #E1E1E1;
		border-bottom: 1px solid #E1E1E1;
		background: #F5F5F5;
	}
	/*名师推荐*/ 
	/*名师推荐 顶部*/
	 .tearch-head{
		 width: 750upx;
		 height: 66upx;
		 font-size: 28upx;
		 line-height: 66upx;
		 padding-left: 30upx;
		 color: #333333;
		 box-sizing: border-box;
	}
</style>
