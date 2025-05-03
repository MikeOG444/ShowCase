# 📘 projectBrief.md – ShowCase

This document serves as the foundation of the **ShowCase** project and acts as the primary reference for understanding the vision, goals, and core requirements of the application. It enables AI agents like Cline to operate with full project awareness across all development phases.

---

## 🔥 Project Summary

**ShowCase** is a multi-platform app (iOS, Android, Web) designed to help youth athletes and their families **track**, **earn**, and **share** their sports journey. Built with gamification, verified check-ins, and guardian support at its core, it transforms real-world activities into digital achievements and creates a safe social ecosystem where players can build their development resume, celebrate milestones, and connect with coaches, teammates, and the broader community.

ShowCase blends the functionality of Strava, Instagram, and LinkedIn — but for youth sports — wrapped in a development-focused and family-friendly environment.

---

## 🎯 Core Goals

### 📍 **Track It**

Every athletic journey starts with consistency — and ShowCase makes it easy to track the details that matter. From games and practices to skills sessions and tournaments, athletes can log every step of their development with flexible, intuitive forms.

Track activities manually or confirm your location when you're on-site — either way, you're earning progress. Every log brings new opportunities to unlock badges, build streaks, hit goals, and grow your presence. Verified check-ins add even more recognition by confirming your activity and boosting trust in your ShowCase.

Athletes can also track progress on **personal goals**, linking effort to outcome. The more you track, the more complete your athletic picture becomes — powering achievements, driving motivation, and laying the foundation for everything you earn and share.

### 🏆 **Earn It**

As athletes track their journey, they earn recognition through **badges, streaks, trophies, banners, and completed goals** — all showcased in their personal **ShowCase**. Achievements range from serious milestones (like verified tournament play or training streaks) to fun, community-driven wins (like “5 Rinks in a Week” or “First Challenge Created”). Trophies and banners mark high-impact moments, whether individual or team-based. Every logged activity contributes to progress, giving players both **motivation and proof of effort** through meaningful and memorable rewards.

### 📣 **Share It**

Share moments big and small — from game-day highlights to the hard work behind the scenes — and **bring your journey to life.**

ShowCase is where athletes **connect with their community**, build relationships, and invite others to follow their journey.

Profiles showcase activity, goals, and verified achievements, but sharing isn’t limited to what you earn. Post stories, photos, and updates to reflect your experience and inspire others along the way.

ShowCase includes built-in privacy and supervision tools — designed to meet the needs of families, while giving athletes space to grow, connect, and share on their terms. The more you track and share, the more your ShowCase becomes a powerful tool — for staying motivated, building your identity, and unlocking future opportunities.

## 🧱 Key Requirements

### ✔️ Platform

* Mobile (iOS + Android via React Native + Expo)
* Web (React + Tailwind)

### ✔️ Core Features

* Flexible activity logging forms
* GPS-based verified check-ins
* Goal-setting and milestone tracking
* Gamified achievement system (badges, streaks, challenges)
* Leaderboards with filters
* Trophy Room ("ShowCase") visual achievement hub
* Stories and social feed with posts
* Auto-generated shareables for achievements
* Privacy controls (global and per-item)
* Friend/follow network (1-way or mutual)
* Guardian-controlled minor accounts
* Coach and trainer profiles for scouting/discovery
* Opportunities platform: Tryouts, camps, games, events

### ✔️ Technical Requirements

* AI-assisted development and code generation (ChatGPT / Cline)
* Firebase for Auth, Firestore, and Storage
* Zustand + React Query for state/data management
* NativeWind (Mobile) / Tailwind CSS (Web) with synced design tokens
* Style Dictionary + Figma Tokens for design system integration
* Docusaurus for live documentation
* Jest, RTL, Playwright for testing
* C4 architecture documentation

---

## 🚀 Why It Matters
Most platforms used by athletes today weren’t designed for them. Social media is broad and noisy, built for everyone — not for tracking development, earning achievements, or connecting through sport. Team apps focus on logistics. Groups are scattered. Goal tracking is a chore, if it happens at all.

ShowCase brings it all together — one place, purpose-built for athletes and their support networks to track progress, celebrate growth, and unlock new opportunities.

---

This document is the source of truth for what we are building. It should always reflect the most current, high-level direction for the ShowCase app.