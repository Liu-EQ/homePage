# HTML + CSS

- 对于 dom 的理解
  - ref
- ## 获取 dom 的 css 样式
- 获取 dom 的子节点
- 克隆 dom 元素

# JS

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

# Git

## 基础概念：

- workspace: 工作区
- staging area: 暂存区
- local repository: 本地仓库
- remote repository: 远程仓库

- 基础命令：
  git init: 初始化仓库
  git add . :将工作区文件存储到暂存区
  git commit : 将暂存区的内容添加到本地仓库
  git status : 查看仓库当前状态，显示有变更的文件
  git diff : 比较工作区和暂存区文件的不同
  git reset :回退版本
  git rm : 将指定文件从工作区和暂存区删除
  git mv : 移动或者重命名工作区文件
- 提交记录
  git log: 查看提交记录
  git blame 指定文件: 以列表形式查看指定文件的修改记录
- 远程操作
  git remote : 对于远程仓库的操作
  git fetch : 从远程获取代码库
  git pull : 拉取远程仓库代码并且和本地仓库进行合并
  git push : 推送本地仓库代码并且和远程仓库进行合并

## git checkout 对应的版本号: 切换到某次提交

## git reset 回退版本

- 对应的参数和回退方式
  - 语法格式：git reset [--soft | --mixed | --hard] [HEAD]
    - --mixed 默认参数，默认不用带，重置暂存区文件（add 之后），与上一次提交保持一致，工作区（保存之后）文件保持不变
      - 🌰：
      - git reset HEAD^ 回退到上次提交
      - git reset HEAD^ hello.tsx 回到改文件到上次提交
      - git reset 052e 回退到指定版本
    - --soft 对应版本号（HEAD~3） 参数用于回退到某个版本
    - --hard HEAD 撤销工作区中所有未提交的修改内容，直接回退暂存区与工作区，并删除之前的所有的提交信息
      > > git reset --hard origin/分支名 抛弃本地分支，直接拉取远程分支的最新代码

## git fetch 命令用于从远程获取代码库。

## git revert 取消指定的某次提交内容

- git revert <commit id>: git 会生成一个新的 commit，将指定的 commit 内容从当前分支上撤除

## 基础知识：

- merge 之前 git pull
- 不能 merge dev 的代码
- 不能直接在 hotfix 上 merge
- 不要频繁在 hotfix 上 merge
- 所有功能只有上线的时候才能向 hotfix 上 MR

# 调试

- ## 性能分析
- 查看对应的调用栈
- 浏览器的对应的渲染
