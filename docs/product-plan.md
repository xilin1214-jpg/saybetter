# SayBetter Product Plan

## Vision

An open-source communication assistant that helps people express themselves more clearly, kindly, and effectively in difficult situations.

## Core Product Loop

```
Input original message
↓
Select relationship / scenario / goal / tone
↓
Generate multiple rewritten versions
↓
Explain why the new expression is better
↓
Copy or generate share card
```

## Target Users

1. People who struggle to say no
2. People who tend to be too blunt
3. Workplace newcomers
4. People who need to follow up on things
5. People who want better communication with parents/partners/friends
6. People who need to handle complaints, salary negotiations, or resignation

## MVP Scope (v1)

| Module | Feature |
|--------|---------|
| Scenario Selection | 12 built-in scenarios |
| Input Form | Original text, relationship, goal, tone |
| AI Rewrite | 3-5 rewritten versions |
| Not Recommended | Expressions to avoid |
| Explanation | Why the new expression works better |
| Copy Button | One-click copy |
| Share Card | Generate "original vs better" image |
| Example Library | 20 real-world cases |
| Open Scenario Library | YAML-based, open for PRs |

## What We Don't Do (v1)

- No login / user accounts
- No chat history persistence
- No mobile app
- No browser extension
- No screenshot OCR
- No relationship analysis
- No multi-turn emotional counseling
- No enterprise collaboration

## Key Design Principles

1. **Output must not sound AI-generated** — it should sound like a real person
2. **Tone must be controllable** — gentle, firm, brief, formal, high EQ
3. **"Not recommended" is a feature** — showing what NOT to say is educational
4. **Share cards must be beautiful** — this is the viral mechanic
5. **Examples are content, not just utility** — they drive discovery and sharing

## Slogans

Primary: `把不好说的话，好好说出来。`

Alternatives:
- `你的嘴替，但不替你惹事。`
- `表达可以坚定，也可以不伤人。`
- `不是教你圆滑，是帮你说清楚。`
- `把情绪翻译成人话。`

## Privacy

- User inputs are never stored
- Self-hosted instances use your own model configuration
- Public demo: don't enter sensitive personal information

## Safety Boundaries

### Allowed

- Help express boundaries
- Help decline requests
- Help apologize
- Help follow up
- Help express needs
- Help rephrase aggressive language respectfully

### Not Allowed

- Help manipulate others
- Help with cold violence
- Help induce guilt
- Help fabricate facts
- Help threaten others
- Help write humiliating content
- Help judge "does this person love me"
- Help with revenge, cyberbullying, or harassment
