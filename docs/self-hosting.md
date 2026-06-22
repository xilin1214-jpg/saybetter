# Self-Hosting Guide

SayBetter can be self-hosted for full privacy and control.

## Prerequisites

- Node.js >= 20
- pnpm >= 10
- An API key for any OpenAI-compatible provider

## Quick Deploy

### 1. Clone and install

```bash
git clone https://github.com/xilin1214-jpg/saybetter.git
cd saybetter
pnpm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Edit `.env`:

```bash
# Required
OPENAI_API_KEY=your-api-key-here

# Optional (defaults shown)
OPENAI_BASE_URL=https://api.openai.com/v1
MODEL_NAME=gpt-4o
```

### 3. Build and run

```bash
pnpm build
pnpm start
```

The app will be available at `http://localhost:3000`.

## Provider Examples

### OpenAI

```bash
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://api.openai.com/v1
MODEL_NAME=gpt-4o
```

### DeepSeek

```bash
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://api.deepseek.com/v1
MODEL_NAME=deepseek-chat
```

### Ollama (Local)

```bash
OPENAI_BASE_URL=http://localhost:11434/v1
MODEL_NAME=llama3
# No API key needed for local Ollama
```

### Kimi (Moonshot)

```bash
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://api.moonshot.cn/v1
MODEL_NAME=moonshot-v1-8k
```

## Docker (Coming Soon)

A Dockerfile will be provided in a future release.

## Privacy Notes

- All LLM requests go directly from your server to your configured provider
- No data is sent to SayBetter's servers (there are none)
- User inputs are not stored anywhere — they exist only in the browser session
