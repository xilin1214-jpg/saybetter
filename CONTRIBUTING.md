# Contributing to SayBetter

Thanks for your interest in contributing! SayBetter is a community-driven project — its value comes from the scenarios and translations people like you contribute.

## Ways to Contribute

### 1. New Scenarios (English)

Scenario files live in `scenarios/`. To add a new one:

1. Fork this repo
2. Create a new YAML file in `scenarios/` (e.g. `scenarios/asking-for-raise.yaml`)
3. Follow the format:

```yaml
name: Scenario Name
slug: kebab-case-slug
description: One-line description
inputs:
  - field_name       # Brief comment explaining this field
outputs:
  - style_name       # What kind of output this produces
  - not_recommended  # Always include a "what NOT to say" output
examples:
  - input: "A realistic user input"
    outputs:
      style_name: "The rephrased output"
```

4. Submit a PR explaining when this scenario is useful

Great scenario ideas:
- Asking for a raise
- Following up with a slow client
- Declining a relative's loan request
- Breaking up respectfully
- Responding to passive-aggressive remarks
- Talking to a neighbor about noise
- Declining social invitations
- Giving negative feedback to a peer
- Asking a favor from someone you barely know

### 2. Translating Scenarios

Translation directories live in `translations/<lang>/`. To translate:

1. Pick a language directory (or create a new one if your language isn't listed)
2. Pick a scenario from `scenarios/` that hasn't been translated yet
3. Copy the YAML structure exactly — only translate the human-readable text:
   - `name`
   - `description`
   - Input/output comments (after `#`)
   - `examples` (both `input` and `outputs` values)
4. Keep the `slug`, `inputs` field names, and `outputs` field names in English — these are used for matching with the source
5. Submit a PR

**Important**: Translated examples should sound natural in your language, not be a word-for-word translation. Adapt the cultural context where appropriate.

### 3. Translating Prompts

System prompt translations live in `prompts/<lang>/system.md`. To translate:

1. Read the English source at `prompts/en/system.md`
2. Translate to your language, keeping the same structure
3. The translation should capture the *intent* of each principle, not just the words
4. Submit a PR

### 4. Reviewing Translations

If you're a native speaker, review existing translations:

1. Check the `prompts/<lang>/system.md` file — does it sound natural?
2. Check translated scenarios in `translations/<lang>/` — do the examples sound like something a real person would say?
3. Submit a PR with corrections, noting what you changed and why

## Language Codes

We use standard language codes:

| Code | Language |
|------|----------|
| `en` | English (source) |
| `zh-CN` | 简体中文 |
| `hi` | हिन्दी |
| `es` | Español |
| `fr` | Français |
| `ar` | العربية |
| `bn` | বাংলা |
| `pt` | Português |
| `ru` | Русский |
| `id` | Bahasa Indonesia |

If your language isn't listed, open an issue to request adding it.

## Code of Conduct

Be respectful. This project is about helping people communicate better — that starts with how we treat each other as contributors.
