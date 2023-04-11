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
    currentIndex: [],
    x: 22
  },
  methods: {
    dropDown(e) {
      // if(this.data.drop === 0) {
      //   this.setData({drop: 1,isDown: 'down'})
      // } else {
      //   this.setData({drop: 0,isDown: ''})
      // }

      let index = e.currentTarget.dataset.index;
      if(!this.data.currentIndex.includes(index)) {
        this.data.currentIndex.push(index);
      } else {
        this.setData({currentIndex: this.data.currentIndex.filter(item => item !== index)});
      }
      console.log(this.data.currentIndex);

      // let item = e.currentTarget.dataset.list;
      // console.log(index,item);
      
      // if(!item.down) {
      //   item.down = true;
      // } 
    }
  }
})
