# HTML

- HTML 超文本标记语言，HyperText Markup Language，用来描述网页的结构
  > > XML
- DOM 是 Document Object Model 的缩写，是网页对象模型，即是对于 html 所构成的网页的对象描述，是脚本（javascript）所操作的网页对象模型
  - DOM 已经实现了对于 HTML 网页的节点操作，属性操作，事件操作和内容操作等接口和方法，可以理解为所有对于 html 进行动态操作的脚本（javascript）都是对于 DOM 的操作
    > > 即 javascript 无法直接操作 html，因此需要 html 所描述的网页的文档结构抽象成一个 js 可以直接操作的对象
    > > 同时，html 提供的操作类型也过少，因此 DOM 提供一系列丰富的 api，支持对于网页文档对象模型进行操作，最后再将操作完成的 dom 对象渲染到网页上
- Element 元素 是对于节点（Node）的实现，是所有文档对象（DOM 元素）的基类
  - 其实现了节点接口（Node）对接口操作，例如节点的增删改查
  - 扩展了对于节点的属性操作，例如对于 className 和 attribute 的操作
- Node 接口（interface）继承自父类接口 EventTarget **Node 主要描述了节点操作的方法和属性**，例如描述了操作父节点 parentNode、子节点 childNode 和兄弟节点 previouseSibling/nextSibling 的操作
- EventTarget 事件接口 用于注册和触发事件描述的接口，也是最基本的事件监听器的接口

> > 将网页比作一个摩天大楼
> >
> > > HTML 是这个摩天大楼的钢筋混凝土结构，描述了这个大楼的样子
> > > DOM 是这个大楼的包工头，承担实际需求的实现，即开发商的要求都是告诉给包工头，然后包工头进行实现，做着管理操作 HTML 的事情。
> > > Element 是这个大楼的装修工人，承接包工头的需求，对于大楼进行开发，主要实现 DOM 中样式和内容的操作。
> > > Node 是这个大楼的建筑工人，主要实现结构的操作。
> > > EventTarget 是这个大楼的电力建筑工人， 就是构建摩天大楼的电力工人，主要是事件的注册和触发。

- 其中 DOM 是 Element 的扩展实现，Element 是 Node 接口的一种实现，而最基本的 Node 接口是继承于底层的 EventTarget 事件接口。

- DOM 里相关事件事件监听和操作是，继承于 EventTarget 实现的。
- DOM 里相关属性和内容操作是，继承于 Element 实现的。
- DOM 里相节点操作是，继承于 Node 实现的。

## DOM

- 对于 dom 的理解

## Node

- Node 是一个接口，各种类型的 bom-api 对象，会从这个接口继承，它允许我们使用相似的方式对待这些不同类型的对象，比如，继承同一组方法，或者用同样的方式测试

  > > 尚不理解

  - 继承自 Node 的方法和属性：

    - Document、Element、DocumentFragment、 DocumentType、Attr、CharacterData（which、Text、comment、）
      > > 还有很多没有使用过的属性和方法

  - Node 的属性

    - Node 从 EventTarget 中继承属性
    - Node.baseURI
      返回一个表示 base URL 的 DOMString(字符串)。
      > > 不同语言中的 base URL 的概念都不一样。在 HTML 中，base URL 表示协议和域名，以及一直到最后一个'/'之前的文件目录。
    - Node.childNodes
      返回该节点的实时的所有的 NodeList，NodeList 是动态变化的，如果该节点的子节点发生了变化，那么对应的 NodeList 会实时更新
    - Node.firstChild 返回该节点的第一个子节点，如果当前节点没有子节点，则返回 null
    - Node.isConected 返回一个 boolean 值来检测该节点是否已经连接到一个上下文对象
    - Node.lastChild 返回当前节点的最后一个子节点
    - Node.lastSibiling 返回该节点同级的下一个子节点
    - Node.nodeName 返回一个包含当前节点名字的 DomString（字符串）
      > > 节点的名字的结构和节点类型不同。比如 HTMLElement 的名字跟它所关联的标签对应，就比如 HTMLAudioElement 的就是 'audio' ，Text 节点对应的是 '#text' 还有 Document 节点对应的是 '#document'。
    - Node.nodeType 返回一个与当前节点类型对应的无符号短整型的值，查表得值
    - Node.nodeValue 返回或者设置当前节点的节点值
    - Node.ownerDocument 返回这个节点所属的 Document 对象，如果这个节点没有所属的 Document 对象，则返回 null
    - Node.parentNdoe 返回当前节点的父节点，如果没有，则返回 null
    - Node.parentElement 返回当前节点的父元素，如果没有则返回 null
      > > 上述两者的区别
    - Node.previousSibling 返回当前节点的兄节点
    - Node.textConten 返回或者设置当前节点及其所有后代节点的文本内容

  - Node 的方法

    - 从 EventTarget 父类中继承方法
    - Node.appendChild() 将指定的节点作为当前节点的最后一个子节点插入 childNodeList 中
    - Node.cloneNode() 克隆当前节点，传入 true 或者 false，决定是否进行深克隆
    - Node.compareDocumentPosition() 比较当前节点与传入节点的位置
    - Node.contains() 返回一个 boolean，判断传入的节点是否是当前节点的后代节点
    - Node.getRootNode() 获取当前节点所在 DOM 树的根节点
      > > 如果 shadow root 节点存在的话，也可以在返回的节点中包含它。
    - Node.hasChildNodes() 返回一个 boolean，判断当前节点是否包含子节点
    - Node.insertBefore(targetNode，referenceNode) 在当前节点下新增一个节点，并使该节点位于参照节点之前
    - Node.isDefaultNameSpace()
      > > 不悟
    - Node.isEquaNode() 比较两个节点是否相同
      > > 没使用过，不悟
    - Node.removeChild() 移除指定的子节点
    - Node.replaceChild() 对选定的节点，替换一个子节点 Node 为另外一个节点。

  - 获取 dom 的子节点

    - ref
      - 目前常用的方式是通过 ref 进行获取，将 ref 绑定到某个元素，通过 ref.current 获取到某个当前绑定的 dom 元素，等同于通过原生 JS 选择器获取到对应的 dom 元素
      - ref.current.children 或者 ref.current.childList
      - Node.childNodes 该方法返回指定节点的子节点的集合，该集合为即时更新的集合（live collection），返回值是 nodeList 类型，且为只读类型
        > > 使用上述方式时可以先使用 hasChildNodes()方法判断当前元素是否还有子元素
        > > 因为 childNodes 会实时获取到最新的子节点列表，所以每次都会得到最新的子节点，即通过其他方式调用该节点列表的子节点时，都能获取到最新的数据
        > > 上述方式获取到的子节点列表中的数据是一个节点，而不是一个字符串，因此若想要获取到对应的子节点的真实数据，需要使用对应的属性进行获取

  - 克隆 dom 元素

## canvas

## 获取 dom 的 css 样式
