# GymCRM AI WhatsApp Automation System

AI-powered WhatsApp CRM and lead automation system for gyms.

Built using:
- n8n
- Evolution API
- OpenRouter/OpenAI
- Google Sheets CRM
- Next.js Dashboard
- TypeScript
- Tailwind CSS

This system automates:
- lead onboarding
- fitness goal collection
- trial booking
- follow-ups
- human support escalation
- CRM tracking
- analytics dashboard

---

# Features

## AI WhatsApp Automation
- Automated WhatsApp onboarding
- AI-powered conversation handling
- Goal collection
- Fitness level classification
- Trial booking workflow
- Human support escalation
- FAQ auto responses

---

## CRM System
- Lead management pipeline
- Google Sheets CRM integration
- Lead states tracking
- Trial booking tracking
- Support request tracking
- Conversion tracking

---

## Dashboard
- Modern SaaS-style dashboard
- Live CRM data
- Dynamic lead tables
- Search and filtering
- Responsive layout
- Sidebar routing
- Real-time analytics cards

---

# Tech Stack

## Backend / Automation
- n8n
- Evolution API
- OpenRouter / OpenAI
- Google Sheets API
- ngrok

---

## Frontend
- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons

---

# Workflow Architecture

Webhook  
↓  
Normalize Incoming Message  
↓  
Human Support Check  

TRUE → Human Handoff Flow  
FALSE → AI Onboarding Flow  

---

## AI Onboarding Flow

New User  
↓  
Ask Name  
↓  
Ask Fitness Goal  
↓  
Ask Fitness Level  
↓  
Send Trial Offer  
↓  
Wait 24 Hours  
↓  
Send Follow-Up Reminder  

---

## Trial Booking Flow

YES  
↓  
Notify Gym Admin  
↓  
Confirm Trial Booking  
↓  
Update CRM  

---

## Human Support Flow

Trigger Words:
- trainer
- help
- support
- human
- call
- contact

↓

Escalates conversation to human support.

---

# CRM States

| State | Meaning |
|---|---|
| awaiting_name | Waiting for name |
| awaiting_goal | Waiting for goal |
| awaiting_level | Waiting for experience level |
| awaiting_trial | Trial offer sent |
| completed | Trial booked |
| human_support | Escalated to support |
| trial_declined | Trial rejected |

---

# Dashboard Pages

- Dashboard
- All Leads
- New Leads
- Trials
- Support
- Analytics
- Settings

---

# Screenshots

## Dashboard

![Dashboard](screenshots/dashboard.png)

---

## Leads Management

![Leads](screenshots/leads.png)

---

## n8n Workflow

![Workflow](screenshots/workflow.png)

---

# Project Structure

```bash
.
├── app/
├── components/
├── hooks/
├── lib/
├── public/
├── styles/
├── workflows/
│   └── gymcrm-workflow.json
├── screenshots/
├── README.md
└── package.json
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-whatsapp-gym-crm.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

# Future Improvements

- Appointment booking system
- Google Calendar integration
- Multi-gym SaaS support
- PostgreSQL / Supabase migration
- Analytics charts
- Authentication system
- AI knowledge base (RAG)
- Membership management
- Admin notifications

---

# Deployment

Frontend deployment:
- Vercel

Automation deployment:
- Docker
- VPS

---

# Author

Hrishit Prakash

---

# License

MIT License
