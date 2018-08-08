var amapFile=require('../libs/amap-wx.js')
Page({

  
  data: {  
    enterinfo:''
  },

  onLoad: function (options) {
    
    
  },
  onReady: function () {
  
  },

  onShow: function () {
  
  },

  onHide: function () {
  
  },

  onUnload: function () {
  
  },

  onPullDownRefresh: function () {
  
  },

  onReachBottom: function () {
  
  },

  onShareAppMessage: function () {
  
  },
  inputmsg:function(e){
     var info=e.detail.value;
     this.setData({
       enterinfo:info
     })
  }
  ,
  sousuo:function(e){
    wx.navigateTo({
      url: '../nowweather/noweather',
    })
    wx.setStorageSync('city', e.currentTarget.id)
  },
  backindex:function(){
    wx.navigateTo({
      url: '../weather/weather',
    })
  }
})