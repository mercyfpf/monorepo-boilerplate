# Full-Stack ESM Monorepo Starter 🚀

A modern, high-performance monorepo boilerplate built with **Turborepo**, **Next.js**, **Node.js**, and **PostgreSQL**.

## 🏗 Project Structure

- **`apps/web`**: Primary web application (Next.js).
- **`apps/admin`**: Management dashboard (Next.js + Ant Design).
- **`apps/api`**: Backend service for core business logic (Express + Prisma).
- **`packages/database`**: Shared Prisma schema and database client.
- **`packages/ui`**: Shared UI component library using Ant Design.

## 📦 Why pnpm?

We chose **pnpm** over npm or yarn because:

1.  **Fastest Performance**: pnpm is significantly faster at installing dependencies.
2.  **Disk Space Efficiency**: It uses a content-addressable store, avoids duplicate storage.
3.  **Strict Dependencies**: It prevents "phantom dependencies," ensuring reliable builds.
4.  **Monorepo Native**: Its workspace implementation is the industry standard.

## 🛠 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (v10+)
- PostgreSQL

### Installation

```bash
pnpm install
```

### Database Setup

Copy `.env.example` to `.env` and update your `DATABASE_URL`, then:

```bash
pnpm db:generate
pnpm db:push
```

### Development

```bash
pnpm dev
```

### Testing

```bash
pnpm test       # Run all tests
pnpm test:ui    # Run tests with a visual dashboard
```

## 🧹 Code Quality

We use **Prettier** for consistent formatting and **Vitest** for testing.

```bash
pnpm format
```

## 📝 Commit Convention

We enforce **Conventional Commits** via **Husky** and **Commitlint**. This keeps our project history clean and professional.

**Format**: `type: description`

**Common Types**:

- `feat`: A new feature
- `fix`: A bug fix
- `chore`: Maintenance or configuration changes
- `docs`: Documentation only changes
- `style`: Formatting, missing semi colons, etc.
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding or correcting tests

**Example**: `feat: implement user authentication`
