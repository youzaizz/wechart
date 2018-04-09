//index.js
//获取应用实例
const app = getApp()   //getApp()全局函数，获取小程序实例
//console.log(app);
Page({    //Page()函数注册页面，接受一个object参数，指定页面的初始数据、生命周期函数、事件处理函数等
  data: {     //页面初始数据--data 将会以 JSON 的形式由逻辑层传至渲染层
    motto: 'Another way to look at the problem world is to change',
    userInfo: {
      nickname:"zss",
      major:"computers",
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {    //点击跳转页面
    wx.navigateTo({          //navigate导航
      //url: '../logs/logs'
      //url: '../login/login'
      url:'../layout/layout'
    })
  },
  //生命周期函数
  onLoad: function () {     //生命周期函数，监听页面加载
    if (app.globalData.userInfo) {
      //setData()函数将数据从逻辑层发送到视图层，同时改变对应的this.data的值
      this.setData({ //setData()函数，接受一个对象参数，以key:value形式将this.data中的key对应的值改变成value
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
