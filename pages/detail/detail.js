var listData = require('../../datas/datas.js').listData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playing: false,
    isSc:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(listData[options.id]);
    console.log(this.data.info)
  },
  traggonPlay(e) {
    this.setData({
      playing: !this.data.playing
    })
  },
  mockShare(){
    let items = [
      '分享到朋友圈',
      '分享到qq',
      '分享到微博'
    ];
    wx.showActionSheet({
      itemList: items,
      success(res) {
        wx.showModal({
          title: '提示',
          content: '抱歉无法真正' + items[res.tapIndex]
        })
      }
    })
  },
  mockSc(){
    this.setData({
      isSc: !this.data.isSc
    })
    wx.showToast({
      title: this.data.isSc?'收藏成功':'取消收藏成功',
      icon: 'success',
      duration: 1000
    })
  }
})