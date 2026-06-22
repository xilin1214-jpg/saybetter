name: Scenario Library
description: Each scenario is a YAML file defining how the SayBetter assistant behaves in a specific situation.

## Format

```yaml
name: Scenario Name
slug: english-identifier
description: One-line description
inputs:
  - field1
  - field2
outputs:
  - style1           # Description of this output style
  - style2
  - style3
  - not_recommended  # What NOT to say (avoid this)
examples:
  - input: "Example user input"
    outputs:
      style1: "Example output in this style"
      style2: "Example output in this style"
```

## Available Scenarios

| File | Scenario |
|------|----------|
| rejection.yaml | Declining requests |
| apology.yaml | Apologizing |
| workplace.yaml | Workplace communication |
| dating.yaml | Dating and relationships |
| parents.yaml | Talking to parents |
| money.yaml | Money matters |
| conflict.yaml | Conflict resolution |

## Contributing New Scenarios

1. Fork this repo
2. Create a new YAML file in `scenarios/` following the format above
3. Submit a PR explaining the scenario's use case

Great scenario ideas:
- Following up with a client
- Declining a relative's loan request
- Asking your manager for a raise
- Breaking up respectfully
- Responding to passive-aggressive remarks
- Talking to a neighbor about noise
- Declining social invitations
