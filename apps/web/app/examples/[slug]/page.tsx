"use client";

import { use } from "react";
import Link from "next/link";

type Example = {
  title: string;
  scenario: string;
  relationship: string;
  goal: string;
  tone: string;
  original: string;
  better: string;
  why: string;
};

const EXAMPLE_DATA: Record<string, Example> = {
  reject_borrow_money: { title: "如何礼貌拒绝别人借钱", scenario: "rejection", relationship: "朋友", goal: "拒绝借钱", tone: "温和但清楚", original: "我不想借给他，但又不想撕破脸。", better: "我最近手头也有一些安排，可能没办法帮你周转。希望你能理解，不是针对你，只是我现在确实不太方便。", why: "清楚拒绝但不攻击对方，保留了关系的余地。" },
  remind_coworker: { title: "如何催同事交付但不冒犯", scenario: "reminder", relationship: "同事", goal: "催对方今天给结果", tone: "礼貌但有压迫感", original: "你怎么又拖到现在？", better: "这个事项今天需要有个明确结论，不然会影响后续进度。麻烦你今天下班前给我一个反馈。", why: "原话容易让对方进入防御状态。更好的说法是明确时间、说明影响、提出具体动作。" },
  apologize_late_reply: { title: "如何为忘记回复消息道歉", scenario: "apology", relationship: "客户", goal: "为工作失误道歉", tone: "正式", original: "不好意思我忘了回你了。", better: "非常抱歉没能及时回复您，这是我的疏忽。您的事情对我来说很重要，我现在就处理。", why: `直接承认疏忽比轻描淡写的「忘了」更显真诚。` },
  workload_too_much: { title: "如何跟领导说工作量太大", scenario: "leader-communication", relationship: "直属领导", goal: "反映工作量太大", tone: "专业且有理有据", original: "我活太多了，根本干不完。", better: "目前手上的项目有 A、B、C 三个，按照现在的节奏，本周可能无法全部交付。想跟您商量一下优先级，哪些可以调整时间线？", why: "用事实和数据说话，提出方案而不只是抱怨。" },
  resign_gracefully: { title: "如何体面地提离职", scenario: "salary-resignation", relationship: "直属领导", goal: "提离职", tone: "感恩但坚定", original: "我不想干了，这里太烂了。", better: "想跟您说一件事。我经过慎重考虑，决定接受一个新的机会。非常感谢这段时间您对我的指导和信任，我会认真做好交接。", why: "离职不抱怨，保持专业和感恩，给双方留余地。" },
  explain_not_going_home: { title: "如何跟父母解释不想回老家", scenario: "parent-communication", relationship: "父母", goal: "解释生活方式", tone: "温和让父母慢慢接受", original: "我不想回家过年，别逼我。", better: "爸妈，今年过年我可能没办法回去了。我知道你们想一家人团聚，我也想。但今年有一些自己的安排，明年我一定回。我们视频拜年好不好？", why: "先认可父母的期待，再表达自己的情况，最后给一个替代方案。" },
  express_dissatisfaction: { title: "如何表达不满但不吵架", scenario: "dissatisfaction", relationship: "伴侣", goal: "表达被忽视的感受", tone: "真诚不指责", original: "你心里根本没有我！", better: "最近我觉得我们在一起的时间比较少，我挺想和你多聊聊的。你这周有没有哪天晚上可以留给我？", why: `用「我」表达感受，不用「你」指责对方，提出具体的需求。` },
  reject_relative_request: { title: "如何拒绝亲戚的不合理请求", scenario: "rejection", relationship: "亲戚", goal: "拒绝亲戚请求", tone: "温和但清楚", original: "我不想帮他孩子找工作，但碍于面子不好拒绝。", better: "这个事情我可能帮不上太多忙。现在招聘流程都比较规范化，我直接推荐反而可能给你们带来不便。不过如果有别的我能帮忙的，你随时说。", why: `不直接说「不想帮」，而是给出一个合理的理由，同时保留帮助其他事情的空间。` },
  roommate_cleanliness: { title: "如何跟室友说卫生问题", scenario: "dissatisfaction", relationship: "室友", goal: "要求对方改变行为", tone: "友好高效", original: "你能不能把厨房收拾一下？太脏了。", better: "我注意到厨房最近堆了不少东西，我们能不能周末一起花半小时整理一下？或者我们定个简单的轮流打扫计划？", why: `把「你弄脏了」变成「我们一起解决」，提出具体的行动方案。` },
  decline_overtime: { title: "如何拒绝加班", scenario: "rejection", relationship: "领导", goal: "拒绝加班", tone: "坚定但不冒犯", original: "我今天不想加班。", better: "我今天有一些个人的安排，可能没办法留下来。这个事情明天上午我优先处理可以吗？", why: "表达边界的同时，给出替代方案，让对方知道你仍然负责。" },
  remind_client_confirm: { title: "如何催甲方确认方案", scenario: "reminder", relationship: "甲方", goal: "催对方确认时间", tone: "正式礼貌", original: "你到底什么时候能确认？", better: "您好，关于上周发送的方案，不知您是否有时间看一下了？如果需要我补充任何信息，随时告诉我。如果方便的话，本周内确认会比较好，这样我们可以按时推进下一步。", why: "正式且有礼貌，同时给出明确的时间建议和后续影响。" },
  decline_dinner: { title: "如何拒绝饭局邀请", scenario: "rejection", relationship: "同事", goal: "拒绝饭局", tone: "高情商", original: "我不想去的，但不去又不好。", better: "谢谢你们叫我！这次我可能没办法参加了，下次有机会一定来。你们好好吃，回头跟我说好不好吃。", why: `表达感谢和遗憾，同时给一个「下次」的台阶，不让对方觉得被拒绝。` },
  respond_passive_aggressive: { title: "如何回应阴阳怪气的评论", scenario: "dissatisfaction", relationship: "同事", goal: "回应阴阳怪气", tone: "冷静但有力", original: "有些人就是爱表现。", better: "如果有什么具体的想法或建议，欢迎直接提出来讨论，这样效率更高。", why: "不直接回应攻击，而是把话题拉回到建设性的讨论上。" },
  ask_for_raise: { title: "如何跟领导提加薪", scenario: "salary-resignation", relationship: "直属领导", goal: "谈加薪", tone: "专业有理有据", original: "我觉得工资太低了，能不能加一点？", better: "想跟您聊一下薪资的事情。过去半年我完成了 X、Y、Z 几个项目，也有一些新的职责。结合市场行情和我的工作表现，想跟您讨论一下是否有可能调整薪资？", why: "用成绩和数据说话，而不是直接抱怨工资低。" },
  remind_friend_repay: { title: "如何催朋友还钱", scenario: "money", relationship: "朋友", goal: "催对方还钱", tone: "礼貌但清楚", original: "你什么时候还我钱？", better: "上次借你的那笔钱，方便的话这几天转我一下？我最近也有一些开支要安排。", why: `给对方台阶下（「方便的话」），同时明确表达需求，加上自己的理由。` },
  reject_mom_marriage_pressure: { title: "如何拒绝妈妈催婚", scenario: "boundary", relationship: "母亲", goal: "设定沟通频率", tone: "温和但坚定", original: "别再催我了行不行？", better: "妈，我知道你是关心我。但感情的事我有自己的节奏，我们能不能聊点别的？等你准备好了，我很乐意和你分享我的想法。", why: "先认可关心，再清楚设定边界，最后留一个开放的沟通窗口。" },
  complaint_delivery_delay: { title: "如何投诉快递延迟", scenario: "complaint", relationship: "客服", goal: "投诉物流延迟", tone: "冷静有理", original: "你们快递也太慢了吧！", better: "你好，我的订单号是 XXX，按预计时间应该在 X 月 X 日送达，但现在已经超过了 3 天。能帮我查一下目前的物流状态吗？如果继续延迟，我希望有一个解决方案。", why: "给出具体订单信息和事实，提出明确诉求，而不是单纯的情绪发泄。" },
  need_space_from_partner: { title: "如何跟伴侣说需要空间", scenario: "relationship-communication", relationship: "伴侣", goal: "设立边界", tone: "脆弱但不攻击", original: "你能不能别一直找我，我需要空间。", better: "我最近状态不太好，不是因为你，而是我自己需要一点时间调整。不是不想理你，就是想一个人安静一两天。等我状态好了我找你。", why: `说明「不是你的问题」，减少对方的不安全感，同时清楚表达自己的需求。` },
  decline_helping: { title: "如何拒绝帮忙但不失礼貌", scenario: "rejection", relationship: "朋友", goal: "拒绝帮忙", tone: "高情商", original: "我不想帮这个忙。", better: "这个事情我可能不是最合适的人选。你有没有问过 XX？他对这块可能更熟悉。如果有别的我能帮到的，随时找我。", why: `不直接说「不想帮」，推荐一个替代方案，同时表达愿意帮忙的意愿（在别的方面）。` },
  disagree_with_colleague: { title: "如何跟同事提出不同意见", scenario: "colleague-communication", relationship: "平级同事", goal: "处理意见分歧", tone: "友好高效", original: "你这个方案不行。", better: "我理解你的出发点。不过我有一个不同的思路，想跟你讨论一下。我担心的是 XX 方面可能会有风险，你看我们是不是可以这样调整？", why: "先认可对方的思路，再提出自己的顾虑，最后给出具体的调整建议。" },
};

