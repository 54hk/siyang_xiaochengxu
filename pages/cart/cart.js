// pages/shopcart/shopcart.js
let app = getApp()
Page({

  /**
  * 页面的初始数据
  */
  data: {
    isIpx: app.globalData.isIpx ? true : false,
    'iscart': false, //控制购物车有没有数据
    'goodList': [
      {
        'cover': '../../image/imgtest.jpg',
        'isbn': '9787535482051',
        'desc': '【光山馆】2斤大连烟台樱桃新鲜水果现摘现发产地直供孕妇水果儿童水果当季水果早大果红灯美早车厘子大樱桃 2斤 AAA级 果径28mm以上',
        'price': 25.9,
        'count': 1,
        'checked': false
      },
      {
        'cover': '../../image/imgtest.jpg',
        'isbn': '9787540455958',
        'desc': '【第二件立减20元】新鲜采摘 国产 美早 车厘子 大樱桃新鲜水果1kg 单果26-28mm',
        'price': 20.5,
        'count': 1,
        'checked': false
      },
      {
        'cover': '../../image/imgtest.jpg',
        'isbn': '9787539982830',
        'desc': '农家新语 新鲜烟台大樱桃2斤现摘当季水果车厘子美早 顺丰空运',
        'price': 24.1,
        'count': 1,
        'checked': false
      },
      {
        'cover': '../../image/imgtest.jpg',
        'isbn': '9787550013247',
        'desc': '【第二件5折】岂鲜大连美早大樱桃500g大果28-30mm 新鲜水果礼盒',
        'price': 17.2,
        'count': 1,
        'checked': false
      },
      {
        'cover': '../../image/imgtest.jpg',
        'isbn': '9787208061644',
        'desc': '优仙果 山东美早大樱桃 1000g装果径26-28mm 新鲜水果车厘子',
        'price': 17.7,
        'count': 1,
        'checked': false
      }
    ],
    'checkAll': false,
    'totalCount': 0,
    'totalPrice': 0,
    'vippri': 3
  },

  /**
  * 删除购物车当前商品
  */
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let goodList = this.data.goodList;
    goodList.splice(index, 1);
    this.setData({
      goodList: goodList
    });
    if (!goodList.length) {
      this.setData({
        iscart: true
      });
    } else {
      this.calculateTotal();
    }
  },

  /**
  * 计算商品总数
  */
  calculateTotal: function () {
    var goodList = this.data.goodList;
    var totalCount = 0;
    var totalPrice = 0;
    for (var i = 0; i < goodList.length; i++) {
      var good = goodList[i];
      if (good.checked) {
        totalCount += good.count;
        totalPrice += good.count * good.price;
      }
    }
    totalPrice = totalPrice.toFixed(2);
    this.setData({
      'totalCount': totalCount,
      'totalPrice': totalPrice
    })
  },

  /**
  * 用户点击商品减1
  */
  subtracttap: function (e) {
    var index = e.target.dataset.index;
    var goodList = this.data.goodList;
    var count = goodList[index].count;
    if (count <= 1) {
      return;
    } else {
      goodList[index].count--;
      this.setData({
        'goodList': goodList
      });
      this.calculateTotal();
    }
  },

  /**
  * 用户点击商品加1
  */
  addtap: function (e) {
    var index = e.target.dataset.index;
    var goodList = this.data.goodList;
    var count = goodList[index].count;
    goodList[index].count++;
    this.setData({
      'goodList': goodList
    });
    this.calculateTotal();
  },
  /**
  * 用户选择购物车商品
  */
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var checkboxItems = this.data.goodList;
    var values = e.detail.value;
    for (var i = 0; i < checkboxItems.length; ++i) {
      checkboxItems[i].checked = false;
      for (var j = 0; j < values.length; ++j) {
        if (checkboxItems[i].isbn == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    var checkAll = false;
    if (checkboxItems.length == values.length) {
      checkAll = true;
    }

    this.setData({
      'goodList': checkboxItems,
      'checkAll': checkAll
    });
    this.calculateTotal();
  },

  /**
  * 用户点击全选
  */
  selectalltap: function (e) {
    // console.log('用户点击全选，携带value值为：', e.detail.value);
    var value = e.detail.value;
    var checkAll = false;
    if (value && value[0]) {
      checkAll = true;
    }

    var goodList = this.data.goodList;
    for (var i = 0; i < goodList.length; i++) {
      var good = goodList[i];
      good['checked'] = checkAll;
    }

    this.setData({
      'checkAll': checkAll,
      'goodList': goodList
    });
    this.calculateTotal();
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.calculateTotal();
   
  },

  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    let goodList = this.data.goodList;
    if (!goodList.length) {
      this.setData({
        iscart: true
      });
    }
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


})