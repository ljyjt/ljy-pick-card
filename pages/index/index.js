// index.js
import {bannerList,indexCardList} from '../../data/data';
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    circular: true,
    // 轮播图
    bannerList,
    // 首页卡集
    indexCardList
  }
});
