// index.js
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    circular: true,
    // 轮播图
    bannerList: [
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
    ],
    // 首页卡集
    indexCardList: [
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
      }
    ]
  }
});
