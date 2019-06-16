<template>
	<view class="mechantable">
		<!-- 机构 选项卡 -->
		<!-- 选项 -->
		<view class="mechantable-head">
			<view class="mechantable-head-li">分类筛选<text class="iconfont icon-xiangxia"></text></view>
			<text class="mechantable-head-txt">|</text>
			<view class="mechantable-head-li">智能排序<text class="iconfont icon-xiangxia"></text></view>
			<text class="mechantable-head-txt">|</text>
			<view class="mechantable-head-li">距离筛选<text class="iconfont icon-xiangxia"></text></view>
		</view>
		<!-- 分类选项 -->
		<!-- <mechan-class></mechan-class> -->
		<!-- 距离筛选 -->
		<!-- <mechan-distance></mechan-distance> -->
		<!-- 智能排序 -->
		<!-- <mechan-al></mechan-al> -->
		<!-- 筛选结果 -->
		<view class="mechantable-content">
			<navigator url="../../pages/scholl/scholl">
				<mechan-list></mechan-list>
			</navigator>
			<navigator url="../../pages/scholl/scholl">
				<mechan-list></mechan-list>
			</navigator>
			<navigator url="../../pages/scholl/scholl">
				<mechan-list></mechan-list>
			</navigator>
			<navigator url="../../pages/scholl/scholl">
				<mechan-list></mechan-list>
			</navigator>
			<navigator url="../../pages/scholl/scholl">
				<mechan-list></mechan-list>
			</navigator>
			<!-- <mechan-list></mechan-list>
			<mechan-list></mechan-list>
			<mechan-list></mechan-list>
			<mechan-list></mechan-list>
			<mechan-list></mechan-list>
			<mechan-list></mechan-list> -->
			<!-- 触底了 -->
			<view class="mechantable-content-footed">没有啦~</view>
		</view>
	</view>
</template>

<script>
	import mechanClass from '@/components/mechan/mechanClass.vue'  //分类筛选
	import mechanDistance from '@/components/mechan/mechanDistance.vue' //距离筛选
	import mechanAl from '@/components/mechan/mechanAl.vue'  //智能排序
	
	import mechanList from '@/components/mechan/mechanList.vue' //筛选结果
	export default {
		data() {
			return {
				
			};
		},
		components: {
			mechanClass,
			mechanDistance,
			mechanAl,
			mechanList
		},
	}
</script>

<style lang="less"  scoped="true">
.mechantable{
	width: 750upx;
	height: 78upx;
	position: relative;	
}
.mechantable-head{
	width: 100%;
	height: 78upx;
	display: flex;
	.mechantable-head-li{
		width: 249upx;
		height: 78upx;
		color: #666666;
		font-size: 24upx;
		text-align: center;
		line-height: 78upx;
		text{
			margin-left: 10upx;
		}
	}
	.mechantable-head-txt{
		font-size: 40upx;
		line-height: 78upx;
		color: #EEEEEE;
	}
}
.mechantable-content{
	width: 100%;
	padding-bottom: 100upx;
	box-sizing: border-box;
	.mechantable-content-footed{
		width: 100%;
		text-align: center;
		font-size: 20upx;
		color: #D7D5D5;
		height: 30upx;
	}
}
</style>
