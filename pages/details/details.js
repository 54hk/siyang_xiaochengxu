let { request, formatPrice } = require('../../utils/utils.js');
let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isIpx: app.globalData.isIpx ? true : false,
    movies: [{
      url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg'
    }, {
      url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg'
    }, {
      url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg'
    }, {
      url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
    }],
    show:false,
    bott:false,
    skucor: ["i5 8G+128G裸机", "黑色键盘套装","亮铂金键盘套装【主推】"],
    act:'9999'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(formatPrice(99999/100))
    console.log(this.data.isIpx)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  show:function(){
    var that = this
    console.log('ok')
    that.setData({
      show:!that.data.show
    })
  },
  confirm: function () {
    var that = this
    console.log('ok')
    that.setData({
      show: !that.data.show
    })
  },
  selcor:function(e){
    console.log(e)
    this.setData({
      act : e.target.id
    })
  },
  confirmto:function(){
    wx.navigateTo({
      url: '../cart/cart'
    })
  },
  vip:function(){
    console.log(1)

    wx.switchTab({
      url: '../vip/vip'
    });
  }
})