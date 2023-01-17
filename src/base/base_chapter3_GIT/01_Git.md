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
