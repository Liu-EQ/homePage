# CSS 基础

## 碎知识

- 可继承的属性： font-size, font-family, color
- 不可继承的样式： border, padding, margin, width, height
- CSS3 新增伪类：
  - p:first-of-type 选择属于其父元素的首个元素
  - p:last-of-type 选择属于其父元素的最后元素
  - p:only-of-type 选择属于其父元素唯一的元素
  - p:only-child 选择属于其父元素的唯一子元素
  - p:nth-child(2) 选择属于其父元素的第二个子元素
  - :enabled :disabled 表单控件的禁用状态。
  - :checked 单选框或复选框被选中。
- CSS3 新特性：
  - RGBA 和透明度
  - background-image、background-origin（content-box/padding-box/border-box）、background-size、backgeound-repeat
  - word-wrap（长的、不可分割的单词，强制换行）：break-word
  - text-shadow: 水平阴影 垂直阴影 模糊距离 阴影颜色
  - font-face: 定义自己的字体
    > > 不理解
  - border-radius（设置元素圆角）: 左上 右上 右下 左下
  - border-image: url(图片地址) width height 填充方式
  - box-shadow（盒子阴影）: 水平偏移量 垂直偏移量 模糊半径 颜色
  - 媒体查询: 定义多套 css 样式，对于不同的媒体设备使用不同的 css 样式
- 使用 CSS 实现一个三角形

```css
  width:0px;
  height:0px;
  border-top:40px solid transparent
  borer-left:40px solid transparent
  border-right:40px solid transparent
  border-bottom:40px solid #ff0000
```

---
