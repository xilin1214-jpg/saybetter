import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import type { Scenario, ScenarioExample } from "./types";

type RawScenario = {
  id: string;
  name: string;
  description: string;
  icon: string;
  common_relationships: string[];
  goals: string[];
  tones: string[];
  principles: string[];
  avoid: string[];
  example: {
    original: string;
    relationship: string;
    goal: string;
    tone: string;
    better: string[];
  };
};

function rawToScenario(raw: RawScenario): Scenario {
  return {
    id: raw.id,
    name: raw.name,
    description: raw.description,
    icon: raw.icon,
    commonRelationships: raw.common_relationships,
    goals: raw.goals,
    tones: raw.tones,
    principles: raw.principles,
    avoid: raw.avoid,
    example: raw.example as ScenarioExample,
  };
}

let scenarioCache: Map<string, Scenario> | null = null;

function getScenariosDir(): string {
  const scenariosPkg = path.resolve(__dirname, "../../scenarios");
  return scenariosPkg;
}

export function loadAllScenarios(language: string = "zh-CN"): Scenario[] {
  if (scenarioCache) return Array.from(scenarioCache.values());

  const dir = path.join(getScenariosDir(), language);
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"));
  const scenarios: Scenario[] = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const raw = yaml.load(content) as RawScenario;
    if (raw && raw.id) {
      scenarios.push(rawToScenario(raw));
    }
  }

  scenarioCache = new Map(scenarios.map((s) => [s.id, s]));
  return scenarios;
}

export function loadScenario(id: string, language: string = "zh-CN"): Scenario | undefined {
  const scenarios = loadAllScenarios(language);
  return scenarios.find((s) => s.id === id);
}

export function clearScenarioCache(): void {
  scenarioCache = null;
}
