# Indelible Technologies Website

The official portfolio and business website for Indelible Technologies, a Malawi-based team building practical websites, custom software, and digital products for businesses, schools, and organisations.

**Live website:** https://indelibletech.vercel.app  
**Flagship product:** [MsikaFlo Storefront](https://jefinvestment-e1fc1.web.app/store)

## What this website includes

- Company overview, services, and project pricing information
- Portfolio and solutions pages highlighting selected digital products
- Contact and quote-request form
- Newsletter subscription interface
- Responsive navigation and mobile-friendly layouts
- Page metadata, Open Graph sharing details, sitemap, and crawler rules
- Admin-facing tools and API routes for website operations

## Featured work

### MsikaFlo — retail management

A retail product built with React, Firebase, and Firestore. It supports shop workflows such as sales and inventory management, with an offline-first workflow and an AI-assisted product finder. The public storefront is available at the link above.

### Cooperative Finance Platform / Teachers Bank

A finance-workflow solution concept for member-based organisations. Contact Indelible Technologies to discuss requirements and implementation scope.

## Technology

- **Framework:** Next.js (App Router)
- **UI:** React, Tailwind CSS, Framer Motion, Lucide icons
- **Data layer:** Prisma with PostgreSQL for website data
- **Deployment:** Vercel
- **Additional integrations:** Email handling and API routes

## Local development

Requirements: a compatible Node.js version, npm, and the environment configuration needed by the application's database and API integrations.

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Configure the required environment variables locally; do not commit credentials or secret values.
4. Start the development server with `npm run dev`.
5. Open http://localhost:3000.

Useful scripts:

- `npm run dev` — run the local development server.
- `npm run lint` — run ESLint.
- `npm run build` — generate the Prisma client, synchronise the Prisma schema with the configured database, and build the Next.js application.

**Important:** the build script runs `prisma db push`, which can change the schema of the database configured in your environment. Use a safe development database for local testing and verify the deployment database configuration before running a build. Never point local experiments at production data.

## Configuration and security

- Keep database URLs, email credentials, and other secrets in local environment files or the deployment platform's secret settings.
- Never commit `.env` files or share secret values publicly.
- Test contact, newsletter, and admin functionality with non-production data before changing deployment settings.
- Changes to this repository deploy through its connected Vercel project; verify the deployment checks before treating a commit as live.

## Project status

This repository contains the source for the Indelible Technologies public website. It is separate from the live MsikaFlo retail application and its production shop data.
