# JS

## 基础

- 对于异步的操作

- canvas 的基础知识

- 正则基础 正则方法以及字符串方法，选取对应的数据

- 回调函数和闭包

- 字符串方法（返回值，参数，实现功能）

- 数组方法（返回值，参数，实现功能）

- for-of 中使用异步
- 理解异步
- 常见的数组方法不能使用异步
- 箭头函数

  - 箭头函数如果要返回对象字面量，需要使用()

  ```javascript
  const getValueWrong = () => {
    a: 1;
  }; // 错误的语法
  <!-- 上述代码中的对象会被视为一个代码块，内部的代码会被视为一系列的语句，因此如果要返回一个对象的字面量，需要使用()将对象字面量进行包裹 -->
  const getValueCorrect = () => ({ a: 1 }); // 正确的语法
  ```

  - 箭头函数支持默认参数和剩余参数，以及参数列表结构

  ```javascript
  (param1, param2, ...param) => {
    statements;
  };
  <!-- 支持...结构剩余参数 -->
  (param1 = 1,param2 = 2,...param)=>{statements}
  <!-- 支持默认参数设置 -->
  ([a,b] = [1,2],{x:c} = {x:a+b})=>a+b+c
  <!-- 支持列表参数结构 -->
  ```

  - 箭头函数的两大作用

    - 简化匿名函数的写法，避免混乱的 this 指向 - 对于 this 指向： > > 已经证明：this 被证明是令人厌烦的面向对象风格的编程 - 箭头函数没有自己的 this 指向，如果需要获取 this，会向上向父级作用域中获取 this，且使用 call 或者 appaly 方法调用箭头函数时，也不能为其绑定 this

    ```javascript
    var adder = {
      base: 1,

      add: function (a) {
        var f = (v) => v + this.base;
        return f(a);
      },

      addThruCall: function (a) {
        var f = (v) => v + this.base;
        var b = {
          base: 2,
        };

        return f.call(b, a);
      },
    };
    console.log(adder.add(1)); // 输出 2
    console.log(adder.addThruCall(1)); // 仍然输出 2
    ```

    - 不绑定 arguments，使用...结构剩余参数，都是比 arguments 更好的选择

  - 箭头函数更适合使用在那些本来需要匿名函数的地方，并且他不能用作构造函数，因此和 new 关键字连用时会抛出错误
  - 箭头函数没有 prototype 属性
  - 箭头函数不能使用 yeild 方法，除非是嵌套在允许使用的函数中
    > > 不理解
  - 箭头函数独特的解析规则，虽然箭头函数中的箭头不是运算符，但是却又自己独特的解析规则

  ```javascript
    callback = callback || ()=>{}     // 错误的语法
    callback = callback || (()=>{})   // 正确的语法
  ```

  - 箭头函数有标注的 let 作用域，其内部是一个函数作用域
  - 没有自己的 this，arguments，super 或 new.target，
  - 箭头函数不是没有 arguments，而是没有自己的 arguements，
  - 因为箭头函数没有自己的作用域，所以箭头函数如果使用 arguments 获取外层传递进来的函数参数，会向上寻找自己的父级作用域中的参数， 且箭头函数的 this、super、new.target 都没有自己的，如果调用，都会从父级作用中进行获取

  ```javascript
    function fn1(){
      ()=>{
        console.log(this,arguments)
      }
    }
    fn1([1,2,3])
    <!-- 上述输出的结果是fn1的arguments和this -->
  ```
