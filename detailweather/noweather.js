
Page({

  data: {
     infor:'',
     inputtxt:'',
    hiddenLoading:false
  },
  onLoad: function (options) {
    var that=this;
    var city=wx.getStorageSync('city')
    
     wx.request({
       url: 'https://www.sojson.com/open/api/weather/json.shtml?city='+city,
       header:{
         'content-type':'application/json'
       },
       success:function(res){
           
           var weinfo=res.data.data.forecast;
           var futrue=weinfo.shift();
           var today=res.data
           that.setData({
              infor:today,
             hiddenLoading:true

           })
            console.log(res)
            console.log(city)
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
  sercher:function(e){
       this.setData({
           inputtxt:e.detail.value
       });
      
  },
  souso:function(){
    var that=this;
    this.setData({
      city:this.data.inputtxt
    })
    wx.request({
      url: 'https://www.sojson.com/open/api/weather/json.shtml?city=' + that.data.city,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var weinfo = res.data.data.forecast;
        var futrue = weinfo.shift();
        var today = res.data
        that.setData({
          infor: today

        })
        console.log(res)
      }
    })
    console.log(this.data.city)
  }
})