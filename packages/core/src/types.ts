export type RewriteInput = {
  originalText: string;
  relationship?: string;
  scenario?: string;
  goal?: string;
  tone?: string;
  language?: "zh-CN" | "en-US";
};

export type RewriteVersion = {
  label: string;
  text: string;
  bestFor: string;
};

export type RewriteResult = {
  detectedIntent: string;
  riskLevel: "low" | "medium" | "high";
  rewrites: RewriteVersion[];
  notRecommended: string[];
  why: string;
  recommendedIndex: number;
};

export type ScenarioExample = {
  original: string;
  relationship: string;
  goal: string;
  tone: string;
  better: string[];
};

export type Scenario = {
  id: string;
  name: string;
  description: string;
  icon: string;
  commonRelationships: string[];
  goals: string[];
  tones: string[];
  principles: string[];
  avoid: string[];
  example: ScenarioExample;
};

export type RewriteRequest = {
  input: RewriteInput;
};

export type RewriteResponse = {
  success: boolean;
  data?: RewriteResult;
  error?: string;
};
