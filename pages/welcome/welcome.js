//获取应用实例
const app = getApp();
const loadUserInfo = require('../tepls/loadUserInfo.js').loadUserInfo;

Page({
  data: {
    motto: '开启小程序之旅',
    userInfo: {}
  },
  onGoToIndex:function(){
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },
  onLoad: function () {
    loadUserInfo((e) => {
      this.setData({
        userInfo: e.userInfo
      });
    })
  }
})
