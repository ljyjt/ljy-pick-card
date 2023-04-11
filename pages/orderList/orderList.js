// pages/orderList/orderList.js
import {
  deliveryList
} from '../../data/data';
Page({
  data: {
    deliveryList,
    active: 0
  },
  changeActive(e) {
    // this.triggerEvent('getActive',active)
    // this.setData({active: this.active})
    this.setData({active: e.detail})
  }
})