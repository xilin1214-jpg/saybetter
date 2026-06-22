<div align="center">

**English** · [中文](README.zh-CN.md) · [हिन्दी](README.hi.md) · [Español](README.es.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Português](README.pt.md) · [Русский](README.ru.md) · [Bahasa Indonesia](README.id.md)

</div>

# SayBetter

> Say what you mean, without the sting.

**SayBetter** is an open-source communication assistant that rewrites difficult messages into clear, kind, and effective expressions.

## Demo

```
Input: Why are you so late again?

Output:
  ✅ Gentle:   Could we finalize this today? I need the outcome to plan my next steps.
  ✅ Firm:     This needs to be finalized today, otherwise it'll impact the timeline.
               Please give me a clear answer by EOD.
  ✅ High EQ:  I know you've got a lot on your plate, but this result is critical
               for what comes next. Can we align on a conclusion today?
  ❌ Avoid:   "Why are you so slow?" / "You always delay."
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
- 10 languages supported

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

1. Create a YAML file in `packages/scenarios/zh-CN/` or `packages/scenarios/en-US/`
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
