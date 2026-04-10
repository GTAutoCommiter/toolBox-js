# 🛠️ Tool Box Monorepo

[![CI](https://github.com/laojiawei/toolBox-js/actions/workflows/ci.yml/badge.svg)](https://github.com/laojiawei/toolBox-js/actions/workflows/ci.yml)
[![Release](https://github.com/laojiawei/toolBox-js/actions/workflows/release.yml/badge.svg)](https://github.com/laojiawei/toolBox-js/actions/workflows/release.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

这是一个基于 **Turborepo** + **pnpm** 构建的工业级 TypeScript 工具库自研模板。旨在为开发者提供一个开箱即用、高度自动化、且符合现代前端工程化最佳实践的 Monorepo 开发环境。

---

## ✨ 核心特性

- **🚀 极致性能**: 使用 [Turborepo](https://turbo.build/) 管理任务流水线，支持远程缓存与并行构建。
- **📦 智能构建**: 采用 [tsup](https://tsup.egoist.dev/)，零配置输出高质量的 ESM/CJS/d.ts 文件，完美适配 Tree-shaking。
- **📚 自动化文档**: 基于 [VitePress](https://vitepress.dev/) 与 [TypeDoc](https://typedoc.org/)，自动从源代码 TSDoc 注释生成美观的 API 参考文档。
- **✅ 质量保证**: 集成 [Vitest](https://vitest.dev/) 单元测试、[ESLint](https://eslint.org/) 代码静态检查及 [Prettier](https://prettier.io/) 格式化。
- **🛡️ 提交守卫**: [Husky](https://typicode.github.io/husky/) + [lint-staged] 确保所有提交的代码均符合规范。
- **🔄 优雅发布**: 使用 [Changesets](https://github.com/changesets/changesets) 管理包版本、生成 Changelog。
- **🤖 持续集成**: 预设 GitHub Actions 流程，实现代码检查、全量测试、NPM 发布与文档部署的全自动化。

---

## 📁 项目结构

```text
.
├── .changeset/           # 版本发布变更集配置
├── .github/workflows/    # CI/CD 自动化流水线
├── .husky/               # Git Hooks 脚本
├── docs/                 # VitePress 文档中心
├── packages/             # 业务包
│   └── core/             # 核心工具库 (示例)
├── turbo.json            # Turborepo 任务配置
├── pnpm-workspace.yaml   # pnpm 工作区定义
└── tsconfig.base.json    # TypeScript 共享配置
```

---

## 🛠️ 开始使用

### 环境依赖

- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/) >= 8

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发模式

监听所有包的源代码变动并实时构建。

```bash
pnpm dev
```

### 3. 本地预览文档

```bash
pnpm docs:dev
```

### 4. 运行全量测试

```bash
pnpm test
```

### 5. 执行产品环境构建

```bash
pnpm build
```

---

## 🚀 发布流程

项目采用业界主流的 **Changesets** 工作流进行版本管理：

1. **创建变更集**: 运行 `pnpm version`，根据提示选择变更类型并填写变更描述。
2. **提交代码**: 将生成的 `.changeset/*.md` 文件连同代码一同提交。
3. **CI 处理**: 推送到 `main` 分支后，CI 将自动开启 Release PR。
4. **发布**: 合并 Release PR 后，Actions 将会自动完成 `npm publish` 并部署最新的文档。

---

## 🤝 贡献指南

1. **新建分支**: 从 `main` 分支切出新功能分支。
2. **编写代码/测试**: 确保新增功能拥有完善的单元测试。
3. **代码自检**: 提交前运行 `pnpm lint`。
4. **提交 PR**: 提交至 `main` 仓库。

---

## 📄 许可证

基于 [MIT License](LICENSE) 开源。
