# Netlify 部署教程（超简单）

## 为什么换 Netlify？

- ✅ 支持**拖拽上传**，不需要 Git
- ✅ 部署速度超快
- ✅ 完全免费
- ✅ 自动 HTTPS

---

## 部署步骤

### 第一步：准备文件夹

确保你的项目文件夹里有这些文件：
- `hanzi-stroke-preview.html`（主页面）
- `index.html`（根目录重定向）
- `README.md`

**重要**：文件夹路径：
```
C:\Users\caohongbo\WorkBuddy\Claw
```

### 第二步：上传到 Netlify

1. 访问 https://www.netlify.com/
2. 点击右上角 **Sign up** 注册账号（可以用邮箱或 GitHub 登录）
3. 登录后，进入 Dashboard
4. 点击 **Add new site** → **Deploy manually**
5. 出现一个虚线框，显示 **Drag and drop your site output folder here**
6. 打开文件资源管理器，找到：
   ```
   C:\Users\caohongbo\WorkBuddy\Claw
   ```
7. **直接把整个 `Claw` 文件夹拖拽到 Netlify 的虚线框里**
8. 等待几秒，上传完成

### 第三步：获取访问地址

上传成功后，Netlify 会给你一个随机地址，比如：
```
https://wonderful-sunset-123456.netlify.app
```

点击这个链接，就能访问了！

### 第四步：修改域名（可选）

如果想改域名：
1. 在 Netlify 项目中点击 **Site settings**
2. 左侧点击 **Change site name**
3. 输入你想要的名称，比如：`jiujiu-learn-words`
4. 保存后，新地址变成：
   ```
   https://jiuji-learn-words.netlify.app
   ```

---

## 后续更新

有新版本时，直接拖拽文件夹覆盖上传，或者：
1. 在 Netlify 项目中点击 **Deploys**
2. 点击 **Drag and drop your site output folder here**
3. 重新上传文件夹

---

## 完成！

纠纠的 iPhone 访问：
```
https://jiuji-learn-words.netlify.app
```

或者直接添加到主屏幕，就像 App 一样！
