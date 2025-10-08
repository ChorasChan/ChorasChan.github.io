# 🚀 快速部署指南

## 首次部署到 GitHub Pages

### 方法一：使用命令行（推荐）

在终端中执行以下命令：

```bash
cd "/Users/choras/Library/CloudStorage/OneDrive-csu.edu.cn/PROJECT/PHD/个人网页"

# 1. 初始化 Git 仓库
git init

# 2. 添加所有文件
git add .

# 3. 首次提交
git commit -m "Initial commit: Personal academic website"

# 4. 添加远程仓库（替换 YOUR_USERNAME 为 choras）
git remote add origin https://github.com/choras/choras.github.io.git

# 5. 推送到 GitHub
git branch -M main
git push -u origin main
```

### 方法二：使用 GitHub Desktop

1. 打开 GitHub Desktop
2. File → Add Local Repository
3. 选择项目文件夹
4. 点击 "Publish repository"
5. 仓库名设置为：`choras.github.io`
6. 取消勾选 "Keep this code private"
7. 点击 "Publish"

## 在 GitHub 上启用 Pages

1. 访问：https://github.com/choras/choras.github.io
2. 点击 Settings
3. 左侧菜单找到 Pages
4. Source 选择 `main` 分支
5. 点击 Save

等待 1-2 分钟，网站将发布在：**https://choras.github.io**

## 后续更新网站

每次修改后，运行：

```bash
./deploy.sh "你的更新说明"
```

或者手动：

```bash
git add .
git commit -m "更新说明"
git push
```

## 检查部署状态

访问：https://github.com/choras/choras.github.io/actions

可以看到 GitHub Pages 的构建状态。

## 常见问题

### Q: 404 错误
A: 确保仓库名完全是 `choras.github.io`（用户名+.github.io）

### Q: 图片不显示
A: 检查图片路径，确保所有图片文件都已推送到 GitHub

### Q: 更新后网站没变化
A: GitHub Pages 有缓存，等待 2-3 分钟，或者清除浏览器缓存（Cmd+Shift+R）

### Q: 推送失败
A: 可能需要配置 GitHub 凭证：
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

或使用 Personal Access Token 作为密码。

## 自定义域名（可选）

如果你有自己的域名：

1. 在项目根目录创建 `CNAME` 文件
2. 写入你的域名（如：`www.chorasc.com`）
3. 在域名提供商处添加 CNAME 记录指向 `choras.github.io`

## 需要帮助？

- GitHub Pages 文档：https://docs.github.com/pages
- Git 教程：https://git-scm.com/doc
