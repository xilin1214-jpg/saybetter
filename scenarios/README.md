# 场景库

每个场景是一个 YAML 文件，定义了"高情商回复助手"在一个特定场景下的行为。

## 场景格式

```yaml
name: 场景名称
slug: 英文标识
description: 一句话描述这个场景
inputs:
  - 输入字段1
  - 输入字段2
outputs:
  - gentle     # 每个场景的输出风格不同，按场景定义
  - firm
  - warm
  - not_recommended
examples:
  - input: "用户输入示例"
    outputs:
      gentle: "温和版回复"
      firm: "坚定版回复"
      warm: "高情商版回复"
```

## 已有场景

| 文件 | 场景 |
|------|------|
| rejection.yaml | 拒绝请求 |
| apology.yaml | 道歉 |
| workplace.yaml | 职场沟通 |
| dating.yaml | 相亲/恋爱 |
| parents.yaml | 与父母沟通 |
| money.yaml | 金钱相关 |
| conflict.yaml | 冲突处理 |

## 如何贡献新场景

1. Fork 本仓库
2. 在 `scenarios/` 下新建 YAML 文件，参考已有格式
3. 提交 PR，说明场景用途

欢迎的场景举例：
- 如何催甲方
- 如何拒绝亲戚借钱
- 如何跟领导提加薪
- 如何体面分手
- 如何回复阴阳怪气
- 如何跟邻居沟通噪音问题
- 如何拒绝无效社交
