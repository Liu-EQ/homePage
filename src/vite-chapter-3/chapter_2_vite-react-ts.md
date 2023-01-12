```javascript
const nodeDeepClone = (origin: any) => {
  let originNew = origin.cloneNode(true);
  //进行attr属性的复制过来  同理，想在克隆的时候复制其他同样可以加进来
  if (origin.attributes != null) {
    for (let index = 0; index < origin.attributes.length; index++) {
      var attr = origin.attributes[index];
      var name = attr.name;
      var value = attr.value;
      originNew.setAttribute(name, value);
    }
  }

  //克隆子标签
  const originChildNodes = origin.childNodes;
  for (let index = 0; index < originChildNodes.length; index++) {
    const node = originChildNodes[index];
    if (node != null) {
      //递归进行子标签的克隆
      var childNode = nodeDeepClone(node);
      originNew.appendChild(childNode);
    }
  }
  return originNew;
};
```

```javascript
const getPPI = useCallback(() => {
  // create an empty element
  const div: HTMLElement = document.createElement("div");
  // give it an absolute size of one inch
  div.style.width = "1in";
  // append it to the body
  var body: HTMLBodyElement = document.getElementsByTagName("body")[0];
  body.appendChild(div);
  // read the computed width
  var ppi = document.defaultView
    .getComputedStyle(div, null)
    .getPropertyValue("width");
  // remove it again
  body.removeChild(div);
  // and return the value
  return parseFloat(ppi);
}, []);
```