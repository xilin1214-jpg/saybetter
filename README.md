# SayBetter / 好好说话

> 把不好说的话，好好说出来。
> Say what you mean, without the sting.

**SayBetter** is an open-source communication assistant that rewrites difficult messages into clear, kind, and effective expressions.

## Demo

```
Input: 你怎么又拖到现在？
Output:
  ✅ 温和版: 这个事情我们能不能今天先定一下？我这边后续安排需要依赖这个结果。
  ✅ 坚定版: 这个事项今天需要有个明确结论，不然会影响后续进度。麻烦你今天下班前给我一个反馈。
  ✅ 高情商版: 我知道你手上事情可能也不少，但这个结果对后面的推进比较关键。我们能不能今天先把结论对齐一下？
  ❌ 不建议说: "你怎么又这样？" / "为什么每次都这样？"
```

## Why SayBetter?

Many people don't lack ideas — they lack the words. SayBetter helps you express yourself more clearly when it matters: declining, following up, apologizing, setting boundaries, pushing back.

## Features

- Rewrite difficult messages into 3-5 better versions
- Choose relationship, goal, and tone
- 12 scenario-based prompt library (open for contributions)
- "Not recommended" expressions with explanations
- Shareable cards (PNG download)
- 20 real-world examples
- OpenAI-compatible (works with DeepSeek, Kimi, Ollama, etc.)
- i18n: English + 中文

## Scenarios

| Scenario | Description |
|----------|-------------|
| ✋ Rejection | Decline requests warmly but clearly |
| ⏰ Following Up | Push things forward without being offensive |
| 🙏 Apology | Sincere apologies, not overly self-deprecating |
| 💬 Expressing Dissatisfaction | Frustration without fighting |
| 🚧 Setting Boundaries | Express your limits clearly |
| 👔 Talking to Your Manager | Professional upward communication |
| 🤝 Talking to Colleagues | Friendly and efficient peer communication |
| 💕 Relationship Communication | Feelings and needs in romantic relationships |
| 🏠 Talking to Parents | Explain difficult things to parents |
| 💰 Money Matters | Awkward money conversations |
| 📞 Customer Complaints | Effective complaints that get results |
| 📋 Salary & Resignation | Key career moment communication |

## Quick Start

```bash
# Clone
git clone https://github.com/xilin1214-jpg/saybetter.git
cd saybetter

# Install
pnpm install

# Set up environment
cp .env.example .env
# Edit .env with your API key

# Run
pnpm dev
# → http://localhost:3000
```

## Configure Model Provider

SayBetter works with any OpenAI-compatible API:

```bash
# OpenAI
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://api.openai.com/v1
MODEL_NAME=gpt-4o

# DeepSeek
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://api.deepseek.com/v1
MODEL_NAME=deepseek-chat

# Ollama (local)
OPENAI_BASE_URL=http://localhost:11434/v1
MODEL_NAME=llama3
```

## Contributing Scenarios

The scenario library is the heart of SayBetter. Adding a new scenario is simple:

1. Create a YAML file in `packages/scenarios/zh-CN/`
2. Follow the format in existing files
3. Submit a PR

See [Scenario Contribution Guide](docs/scenario-contribution-guide.md) for details.

## Project Structure

```
saybetter/
├── apps/
│   └── web/                    # Next.js web app
├── packages/
│   ├── core/                   # Shared types, LLM, safety, prompt builder
│   ├── scenarios/              # Scenario YAML library (open for PRs)
│   │   ├── zh-CN/             # Chinese scenarios
│   │   └── en-US/             # English scenarios
│   └── prompts/               # System prompt templates
│       ├── en/                # English
│       └── zh-CN/             # Chinese
├── examples/                  # Example cases
└── docs/                      # Documentation
```

## Project Principles

> SayBetter helps people express themselves better.
> It does not help with manipulation, harassment, threats, deception, or emotional abuse.

## Privacy

- Your inputs are never stored on our servers
- If self-hosted, all model requests use your own configuration
- The public demo is for experience only — avoid entering sensitive information

## License

MIT
