var amapFile=require('../libs/amap-wx.js')
Page({
  data: {
    info:'',
    infoimg:'',
    localtion:[],
    hiddenLoading: false
     },
  
  onLoad: function (options) {
   var arr=[];
   var that=this;
   var myAmapFun = new amapFile.AMapWX({ key: '84b89aa0264afb2ce93de5cce76b2c26' });
    myAmapFun.getRegeo({
      success: function (data) {
       arr.push(data[0].latitude)
        arr.push(data[0].longitude)
       that.setData({
         localtion:arr
       })
        
      }
    })
   myAmapFun.getWeather({
     success: function (data) {
       var weather=data.weather.data;
       if(weather==='多云'){
         that.setData({
           infoimg:'http://open.sojson.com/images/tianqi/cloud2.png'
         })
       }
       else if (weather === '晴'){
         that.setData({
           infoimg: 'http://open.sojson.com/images/tianqi/fine2.png'
         })
       }
       else if (weather === '阴') {
         that.setData({
           infoimg: 'http://open.sojson.com/images/tianqi/overcast2.png'
         })
       }
       else if (weather === '小雨') {
         that.setData({
           infoimg: 'http://open.sojson.com/images/tianqi/small_rain2.png'
         })
       }
       else if (weather === '小到中雨') {
         that.setData({
           infoimg: 'http://open.sojson.com/images/tianqi/stom_rain2.png'
         })
       }
       else if (weather === '大雨' || weather ==='中到大雨') {
         that.setData({
           infoimg: 'http://open.sojson.com/images/tianqi/big_rain2.png'
         })
       }
       else if (weather === '大雨' || weather === '中到大雨') {
         that.setData({
           infoimg: 'http://open.sojson.com/images/tianqi/big_rain2.png'
         })
       }
       else if (weather ==='中雨') {
         that.setData({
           infoimg: 'http://open.sojson.com/images/tianqi/mid_rain2.png'
         })
       }
       else if (weather === '阵雨') {
         that.setData({
           infoimg: 'http://open.sojson.com/images/tianqi/quick_rain2.png'
         })
       }
       else if (weather === '雷阵雨') {
         that.setData({
           infoimg: 'http://open.sojson.com/images/tianqi/lquick_rain2.png'
         })
       }
       else{

         that.setData({
           infoimg: 'http://open.sojson.com/images/tianqi/unknown2.png'
         })
       }
       that.setData({
         info: data,
         hiddenLoading: true
       })
       console.log(data)
     },
     fail: function (info) {
       //失败回调
       console.log(info)
     }

   }) 
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
  // localjump:function(e){
  //   getApp().localjump(e)
  // },
  localjump:function(){
    var page=this;
    wx.openLocation({
      latitude: page.data.localtion[0],
      longitude: page.data.localtion[1],
      scale: 28
    })
  },
  seraching:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  }

})