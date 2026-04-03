# GitHub + Vercel 部署教程

## 第一步：创建 GitHub 账号（如果没有）

1. 访问 https://github.com
2. 点击右上角 **Sign up** 注册账号
3. 填写用户名、邮箱、密码
4. 验证邮箱

---

## 第二步：创建 GitHub 仓库

1. 登录 GitHub 后，点击右上角 **+** 号
2. 选择 **New repository**
3. 填写：
   - Repository name: `jiujiu-learn-words`
   - Description: `纠纠学字 - 儿童汉字笔顺学习应用`
   - Public: 选择 **Public**（免费）
   - 不要勾选 **Add a README file**
4. 点击 **Create repository**

复制显示的仓库地址，格式类似：
```
https://github.com/你的用户名/jiujiu-learn-words.git
```

---

## 第三步：安装 Git（如果没有）

1. 访问 https://git-scm.com/downloads
2. 下载 Windows 版本并安装
3. 安装时一路点击 Next（默认设置即可）

---

## 第四步：配置 Git 用户信息

打开命令提示符（CMD）或 PowerShell，运行：

```bash
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的GitHub邮箱"
```

---

## 第五步：初始化项目并推送

在 PowerShell 中运行：

```bash
# 进入项目文件夹
cd C:\Users\caohongbo\WorkBuddy\Claw

# 初始化 Git 仓库
git init

# 添加所有文件到暂存区
git add .

# 提交代码
git commit -m "初始版本：纠纠学字"

# 重命名分支为 main
git branch -M main

# 关联远程仓库（把下面地址换成你自己的）
git remote add origin https://github.com/你的用户名/jiujiu-learn-words.git

# 推送代码到 GitHub
git push -u origin main
```

**首次推送可能需要登录**：
- 输入 GitHub 用户名和密码（或 Personal Access Token）
- 如果提示需要 Token，按下面的第六步创建

---

## 第六步：创建 Personal Access Token（如果需要）

GitHub 不再支持密码推送，需要 Token：

1. 登录 GitHub
2. 点击右上角头像 → **Settings**
3. 左侧菜单最下方 → **Developer settings**
4. **Personal access tokens** → **Tokens (classic)**
5. 点击 **Generate new token** → **Generate new token (classic)**
6. 填写：
   - Note: `Vercel Deploy`
   - Expiration: 选择 90 days 或 No expiration
   - 勾选 **repo**（所有权限）
7. 点击 **Generate token**
8. **复制 Token（只显示一次，务必保存！）**

推送时如果需要密码，粘贴这个 Token。

---

## 第七步：部署到 Vercel

1. 访问 https://vercel.com/new
2. 点击 **Continue with GitHub**
3. 授权登录 GitHub
4. 选择刚才创建的 `jiujiu-learn-words` 仓库
5. 填写：
   - Project Name: `jiujiu-learn-words`
   - Framework Preset: **Other**
   - Root Directory: 留空（默认）
   - Build and Output Settings: 保持默认
6. 点击 **Deploy**
7. 等待 30-60 秒，部署完成！

部署成功后，Vercel 会显示访问链接，格式为：
```
https://jiujiu-learn-words.vercel.app
```

---

## 第八步：手机访问

在 iPhone Safari 浏览器中输入：
```
https://jiujiu-learn-words.vercel.app
```

**添加到主屏幕**：
1. 点击底部分享按钮
2. 选择 **添加到主屏幕**
3. 就像 App 一样打开了！

---

## 后续更新代码

有任何修改后，在 PowerShell 运行：

```bash
cd C:\Users\caohongbo\WorkBuddy\Claw
git add .
git commit -m "更新说明"
git push
```

推送到 GitHub 后，Vercel 会**自动部署新版本**，无需手动操作！

---

## 常见问题

**Q: 推送时提示 "fatal: remote origin already exists"**
```bash
git remote set-url origin https://github.com/你的用户名/jiujiu-learn-words.git
git push -u origin main
```

**Q: 推送时提示 "Updates were rejected"**
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

**Q: 忘记 Token 了**
重新按第六步创建一个新的 Token。

---

如有问题，随时找我！
