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
  - slice(begin,end):浅拷贝数组元素，两个参数都是可选，默认是从 0 到数组末尾，两者都接受负值，表示从数组末尾进行对应的浅复制
    > > 注意这个是浅复制，可能会存在更改原数组的赋值情况
  - join(str):将数组中的各个元素通过指定的字符串进行拼接，使之形成一个字符串，str 默认参数为逗号
    > > 如果是多维数组，会嵌套调用 join 方法，如果数组元素是对象，则会返回[object Object]字符串
  - toLocaleString():首先是数组中的每个元素调用自身的 toLocaleString()方法将自身转换为字符串之后，再调用数组的 join 方法，将整个数组转换成为一个字符串
  - toString():不推荐使用，与 join 方法功能相同
    > > 当数组和字符串进行操作时，会调用这个方法对于数组进行转换
  - concta(arrX,...,arrX):合并数组，参数可以是一个数组对象，也可以是一个数组，最少需要有一个参数
    > > 可以使用 ... 扩展运算符对于数组进行便捷合并，而不需要使用上述方式
  - indexOf(searchElement, fromIndex):从数组中查找 searchElement 对应的下标，如果没有对应元素，则返回 -1; fromIndex 参数可选，规定开始查找的位置
    > > 数组的 indexOf 使用严格相等(===)进行匹配，必须要匹配完数组的所有元素才能得到结果
    > > indexOf 不能识别 NaN
    > > 使用场景:数组去重;根据获取的数组下标对于值进行操作;判断对应值是否存在，进行对应的操作
  - lastIndexOf(searchElement，fromIndex):从后向前进行查找，查找这个元素对应的下标
    > > fromIndex:正值(如果大于数组长度，则查找整个数组);负值(从后向前查找，如果绝对值大于数组长度，则返回-1，整个数组都不会被查找)
  - includes(searchElement，fromIndex):检测数组中是否包含当前元素，返回 boolean;fromIndex 表示开始查找的位置，如果大于数组长度，则不会被查找
    > > 区别 indexOf 和 includes:includes 是为了弥补 indexOf 的方法缺陷而产生的;indexOf 不能识别 NaN;indexOf 不够语义化，需要判断返回值结果是否为-1,而 includes 直接返回对应的布尔值,语义化较强
