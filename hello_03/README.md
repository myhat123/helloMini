参考资料：  
https://zhuanlan.zhihu.com/p/24954515

js文件和wxml文件的联系
=====================

通过js文件中的data

微信接口调用
===========

wx.getUserInfo接口是可以返回一个userInfo的对象的，它是一个用户信息对象，但其中并不包含openid等敏感的信息。

但是wx.getUserInfo接口需要在wx.login接口的基础上使用，而wx.login有一个success参数，是接口调用成功时的回调函数。

思路如下：可以调用wx.login接口，并把wx.getUserInfo接口作为wx.login的调用成功的回调函数，把其中的数据传出来，就得到了用户的昵称和头像。

将接口函数放在onShow函数下面。

接口数据保存
============
在data下创建userInfo变量，用以保存接口返回的用户信息，使用setData执行保存数据的动作

显示头像和昵称
=============
userInfo

添加样式
========
page.wxss文件是用于负责页面的样式，通俗的说法是负责“如何表现”页面的。有前端开发经验的话，可以将其类比作前端中的css文件，二者的作用几乎相同，在一些基本的形式上也可以相互做个印证。

page.wxss文件与app.wxss文件

二者基本作用相同，都是为了规定样式。page.wxss是规定其所在页面的样式，而app.wxss则是在全局上对小程序的样式进行规定。针对于一个具体的页面，page.wxss中的内容会覆盖app.wxss中的内容。对于没有在page.wxss中规定的样式，页面会采用app.wxss中所规定的样式。

page.wxml文件中的修改

标签本身，也可以通过给标签设置class或者id的属性值来达成这一个目的。

自动生成的代码中，app.wxss, pages/index/index.wxss，这两个wxss直接运用

```css
/**app.wxss**/
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
} 
```

```css
/**index.wxss**/
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}
```