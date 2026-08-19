# Morrow · 黑客松路演 PPT

基于 Slidev 的 Apple 风格路演幻灯片。设计系统参考 `Apple-AI-Education`：SF Pro 字体栈、Apple 蓝 `#0071e3`、`#f5f5f7` 纸色、4px 间距体系、弹簧缓动曲线。

## 使用

```bash
pnpm install

pnpm dev      # 本地开发（http://localhost:3030）
pnpm build    # 构建静态站点到 dist/
pnpm export   # 导出 PDF（需要 playwright-chromium）
```

## 结构

- `slides.md` — 15 页路演：实体开箱 → Care Card 体验 → 售后单进入品牌后台 → 服务、技术与商业逻辑 → 收束
- `styles/` — 设计令牌、动效、全局版式
- `layouts/` — `pitch-stage`（标准白底页）、`cover-stage`（封面渐变）
- `components/` — 现场体验、工单提交通知、品牌审核结果，以及开箱互动组件

## 现场售后单联动

任务页的 `WorkOrderToast` 与品牌端页的 `LiveResolutionMoment` 读取 Supabase 的展示信号：

- 消费者提交一张 `cases` 记录时，数据库触发器写入一个**不含订单、邮箱、原始问题文本**的展示信号；
- PPT 轮询 `presentation-pulse-count` Edge Function，只得到“提交数 / 已处理数”的聚合计数；
- 提交数增加时，任务页在右上角弹出“工单 #MO-001 提交成功”，并提示已进入系统后台；
- 当同一张售后单更新为 `RESOLVED` / `APPROVED`，或已有 `resolution` 时，品牌端页显示“换新申请已通过”的蓝色结果条。

默认连接地址已经写入两个组件；如果需要连接另一个环境，可在未提交的 `.env.local` 中覆盖：

```bash
VITE_MORROW_PRESENTATION_PULSE_URL=https://<supabase-project>.supabase.co/functions/v1/presentation-pulse-count
```

开发预览可在 URL 后附加：

```text
?casePulsePreview=1
?resolutionPreview=1
```

第一项模拟提交气泡，第二项模拟审核通过结果。每页幻灯片下方的 HTML 注释是演讲者备注（Presenters 模式可见）。
