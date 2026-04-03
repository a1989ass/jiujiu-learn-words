# 纠纠学字 🖌️

儿童汉字笔顺学习应用，支持逐笔动画演示、语音播报、练习模式。

## 功能特点

- ✨ 田字格/米字格风格
- 🎯 逐笔顺动画绘制
- 🔊 语音播报：每画报笔画名，最后念出字音+拼音+总画数
- ✏️ 练习模式：用鼠标/手指描写笔画
- 📚 常用字库（40+ 字）
- 🔄 支持输入任意汉字

## 在线访问

访问：`https://jiujiu-learn-words.vercel.app`

## 部署方式

本项目已配置 Vercel 自动部署，支持：

1. 连接 GitHub 仓库，自动持续集成
2. 推送代码后自动部署新版本
3. 无需手动操作，更新即生效

## 本地运行

```bash
# 安装 Node.js 后
node server.js

# 访问 http://localhost:3456
```

## 技术栈

- 前端：HTML + CSS + JavaScript
- 汉字动画：[HanziWriter](https://github.com/chanind/hanzi-writer)
- 语音：Web Speech API（浏览器原生）
- 部署：Vercel（免费托管）

## 更新记录

- 2026-04-03：修复语音播报和练习模式失效问题
- 2026-04-03：添加"四""五"等常用字的正确笔顺
