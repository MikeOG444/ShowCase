# ShowCase

<p align="center">
  <img src="https://via.placeholder.com/200x200?text=ShowCase" alt="ShowCase Logo" width="200" height="200">
</p>

<p align="center">
  Track It. Earn It. Share It.
</p>

## 📱 About ShowCase

ShowCase is a multi-platform app (iOS, Android, Web) designed to help youth athletes and their families **track**, **earn**, and **share** their sports journey. Built with gamification, verified check-ins, and guardian support at its core, it transforms real-world activities into digital achievements and creates a safe social ecosystem where players can build their development resume, celebrate milestones, and connect with coaches, teammates, and the broader community.

ShowCase blends the functionality of Strava, Instagram, and LinkedIn — but for youth sports — wrapped in a development-focused and family-friendly environment.

## 🚀 Core Features

- **Track It**: Log games, practices, skills sessions, and tournaments with flexible, intuitive forms. Use GPS-based verified check-ins to confirm your location.
- **Earn It**: Unlock badges, build streaks, hit goals, and earn trophies as you progress in your athletic journey.
- **Share It**: Connect with your community, showcase your achievements, and share your sports journey with coaches, teammates, and family.

## 🛠️ Tech Stack

### Frontend

- **Mobile:** React Native (Expo SDK 53), NativeWind
- **Web:** React 18+, Vite, Tailwind CSS
- **Language:** TypeScript

### Backend

- **API:** FastAPI (Python 3.11+)
- **Database:** PostgreSQL (PostGIS enabled)
- **ORM & Migrations:** SQLAlchemy 2.0, Alembic
- **Media Management:** Cloudinary

### Authentication & Analytics

- Firebase Auth (Google, Apple, Facebook, Email/Password)
- Firebase Analytics (Mobile events)
- Sentry (Error tracking)
- UptimeRobot (Availability monitoring)

### Design & Documentation

- Figma Tokens & Style Dictionary (Design tokens management)
- Docusaurus (Project documentation)

## 🏗️ Project Structure

```
showcase/
├── apps/
│   ├── mobile/         # React Native (Expo) app
│   ├── web/            # React/Vite web app
│   └── api/            # FastAPI backend
├── packages/
│   ├── shared/         # Shared code and utilities
│   ├── ui/             # Shared UI components
│   └── tokens/         # Design tokens
├── docs/               # Documentation
└── memory-bank/        # Project context and documentation
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18+)
- Python 3.11+
- PostgreSQL 14+ (with PostGIS extension)
- Expo CLI
- Docker (optional, for containerized development)

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/showcase.git
   cd showcase
   ```

2. Install dependencies:
   ```bash
   # Install root dependencies
   npm install
   
   # Install all workspace dependencies
   npm run setup
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start the development servers:
   ```bash
   # Start all services
   npm run dev
   
   # Or start individual services
   npm run dev:web
   npm run dev:mobile
   npm run dev:api
   ```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific tests
npm test:web
npm test:mobile
npm test:api

# Run end-to-end tests
npm run test:e2e
```

## 📚 Documentation

- [Project Documentation](https://your-org.github.io/showcase)
- [API Documentation](https://your-org.github.io/showcase/api)
- [Component Library](https://your-org.github.io/showcase/components)

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All the youth athletes and their families who inspired this project
- The open-source community for the amazing tools that make this possible
