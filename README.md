# 陈宏辉 - 个人学术网站

一个专业的学术作品集网站，展示研究兴趣、学术成果和摄影作品。

## 🌐 在线访问
访问地址：[https://choraschan.github.io](https://choraschan.github.io)

## 📋 主要功能

- **响应式设计**：在桌面端、平板和移动设备上完美呈现
- **研究展示**：展示心理学人工智能和临床心理学研究
- **学术成果**：学术论文和会议演讲
- **摄影画廊**：个人、风景和纪实摄影作品，带灯箱浏览器
- **侧边导航**：跟随滚动的固定导航栏
- **交互界面**：平滑滚动、悬停效果和动画

## 🛠️ 使用技术

- HTML5
- CSS3（包含 CSS 变量和 Flexbox/Grid）
- 原生 JavaScript
- Google Fonts（Crimson Text、Lato）

## 📁 项目结构


```
.
├── index.html              # 主页
├── photography.html        # 摄影画廊页面
├── styles.css             # 主样式表
├── script.js              # JavaScript 功能
├── CV-Honghui Chen-0925.pdf  # 个人简历
├── pic/                   # 图片目录
│   ├── BG.jpeg           # 主页背景
│   ├── BG2.JPG           # 摄影页背景
│   ├── CV.png            # 简历图标
│   ├── personal2.jpg     # 个人照片
│   ├── logos/            # 机构标志
│   ├── Personal/         # 个人摄影
│   ├── landscape/        # 风景摄影
│   └── Documentary/      # 纪实摄影
└── README.md             # 本文件
```

## 🚀 部署到 GitHub Pages

### 步骤 1：创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 **"+"** 图标
3. 选择 **"New repository"**（新建仓库）
4. 仓库名称：`ChorasChan.github.io`（必须是这个格式）
5. 设置为 **Public**（公开）
6. **不要**勾选初始化 README（我们已经有了）
7. 点击 **"Create repository"**（创建仓库）

### 步骤 2：初始化 Git 并推送

在项目目录打开终端并运行：

```bash
# 初始化 git 仓库
git init

# 添加所有文件
git add .

# 提交并附上说明
git commit -m "Initial commit: Personal academic website"

# 添加远程仓库（使用 SSH 方式）
git remote add origin git@github.com:ChorasChan/ChorasChan.github.io.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步骤 3：启用 GitHub Pages

1. 访问您的仓库：`https://github.com/ChorasChan/ChorasChan.github.io`
2. 点击 **"Settings"**（设置）标签
3. 在左侧边栏找到 **"Pages"** 部分
4. 在 **"Source"**（来源）下拉菜单中选择 **"main"** 分支
5. 点击 **"Save"**（保存）
6. 等待 1-2 分钟完成部署

您的网站将在以下地址上线：**https://choraschan.github.io**

## 🔄 更新网站

每次修改网站内容后：

```bash
# 暂存所有更改
git add .

# 提交更改
git commit -m "更新：修改说明"

# 推送到 GitHub
git push
```

GitHub Pages 会在 1-2 分钟内自动重新构建并部署您的网站。

## 📝 自定义

### 更新个人信息

- 编辑 `index.html` 修改主页内容
- 修改 `styles.css` 调整样式
- 更新 `script.js` 改变功能

### 添加照片

1. 将图片放入 `pic/` 中的相应文件夹
2. 更新 `photography.html` 引用新图片
3. 按照现有结构添加网格项目

### 更新简历

替换 `CV-Honghui Chen-0925.pdf` 为最新的简历文件（保持相同文件名或更新 `index.html` 中的链接）

## 🌟 网站主要部分

1. **首页**：个人介绍和社交媒体链接
2. **研究兴趣**：研究重点领域
3. **技能**：技术能力
4. **教育背景**：学术经历
5. **学术成果**：研究论文
6. **会议**：演讲和报告
7. **荣誉奖项**：获得的认可和荣誉
8. **摄影**：视觉作品集
9. **工作经历**：专业背景
10. **关于我**：个人故事和理念

## 🔒 关于文件隐私

**重要提示**：GitHub Pages 仓库必须是公开的（免费账户），所有文件都可以通过 URL 访问。

如果您有不想公开的文件：
- 将它们添加到 `.gitignore` 文件中（只保存在本地）
- 或者创建另一个私有仓库存放敏感文件

## 📧 联系方式

- **邮箱**：网站上已列出
- **GitHub**：[https://github.com/choraschan](https://github.com/choraschan)
- **LinkedIn**：[Choras Chan](https://www.linkedin.com/in/choras-chan-33b7502b7/)

## 📄 许可证

© 2025 陈宏辉。本作品采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 许可协议。

---

**注意**：确保所有图片文件都正确上传到 GitHub。超过 100MB 的大文件需要使用 Git LFS 处理。

