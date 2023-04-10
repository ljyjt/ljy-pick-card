//首页banner
export const bannerList = [
  {
    id: 1,
    pic: 'https://choukaji.oss-cn-hangzhou.aliyuncs.com/uploads/manage/76ET6kURqvSlbYfbXsjvbEMtzghNG3ua7T6rz5pC.jpg',
    small_pic:
      'https://choukaji.oss-cn-hangzhou.aliyuncs.com/uploads/manage/LpGyddIyzUkVLLUTI2KrIFUwDvrw5axkk6BPNEWM.png',
  },
  {
    id: 2,
    pic: 'https://choukaji.oss-cn-hangzhou.aliyuncs.com/uploads/manage/8xuBtIpXJCasVqg79lTSHfXi0dVsuWgnB8a7X4AV.png',
    small_pic:
      'https://choukaji.oss-cn-hangzhou.aliyuncs.com/uploads/manage/hzaKO7EHI57f7prT7EsAzVAXpcE3OodlPLrQtTF3.png',
  },
  {
    id: 3,
    pic: 'https://choukaji.oss-cn-hangzhou.aliyuncs.com/uploads/manage/edtBp4fVpjvpo8mVlvEsiRT0T3FVkILEvaAq9pJH.png',
    small_pic:
      'https://choukaji.oss-cn-hangzhou.aliyuncs.com/uploads/manage/D85LJB6q6mRtgXtlvloZrMxY0DxokYIQycZ4l82J.png',
  },
];

//首页卡集
export const indexCardList = [
  {
    bevel_img:
      'https://choukaji.oss-cn-hangzhou.aliyuncs.com/uploads/manage/CZ9NFG6E03uv9rD0MW8Mu8dqx4UiyZPzcSTpOvjY.png',
    title: '计篇 · 第1弹',
    title_1able: '三国杀英雄传',
  },
  {
    bevel_img:
      'https://choukaji.oss-cn-hangzhou.aliyuncs.com/uploads/manage/b10t7TeqrbkkY7Qe1JMbMUrUphGCD5apa5KeqXNj.png',
    title: '破军篇 · 第1弹',
    title_1able: '三国杀英雄传',
  },
  {
    bevel_img:
      'https://choukaji.oss-cn-hangzhou.aliyuncs.com/uploads/manage/gRoN43Fdt891UthCboOXSPyOGn6g6okWQbJ1OBLq.png',
    title: '破军篇 · 第2弹',
    title_1able: '三国杀英雄传',
  },
];

//发货订单
//status:40-已发货,30-待发货
export const deliveryList = [
  {
    id: 1,
    pay_at: '2023-03-31 14:34:25',
    statusStr: '已发货',
    status: 40,
    series: [
      {
        draw_img:
          'https://choukaji.oss-cn-hangzhou.aliyuncs.com/uploads/manage/qnicCKeH4Ate1W1za6KzmYAEMZljyRl78XwxTllo.png',
        title: '破军篇 · 第1弹 · 三国杀英雄传',
        num: 1,
      },
    ],
  },
  {
    id: 2,
    pay_at: '2023-03-15 17:34:25',
    statusStr: '待发货',
    status: 30,
    series: [
      {
        draw_img:
          'https://choukaji.oss-cn-hangzhou.aliyuncs.com/uploads/manage/m2KMMKad7r1Y5hYdWJFODfUnuxILUyzBpCDmYKrq.png',
        title: '破军篇 · 第2弹 · 三国杀英雄传',
        num: 1,
      },
    ],
  },
  {
    id: 3,
    pay_at: '2023-02-25 14:47:25',
    statusStr: '已发货',
    status: 40,
    series: [
      {
        draw_img:
          'https://choukaji.oss-cn-hangzhou.aliyuncs.com/uploads/manage/qnicCKeH4Ate1W1za6KzmYAEMZljyRl78XwxTllo.png',
        title: '破军篇 · 第3弹 · 三国杀英雄传',
        num: 2,
      },
    ],
  },
];
// export const deliveryList = [];

//cdk兑换
export const exchangeCode = {
  reward: '抽奖券*100',
};

//物流列表
export const logisticsList = [
  {
    delivery_no: 'JDX003007945266',
    delivery_time: '2023-03-16 09:24:43',
    shipper: '京东快递',
    shipment_no: 'D202303151947504337',
    delivery_type: 2,
    traces: [
      {
        AcceptStation:
          '揽收任务已分配给张武清。给您服务的快递员已完成新冠疫苗接种，祝您身体健康。',
        AcceptTime: '2023-03-14 12:56:50',
      },
      {
        AcceptStation: '您的快件已到达【苏州昆山集货分拣中心】',
        AcceptTime: '2023-03-14 23:39:47',
      },
      {
        AcceptStation:
          '您的快件已由【三和苑柜子】代收，感谢您使用京东物流，期待再次为您服务。',
        AcceptTime: '2023-03-16 13:58:03',
      },
    ],
  },
  {
    delivery_no: 'SF1212121212',
    delivery_time: '2022-11-15 10:04:00',
    shipper: '顺丰快递',
    shipment_no: 'D202211141040376609',
    delivery_type: 1,
    traces: [
      {
        AcceptStation:
          '揽收任务已分配给田勇。给您服务的快递员已完成新冠疫苗接种，祝您身体健康。',
        AcceptTime: '2023-03-04 11:56:50',
      },
      {
        AcceptStation: '您的快件已到达【苏州昆山集货分拣中心】',
        AcceptTime: '2023-03-08 23:39:47',
      },
      {
        AcceptStation:
          '您的快件已由【源创谷】菜鸟驿站代收，感谢您使用顺丰物流，期待再次为您服务。',
        AcceptTime: '2023-03-08 13:58:03',
      },
    ],
  },
];
