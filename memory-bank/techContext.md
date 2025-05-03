# 🛠️ techContext.md

This document provides a concise summary of technologies, frameworks, development environments, technical constraints, and key dependencies utilized in the ShowCase project. It serves as a quick reference for developers and ensures a unified technical understanding.

---

## 📦 Technologies & Frameworks

### Frontend

* **Mobile:** React Native (Expo SDK 53), NativeWind
* **Web:** React 18+, Vite, Tailwind CSS
* **Language:** TypeScript

### Backend

* **API:** FastAPI (Python 3.11+)
* **Database:** PostgreSQL (PostGIS enabled)
* **ORM & Migrations:** SQLAlchemy 2.0, Alembic
* **Media Management:** Cloudinary

### Authentication & Analytics

* Firebase Auth (Google, Apple, Facebook, Email/Password)
* Firebase Analytics (Mobile events)
* Sentry (Error tracking)
* UptimeRobot (Availability monitoring)

### Design & Documentation

* Figma Tokens & Style Dictionary (Design tokens management)
* Docusaurus (Project documentation)

---

## 🖥️ Development Setup

### Local Environment

* **IDE:** Visual Studio Code
* **Package Manager:** npm/yarn/pnpm
* **API Testing:** Bruno (CLI-based)
* **Environment Variables:** dotenv-safe
* **Linting & Formatting:** ESLint, Prettier

### Continuous Integration & Deployment

* GitHub Actions for CI/CD
* Railway for backend hosting
* Vercel for web frontend deployments
* Expo EAS for mobile app builds and deployments

---

## 🚧 Technical Constraints

* React Native managed workflow (Expo) limits native module usage.
* Database schema must accommodate future expansion for additional sports.
* GPS-based check-ins require robust error handling for inconsistent mobile connectivity.
* State management strategy should minimize re-renders for performance optimization.
* Privacy compliance for minor accounts (COPPA, GDPR, CCPA).

---

## 🔗 Dependencies & Tool Configurations

### Key Libraries

* **Data Fetching:** React Query (TanStack)
* **State Management:** Zustand + Persist Middleware
* **Forms & Validation:** React Hook Form, Zod
* **Styling:** NativeWind (React Native), Tailwind CSS (Web)

### Testing Libraries

* Jest (Unit and integration tests)
* React Testing Library (Component tests)
* Playwright (End-to-end testing)

### API & Cloud Services

* Google Cloud Platform (Places, Maps)
* Firebase (Auth, Analytics)
* Cloudinary (Media management)

---

*Last updated: May 2025*
