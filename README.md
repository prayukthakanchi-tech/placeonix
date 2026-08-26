# 🎯 Placeonix

### AI-Powered Placement Preparation Platform for Engineering Students

<p align="center">
  <strong>Learn • Practice • Evaluate • Improve • Showcase</strong>
</p>

<p align="center">
  <a href="https://placeonix-theta.vercel.app/">🚀 Live Demo</a>
  &nbsp;•&nbsp;
  <a href="https://github.com/prayukthakanchi-tech/placeonix">💻 Source Code</a>
</p>

---

## 📌 Overview

**Placeonix** is an all-in-one placement preparation platform built to help engineering students prepare for placements through a single, structured workspace.

It brings together **aptitude practice, coding practice, AI-assisted interviews, resume & ATS analysis, placement resources, an online compiler, achievements, progress tracking, and public portfolios**.

### Core Workflow

```text
Learn → Practice → Evaluate → Improve → Showcase
```

---

## 🚀 Live Demo

### [👉 Launch Placeonix](https://placeonix-theta.vercel.app/)

Explore the deployed application:

**https://placeonix-theta.vercel.app/**

---

## ✨ Features

### 📚 Placement Hub

Access structured preparation resources covering aptitude, technical subjects, coding, and core engineering topics.

### 🧠 Aptitude Practice

Practice quantitative, logical, verbal, and placement-oriented questions.

### 💻 Coding Practice

Work on programming and DSA problems through an integrated coding experience.

### ⚡ Online Compiler

Write and execute code directly within the platform.

### 🤖 AI Interview

Practice interview scenarios with AI-assisted interaction and feedback.

### 📄 Resume & ATS

Analyze resumes and identify ATS-oriented improvements, keywords, and formatting issues.

### 👤 Student Profile

Maintain student information, achievements, and placement preferences.

### 🏆 Achievements

Track preparation activity and unlock badges as progress milestones are reached.

### 🌐 Public Portfolio

Create a shareable portfolio that can be used to showcase a student's profile and achievements.

### 🔐 Authentication

Firebase-powered authentication with email verification and account management.

---

## 💡 Problem

Placement preparation is fragmented across multiple platforms.

Students often use separate tools for:

```text
Aptitude
Coding
Technical Preparation
Interview Practice
Resume Building
Portfolio
Progress Tracking
```

This makes preparation harder to organize and measure.

## 💡 Solution

**Placeonix combines these workflows into one student-focused platform.**

```text
                         ┌──────────────────┐
                         │     PLACEONIX    │
                         └────────┬─────────┘
                                  │
        ┌─────────────┬───────────┼───────────┬─────────────┐
        ▼             ▼           ▼           ▼             ▼
    Aptitude       Coding    AI Interview   Resume      Resources
                                             / ATS
        │             │           │           │             │
        └─────────────┴───────────┼───────────┴─────────────┘
                                  ▼
                         Student Progress
                                  │
                         ┌────────┴────────┐
                         ▼                 ▼
                    Achievements      Portfolio
```

---

## 🧠 Architecture

```text
                         ┌─────────────────────┐
                         │       Browser       │
                         │   React + Vite App  │
                         └──────────┬──────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
             ┌────────────┐  ┌────────────┐  ┌──────────────┐
             │  Firebase  │  │ Serverless │  │    Public    │
             │ Auth + DB  │  │    API     │  │   Portfolio  │
             └────────────┘  └─────┬──────┘  └──────────────┘
                                   │
                                   ▼
                            ┌──────────────┐
                            │ Google Gemini│
                            │     API      │
                            └──────────────┘
```

### AI Request Flow

```text
User
 │
 ▼
React Frontend
 │
 │ AI Request
 ▼
/api/chat
 │
 │ Server-side request
 ▼
Google Gemini API
 │
 │ Generated response
 ▼
/api/chat
 │
 ▼
React Frontend
```

The Gemini API credential is kept on the server-side API layer rather than being exposed directly to the browser.

---

## 🛠️ Tech Stack