- 数组的遍历方法(12 个)

  > > forEach()、every()、some()、filter()、map()、reduce()、reduceRight()、find()、findIndex()、findLast()、findLastIndex()、keys()、values()、entries()、

  - forEach((item,index,array)=>{}):按照升序遍历数组中各个元素(含有效值的元素,不操作空值)，并对于每个元素执行一边回调函数的操作
    1. 对于空数组是不会执行回调函数的
    2. 对于已在迭代过程中删除的元素，或者空元素会跳过回调函数
    3. 遍历次数再第一次循环前就会确定，再添加到数组中的元素不会被遍历。
    4. 如果已经存在的值被改变，则传递给 callback 的值是遍历到他们那一刻的值。
    5. forEach 也可以为内部函数绑定 this 对象，作为第四个参数，默认值为 undefined
    6. forEach 无法中止循环，return 无法中止当前循环,只能 return 本次回调，执行下一次回调;
    7. 每次回调都是返回 undefined，即使通过 return 返回了一个值
  - every((item,index,array)=>{}):遍历数组中的各个元素，判断数组中每个元素是否都满足回调函数对应的条件，如果都满足，则返回 true，如果有一个不满足，则返回 false
    1. 同样可以传入第四个参数，指定当前回调函数内部的 this 指向;
  - some((item,index,array)=>{}):数组中是否有值可以满足回调函数对应的条件,同样可以传递进入对应的 this 值作为回调函数的 this 指向,如果有一个满足的元素，就返回 true
  - filter(()=>{}):过滤原始数组，返回满足条件的元素，同样可以绑定 this 对象
  - map(()=>{}):遍历数组中的所有元素，对于数组中的每个元素都进行对应的操作，返回一个新数组，同样可以绑定 this 对象
  - reduce((total,currentValue,index,array)=>{},initValue):对累加器(initvalue)和数组中每个元素都执行回调函数的操作，最终合并为一个值
    1. 如果 initialValue 在调用 reduce 时被提供，那么第一个 total 将等于 initialValue，此时 currentValue 等于数组中的第一个值；
    2. 如果 initialValue 未被提供，那么 total 等于数组中的第一个值，currentValue 等于数组中的第二个值。此时如果数组为空，那么将抛出 TypeError。
    3. 如果数组仅有一个元素，并且没有提供 initialValue，或提供了 initialValue 但数组为空，那么回调不会被执行，数组的唯一值将被返回。
  - reduceRight(()=>{},initValue):与 reduce 方向相反，其余完全相同
  - find((currentValue,index,array)=>{}):找到数组中满足条件的第一个元素，并返回该元素，如果没有符合条件的元素，则返回 undefined
  - findIndex((currentValue,index,array)=>{}):找到数组中满足条件的第一个元素，并返回该元素对应的下标，如果没有符合条件的元素，则返回-1
  - findLast 和 findLastIndex 与 find 的区别仅在于查找起点和超找方向的不同，fiindLast 是从后向前查找
  - keys()
  - values()
  - entries():上述三个方法都返回一个 Array Iterator 对象，根据方法的不同返回不同的值，key 方法返回对应的下标值，value 返回对应的元素值，entries 返回对应的数组
  - for..of:中途退出，使用 break 进行退出

  ```typescript
  // 可以手动调用遍历器对象的next方法，进行遍历
  const letter = [1, 2, 3];
  letter.next().value; // [0,'1']
  letter.next().value; // [1,'2']
  letter.next().value; // [2,'3']
  ```

- 新的实例方法(9 个)
  > > flat()、flatMap()、at()、toReversed()、toSorted()、toSpliced()、with()、group()、groupToMap()
  - flat(number):扁平化数组，number 默认值为 1，会自动跳过空元素,不修改原数组，会对应返回一个新数组
  - flatMap(()=>{}):对于数组中的每个元素执行一次当前的回调函数，相当于数组的 map 方法，同时对于返回的新数组执行一次 flat 方法，该方法只能展开一层数组，该方法同样接受 this 参数
  - at(int):接受一个整数作为参数，返回对应位置的成员，并支持负索引。这个方法不仅可用于数组，也可用于字符串和类型数组，如果参数超过了数组长度，则会返回 undefined
  - group((currentItem,index,array)=>{}):根据分组函数执行的结果，将数组成员进行分组
  ```javascript
  const array = [1, 2, 3, 4, 5];
  const odd = { odd: true };
  const even = { even: true };
  array.group((num, index, array) => {
    return num % 2 === 0 ? even : odd;
  });
  //  Map { {odd: true}: [1, 3, 5], {even: true}: [2, 4] }
  ```
  - groupToMap():该方法与 group 方法完全一致，唯一的区别是 group 方法返回一个数组，给方法返回一个 map 对象，map 对象可以使用任意数据类型作为键名，所以不会最后的分组结果返回的是什么都会被作为分组组名
- 替换的实例方法(尚在提案中)
  > > 很多数组的传统方法会改变原数组，比如 push()、pop()、shift()、unshift()等等。数组只要调用了这些方法，它的值就变了。现在有一个提案，允许对数组进行操作时，不改变原数组，而返回一个原数组的拷贝。
  - toReversed():对应 reverse，用来颠倒数组中的元素顺序
  - toSorted(()=>{}):对应 sort，用来对于数组中的元素进行排序
  - toSpliced(start,deleteCount,...items):对于 splice，用来在指定位置，删除指定数量的成员，并插入新成员
  - with(index,value) === splice(index,1,value):对应 splice，用来将指定位置的成员替换为新值
    > > 上述四个方法对应原有的方法，含义和用法完全一样，唯一不同的是不会改变原数组，而是返回原数组操作后的拷贝

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
