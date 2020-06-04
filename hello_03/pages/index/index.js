//index.js

Page({
  data: {
    name: '中国北京',
    userInfo: null
  },
  onLoad: function (options) {

  },
  onReady: function() {

  },
  onShow: function() {
    var a = this
    wx.login({
      success: function() {
        wx.getUserInfo({
          complete: (res) => {
            a.setData({
              userInfo: res.userInfo
            })
          },
        })
      }
    })
  },
  onHide: function() {

  },
  onUnload: function() {

  }
})
