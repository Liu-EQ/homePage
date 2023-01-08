# Vite 入门

## vite 初始使用

- 创建项目的命令
  > > yarn vite
  - 之后选择对应的项目选项即可
- 渲染原理：
  ```javascript
  <!-- 重点的渲染原理 -->
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  ```
  - 使用对应的 render 方法
  - 首先是选择的对应的承载的 dom 元素

>> 只是入门，还需要很多的更新
