//logs.js


Page({
  data: {
    logs: []
  },
  onLoad: function () {
    
  },
  order:function(e){
    wx.navigateTo({
      url: '../order/order?act=' + e.currentTarget.dataset.order
    })
  },
  coupons:function(){
    wx.navigateTo({
      url: '../coupons/coupons',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
