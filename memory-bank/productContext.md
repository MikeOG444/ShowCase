# 📄 productContext.md

## 🧭 Why This Project Exists

ShowCase was created to fill a gap in the digital sports landscape: a platform purpose-built for athletes to track their progress, earn meaningful recognition, and share their journey with a community that understands it. Unlike general-purpose social networks or fragmented team tools, ShowCase is designed from the ground up to celebrate and support the athletic experience — especially for youth players and their families.

## ❌ The Problems We're Solving

* **No Centralized Sports Identity**: Athletes and families are forced to use a patchwork of platforms — Instagram, team apps, spreadsheets — to document, organize, and share development.
* **Generic Social Media**: Platforms like Instagram and Facebook are not optimized for athletes. They mix sports content with personal posts, lack tracking tools, and offer no meaningful recognition for effort or milestones.
* **Disorganized Discovery**: Finding teams, camps, or training opportunities often means browsing Facebook groups or low-quality forums. There’s no structured system to connect development to new opportunities.
* **Poor Goal Tracking**: Athletes rarely stick to development plans because tools are either too rigid, too generic, or not fun to use.
* **Missing Guardian Controls**: Parents often manage accounts but lack meaningful tools to guide, protect, and collaborate with young athletes.

## 🛠️ How ShowCase Works

### Core Principles:

* **Track It**: Log real activities — games, practices, skills sessions — with flexible forms that allow users to add just enough detail. Optionally, confirm location for verified check-ins.
* **Earn It**: Progress powers achievement. Unlock badges, streaks, trophies, banners, and custom rewards for both serious milestones and fun challenges.
* **Share It**: Build a ShowCase that grows with the athlete. Share updates, connect with teammates, follow coaches, and build a network. All under smart privacy controls designed with families in mind.

### Platform Features:

* Verified + manual activity logging
* Customizable profiles with sport-specific details
* Goal setting and tracking
* Trophy room (ShowCase) with earned achievements
* Opportunities platform (for training, recruiting, tryouts, more)
* Guardian account linking and supervision
* GPS check-ins, feed posts, challenges, and streaks
* Social sharing and network building

## 🔍 Explicit Product Expectations

### ✅ Core App Behavior

* Users can log activities manually, including events that happened in the past (e.g., last week’s game).
* Users can optionally enable GPS check-in to mark an activity as verified.
* Verified activities should appear visually distinct (e.g., icon, label) and be viewable on a map.
* Activities can include one or more types (game, practice, skills session, open skate, etc.) per visit.
* Multiple activities can be logged in one session (e.g., two games at same rink).
* Users can reuse previously entered values to speed up entry (auto-fill).
* Each activity can include media (photos or videos) and tags like team, opponent, event name.

### 🎯 Achievements & Progress

* Activities contribute to progress toward goals, badges, streaks, trophies, and banners.
* ShowCase must support verified-only and open achievements based on activity data.
* Users can set, edit, and complete personal goals that optionally link to logged activities.
* System will generate auto-shareable graphics or templates for certain achievements (badges, trophies, milestones).
* Leaderboards will be available and filterable by region, sport, age group, and verified activity.

### 🔐 Authentication & User Accounts

* Users can sign up and log in via email/password, Apple, Google, or Facebook.
* Must support forgot password and change password flows.
* The app must allow account switching for users with multiple profiles (e.g., parent managing kids).
* Each account must support a profile image (used in avatars and profile views).
* Guardians must be able to manage multiple child accounts and control privacy, sharing, and permissions for each one.

### 👥 Social & Sharing

* Users can post updates to their feed with or without linked activities.
* Users can follow others (1-way) and optionally convert to mutual friendships.
* Must support stories (short-lived updates) and reactions/comments on posts.
* Users should be able to invite friends via contacts and find users through search.
* Users can control visibility of posts, activities, and achievements (e.g., public, followers only, private).
* Social sharing should include the ability to share posts and achievements outside the app (Instagram, Facebook, etc.).

### 🧑‍🏫 Coaches & Trainers

* Coaches and trainers can create specialized profiles.
* They can post opportunities (e.g., training sessions, tryouts, clinics).
* They can search or browse athlete profiles based on filters like age, region, skill level.

### 🗺️ Opportunities

* Coaches and trainers can post opportunities like tryouts, training sessions, and tournaments.
* Opportunities must support targeting by location, age, experience, and availability.
* Users can apply or express interest in opportunities via simple interaction (e.g., tap or form).

### 📱 Platform Functionality

* App should be usable on iOS, Android, and web with a shared codebase where possible.
* Support for offline activity logging and sync on reconnect is required (MVP-level for mobile).
* Users should have a customizable profile including teams, positions, jersey number, external links (e.g., Instagram, Elite Prospects).
* A dedicated “ShowCase” view should display verified activities, achievements, and milestones in one profile view.
