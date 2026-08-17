# Morrow · 黑客松路演 PPT

基于 Slidev 的 Apple 风格路演幻灯片。设计系统参考 `Apple-AI-Education`：SF Pro 字体栈、Apple 蓝 `#0071e3`、`#f5f5f7` 纸色、4px 间距体系、弹簧缓动曲线。

## 使用

```bash
npm install

npm run dev      # 本地开发（http://localhost:3030）
npm run build    # 构建静态站点到 dist/
npm run export   # 导出 PDF（需要 playwright-chromium）
```

## 结构

- `slides.md` — 16 页路演：开场互动（包装盒故事 + Care Card Demo）→ 品牌与愿景 → 提供的服务 → 商业与 B 端
- `styles/` — 设计令牌、动效、全局版式
- `layouts/` — `pitch-stage`（标准白底页）、`cover-stage`（封面渐变）
- `components/` — `FlowPipeline`（链路/流程管线）、`EvidenceBadges`（证据状态徽章）

每页幻灯片下方的 HTML 注释是演讲者备注（Presenters 模式可见）。
