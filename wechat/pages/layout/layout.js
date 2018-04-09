//获取应用实例
const app = getApp()   //getApp()全局函数，获取小程序实例
// pages/layout/layout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图参数
    slides:[
      {url:'../../images/banner1.jpg'},
      { url: '../../images/banner2.jpg'},
      { url: '../../images/banner4.jpg'}
    ], 
    // 子导航
    navsub: [
      { text: "三日游" },
      { text: "黄金周" },
      { text: "旺季游" },
      { text: "本地景点" },
      { text: "本地美食" },
      { text: "本地酒店" }     
    ],
    // 热销列表
    items:[
      { imgURL: '../../images/scenicSpot1.jpg', text: "景观一", message: "亲临在白雪皑皑，鲜花环绕的大自然中可谓是一种美的享受"},
      { imgURL: '../../images/scenicSpot2.jpg', text: "景观二", message: "热带风景区里的歇脚处，沐浴着温暖的阳光"},
      { imgURL: '../../images/scenicSpot3.jpg', text: "景观三", message: "庄严神圣的殿堂，雄伟的建筑"},
      { imgURL: '../../images/scenicSpot4.jpg', text: "景观四", message: "海滨，沙滩，阳光，海浪"}
    ]
  },
  /**
   * 事件处理函数
   */
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //景点详细信息
  info:function(e){
    var id = e.currentTarget.id;
      wx.navigateTo({   
        url: '../info/info?title=' + id,   //2.直接传递给跳转页面的参数
      })
  },
  slidesInfo: function (e) {
      wx.navigateTo({
        url: '../threeTour/threeTour',   //跳转路径
        success: function (res) {
          console.log('跳转到页面成功')// success
        },
        fail: function () {
          console.log('跳转到页面失败')  // fail
        },
        complete: function () {
          console.log('跳转到页面完成') // complete
        }   
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth
    }) 
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
  
  }
})