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
    flag: 0
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
    }
  }
})
