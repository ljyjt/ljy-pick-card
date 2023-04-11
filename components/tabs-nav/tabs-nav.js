// components/tabs-nav/tabs-nav.js
import {deliveryList} from '../../data/data';
Component({
  options: {
    styleIsolation: 'shared'
  },
  data: {
    deliveryList,
    active: 0
  },
  methods: {
    onClick(event) {
      // if(event.detail.index === 0) {
      //   this.setData({undelivery: this.data.deliveryList.filter(item => item.statusStr === '待发货')});
      // } else {
      //   this.setData({deliveried: this.data.deliveryList.filter(item => item.statusStr === '已发货')});
      // }
      this.setData({active: event.detail.index})
      console.log(this.data.active);
    }
  }
})
