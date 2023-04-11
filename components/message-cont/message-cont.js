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
    steps: [
      {
        text: '已签收',
        desc: '描述信息',
      },
      {
        text: '待取件',
        desc: '描述信息',
      },
      {
        text: '运输中',
        desc: '描述信息',
      },
      {
        text: '待揽收',
        desc: '描述信息',
      },
    ],
    //箭头朝下的class: down下 ''上
    isDown: '',
    // 详情页是否展开:false不展开 true展开
    detailDown: false,
    currentIndex: []
  },
  methods: {
    dropDown(e) {
      // if(this.data.drop === 0) {
      //   this.setData({drop: 1,isDown: 'down'})
      // } else {
      //   this.setData({drop: 0,isDown: ''})
      // }

      // let index = e.currentTarget.dataset.index;
      // this.setData({currentIndex: index});
      // console.log(this.properties.currentIndex);

      // let item = e.currentTarget.dataset.list;
      // console.log(index,item);
      
      // if(!item.down) {
      //   item.down = true;
      // } 
    }
  }
})
