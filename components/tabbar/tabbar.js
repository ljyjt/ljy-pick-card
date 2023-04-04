// components/tabbar/tabbar.js
Component({
      options: {
        styleIsolation: 'shared'
      },
      /**
       * 组件的属性列表
       */
      properties: {
        active: {
          type: String,
          value: '/pages/index/index'
        }
      },

      /**
       * 组件的初始数据
       */
      data: {
        tabbar: {
          color: '#C5C5C5',
          selectedColor: '#FDD040',
          list: [{
              name: 'index',
              pagePath: '/pages/index/index',
              text: '首页',
              normal: '../../images/tab/index_default.png',
              active: '../../images/tab/index_active.png'
            },
            {
              name: 'openCard',
              pagePath: '/pages/pickCard/pickCard',
              text: '',
              normal: '../../images/tab/open_card_default.png',
              active: '../../images/tab/open_card_default.png'
            },
            {
              name: 'mine',
              pagePath: '/pages/mine/mine',
              text: '我的',
              normal: '../../images/tab/mine_default.png',
              active: '../../images/tab/mine_active.png'
            }
          ]
        }
      },

      /**
       * 组件的方法列表
       */
      methods: {
        onChange(e) {
          if (e.detail == '/pages/pickCard/pickCard') {
            wx.navigateTo({
              url: e.detail
            });
          } else {
            wx.switchTab({
              url: e.detail
            });
          }
        }
      }
})