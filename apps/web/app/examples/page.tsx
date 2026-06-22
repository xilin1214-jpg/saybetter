"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/i18n";

const EXAMPLES = [
  { slug: "reject_borrow_money", title: "如何礼貌拒绝别人借钱", scenario: "rejection" },
  { slug: "remind_coworker", title: "如何催同事交付但不冒犯", scenario: "reminder" },
  { slug: "apologize_late_reply", title: "如何为忘记回复消息道歉", scenario: "apology" },
  { slug: "workload_too_much", title: "如何跟领导说工作量太大", scenario: "leader-communication" },
  { slug: "resign_gracefully", title: "如何体面地提离职", scenario: "salary-resignation" },
  { slug: "explain_not_going_home", title: "如何跟父母解释不想回老家", scenario: "parent-communication" },
  { slug: "express_dissatisfaction", title: "如何表达不满但不吵架", scenario: "dissatisfaction" },
  { slug: "reject_relative_request", title: "如何拒绝亲戚的不合理请求", scenario: "rejection" },
  { slug: "roommate_cleanliness", title: "如何跟室友说卫生问题", scenario: "dissatisfaction" },
  { slug: "decline_overtime", title: "如何拒绝加班", scenario: "rejection" },
  { slug: "remind_client_confirm", title: "如何催甲方确认方案", scenario: "reminder" },
  { slug: "decline_dinner", title: "如何拒绝饭局邀请", scenario: "rejection" },
  { slug: "respond_passive_aggressive", title: "如何回应阴阳怪气的评论", scenario: "dissatisfaction" },
  { slug: "ask_for_raise", title: "如何跟领导提加薪", scenario: "salary-resignation" },
  { slug: "remind_friend_repay", title: "如何催朋友还钱", scenario: "money" },
  { slug: "reject_mom_marriage_pressure", title: "如何拒绝妈妈催婚", scenario: "boundary" },
  { slug: "complaint_delivery_delay", title: "如何投诉快递延迟", scenario: "complaint" },
  { slug: "need_space_from_partner", title: "如何跟伴侣说需要空间", scenario: "relationship-communication" },
  { slug: "decline_helping", title: "如何拒绝帮忙但不失礼貌", scenario: "rejection" },
  { slug: "disagree_with_colleague", title: "如何跟同事提出不同意见", scenario: "colleague-communication" },
];

const SCENARIO_ICONS: Record<string, string> = {
  rejection: "✋", reminder: "⏰", apology: "🙏", dissatisfaction: "💬",
  boundary: "🚧", "leader-communication": "👔", "colleague-communication": "🤝",
  "relationship-communication": "💕", "parent-communication": "🏠", money: "💰",
  complaint: "📞", "salary-resignation": "📋",
};

export default function ExamplesPage() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-6xl px-6 py-section">
      <div className="text-center">
        <h1 className="font-display text-display-lg font-semibold text-ink">
          {t("examples.title")}
        </h1>
        <p className="mt-3 text-body-lg text-ink-muted">{t("examples.subtitle")}</p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {EXAMPLES.map((ex) => (
          <Link
            key={ex.slug}
            href={`/examples/${ex.slug}`}
            className="group flex items-start gap-4 rounded-card border border-border bg-surface-elevated p-5 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
          >
            <span className="text-2xl">{SCENARIO_ICONS[ex.scenario] ?? "💬"}</span>
            <div className="flex-1">
              <h2 className="font-medium text-ink group-hover:text-accent transition-colors">
                {ex.title}
              </h2>
              <p className="mt-1 text-xs text-ink-faint">{ex.scenario.replace(/-/g, " ")}</p>
            </div>
            <span className="mt-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
