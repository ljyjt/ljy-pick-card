// components/tabs-nav/tabs-nav.js
import {deliveryList} from '../../data/data';
Component({
  options: {
    styleIsolation: 'shared'
  },
  properties: {
    active: Number
  },
  data: {
    deliveryList
  },
  methods: {
    onChange(e) {
      this.setData({active: e.detail.index})
      this.triggerEvent('changeActive',this.properties.active)
    }
  }
})
