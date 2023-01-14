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

## flex 布局

- webkit 内核的浏览器的，如果使用 flex 布局，需要加上对应的前缀

```javascript
display: -webkit - flex; /* Safari */
```

- flex 的主轴和交叉轴

  - 默认的主轴是水平方向，交叉轴适合主轴垂直的方向

- **常见的 flex 容器（弹性盒） 属性设置:**
  - **flex-direction:** 决定主轴方向，即项目排列方向，可选值比较语义化
  - **flex-wrap:** 子元素超出父容器宽度是否换行，注意 reverse-wrap，是上下两行进行互换
  - **flex-flow:** 是 direction 和 wrap 两个属性的缩写，先 direction，后 wrap
  - **justify-content:**项目在主轴上的对齐方式，更换主轴之后，这个属性的效果也会发生变化（可以理解为如何划分项目在主轴上的空白区域）
  - **align-items:**项目在交叉轴上的对齐方式，注意 baseline 和 stretch，
    - baseline 会和项目的第一行的文本进行对齐，
    - stretch 会在项目没有设置高度的情况下，默认撑满容器的高度，如果更换交叉轴效果也会发生变化
  - **align-content:** 定义了多根轴线对齐的方式，如果项目只有一根轴线，改项目不起作用
    > > 暂时没有体会过，需要体会知乎进行总结

## **常见的弹性元素属性设置:**

- $\color{blue}{order:}$
  定义当前元素的顺序，小->大，值越小，越靠前
- $\color{blue}{flex-grow:}$
  项目的放大倍数，注意对应的公式
- $\color{blue}{flex-shrink:}$
  项目的缩小比例，与上述同理
- $\color{blue}{flex-basis:}$
  设置项目进行缩放之前，占据的主轴空间，浏览器根据这个属性计算主轴的剩余空间，来决定后续的缩放是否可以进行，默认值为 auto，即改元素本来的大小
- $\color{blue}{flex:}$
  grow shrink basis 的缩写
- $\color{blue}{align-self:}$
  设置当前元素单独的对齐方式，不影响其他元素，可覆盖弹性盒的 align-item 设置，默认值是 auto，继承父元素的 align-item，如果没有父元素，则等同于 stretch
