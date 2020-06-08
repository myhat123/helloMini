//index.js

Page({
  data: {
    date: '',
    stories: null
  },
  onLoad: function (options) {
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      success: (res) => {
        console.log(res)
        this.setData({
          date: res.data.date,
          stories: res.data.stories
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
