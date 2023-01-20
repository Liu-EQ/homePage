# JS 基础

## 数组方法

### 是否改变原数组

- 两个 ES6 的有趣的方法

  - Array.of()
    - 返回由参数组成的新数组
  - Array.form()
    - 将两类对象转换成为数组
    - 参数：
      - 待转换成数组的对象，必填
      - 对于每个元素进行的操作，可选
      - 绑定的 this 对象，可选

- 会改变原数组的方法(9 个)

  > > ES5：splice() 、sort()、push()、pop()、shift()、unshift()、reverse()
  > > ES6：copyWithin()、fill()

  - splice(index,howmany,item1,...,itemX):从数组制定下标删除指定长度的元素，并用新元素替代，index 和 howmany 是必选参数，替换元素是可选参数
    - 规则：
      - 数组元素不够，会删除到最后一个元素
      - 操作的元素包括 index 对应的元素
      - 可以添加很多个元素
      - 添加到位置是在 index 对应的元素之前
  - sort(callback):传入一个排序的回调函数，回调函数决定数组元素排列的顺序

    ```typescript
    // a - b < 0, a将排序到b的前面, 按照a的大小进行排序
    const array1 = [1, 2, 3, 4, 5];
    array1.sort((a, b) => {
      return a - b;
    });
    // b - a > 0, b将排序到a到前面, 按照b的大小进行排序
    const array2 = [1, 2, 3, 4, 5];
    array2.sort(())=>{
      return b - a;
    }
    ```

    ```typescript
    // 对象型数组排序
    const array3 = [{ id: "1", name: "tom" }];
    array3.sort((a, b) => {
      if (a.id === b.id) return a.name - b.name;
      else return b.name - a.name;
    });
    ```

    > > sort 的回调函数可以自定义，实现自定义数组排序

  - pop():数组尾部删除一个元素，返回被删除的元素
  - push():从数组尾部添加一个元素，返回新数组的长度
  - shift():从数组头部删除一个元素，返回被删除的元素
  - unshift():从数组头部添加一个元素，返回新数组的长度
  - reverse():用于颠倒数组中的元素
  - copyWithin(target,start,end):target 是初始位置，start 和 end 是选中的元素，将选中的元素从 target 位置开始替换，如果 target 为负值，则从后向前进行替换
  - fill(item,start,end): 用参数(item)填充数组，start 和 end 可选，替换指定长度的元素

- 不会改变原数组的方法(8 个)
  > > ES5:slice()、join()、toLocaleString()、toString()、concat()、indexOf()、lastIndexOf()、
  > > ES7: includes()
  - slice()
  - join()
  - toLocaleString()
  - toString()
  - concta()
  - indexOf()
  - lastIndexOf()
  - includes()
- 数组的遍历方法(12 个)
  > > forEach()、every()、some()、filter()、map()、reduce()、reduceRight()、find()、findIndex()、keys()、values()、entries()、
  - forEach()
  - every()
  - some()
  - filter()
  - map()
  - reduce()
  - reduceRight()
  - find()
  - findIndex()
  - keys()
  - values()
  - entries()

### 数组方法对应的功能

- 数组转换方法
  - valueOf()
    返回数组对象本身，和直接输出数组对象是一样的
  - toString()
    将数组对象转换成字符串进行输出
  - join()
    用指定分割符将数组元素转换成为字符串，数组元素之间的连接符可以作为参数传递给这个方法，不传入参数默认为逗号
- 静态数组方法
  - Array.isArray()
    判断传入的参数是否为数组
- 增删方法
  - push()
    尾插，返回数组长度
  - pop()
    尾删，返回被删除的元素
  - shift()
    头删，返回被删除的元素
  - unshift()
    头插，返回插入之后的数组长度
- 迭代方法
  - filter()
    遍历数组中的各个元素，会生成一个新数组，根据传入的回调函数的结果来放入新数组，如果通过通过检测就会放入新数组，如果没有通过检测就不会放入新数组，回调函数有三个参数(item,index,arr)
  - forEach()
    同样传入一个回调函数，不会生成新数组，也不回改变原数组
  -
- 位置方法
  - indexOf()
    从数组中查找这个对应的元素，并返回当前元素的下标
  - lastIndexOf()
    从数组中自后向前查找当前对应的元素，并返回当前元素对应的下标
- 截取方法
  - slice()
    截取数组中的元素，不改变原数组，会返回一个新数组，传入的参数为开始和结束位置(不指定结束位置的时候，会从 start 截取到最后)(包头不包尾)
  - splice()
    截取并替换当前元素，修改原数组，返回被删除的元素组成的新数组

## 字符串方法

- 截取方法
  - slice() 包头不包尾
  - subString() 包头不包尾
  - substr() 从开始位置，截取指定长度的字符串
- 位置方法
  - indexOf()
- 替换方法
- 字符方法
- split()
- trim()
- charCodeAt()
- str[]

## 对象方法

## 正则表达式
