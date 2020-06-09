//index.js

Page({
  data: {
    content: ''
  },
  onLoad: function (options) {
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/9724713',
      success: (res) => {
        console.log(res.data)
        this.setData({
          content: res.data.body,
        })
      }
    })

  },
  onReady: function() {

  },
  onShow: function() {
  
  },
  onHide: function() {

  },
  onUnload: function() {

  }
})
