体验 hello world
================

https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html

小程序代码构成
​在上一章中，我们通过开发者工具快速创建了一个 QuickStart 项目。你可以留意到这个项目里边生成了不同类型的文件:

1. json 后缀的 JSON 配置文件
2. wxml 后缀的 WXML 模板文件
3. wxss 后缀的 WXSS 样式文件
4. js 后缀的 JS 脚本逻辑文件

app.json 
========

是当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等。QuickStart 项目里边的 app.json 配置内容如下：

{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle":"black"
  }
}
我们简单说一下这个配置各个项的含义:

pages字段 —— 用于描述当前小程序所有页面路径，这是为了让微信客户端知道当前你的小程序页面定义在哪个目录。
window字段 —— 定义小程序所有页面的顶部背景颜色，文字颜色定义等。

工具配置 project.config.json
============================

通常大家在使用一个工具的时候，都会针对各自喜好做一些个性化配置，例如界面颜色、编译配置等等，当你换了另外一台电脑重新安装工具的时候，你还要重新配置。

考虑到这点，小程序开发者工具在每个项目的根目录都会生成一个 project.config.json，你在工具上做的任何配置都会写入到这个文件，当你重新安装工具或者换电脑工作时，你只要载入同一个项目的代码包，开发者工具就自动会帮你恢复到当时你开发项目时的个性化配置，其中会包括编辑器的颜色、代码上传时自动压缩等等一系列选项。

页面配置 page.json
==================

这里的 page.json 其实用来表示 pages/logs 目录下的 logs.json 这类和小程序页面相关的配置。

如果你整个小程序的风格是蓝色调，那么你可以在 app.json 里边声明顶部颜色是蓝色即可。实际情况可能不是这样，可能你小程序里边的每个页面都有不一样的色调来区分不同功能模块，因此我们提供了 page.json，让开发者可以独立定义每个页面的一些属性，例如刚刚说的顶部颜色、是否允许下拉刷新等等。

WXML 模板
=========
从事过网页编程的人知道，网页编程采用的是 HTML + CSS + JS 这样的组合，其中 HTML 是用来描述当前这个页面的结构，CSS 用来描述页面的样子，JS 通常是用来处理这个页面和用户的交互。

同样道理，在小程序中也有同样的角色，其中 WXML 充当的就是类似 HTML 的角色。

和 HTML 非常相似，WXML 由标签、属性等等构成。但是也有很多不一样的地方，
标签名字有点不一样
多了一些 wx:if 这样的属性以及 {{ }} 这样的表达式

WXSS 样式
=========

WXSS 具有 CSS 大部分的特性，小程序在 WXSS 也做了一些扩充和修改。

新增了尺寸单位。在写 CSS 样式时，开发者需要考虑到手机设备的屏幕会有不同的宽度和设备像素比，采用一些技巧来换算一些像素单位。WXSS 在底层支持新的尺寸单位 rpx ，开发者可以免去换算的烦恼，只要交给小程序底层来换算即可，由于换算采用的浮点数运算，所以运算结果会和预期结果有一点点偏差。

app.wxss 作为全局样式，会作用于当前小程序的所有页面，局部页面样式 page.wxss 仅对当前页面生效。

JS 逻辑交互
===========

一个服务仅仅只有界面展示是不够的，还需要和用户做交互：响应用户的点击、获取用户的位置等等。在小程序里边，我们就通过编写 JS 脚本文件来处理用户的操作。

```js
<view>{{ msg }}</view>
<button bindtap="clickMe">点击我</button>
```

点击 button 按钮的时候，我们希望把界面上 msg 显示成 "Hello World"，于是我们在 button 上声明一个属性: bindtap ，在 JS 文件里边声明了 clickMe 方法来响应这次点击操作：

```js
Page({
  clickMe: function() {
    this.setData({ msg: "Hello World" })
  }
})
```

响应用户的操作就是这么简单，更详细的事件可以参考文档 WXML - 事件 。

此外你还可以在 JS 中调用小程序提供的丰富的 API，利用这些 API 可以很方便的调起微信提供的能力，例如获取用户信息、本地存储、微信支付等。在前边的 QuickStart 例子中，在 pages/index/index.js 就调用了 wx.getUserInfo 获取微信用户的头像和昵称，最后通过 setData 把获取到的信息显示到界面上。更多 API 可以参考文档 小程序的API 。

