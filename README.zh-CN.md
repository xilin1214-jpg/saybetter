<div align="center">

[English](README.md) · **中文** · [हिन्दी](README.hi.md) · [Español](README.es.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md)

</div>

# SayBetter / 好好说话

> 把不好说的话，好好说出来。

**SayBetter** 是一个开源的沟通表达助手，帮你把"不好说的话"改写成清楚、体面、有效的表达。

## 示例

```
输入：你怎么又拖到现在？

输出：
  ✅ 温和版：这个事情我们能不能今天先定一下？我这边后续安排需要依赖这个结果。
  ✅ 坚定版：这个事项今天需要有个明确结论，不然会影响后续进度。麻烦你今天下班前给我一个反馈。
  ✅ 高情商版：我知道你手上事情可能也不少，但这个结果对后面的推进比较关键。我们能不能今天先把结论对齐一下？
  ❌ 不建议说："你怎么又这样？" / "为什么每次都这样？"
```

## 为什么做 SayBetter？

很多人不是没有想法，而是不知道怎么表达。SayBetter 帮你在拒绝、催促、道歉、表达不满、提出边界时，把话说得更清楚、更体面。

## 功能特点

- 将难说的话改写成 3-5 个更好的版本
- 选择关系、目标和语气
- 12 个场景模板库（开放贡献）
- "不建议这样说"及原因解释
- 可分享的卡片（PNG 下载）
- 20 个真实案例
- 兼容 OpenAI（支持 DeepSeek、Kimi、Ollama 等）
- 支持 10 种语言

## 场景库

| 场景 | 描述 |
|------|------|
| ✋ 拒绝别人 | 温和但清楚地拒绝请求 |
| ⏰ 催人办事 | 推动事情进展但不冒犯 |
| 🙏 道歉 | 真诚的道歉，不过度卑微 |
| 💬 表达不满 | 表达不满但不吵架 |
| 🚧 提出边界 | 清楚表达你的底线 |
| 👔 跟领导沟通 | 专业的向上沟通 |
| 🤝 跟同事沟通 | 友好高效的平级沟通 |
| 💕 亲密关系沟通 | 恋爱关系中的感受和需求 |
| 🏠 跟父母解释 | 向父母解释难说的事 |
| 💰 借钱与还钱 | 处理与钱有关的尴尬场景 |
| 📞 客服投诉 | 有效投诉，拿到结果 |
| 📋 谈薪与离职 | 职场关键时刻沟通 |

## 快速开始

```bash
# 克隆
git clone https://github.com/xilin1214-jpg/saybetter.git
cd saybetter

# 安装
pnpm install

# 配置环境
cp .env.example .env
# 在 .env 中填入你的 API Key

# 运行
pnpm dev
# → http://localhost:3000
```

## 配置模型

SayBetter 兼容任何 OpenAI 兼容接口：

```bash
# OpenAI
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://api.openai.com/v1
MODEL_NAME=gpt-4o

# DeepSeek
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://api.deepseek.com/v1
MODEL_NAME=deepseek-chat

# 通义千问
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
MODEL_NAME=qwen-plus

# Ollama（本地）
OPENAI_BASE_URL=http://localhost:11434/v1
MODEL_NAME=llama3
```

## 贡献场景

场景库是 SayBetter 的核心。新增一个场景很简单：

1. 在 `packages/scenarios/zh-CN/` 下新建 YAML 文件
2. 参考已有文件的格式
3. 提交 PR

详见[场景贡献指南](docs/scenario-contribution-guide.md)。

## 项目结构

```
saybetter/
├── apps/
│   └── web/                    # Next.js Web 应用
├── packages/
│   ├── core/                   # 共享类型、LLM 调用、安全检查、Prompt 构建
│   ├── scenarios/              # 场景 YAML 库（开放 PR）
│   │   ├── zh-CN/             # 中文场景
│   │   └── en-US/             # 英文场景
│   └── prompts/               # 系统提示词模板
│       ├── en/                # 英文
│       └── zh-CN/             # 中文
├── examples/                  # 示例案例
└── docs/                      # 文档
```

## 项目原则

> SayBetter 帮助你更好地表达自己。
> 它不帮助操控、骚扰、威胁、欺骗或情绪勒索他人。

## 隐私

- 你的输入不会被保存在我们的服务器上
- 自部署时，所有模型请求使用你自己的配置
- 公开 Demo 仅供体验，不建议输入敏感信息

## 许可证

MIT
