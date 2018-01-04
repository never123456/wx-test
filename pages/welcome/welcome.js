//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '开启小程序之旅',
    userInfo: {}
  },
  onGoToIndex:function(){
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },
  onLoad: function () {
    wx.getUserInfo({
      success: (e) => {
        this.setData({
          userInfo:e.userInfo
        });
      }
    })
  }
})
