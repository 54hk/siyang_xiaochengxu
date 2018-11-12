// pages/home/home.js
let utils = require('../../utils/utils.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog:false,
    modaltit:"您是否同意糖卡会员店获取您的微信头像及昵称信息？",
    movies: [{
        url: '../../image/home_banner.png'
      },
      {
        url: '../../image/home_banner.png'
      },
      {
        url: '../../image/home_banner.png'
      },
      {
        url: '../../image/home_banner.png'
      }
    ],
    countDownDay: 0,
    countDownHour: 0,
    countDownMinute: 0,
    countDownSecond: 0,
    time:{
      
    },
    test : '3'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    utils.logos(123)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

    var totalSecond = 1605540080 - Date.parse(new Date()) / 1000;

    var interval = setInterval(function() {
      // 秒数
      var second = totalSecond;

      // 天数位
      var day = Math.floor(second / 3600 / 24);
      var dayStr = day.toString();
      if (dayStr.length == 1) dayStr = '0' + dayStr;

      // 小时位
      var hr = Math.floor((second - day * 3600 * 24) / 3600);
      var hrStr = hr.toString();
      if (hrStr.length == 1) hrStr = '0' + hrStr;

      // 分钟位
      var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
      var minStr = min.toString();
      if (minStr.length == 1) minStr = '0' + minStr;

      // 秒位
      var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
      var secStr = sec.toString();
      if (secStr.length == 1) secStr = '0' + secStr;

      this.setData({
        countDownDay: dayStr,
        countDownHour: hrStr,
        countDownMinute: minStr,
        countDownSecond: secStr,
      });
      totalSecond--;
      if (totalSecond < 0) {
        clearInterval(interval);
        wx.showToast({
          title: '活动已结束',
        });
        this.setData({
          countDownDay: '00',
          countDownHour: '00',
          countDownMinute: '00',
          countDownSecond: '00',
        });
      }
    }.bind(this), 1000);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log(wx.getStorageSync('userInfo').nickName)
    if (!wx.getStorageSync('userInfo').nickName) {
      wx.hideTabBar({}) 
      console.log('用户未授权')
      this.setData({
        showDialog: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  details: function() {
    wx.navigateTo({
      url: '../details/details',
    })
  },
  vip:function(){
    wx.switchTab({
      url: '../vip/vip',
    })
  },
  onGotUserInfo:function(e){
    console.log(e)
    var that = this
    if(e.detail.rawData){
      console.log("1")
          that.setData({
          showDialog:false
        })
        wx.showTabBar({})
        wx.setStorageSync('userInfo', e.detail.userInfo)
    }else{
      that.setData({
          modaltit: '拒绝后将无法继续使用，是否重新获取！'
        })
    }
    // wx.login({
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   fail: function(res) {
    //     console.log(res)
    //   },
    //   complete: function(res) {},
    // })
    // wx.getUserInfo({
    //   success: function (res) {
    //     that.setData({
    //       showDialog:false
    //     })
    //     wx.showTabBar({})
    //     wx.setStorageSync('userInfo', e.detail.userInfo)
    //     console.log(res)
    //   },
    //   fail: function (e) {
    //     that.setData({
    //       modaltit: '拒绝后将无法继续使用，是否重新获取！'
    //     })
    //     console.log(e)
    //   },
    //   complete: function (e) {
    //     // complete
    //     console.log("获取用户信息完成！")
    //   }
    // })
  },
  cancelBtn:function(){
    this.setData({
      modaltit: '拒绝后将无法继续使用，是否重新获取！'
    })
  },
  test:function(){
    var that = this
    this.setData({
      test : '4'
    })
    console.log(this.test)
  }
})