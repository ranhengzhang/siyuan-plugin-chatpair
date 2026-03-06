# 思源对话气泡插件

[English Version](https://github.com/ranhengzhang/siyuan-plugin-chatpair/blob/main/README_en_US.md)

一个用于在思源笔记中显示 AI 对话的插件，支持对话气泡和问答对。

## 功能特性

- **对话气泡**: 插入尾尖朝左或朝右的对话气泡
- **问答对**: 在一个超级块中创建成对的问题和回答气泡

## 使用方法

### 斜杠命令

插件提供三个斜杠命令：

| 命令 | 触发词 | 描述 |
|-------|---------|------|
| **对话问答** | `/chat qa` 或 `/qa` | 在超级块中插入一对问答气泡 |
| **对话气泡（右）** | `/chat pair right` 或 `/对话气泡右` | 插入单个尾尖朝右的气泡（回答） |
| **对话气泡（左）** | `/chat pair left` 或 `/对话气泡左` | 插入单个尾尖朝左的气泡（问题） |

### 气泡样式

- **尾尖朝右气泡**: 蓝色背景，用于 AI 助手的回答
- **尾尖朝左气泡**: 灰色背景，用于用户的问题
- **问答容器**: 将两个气泡成对放在一个超级块中

## 安装

1. 从 [思源社区集市](https://github.com/siyuan-note/bazaar) 下载插件
2. 打开思源，进入 **设置 > 集市**
3. 找到"对话气泡插件"并点击 **安装**
4. 重启思源以激活插件

## 开发

本插件使用 [Vite](https://vitejs.dev/) 构建，遵循思源插件开发规范。

### 构建

```bash
pnpm install
pnpm run build
```

### 开发

```bash
pnpm run dev
```

## 许可证

MIT License

## 作者

**ranhengzhang**

## 仓库

https://github.com/ranhengzhang/siyuan-plugin-chatpair

## 支持

如果您遇到任何问题或有建议，请在 GitHub 上提 issue。

## 鸣谢

<div align="center">
<img src="https://lf-cdn.trae.com.cn/obj/trae-com-cn/trae_website_prod_cn/static/image/footer.1a35cbfb.png"/>
</div>

特别感谢 [Trae](https://www.trae.ai/) 强大的 AI 编程辅助功能，极大地加速了本插件的开发进程。（甚至 README 也由 Trae 生成​ :kissing_smiling_eyes:）
