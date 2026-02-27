# CampingOS – The Ultimate Camping Management Platform

![App Preview](https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=300&fit=crop&auto=format,compress)

CampingOS is a production-ready multi-tenant SaaS platform for camping operators, enabling role-based administration, interactive maps, dynamic pricing, Mollie payments, and a smooth booking journey—all with Dutch as the default language and built-in i18n support.

- **Multi-tenant RBAC**: SUPERADMIN, CAMPING ADMIN, USER
- **Interactive maps** with draggable pins (Leaflet)
- **Booking system** with availability control and dynamic pricing
- **Mollie payments** with webhook confirmation
- **Email templates** with HTML preview and variables
- **Per-camping homepage builder**
- **i18n-ready** (Dutch default)

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69a1af4bdc3a7bf25322bbe1&clone_repository=69a1b13edc3a7bf25322bc13)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> ROLE You are a senior SaaS architect and full-stack engineer. Design and generate a production-ready multi-tenant web application called: CampingOS – The Ultimate Camping Management Platform. The platform must be scalable, modular, secure, and ready for commercial SaaS usage. Use modern best practices. [full request included above]

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies used
- Next.js 16 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS
- Prisma ORM + PostgreSQL
- Mollie API
- Resend Email
- Leaflet / React-Leaflet
- Cosmic SDK (content integration ready)

## Getting Started

### Prerequisites
- Bun installed
- PostgreSQL database
- Mollie account + API key
- Resend account + API key
- Cosmic bucket (optional but supported)

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples
```ts
import { cosmic } from '@/lib/cosmic'

const homepage = await cosmic.objects
  .findOne({ type: 'camping_homepages', slug: 'example' })
  .depth(1)
```

## Cosmic CMS Integration
CampingOS is ready to consume structured content (homepage blocks, amenities, templates) from Cosmic. Multi-language fields map cleanly into the i18n system.

## Deployment Options
- **Vercel**: Recommended for Next.js
- **Netlify**: Supported for static routes
- **Environment variables**: Configure in hosting dashboard

<!-- README_END -->