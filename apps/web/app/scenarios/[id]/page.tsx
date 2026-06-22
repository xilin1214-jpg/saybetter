"use client";

import { use } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

const SCENARIO_DATA: Record<string, { icon: string; name: string; nameZh: string; description: string; descriptionZh: string }> = {
  rejection: { icon: "✋", name: "Rejection", nameZh: "拒绝别人", description: "Decline requests warmly but clearly", descriptionZh: "帮用户温和但清楚地拒绝别人的请求" },
  reminder: { icon: "⏰", name: "Following Up", nameZh: "催人办事", description: "Push things forward without being offensive", descriptionZh: "帮用户在不冒犯对方的前提下，清楚推动事情进展" },
  apology: { icon: "🙏", name: "Apology", nameZh: "道歉", description: "Express sincere apologies without being self-deprecating", descriptionZh: "帮用户表达真诚的道歉，不卑不亢" },
  dissatisfaction: { icon: "💬", name: "Expressing Dissatisfaction", nameZh: "表达不满", description: "Express frustration without turning it into a fight", descriptionZh: "帮用户表达不满情绪，但不把对话变成吵架" },
  boundary: { icon: "🚧", name: "Setting Boundaries", nameZh: "提出边界", description: "Clearly express your limits and boundaries", descriptionZh: "帮用户清楚表达自己的底线和边界" },
  "leader-communication": { icon: "👔", name: "Talking to Your Manager", nameZh: "跟领导沟通", description: "Communicate professionally with your manager", descriptionZh: "帮用户在职场中向上管理，清楚专业地跟领导沟通" },
  "colleague-communication": { icon: "🤝", name: "Talking to Colleagues", nameZh: "跟同事沟通", description: "Communicate efficiently and friendly with coworkers", descriptionZh: "帮用户在日常工作中和同事高效、友好地沟通" },
  "relationship-communication": { icon: "💕", name: "Relationship Communication", nameZh: "亲密关系沟通", description: "Express feelings and needs in romantic relationships", descriptionZh: "帮用户在恋爱或亲密关系中更好地表达感受和需求" },
  "parent-communication": { icon: "🏠", name: "Talking to Parents", nameZh: "跟父母解释", description: "Explain difficult things to your parents", descriptionZh: "帮用户跟父母解释不容易说出口的事情" },
  money: { icon: "💰", name: "Money Matters", nameZh: "借钱与还钱", description: "Handle awkward money-related conversations", descriptionZh: "帮用户处理与钱有关的尴尬场景" },
  complaint: { icon: "📞", name: "Customer Complaints", nameZh: "客服投诉", description: "Effectively complain and get results", descriptionZh: "帮用户在消费场景中有效投诉，拿到结果" },
  "salary-resignation": { icon: "📋", name: "Salary & Resignation", nameZh: "谈薪与离职", description: "Express your needs at key career moments", descriptionZh: "帮用户在职场关键节点上专业地表达自己的诉求" },
};

export default function ScenarioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { locale } = useTranslation();
  const scenario = SCENARIO_DATA[id];

  if (!scenario) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-section text-center">
        <h1 className="font-display text-2xl font-semibold text-ink">Scenario not found</h1>
        <Link href="/scenarios" className="mt-4 inline-block text-accent hover:underline">
          ← Back to scenarios
        </Link>
      </div>
    );
  }

  const name = locale === "zh-CN" ? scenario.nameZh : scenario.name;
  const description = locale === "zh-CN" ? scenario.descriptionZh : scenario.description;

  return (
    <div className="mx-auto max-w-4xl px-6 py-section">
      <Link href="/scenarios" className="text-sm text-ink-faint hover:text-ink-muted transition-colors">
        ← Back to scenarios
      </Link>

      <div className="mt-6 flex items-start gap-4">
        <span className="text-5xl">{scenario.icon}</span>
        <div>
          <h1 className="font-display text-display-lg font-semibold text-ink">{name}</h1>
          <p className="mt-2 text-body-lg text-ink-muted">{description}</p>
        </div>
      </div>

      <div className="mt-10 rounded-card border border-border bg-surface-elevated p-8 shadow-card">
        <h2 className="font-semibold text-ink">Try this scenario</h2>
        <p className="mt-2 text-sm text-ink-muted">
          Go to the rewrite page with this scenario pre-selected.
        </p>
        <Link
          href={`/rewrite?scenario=${id}`}
          className="mt-4 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:brightness-110"
        >
          Start rewriting →
        </Link>
      </div>
    </div>
  );
}
