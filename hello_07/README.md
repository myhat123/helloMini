学习 页面跳转
==============

https://blog.csdn.net/Kuyun168/article/details/81238534

https://blog.csdn.net/zmd9999/article/details/79970083?utm_medium=distribute.pc_relevant.none-task-blog-baidujs-3

参数传递
index.js

```js
bindViewTap: function(e) {
    var that = this
    var id = e.currentTarget.dataset.id

    wx.navigateTo({
      url: '../story/story?id='+id
    })
  },
```

注意index.js中url传递参数的方式
story.js获取参数的方式

story.js

```js
onLoad: function (options) {
    this.setData({
      id: options.id
    })
```

app.json配置pages

```json
"pages": [
    "pages/index/index",
    "pages/story/story"
]
```

知乎日报 story中的content，需要把<figure></figure>去除才能显示<img>的图片
所以用正则表达式进行处理

```js
let x = res.data.body.replace(/\<figure\>/g, "").replace(/\<\/figure\>/g, "")
```