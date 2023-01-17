# 兼容问题

> > 查询兼容的网站 https://caniuse.com/

## 常见的浏览器内核

- 最常见的浏览器内核有四种：Trident，Gecko、Blink、Webkit

## 常见兼容问题：

- CSS 兼容

  - 不同浏览器的 margin 和 padding 不同，在没有外加样式的情况下，这个是差异最多样化的，但是也是最好解决的
  - 图片的默认间距，即使加了通配符设置样式也不管用，不同浏览器中会有不同表现
    > > 解决方式：使用 float 为图片布局
  - td 自动换行，table 宽度固定时，如果超出，td 会自动换行

    > > 解决方式：设置 table 样式：table-layout:fixed td 为 word-wrap：break-word

  - cursor 兼容问题
    > > 解决方式:设置统一的 cursor，cursor:pointer
  - a 标签 css 状态的顺序
    > > 解决方式: 按照 linked-visited-hover-ctive 统一编写
  - div 嵌套 p 时，出现空白行
    > > 解决方式:设置 display：inline
  - 在 Chrome 中字体不能小于 10px
    > > 解决方式：设置字体样式(12px)，之后通过 transform:scale(0.8）缩放达到效果
  - 谷歌浏览器上记住密码后输入框背景色为黄色 >> 解决方式

  ```javascript
   input{
   background-color: transparent !important;
  }
  input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill{
   -webkit-text-fill-color: #333 !important;
   -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
   background-color: transparent !important;
   background-image: none !important;
   transition: background-color 5000s ease-in-out 0s;
  }
  ```

  - CSS 前缀标识：
    -webkit- webkit chrome/safari
    -moz- gecko firefox
    -ms- trident IE
    -o- opeck 欧朋

- JS 兼容

  - 事件对象的兼容
    > > e = ev || window.event
  - 滚动事件的兼容
    > > scrollTop = document.documentEvent.scrollTop || document.body.scrollTop
  - 组织冒泡的兼容
    ```javascript
    if (e.stopPropagation) e.stopPropagation();
    else e.cancleBubble = true;
    ```
  - 阻止默认行为的兼容
    ```javascript
    if (e.preventDefault) e.preventDefault();
    else e.retuenValue = false;
    ```
  - 添加事件监听器的兼容

    ```javascript
    if (target.addEventListener) target.addEventListener("click", clickHandler);
    else target.attachEvent("click", clickHandler);
    ```

    > > 上述的 JS 兼容都存在于旧版 IE 浏览器，现在不在需要解决这类兼容，所以也不需要记忆了，且没有写全

  - ios 下 beforeunload 事件废弃了，需要使用 pagehide 事件替代。

    ```javascript
    window.addEventListener("beforeunload", () => {
      setRootSessionItem(this.$store.state);
    });
    //IOS废弃了beforeunload事件，故用下面的代替
    window.addEventListener("pagehide", () => {
      setRootSessionItem(this.$store.state);
    });
    ```

  - Mac 不支持 window.open
  - Mac 不支持正则前置肯定断言

- 移动端兼容问题
  - 禁止 ios 识别长串数字为电话 ☎️ 号码
    > > 解决方案：meta 标签 <meta content="telephone=no" name="format-detection" />
  - 禁止 ios 弹出各种操作窗口
    > > 解决方案: -webkit-touch-callout:none
  - 禁止 AnAndriod 手机识别邮箱 📮
    > > <meta content="email=no" name="format-detection" />
  - 禁止 ios 和 Android 用户选中文字
    > > -webkit-user-select:none
  - ios 取消 input 输入框首字母默认大写
    > > <input autocapitalize="off" autocorrect="off" />
  - Android 取消语音输入按钮 🔘
    > > input::-webkit-input-speech-button {display: none}
  - 移动端修改点击高亮效果
    > > {-webkit-tap-highlight-color:rgba(0,0,0,0);}
  - ios 下 input 的 type 值设置为 button 时，设置 disabled:true，会出现样式文字和背景异常的问题
    > > opacity=1
  - input 设置为 fixed 定位，ios 下 input 滚动到页面底部/顶部，在页面滚动一段距离之后，点击 input（调出键盘），input 回突然出现在中间位置
    > > 内容列表框也是 fixed 定位，这样不会出现 fixed 错位的问题
  - 移动端字体小于 12px 时使用 borderColor 或者 backgroundColor，部分安卓文字偏上
    > > 整体放大，再使用 transform 中的 scale 进行缩小
  - Andriod 上 placeHolder 偏上
    > > input 有 placeholder 情况下不要设置行高
  - overflow:scroll 或者 auto，ios 上滑动卡顿问题
    > > -webkit-overflow-scrolling: touch;
  - iOS 中日期如：2022-02-22 00:00:00 格式的时间转时间戳不成功
    > > 需要将时间中的'00:00:00 去除之后才能转为时间戳
  - iOS 中需要将时间格式转为/，如：2022/02/22
    ```javascript
    let date = "2022-02-22";
    let dateStr = date.replace(/-/g, "/"); // 2022/02/22
    ```
  - 移动端 click300ms 延时响应
    ```javascript
    window.addEventListener(
      "load",
      function () {
        FastClick.attach(document.body);
      },
      false
    );
    ```
  - 移动端 1px 边框问题
    > > 原先元素的 border 去掉，然后利用:before 或者:after 重做 border，并 transform 的 scale 缩小一半，原先的元素相对定位，新做的 border 绝对定位
    ```javascript
    .border-1px{
      position: relative;
      border:none;
    }
    .border-1px:after{
        content: '';
        position: absolute;
        bottom: 0;
        background: #000;
        width: 100%;
        height: 1px;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0; 
    }
    ```
  - <a href='https://juejin.cn/post/6844904185234735118'>移动端兼容更多</a>
