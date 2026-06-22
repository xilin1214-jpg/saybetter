# SayBetter

An open-source "high EQ reply assistant" — helps you rephrase what you want to say into something more tactful, clearer, and less hurtful.

## Why?

Everyone has been in these situations:

- You don't know how to say no
- You don't know how to follow up without being pushy
- You don't know how to talk to your boss
- You don't know how to reply to a blind date
- You don't know how to explain things to your parents
- You don't know how to apologize properly
- You don't know how to set a boundary
- You don't know how to be firm without being aggressive

The best part: the results are naturally shareable — perfect for screenshots on social media.

## Example

**Input:**
> A friend wants to borrow money but I don't want to lend it.

**Output:**

**Gentle:**
> I've got some things coming up financially myself right now, so I won't be able to help with that. I hope you understand — it's not about you, I'm just not in a position to.

**Firm:**
> I can't lend you money this time. Our relationship is separate from finances, and I prefer to keep it that way.

**Warm EQ:**
> I can tell this is important to you, and I wish I could help. I can't lend money, but if you want, I'm happy to brainstorm other options together.

## Share Cards

Generate "Instead of → Try saying" cards, perfect for social media:

```
Instead of: "Why are you so late again?"
Try saying: "This is running behind schedule. Can we finalize it today? I need the outcome to plan next steps."
— SayBetter
```

## Project Structure

```
saybetter/
├── scenarios/          # Scenario library — one YAML per scenario, open for PRs
│   ├── rejection.yaml
│   ├── apology.yaml
│   ├── workplace.yaml
│   ├── dating.yaml
│   ├── parents.yaml
│   ├── money.yaml
│   └── conflict.yaml
├── prompts/            # System prompt templates
│   ├── en/             # English (source of truth)
│   ├── zh-CN/          # 简体中文
│   ├── hi/             # हिन्दी
│   ├── es/             # Español
│   ├── fr/             # Français
│   ├── ar/             # العربية
│   ├── bn/             # বাংলা
│   ├── pt/             # Português
│   ├── ru/             # Русский
│   └── id/             # Bahasa Indonesia
├── translations/       # Translated scenario YAMLs
│   ├── zh-CN/
│   ├── hi/
│   ├── es/
│   ├── fr/
│   ├── ar/
│   ├── bn/
│   ├── pt/
│   ├── ru/
│   └── id/
├── web/                # Web frontend
└── extension/          # Browser extension
```

## Languages

SayBetter supports the world's top 10 most spoken languages:

| # | Language | Code |
|---|----------|------|
| 1 | English | `en` |
| 2 | 简体中文 (Chinese) | `zh-CN` |
| 3 | हिन्दी (Hindi) | `hi` |
| 4 | Español (Spanish) | `es` |
| 5 | Français (French) | `fr` |
| 6 | العربية (Arabic) | `ar` |
| 7 | বাংলা (Bengali) | `bn` |
| 8 | Português (Portuguese) | `pt` |
| 9 | Русский (Russian) | `ru` |
| 10 | Bahasa Indonesia (Indonesian) | `id` |

English is the source of truth. All other languages are translations contributed by the community.

## How to Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. Quick start:

- **New scenario** → add a YAML in `scenarios/` (English)
- **Translate a scenario** → add a translated YAML in `translations/<lang>/`
- **Translate a prompt** → add a `system.md` in `prompts/<lang>/`
- **Build features** → work in `web/` or `extension/`

## License

MIT
