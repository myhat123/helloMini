//index.js

Page({
  data: {
    content: '',
    id: ''
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })

    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/'+options.id,
      success: (res) => {
        // console.log(res.data)
        let x = res.data.body.replace(/\<figure\>/g, "").replace(/\<\/figure\>/g, "")
        // console.log(x)
        this.setData({
          content: x
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
