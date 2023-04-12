// components/message-cont/message-cont.js
Component({
  options: {
    styleIsolation: 'shared'
  },
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },
  data: {
    active: 0,
    flag: 0,
    traces: []
  },
  methods: {
    //下拉物流详情页
    detialDropDown() {
      let { flag } = this.data;
      if(flag === 0) {
        this.setData({flag: 1});
      } else {
        this.setData({flag: 0})
      }
    },
    //copy物流编号  
    copyDelivery(e) {
      // console.log(e.currentTarget.dataset.text);
      wx.setClipboardData({
        data: e.currentTarget.dataset.text
      })
    }
  },
  lifetimes: {
    attached() {
      // console.log("2222", this.data.item);
      let {item} = this.data;
      let arr = item.traces;
      arr.forEach((item,index) => {
        switch(index) {
          case 0:
            item.status = '已揽收';
            break;
          case 1:
              item.status = '运输中';
              break;
          case 2:
            item.status = '待收货';
            break;
          case 3:
            item.status = '已收获';
            break;
        }
      })
      this.setData({
        traces: arr.reverse(),
        item
      });
    }
  }
})
