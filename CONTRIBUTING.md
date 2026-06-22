# Contributing to SayBetter

Thanks for your interest in contributing! SayBetter is a community-driven project — its value comes from the scenarios and translations people like you contribute.

## Project Structure

SayBetter is a pnpm monorepo:

```
saybetter/
├── apps/web/              # Next.js web app
├── packages/
│   ├── core/              # Shared types, LLM integration, safety checks
│   ├── scenarios/         # Scenario YAML library
│   │   ├── zh-CN/        # Chinese scenarios
│   │   └── en-US/        # English scenarios
│   └── prompts/           # System prompt templates
├── examples/              # Example cases
└── docs/                  # Documentation
```

## Ways to Contribute

### 1. New Scenarios (Most Valuable)

Scenario files live in `packages/scenarios/zh-CN/` and `packages/scenarios/en-US/`.

**Step 1**: Create a new YAML file (e.g., `packages/scenarios/zh-CN/following-up.yaml`)

**Step 2**: Use this format:

```yaml
id: your-scenario-id
name: 场景名称
description: 一句话描述
icon: "emoji"
common_relationships:
  - 关系1
  - 关系2
goals:
  - 目标1
  - 目标2
tones:
  - 语1
  - 语气2
principles:
  - 表达原则1
  - 表达原则2
avoid:
  - 应避免的说法1
  - 应避免的说法2
example:
  original: 用户的原话
  relationship: 关系
  goal: 目标
  tone: 语气
  better:
    - 改写版本1
    - 改写版本2
    - 改写版本3
```

**Step 3**: Submit a PR explaining when this scenario is useful.

Great scenario ideas:
- 如何拒绝亲戚借钱
- 如何催甲方打款
- 如何跟室友说卫生问题
- 如何跟对象说我需要空间
- 如何跟领导说这个需求不合理

### 2. Translations

- Translate scenarios to your language in `packages/scenarios/<lang>/`
- Translate system prompts in `packages/prompts/<lang>/`
- We currently support: en, zh-CN, hi, es, fr, ar, bn, pt, ru, id

### 3. Examples

Add real-world examples in `examples/zh-CN/` as markdown files with frontmatter.

### 4. Code

- Bug fixes and feature improvements in `apps/web/`
- Core logic changes in `packages/core/`

## Development Setup

```bash
git clone https://github.com/xilin1214-jpg/saybetter.git
cd saybetter
pnpm install
cp .env.example .env
# Add your API key to .env
pnpm dev
```

## Code of Conduct

Be respectful. This project is about helping people communicate better — that starts with how we treat each other as contributors.
