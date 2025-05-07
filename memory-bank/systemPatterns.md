# 🧠 systemPatterns.md

This document defines the architectural patterns, system design decisions, and implementation strategies used across the ShowCase platform to ensure consistency, scalability, and alignment with our core goals. It supports both AI-assisted development and future human contributors.

---

## ⚙️ System Architecture Overview

ShowCase is a cross-platform application built with:

### Frontend

- **Mobile:** React Native (Expo SDK 50+) + NativeWind
- **Web:** React 18+ + Vite + Tailwind CSS
- **Language:** TypeScript

### Backend

- **API:** FastAPI (Python 3.11+)
- **Database:** PostgreSQL (with PostGIS for geospatial data)
- **ORM:** SQLAlchemy 2.0, Alembic (migrations)
- **Media:** Cloudinary
- **Hosting:** Railway (backend, database), Vercel (web frontend)

### Authentication & Analytics

- **Firebase Auth** (multi-provider, guardian account linking)
- **Firebase Analytics** (mobile event tracking)
- **Sentry** (error tracking)
- **UptimeRobot** (availability monitoring)

### Documentation & Design

- **Docusaurus** (documentation)
- **Figma Tokens + Style Dictionary** (token-driven design)
  - **@showcase/tokens** package for centralized design tokens
  - **Style Dictionary** for transforming tokens to platform-specific formats
  - **Tailwind CSS** integration for web and mobile styling consistency
  - **TypeScript** definitions for type-safe token usage

---

## 🔑 Key Technical Decisions

- **React Query (TanStack)** for data fetching, caching, and synchronization.
- **Zustand + Persist Middleware** for lightweight global state management.
- **React Hook Form + Zod** for robust form validation and schema management.
- **Expo EAS** for mobile app builds (managed workflow).
- **GitHub Actions** for CI/CD automation.
- **Bruno** for API testing (CLI-based).
- **dotenv-safe** for environment variable management.

---

## 🧱 Design Patterns & Practices

- **Trunk-Based Development:** Main branch remains always deployable.
- **Atomic Component Design:** Components structured as atoms → molecules → organisms.
- **Token-First Styling:** All visual styles derived from shared tokens.
  - Colors, typography, spacing, border radius, and shadows defined as tokens
  - Platform-specific implementations (Tailwind for web, NativeWind for mobile)
  - Single source of truth for design values across all platforms
- **Modular Feature Isolation:** Features encapsulated in `/features/<name>` directories.
- **Error Handling:** Explicit handling of loading, error, and empty states.
- **Minimal Abstraction:** Avoid unnecessary complexity; prioritize clarity and maintainability.

---

## 🔄 Component Relationships

- Feature modules import shared UI components and hooks from `/components/ui`.
- State management logic is local to features, leveraging Zustand for global state where necessary.
- Forms are managed using React Hook Form with validation schemas defined by Zod.
- Authentication state and permission checks globally accessible via hooks (e.g., `useIsGuardian()`).

---

## 🔍 Future Considerations

- Potential introduction of GraphQL to optimize data fetching.
- Background tasks with Celery and Redis (planned for future phases).
- Evaluation of feature flags and Storybook post-MVP.
- Expanded end-to-end testing strategy using Playwright.

---

## 🎨 Design Token System

The design token system is a core architectural component that ensures visual consistency across all platforms:

### Token Structure

- **Colors:**
  - **Brand Colors:** Blue (#1A4D7C) and Gold (#FBBF24) palette with variations
  - **Semantic Colors:** Primary, secondary, accent, muted, destructive
  - **Status Colors:** Success, warning, info, error
  - **Text Hierarchy:** Primary, secondary, tertiary text colors
  - **Neutral Colors:** Background, foreground, border, input
  - **All colors meet WCAG AA accessibility standards**
- **Typography:** Font families, weights, sizes, line heights, and letter spacing
- **Spacing:** Consistent spacing values for margins, padding, and layout
- **Border Radius:** Standardized border radius values for UI elements
- **Shadows:** Consistent shadow definitions for depth and elevation

### Token Flow

1. **Definition:** Tokens defined in JSON format within the `@showcase/tokens` package
2. **Transformation:** Style Dictionary processes tokens into platform-specific formats
3. **Distribution:** Generated tokens consumed by web and mobile applications
4. **Usage:** Components use tokens via Tailwind classes or direct token references

### Color System Architecture

1. **Token Definition:** Colors defined in `packages/tokens/tokens/colors.json`
2. **CSS Variables:** Colors transformed into CSS variables in `global.css`
3. **Platform-Specific Variables:** Separate variables for web and mobile platforms
4. **Semantic Naming:** Colors referenced by semantic names (primary, secondary, etc.)
5. **Text Hierarchy:** Dedicated variables for text hierarchy (primary, secondary, tertiary)
6. **Accessibility:** All color combinations meet WCAG AA standards
7. **Dark Mode Support:** Separate color sets for light and dark modes

### Integration Points

- **Web:** Tailwind CSS configuration imports token values
- **Mobile:** NativeWind configuration uses the same token values
- **Components:** UI components reference tokens for consistent styling
- **CSS Variables:** Global CSS variables provide runtime theming capabilities
- **Theme Context:** React context provides theme state management

_Last updated: May 6, 2025_