| Layer          | Technology                        |
| -------------- | --------------------------------- |
| Frontend       | React 18                          |
| Build Tool     | Vite                              |
| Routing        | React Router                      |
| UI & Icons     | Custom CSS, Lucide React          |
| Charts         | Recharts                          |
| Authentication | Firebase Authentication           |
| Database       | Cloud Firestore                   |
| AI             | Google Gemini API                 |
| Backend/API    | Vercel Serverless Functions       |
| Deployment     | Vercel, Netlify, Firebase Hosting |

---

## 🏗️ Project Structure

```text
placeonix/
│
├── api/                    # Serverless API endpoints
├── public/                 # Static assets
│
├── src/
│   ├── components/         # Reusable UI components
│   ├── context/            # Authentication & application state
│   ├── data/               # Application data
│   ├── pages/              # Application pages
│   ├── services/           # API & service integrations
│   └── utils/              # Shared utilities
│
├── dist/                   # Production build output
│
├── firebase.json           # Firebase configuration
├── firestore.rules         # Firestore security rules
├── netlify.toml            # Netlify configuration
├── vercel.json             # Vercel configuration
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies & scripts
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

* Node.js
* npm
* Firebase project
* Gemini API access for AI functionality

### 1. Clone the repository

```bash
git clone https://github.com/prayukthakanchi-tech/placeonix.git
cd placeonix
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Configure the Firebase credentials required by the application and the Gemini API configuration used by the server-side AI endpoint.

Store all sensitive credentials using environment variables.

> ⚠️ **Never commit API keys, service-account credentials, or other secrets to GitHub.**

### 4. Run locally

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

---

## ☁️ Deployment

Placeonix includes deployment scripts for multiple platforms.

### Firebase

```bash
npm run deploy:firebase
```

### Vercel

```bash
npm run deploy:vercel
```

### Netlify

```bash
npm run deploy:netlify
```

Configure the required environment variables and Firebase settings before deployment.

---

## 🔐 Security

Placeonix follows a server-side approach for AI API credentials.

Key considerations include:

* 🔑 Environment-based secret management
* 🔥 Firebase Authentication
* 🛡️ Firestore security rules
* ☁️ Server-side Gemini API requests
* ✉️ Email verification
* ⚠️ Application error boundaries

**Sensitive credentials should never be hard-coded into frontend source code.**

---

## ⚡ Engineering Highlights

Placeonix demonstrates practical implementation of:

* Component-based React architecture
* Lazy-loaded application pages
* Client-side routing
* Firebase Authentication
* Firestore data management
* Serverless API architecture
* Gemini AI integration
* Online code execution workflow
* Resume and ATS analysis workflow
* Public portfolio routing
* Responsive UI
* Loading and error states
* Environment-based configuration
* Multi-platform deployment

---

## 🎓 Student Journey

```text
Sign Up
   │
   ▼
Student Profile
   │
   ▼
Dashboard
   │
   ├── Aptitude
   ├── Coding
   ├── Resources
   ├── AI Interview
   ├── Resume / ATS
   └── Online Compiler
           │
           ▼
      Track Progress
           │
           ├── Achievements
           └── Public Portfolio
```

---

## 🔭 Roadmap

* [ ] Personalized placement preparation plans
* [ ] Company-specific preparation tracks
* [ ] Placement readiness scoring
* [ ] Advanced interview analytics
* [ ] Expanded DSA problem bank
* [ ] Company-wise coding questions
* [ ] Personalized AI learning recommendations
* [ ] Advanced preparation analytics
* [ ] Enhanced public portfolios
* [ ] More core-engineering preparation tracks

---

## 📌 Project Status

🟢 **Active Development**

Placeonix is an actively developed project. Features, preparation content, AI capabilities, and platform infrastructure may continue to evolve.

---

## 👨‍💻 Author

**Prayuktha Kanchi**

Engineering student and developer building Placeonix as a practical solution for a more structured and unified placement preparation experience.

---

## 🔗 Links

* 🚀 **Live Demo:** https://placeonix-theta.vercel.app/
* 💻 **GitHub:** https://github.com/prayukthakanchi-tech/placeonix

---

<p align="center">
  <strong>🎯 Learn • Practice • Evaluate • Improve • Showcase</strong>
</p>

<p align="center">
  Built with ⚛️ React • ⚡ Vite • 🔥 Firebase • 🤖 Gemini AI
</p>
