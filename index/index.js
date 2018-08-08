//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '实时天气',
    mottoer: '查询天气',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
    },
    jumpindex:function(){
      wx.navigateTo({
        url: '../weather/weather',
      })
    }

})
