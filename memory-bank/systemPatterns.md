# 🧠 systemPatterns.md

This document defines the architectural patterns, system design decisions, and implementation strategies used across the ShowCase platform to ensure consistency, scalability, and alignment with our core goals. It supports both AI-assisted development and future human contributors.

---

## ⚙️ System Architecture Overview

ShowCase is a cross-platform application built with:

### Frontend

* **Mobile:** React Native (Expo SDK 50+) + NativeWind
* **Web:** React 18+ + Vite + Tailwind CSS
* **Language:** TypeScript

### Backend

* **API:** FastAPI (Python 3.11+)
* **Database:** PostgreSQL (with PostGIS for geospatial data)
* **ORM:** SQLAlchemy 2.0, Alembic (migrations)
* **Media:** Cloudinary
* **Hosting:** Railway (backend, database), Vercel (web frontend)

### Authentication & Analytics

* **Firebase Auth** (multi-provider, guardian account linking)
* **Firebase Analytics** (mobile event tracking)
* **Sentry** (error tracking)
* **UptimeRobot** (availability monitoring)

### Documentation & Design

* **Docusaurus** (documentation)
* **Figma Tokens + Style Dictionary** (token-driven design)

---

## 🔑 Key Technical Decisions

* **React Query (TanStack)** for data fetching, caching, and synchronization.
* **Zustand + Persist Middleware** for lightweight global state management.
* **React Hook Form + Zod** for robust form validation and schema management.
* **Expo EAS** for mobile app builds (managed workflow).
* **GitHub Actions** for CI/CD automation.
* **Bruno** for API testing (CLI-based).
* **dotenv-safe** for environment variable management.

---

## 🧱 Design Patterns & Practices

* **Trunk-Based Development:** Main branch remains always deployable.
* **Atomic Component Design:** Components structured as atoms → molecules → organisms.
* **Token-First Styling:** All visual styles derived from shared tokens.
* **Modular Feature Isolation:** Features encapsulated in `/features/<name>` directories.
* **Error Handling:** Explicit handling of loading, error, and empty states.
* **Minimal Abstraction:** Avoid unnecessary complexity; prioritize clarity and maintainability.

---

## 🔄 Component Relationships

* Feature modules import shared UI components and hooks from `/components/ui`.
* State management logic is local to features, leveraging Zustand for global state where necessary.
* Forms are managed using React Hook Form with validation schemas defined by Zod.
* Authentication state and permission checks globally accessible via hooks (e.g., `useIsGuardian()`).

---

## 🔍 Future Considerations

* Potential introduction of GraphQL to optimize data fetching.
* Background tasks with Celery and Redis (planned for future phases).
* Evaluation of feature flags and Storybook post-MVP.
* Expanded end-to-end testing strategy using Playwright.

---

*Last updated: May 2025*
