<template>
  <view class="">
    <!-- 跳过 -->
    <view class="jump_over">
      <view class="content" @click="toLogin"> 跳过 </view>
    </view>
    <swiper class="swiper" :current="current" @change="listSwiperChange">
      <swiper-item :item-id="item.id" v-for="item in list" :key="item.id">
        <image class="img" :src="item.img" mode="aspectFill"></image>
        <image
          class="til"
          :class="item.id === 2 || item.id === 3 ? 'til_long' : ''"
          :src="item.til"
          mode="aspectFill"
        ></image>
        <view class="content">
          {{ item.content }}
        </view>
      </swiper-item>
    </swiper>
    <!--  -->
    <view class="btm">
      <view class="indicator">
        <view
          class="indicator_dot"
          v-for="(item, index) in list"
          :key="item.id"
          :class="[index === current && 'indicator_dot_active']"
        >
        </view>
      </view>
      <view class="gotoLogin" @click="gotoNext" v-if="current != 4">
        <image :src="gotoIcon"></image>
      </view>
    </view>
    <!-- 立即体验 -->
    <view class="try_now" v-if="current == 4" @click="toLogin"> 立即体验 </view>
  </view>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { setIsFirst, KEY } from "./is-first.js";
import { model } from "./model.js";
const { list,guideImage } = model;
@Component({
  data() {
    return {
      current: 0,
      list,
      curSwiperHeight: "100",
    };
  },
})
export default class Home230 extends Vue {
  gotoIcon = guideImage.gotoIcon;
  onShow() {
    plus.navigator.setStatusBarBackground("#FFFFFF");
  }
  listSwiperChange(event) {
    this.current = Number(event.detail.current);
  }
  gotoNext() {
    this.current += 1;
  }
  toLogin() {
    uni.navigateTo({
      url: "/pages/index/index",
    });
    setIsFirst(KEY, 'false');
  }
}
</script>

<style lang="scss" scoped>
.jump_over {
  height: px2Rpx(144);
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .content {
    color: #fe8835;
    font-size: px2Rpx(26);
    border: px2Rpx(1) #999999 solid;
    padding: px2Rpx(6) px2Rpx(18);
    display: inline-block;
    border-radius: px2Rpx(16);
    margin-right: px2Rpx(50);
  }
}

.btm {
  width: px2Rpx(750);
  height: px2Rpx(140);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: px2Rpx(570);
  margin: 0 auto;

  .indicator {
    display: flex;

    .indicator_dot {
      width: px2Rpx(14);
      height: px2Rpx(14);
      background-color: rgb(255, 207, 174);
      border-radius: px2Rpx(14);
      margin: 0 px2Rpx(7);
    }

    .indicator_dot_active {
      background-color: #fe8835;
      width: px2Rpx(25);
    }
  }

  .gotoLogin {
    width: px2Rpx(98);
    height: px2Rpx(98);
    border-radius: px2Rpx(98);
    background-color: #fe8835;
    display: flex;
    justify-content: center;
    align-items: center;

    image {
      width: px2Rpx(62);
      height: px2Rpx(52);
    }
  }
}

.try_now {
  height: px2Rpx(145);
  width: px2Rpx(750);
  background-color: #fe8835;
  position: fixed;
  bottom: 0;
  text-align: center;
  line-height: px2Rpx(145);
  color: #ffffff;
  font-size: px2Rpx(40);
  background: linear-gradient(270deg, #ffba4e 0%, #fb771a 100%);
}

.swiper {
  height: calc(100vh - 86px - 130px);
  text-align: center;

  .img {
    width: px2Rpx(640);
    height: px2Rpx(570);
    margin-bottom: px2Rpx(70);
  }

  .til {
    width: px2Rpx(186);
    height: px2Rpx(50);
    margin-bottom: px2Rpx(40);
  }

  .til_long {
    width: px2Rpx(250);
  }

  .content {
    margin: 0 auto;
    color: #999999;
    font-size: px2Rpx(32);
    width: px2Rpx(480);
    line-height: px2Rpx(48);
  }
}
</style>
