# itsrakesh Design System

## Apps & Packages

This Turborepo includes the following packages and applications:

- `packages/@itsrakesh/ui`: UI components and component documentation site with Nextra
- `packages/@itsrakesh/utils`: Shared React utilities
- `packages/@itsrakesh/tsconfig`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/@itsrakesh/eslint-config`: ESLint preset

### Useful Commands

- `pnpm build` - Build all packages
- `pnpm dev` - Run all packages locally
- `pnpm lint` - Lint all packages
- `pnpm changeset` - Generate a changeset
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)
