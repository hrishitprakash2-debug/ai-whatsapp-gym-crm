# ai-whatsapp-gym-crm# AI WhatsApp Gym CRM Automation

An AI-powered WhatsApp Gym Lead Automation & CRM System built using:

- n8n
- Evolution API
- OpenAI / OpenRouter
- Google Sheets CRM
- ngrok

This project automates gym lead capture, onboarding, follow-ups, trial booking, FAQ handling, and human escalation directly through WhatsApp.

---

# Features

## AI-Powered Lead Onboarding
Automatically collects:
- Name
- Fitness Goal
- Experience Level

using AI classification and conversational flows.

---

## CRM Integration
All leads are stored in Google Sheets with:

- phone
- name
- goal
- level
- state
- lead_status
- followup_sent
- human_support
- converted
- timestamps

---

## Smart State Management

Conversation states include:

- awaiting_name
- awaiting_goal
- awaiting_level
- awaiting_trial
- completed
- human_support

---

## AI Classification

Uses OpenAI/OpenRouter for:
- Name extraction
- Goal classification
- Experience level classification
- Trial decision classification

---

## FAQ Automation

Handles gym FAQs automatically:
- pricing
- timings
- location
- trainers

using regex-based routing.

---

## Human Escalation System

Users can request human support using keywords like:
- trainer
- help
- human
- support
- call

The system:
- updates CRM
- changes lead state
- notifies admin

---

## Trial Follow-Up Automation

Automated reminder system:
- Day 1 follow-up
- Day 3 follow-up
- Day 7 follow-up

with state checking to prevent spam.

---

# Tech Stack

## Automation
- n8n
- Evolution API

## AI
- OpenAI
- OpenRouter

## CRM
- Google Sheets

## Tunneling
- ngrok

## Future Frontend
- Next.js
- TypeScript
- Tailwind CSS

---

# Workflow Architecture

Webhook
↓
Normalize Incoming Message
↓
Human Support Check
├── Human Support Flow
└── Lead Onboarding Flow

Lead Onboarding:
Ask Name
→ Ask Goal
→ Ask Experience Level
→ Send Trial Offer
→ Follow-Up Automation

---

# Current Status

✅ Fully functional MVP  
✅ Portfolio ready  
✅ Internship ready  
✅ Demo ready  
🚧 Dashboard frontend in progress  
🚧 Appointment booking system planned  
🚧 Multi-gym SaaS architecture planned  

---

# Future Improvements

- Dashboard frontend
- Google Calendar integration
- Appointment booking
- Supabase/PostgreSQL migration
- Multi-gym support
- AI knowledge base
- RAG chatbot
- Analytics dashboard

---

# Screenshots

(Add workflow screenshots here)

---

# Author

Rishi
