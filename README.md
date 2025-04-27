
---

# 📄 README.md


# HealthSync - Patient Enrollment Management System

🚀 A full-stack web application built with Next.js, TypeScript, Prisma ORM, and SQLite.  
Deployed live on Vercel!

---

## 📋 Project Overview

**HealthSync** enables healthcare providers to:

- Create and manage health programs.
- Register new patients/clients easily.
- Enroll clients into one or multiple health programs.
- Search for clients by name or ID.
- View a full client profile, including enrolled programs.
- Expose client profiles via API for third-party system integrations.

**User-friendly and intuitive interface** — designed for users without technical backgrounds.

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Backend ORM**: Prisma
- **Database**: SQLite (local development) / PlanetScale (production-ready)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel (Serverless deployment)

---

## 🎯 Key Features

-  Create new health programs.
-  Register new clients (name, age, symptoms).
-  AI-agent recommends suitable programs (basic automated recommendations).
-  Enroll clients into health programs.
-  Search and filter clients easily.
-  Full client profile view (with enrolled programs).
-  API exposed for client data integration (`/api/clients/:id`).
-  Beginner-friendly design for doctors/admins with minimal technical skills.

---

## 🖥️ How to Run Locally

```bash
# Clone the repository
git clone https://github.com/wecbrams/hlt.git
cd healthsync

# Install dependencies
npm install

# Initialize database and Prisma
npx prisma migrate dev --name init

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

---

## 🌍 Live Deployment

[🔗 Live Demo on Vercel](https://healthsync-pni5q11rp-wecbramgmailcoms-projects.vercel.app)

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| GET | `/api/clients` | Get all clients (or search by name/ID) |
| GET | `/api/clients/:id` | Get a specific client and their enrolled programs |
| POST | `/api/clients` | Register a new client |
| GET | `/api/programs` | Get all programs |
| POST | `/api/programs` | Create a new health program |
| POST | `/api/enrollments` | Enroll a client into a program |

---

## ✨ Future Improvements

- Authentication (admin login)
- Email notifications on client enrollment
- Program scheduling (start/end dates)
- Health program performance reports

---

## 👨‍💻 Author

- **Name**: Wechuli
- **Email**: bramuelwe4@gmail.com
- **GitHub**: [wecbrams](https://github.com/wecbrams)

---