export default function ExampleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const example = EXAMPLE_DATA[slug];

  if (!example) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-section text-center">
        <h1 className="font-display text-2xl font-semibold text-ink">Example not found</h1>
        <Link href="/examples" className="mt-4 inline-block text-accent hover:underline">
          ← Back to examples
        </Link>
      </div>
    );
  }

  const rewriteUrl = `/rewrite?q=${encodeURIComponent(example.original)}&scenario=${example.scenario}`;

  return (
    <div className="mx-auto max-w-3xl px-6 py-section">
      <Link href="/examples" className="text-sm text-ink-faint hover:text-ink-muted transition-colors">
        ← Back to examples
      </Link>

      <h1 className="mt-6 font-display text-display-lg font-semibold text-ink">{example.title}</h1>

      <div className="mt-8 space-y-6">
        <div className="rounded-card border border-border bg-surface-elevated p-6 shadow-card">
          <span className="mb-3 inline-block rounded bg-ink/5 px-2 py-0.5 text-xs font-medium text-ink-faint">
            Original
          </span>
          <p className="text-ink-muted line-through decoration-ink-faint/40 leading-relaxed text-lg">
            {example.original}
          </p>
        </div>

        <div className="rounded-card border border-accent/30 bg-surface-elevated p-6 shadow-card">
          <span className="mb-3 inline-block rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
            SayBetter
          </span>
          <p className="text-ink leading-relaxed text-lg">{example.better}</p>
        </div>

        <div className="rounded-card border border-border bg-surface-muted p-6">
          <h3 className="mb-2 text-sm font-semibold text-ink">Why this works better</h3>
          <p className="text-sm text-ink-muted leading-relaxed">{example.why}</p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <Link
          href={rewriteUrl}
          className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:brightness-110"
        >
          Try it yourself →
        </Link>
      </div>
    </div>
  );
}
