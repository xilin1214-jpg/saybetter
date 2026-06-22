# Scenario Contribution Guide

This guide explains how to add a new communication scenario to SayBetter.

## What Makes a Good Scenario?

A good scenario captures a **specific, common communication challenge** that many people face. Examples:

- Declining a request without damaging the relationship
- Following up on something overdue without being pushy
- Expressing dissatisfaction without starting a fight

## File Format

Create a YAML file in `packages/scenarios/zh-CN/` (and optionally `packages/scenarios/en-US/`).

### Required Fields

```yaml
# Unique identifier (kebab-case, English)
id: your-scenario-id

# Display name
name: 场景名称

# One-line description
description: 帮用户在什么情况下做什么事

# Emoji icon
icon: "✋"

# Common relationships in this scenario
common_relationships:
  - 朋友
  - 同事
  - 领导

# Common goals
goals:
  - 目标1
  - 目标2

# Available tones
tones:
  - 温和但清楚
  - 坚定但不冒犯
  - 高情商

# Expression principles (what TO do)
principles:
  - 先表达理解
  - 清楚说明你的立场
  - 提出替代方案

# Things to avoid (what NOT to do)
avoid:
  - 含糊拖延
  - 过度道歉
  - 指责对方

# A realistic example
example:
  original: 用户可能说的话
  relationship: 关系
  goal: 目标
  tone: 语气
  better:
    - 改写版本1
    - 改写版本2
    - 改写版本3
```

### Tips

- **principles**: Focus on what makes communication effective in this scenario. These get injected into the AI prompt.
- **avoid**: List specific phrases that make things worse. These are used for the "Not Recommended" output.
- **example**: Make it realistic. The better the example, the better the AI learns the scenario.
- **tones**: Use descriptive labels like "礼貌但有压迫感" instead of just "polite".

## Submitting

1. Fork the repo
2. Add your YAML file(s)
3. Submit a PR with:
   - The scenario file
   - A brief description of when this scenario is useful
   - (Optional) Real-world feedback if you've tested it

## Review Criteria

- Is the scenario common enough to be useful?
- Are the principles actionable and clear?
- Does the example sound natural (not AI-sounding)?
- Are the "avoid" items things people actually say?
