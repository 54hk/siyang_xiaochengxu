let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIpx: app.globalData.isIpx ? true : false,
    address:{
      userName:"请选择收货地址",
      provinceName:"点击选择"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  address:function(e){
    var that = this;
    wx.getSetting({
      success(res) {
        console.log(res)
        if (res.authSetting['scope.address']==false) {
          wx.showModal({
            title: '获取地址失败',
            content: '请您打开通讯地址开关',
            showCancel: false,
            cancelText: '',
            cancelColor: '',
            confirmText: '一键直达',
            confirmColor: '',
            success: function(res) {
              wx.openSetting({
              })
            },
            fail: function(res) {},
            complete: function(res) {},
          })
          
        } else {
          //打开选择地址
          wx.chooseAddress({
            success: function (res) {
              that.setData({
                address: res,
                noAddress: false
              });
            }
          })
        }
      },
      fail(res) {
        console.log('调用失败')
      }
    })
  }
})