// components/message-cont/message-cont.js
import {logisticsList} from '../../data/data';
Component({
  options: {
    styleIsolation: 'shared'
  },
  properties: {
  },
  data: {
    logisticsList,
    active: 0,
    steps: [
      {
        text: '待取件',
        desc: '描述信息'
      },
      {
        text: '运输中',
        desc: '描述信息'
      },
      {
        text: '待揽收',
        desc: '描述信息'
      },
    ],
    indexList: []
  },
  methods: {
    //下拉物流详情页
    dropDown(e) {
      let { indexList } = this.data;
      let index = e.currentTarget.dataset.index;
      if(!indexList.includes(index)) {
        indexList.push(index);
      } else {
        indexList = indexList.filter(item => item !== index);
      }
      this.setData({ indexList });
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
    
  }
})
