let app = getApp();
/**
 * 数据请求
 */
exports.request = function (obj) {
  if (obj.loading == undefined || obj.loading == true) {
    wx.showLoading({ title: "加载中…", mask: true });
  } 
  let options = {
    url: app.globalData.basePath + obj.url,
    method: obj.method ? obj.method.toUpperCase() : "GET",
    data: obj.data ? obj.data : {},
    header: obj.header ? obj.header : {
      Accept: "application/json",
      'content-type': 'application/json',
      'X-Requested-With': "X-Requested-With",
      'cookie': wx.getStorageSync('cookie')
    },
    success: function (res) { 
      let data = res.data;
      if (data.success) {
        setTimeout(() => { wx.hideLoading(); }, 300);
        obj.success && obj.success(data, res);
      } else {
        wx.hideLoading() 
        if (data.code == 401) {
          /*wx.reLaunch({
            url: '/pages/login/index'
          })*/
          return;
        }
        obj.fail && obj.fail(data, res);
        !obj.offHint && wx.showToast({
          icon: "none",
          title: JSON.stringify(data.msg),
          duration: 3000
        })
      }
    },
    fail: function (res) {
      obj.error && obj.error(res);
    },
    complete: function (res) {
      let data = res.data;
      obj.complete && obj.complete(data, res);
      if (res.statusCode >= 200 && res.statusCode < 300) {
        return;
      }
      wx.hideLoading();
      wx.showToast({
        icon: "none",
        title: "请求错误：" + res.statusCode,
        duration: 3000
      })

    }
  };
  wx.request(options);
}

exports.formatPrice=function(s,count) {
    var n = 2; 
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
    var t = "";

    for (var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }  
    if(count>=999999999999999999){ 
      return t.split("").reverse().join("") + "." + r+'E';
    }else{ 
      return t.split("").reverse().join("") + "." + r;
    }
    
}

/**
 * @about 格式化时间
 * @param
 *      date:{number或date}毫秒时间，必填
 *      fmt:{string}需要生成的时间格式，选填 默认  MM-dd hh:mm
 * @return string   格式化时间字符串
 * @author bob
 */
exports.formatTime = function (date, format) {
    if (typeof date == "number") {
        date = new Date(date);
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        var fmt = format || "yyyy-MM-dd hh:mm";
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    } else {
        return date;
    }
}

/*根据日期计算周几*/
exports.whichDay=function(date) {
    var d = new Date(date);
    var weekday = new Array(7);
    weekday[0] = "周日";
    weekday[1] = "周一";
    weekday[2] = "周二";
    weekday[3] = "周三";
    weekday[4] = "周四";
    weekday[5] = "周五";
    weekday[6] = "周六";
    return weekday[d.getDay()];
}

exports.transform=function(urlstr) {
  var obj = {};
     if (urlstr) {
         urlstr = urlstr.substr(1);
         var strArr = urlstr.split('&');
         for (var i = 0; i < strArr.length; i++) {
             var temArr = strArr[i].split('=');
             obj[temArr[0]] = temArr[1]
         } 
        return obj;
     } else {
        return obj={};
     }
}

exports.logos = function(e){
  // wx.login({
  //   success: res => {
  //     console.log(res)
  //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //   }
  // })
  // wx.showModal({
  //   title: '授权给我吧！',
  //   content: '',
  //   showCancel: true,
  //   cancelText: '取消',
  //   cancelColor: '#ff0000',
  //   confirmText: '确定',
  //   confirmColor: 'green',
  //   success: function(res) {
  //     wx.getUserInfo({
  //       success: function (res) {
  //         that.setData({
  //           nickName: res.userInfo.nickName,
  //           avatarUrl: res.userInfo.avatarUrl,
  //         })
  //       },
  //       fail: function (e) {
  //         // fail
  //         console.log(e)
  //       },
  //       complete: function (e) {
  //         // complete
  //         console.log("获取用户信息完成！")
  //       }
  //     })
  //   },
  //   fail: function(res) {},
  //   complete: function(res) {},
  // })
  
}